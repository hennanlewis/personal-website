"use client"
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

		const response = await fetch("http://localhost:3000/api/contact", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ ...contactMessage }),
		})

		if (response.ok) {
			setContactMessage(initialContactValues)
		}

		const data = await response.json()
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
		if (responseMsg != "")
			setTimeout(() => {
				setResponseMsg("")
			}, 5000)
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
						maxLength={301}
						required
						value={contactMessage.message}
						onChange={(event) =>
							handleChangeValues(event)
						}></textarea>
				</label>
				<button type="submit">Enviar mensagem</button>
				{responseMsg.match("sucesso") && (
					<span className={style.messageSuccess}>{responseMsg}</span>
				)}
				{!responseMsg.match("sucesso") && (
					<span className={style.messageError}>{responseMsg}</span>
				)}
			</form>
		</section>
	)
}
