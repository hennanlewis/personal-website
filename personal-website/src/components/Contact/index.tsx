"use client"
import { promiseErrorHandler } from "@/utils/promiseErrorHandler"
import { ChangeEvent, FormEvent, useEffect, useState } from "react"

import style from "./contact.module.css"

const initialContactValues = {
	email: "",
	message: "",
	subject: "",
}

export default function Contact() {
	const [contactMessage, setContactMessage] =
		useState<ContactProps>(initialContactValues)
	const [responseMsg, setResponseMsg] = useState("")

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		const url = `${process.env.ENVIRONMENT}/api/contact`
		const [response, error] = await promiseErrorHandler(
			fetch(url, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ ...contactMessage }),
			})
		)

		if (response?.status == 200) setContactMessage(initialContactValues)
		if (error) console.log("Houve um erro: ", error)

		const data = await response?.json()
		setResponseMsg(data.msg)
	}

	const handleChangeValues = (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setContactMessage((old) => ({
			...old,
			[event.target.name]: event.target.value,
		}))
	}

	useEffect(() => {
		let timerID: NodeJS.Timeout
		if (responseMsg != "")
			timerID = setTimeout(() => setResponseMsg(""), 5000)
		return () => clearTimeout(timerID)
	}, [responseMsg])

	return (
		<section className={style.contactTitle}>
			<h1>Contato</h1>
			<form onSubmit={handleSubmit}>
				<label>
					<span>Assunto:</span>
					<input
						type="text"
						name="subject"
						maxLength={100}
						required
						value={contactMessage.subject}
						onChange={(event) => handleChangeValues(event)}
					/>
				</label>

				<label>
					<span>E-mail:</span>
					<input
						type="email"
						name="email"
						required
						value={contactMessage.email}
						onChange={(event) => handleChangeValues(event)}
					/>
				</label>

				<label>
					<span>Mensagem</span>
					<textarea
						name="message"
						rows={5}
						maxLength={400}
						required
						value={contactMessage.message}
						onChange={(event) =>
							handleChangeValues(event)
						}></textarea>
				</label>

				<button type="submit">Enviar mensagem</button>

				<span
					className={
						responseMsg.match("sucesso")
							? style.messageSuccess
							: style.messageError
					}>
					{responseMsg}
				</span>
			</form>
		</section>
	)
}
