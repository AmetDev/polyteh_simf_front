'use client'

import { useInput } from '@app/hooks/useInput'
import axios from 'axios'
import Link from 'next/link'
import { useState } from 'react' // Добавляем useState
import style from './ContactForm.module.scss'

const ContactForm = () => {
	const [isChecked, setIsChecked] = useState(false) // Состояние для чекбокса

	const submitForm = async e => {
		e.preventDefault()
		if (!fullname || !email || !phone || !theme || !message) {
			alert('Пожалуйста, заполните все поля')
			return
		}
		if (!isChecked) {
			// Проверка состояния чекбокса
			alert('Пожалуйста, дайте согласие на обработку персональных данных')
			return
		}
		try {
			await axios.post(
				`${process.env.NEXT_PUBLIC_SERVER_URL}/mailer/send-email/`,
				{
					fullname,
					email,
					phone,
					theme,
					message,
				}
			)
			alert('Письмо успешно отправлено!')
			resetFullname()
			resetEmailBind()
			resetPhoneBind()
			resetThemeBind()
			resetMessageBind()
			setIsChecked(false) // Сбрасываем чекбокс после отправки
		} catch (error) {
			alert('Произошла ошибка при отправке письма')
			console.error(error)
		}
	}

	const {
		value: fullname,
		bind: fullnameBind,
		reset: resetFullname,
	} = useInput()
	const { value: email, bind: emailBind, reset: resetEmailBind } = useInput()
	const { value: phone, bind: phoneBind, reset: resetPhoneBind } = useInput()
	const { value: theme, bind: themeBind, reset: resetThemeBind } = useInput()
	const {
		value: message,
		bind: messageBind,
		reset: resetMessageBind,
	} = useInput()

	return (
		<section className={style.contact} id='contactus'>
			<div className={style.top}>
				<p className={style.title}>Свяжитесь с нами!</p>
				<div className={style.icon}>
					<Link target='_blank' href='https://vk.com/simfpolyteh' />
				</div>
			</div>

			<form className={style.form}>
				<input
					{...fullnameBind}
					type='text'
					className={style.input}
					placeholder='Ваше ФИО'
					required
				/>
				<input
					{...emailBind}
					type='email'
					className={style.input}
					placeholder='Ваш E-Mail'
					required
				/>
				<input
					{...phoneBind}
					type='text'
					className={style.input}
					placeholder='Контактный телефон'
					required
				/>
				<input
					{...themeBind}
					type='text'
					className={style.input}
					placeholder='Тема'
					required
				/>
				<textarea
					{...messageBind}
					className={style.input + ' ' + style.textarea}
					placeholder='Ваше сообщение...'
					required
				/>
				<article className={style.checkPersonality}>
					<input
						type='checkbox'
						className={style.inputCheckbox}
						id='pers'
						checked={isChecked} // Привязываем состояние
						onChange={e => setIsChecked(e.target.checked)} // Обновляем состояние
						required
					/>
					<label className={style.spanCheck} htmlFor='pers'>
						<a href='https://simfpolyteh.ru/webview/uploads/1744194814390.pdf'>
							Согласие на обработку персональных данных
						</a>
					</label>
				</article>
				<button onClick={e => submitForm(e)} className={style.submit}>
					Отправить
				</button>
			</form>
		</section>
	)
}

export default ContactForm
