"use client"
import { FadeComponent } from "@/components/FadeComponent"
import { promiseErrorHandler } from "@/utils/promiseErrorHandler"
import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { RiLoader4Fill } from "react-icons/ri"

import styles from "./contactform.module.css"

const initialContactValues: ContactProps = {
	email: "",
	message: "",
	subject: "",
}

export default function Contact() {
	const [contactMessage, setContactMessage] = useState(initialContactValues)
	const [responseMsg, setResponseMsg] = useState("")
	const [isErrorMessage, setIsErrorMessage] = useState(false)
	const [isFetching, setIsFetching] = useState(false)

	const controller = new AbortController()

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		setIsFetching(true)
		event.preventDefault()

		const url = "/api/contact"
		const [response, error] = await promiseErrorHandler(
			fetch(url, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ ...contactMessage }),
				signal: controller.signal,
			})
		)

		if (response?.status == 200) {
			setContactMessage(initialContactValues)
			const data = await response?.json()
			setResponseMsg(data.msg)
			setIsErrorMessage(false)
			setIsFetching(false)
			return
		}

		const data = await response?.json()
		setResponseMsg(data.msg)
		setIsErrorMessage(true)
		setIsFetching(false)
	}

	const handleChangeValues = (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setContactMessage((old) => ({
			...old,
			[event.target.name]: event.target.value,
		}))
	}

	useEffect(() => () => controller.abort(), [])
	useEffect(() => {
		let timerID: NodeJS.Timeout
		if (responseMsg != "")
			timerID = setTimeout(() => setResponseMsg(""), 5000)
		return () => clearTimeout(timerID)
	}, [responseMsg])

	return (
		<section className={styles.contactPanel}>
			<FadeComponent flexCol delay>
				<h1 className={styles.contactPanelTitle}>Contato</h1>
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
							disabled={isFetching}
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
							disabled={isFetching}
						/>
					</label>

					<label>
						<span>Mensagem</span>
						<textarea
							name="message"
							rows={5}
							maxLength={300}
							required
							value={contactMessage.message}
							disabled={isFetching}
							onChange={(event) =>
								handleChangeValues(event)
							}></textarea>
					</label>

					<button type="submit" disabled={isFetching}>
						Enviar mensagem
						{isFetching && (
							<span className={styles.loader}>
								<RiLoader4Fill />
							</span>
						)}
					</button>

					{isErrorMessage && responseMsg.length > 0 && (
						<span className={styles.messageError}>
							{responseMsg}
						</span>
					)}
					{!isErrorMessage && responseMsg.length > 0 && (
						<span className={styles.messageSuccess}>
							{responseMsg}
						</span>
					)}
				</form>
			</FadeComponent>
		</section>
	)
}
