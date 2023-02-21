import { MongoClient } from "mongodb"
import { NextApiRequest, NextApiResponse } from "next"

import { isInvalidObject } from "@/validation/isInvalidObject"
import { hasAnyEmptyValue } from "@/validation/hasAnyEmptyValue"
import { hasNoBody } from "@/validation/hasNoBody"

const uri = process.env.MONGODB_URL || ""
const client = new MongoClient(uri)

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method != "POST")
		return res
			.status(400)
			.json({ msg: "Não foi possível enviar a mensagem 😢" })

	const keysToCheck = ["subject", "email", "message"]
	const contactValues = req.body as ContactProps
	if (hasNoBody(contactValues))
		return res.status(400).json({ msg: "Por que fez isso? 🤔" })

	if (isInvalidObject(contactValues, keysToCheck))
		return res.status(400).json({ msg: "O que você quer fazer? 😴" })

	if (hasAnyEmptyValue(contactValues, keysToCheck))
		return res.status(400).json({ msg: "Preencha todos os campos 🥱" })

	if (hasNoBody(contactValues))
		return res.status(400).json({ msg: "Preencha todos os campos 🥱" })

	if (
		contactValues.message.length > 300 ||
		contactValues.subject.length > 100 ||
		contactValues.email.length > 100
	)
		return res
			.status(400)
			.json({ msg: "Muito texto, faz de novo, faz direito. 🙄" })

	const contactCollection = client
		.db(process.env.MONGODB_NAME)
		.collection("contacts")
	const { acknowledged } = await contactCollection.insertOne(contactValues)

	if (acknowledged)
		return res.status(200).json({ msg: "Mensagem enviada com sucesso! 😌" })

	return res.status(500).json({ msg: "Ocorreu um erro no servidor 🤯" })
}
