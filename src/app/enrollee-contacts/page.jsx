'use client'

import { useInput } from '@app/hooks/useInput'
import axios from 'axios'
import './recep.scss'

const Page = () => {
	const submitForm = async e => {
		e.preventDefault()
		if (!fullname || !email || !phone || !question) {
			alert('Пожалуйста, заполните все поля')
			return
		}
		try {
			await axios.post(
				`${process.env.NEXT_PUBLIC_SERVER_URL}/mailer/send-email/`,
				{
					fullname,
					email,
					phone,
					question,
				}
			)
			alert('Письмо успешно отправлено!')
			resetFullname()
			resetEmail()
			resetPhone()
			resetQuestion()
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
	const { value: email, bind: emailBind, reset: resetEmail } = useInput()
	const { value: phone, bind: phoneBind, reset: resetPhone } = useInput()
	const {
		value: question,
		bind: questionBind,
		reset: resetQuestion,
	} = useInput()

	return (
		<div className='reception-wrapper'>
			{/* Левая часть */}
			<div className='reception-container'>
				<div className='block'>
					<h2>
						<b>График работы Приемной комиссии</b>
					</h2>
					<p>
						Понедельник – пятница с 8-00 до 16-30
						<br />
						обед с 12-00 до 13-00
					</p>
				</div>

				<div className='block'>
					<h2>
						<b>График приема документов</b>
					</h2>
					<p>
						Понедельник – пятница с 9-00 до 15-00
						<br />
						суббота, воскресенье - выходной
					</p>
				</div>

				<div className='block'>
					<h2>
						<b>Адрес Приемной комиссии</b>
					</h2>
					<p>
						295053, г. Симферополь, ул. Гаспринского, д. 3<br />
						кабинет №102
					</p>
				</div>

				<div className='block'>
					<h2>
						<b>Контакты:</b>
					</h2>
					<p>
						+7(978) 617 80 62
						<br />
						+7(978) 905 10 25
						<br />
						Звонки принимаются согласно графика работы Приемной
					</p>
				</div>
			</div>

			{/* Правая часть */}
			<div className='form-container'>
				<form className='form-block' onSubmit={submitForm}>
					<h3>
						Как к Вам обращаться? <span>*</span>
					</h3>
					<input
						{...fullnameBind}
						type='text'
						placeholder='Фамилия Имя Отчество (при наличии)'
						required
					/>

					<div className='form-row'>
						<div>
							<label>
								Контактный телефон<span>*</span>
							</label>
							<input
								{...phoneBind}
								type='text'
								placeholder='+7 (XXX) XXX-XX-XX'
								required
							/>
						</div>
						<div>
							<label>
								Email<span>*</span>
							</label>
							<input
								{...emailBind}
								type='email'
								placeholder='example@mail.ru'
								required
							/>
						</div>
					</div>

					<label>
						Вопрос<span>*</span>
					</label>
					<textarea
						{...questionBind}
						placeholder='Задайте свой вопрос'
						required
					></textarea>

					<div className='agreement'>
						<input type='checkbox' id='agreement' required />
						<label htmlFor='agreement'>
							<a href='https://simfpolyteh.ru/webview/uploads/1744194814390.pdf'>
								Согласие на обработку персональных данных
							</a>
						</label>
					</div>

					<button type='submit' className='submit-btn'>
						✉ Отправить
					</button>
				</form>
			</div>
		</div>
	)
}

export default Page
