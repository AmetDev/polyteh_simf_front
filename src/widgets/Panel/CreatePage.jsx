'use client'
import { textValueFunc } from '@app/store/pagesAdmin/UndoRendoSlice.js'
import IFrameRedactor from '@widgets/IFrameRedactor/IFrameRedactor'
import axios from 'axios'
import { Interweave } from 'interweave'
import Cookies from 'js-cookie'
import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import Popup from 'reactjs-popup'
import style from './Panel.module.scss'
const CreatePage = () => {
	const [isPage, setIsPage] = useState(true)
	const [dataUrl, setDataUrl] = useState('')
	const state = useSelector(state => state)
	const [imageUrl, setImageUrl] = useState('')

	const [imageContentUrl, setImageContentUrl] = useState('')
	const images1 = useSelector(state => state.counter.present.images1)
	const textValue = useSelector(state => state.counter.present.textValue)
	const images = useSelector(state => state.counter.present.images)
	const count = useSelector(state => state.counter.present.value)
	const [postImage, setPostImage] = useState({ myFile: '' })
	const [selectedText, setSelectedText] = useState('')
	const dispatch = useDispatch()
	const [image, setImage] = useState(null)
	const [image1, setImage1] = useState(null)
	const [netImage, setNewImage] = useState([])
	const [netImage1, setNewImage1] = useState('')
	const [postImage1, setPostImage1] = useState({})
	const [localrenderImage, setLocalrenderImage] = useState('')
	const [isButtonClicked, setIsButtonClicked] = useState(false)
	const [isForm, setIsForm] = useState('default')
	const [typePage, setTypePage] = useState('')
	const [URLPage, setURLPage] = useState('')
	const [data, setdata] = useState('')
	const [titlePage, setTitlePage] = useState('')
	const searchEvent = e => {}
	let tmp = '../../app/testing'
	const [dataFetch, setDataFetch] = useState(null)
	const [mainPanelType, setMainPanelType] = useState('create-page')

	useEffect(() => {
		const fetchingData = async () => {
			try {
				const token = await Cookies.get('token')

				const { data } = await axios.get(
					`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/me`,
					{
						headers: { Authorization: `Bearer ${token}` },
					}
				)

				setDataFetch(data)
			} catch (error) {
				console.warn(error)
			}
		}
		fetchingData()
	}, [isForm])

	const RenderPredImage = ({ imageUrl }) => {
		return (
			<Interweave
				content={`<img style="max-width:100%, height: auto;" src=${
					`${process.env.NEXT_PUBLIC_SERVER_URL}` + `${imageUrl}`
				}  alt="name"/>`}
			/>
		)
	}

	const addLinkFile = somelink => {
		const isExtend = textValue.includes(selectedText)

		if (isExtend) {
			let initium_index = textValue.indexOf(selectedText)

			let finis_index = initium_index + selectedText.length - 1

			if (initium_index !== -1) {
				let newSubString =
					`<a   target="_blank" href=${somelink}>` + selectedText + '</a>'
				let newString =
					textValue.substring(0, initium_index) +
					newSubString +
					textValue.substring(finis_index + 1)
				console.log(newString)
				dispatch(textValueFunc(newString))
			} else {
				console.log('substring not found')
			}
		}
	}

	const addImagesArr = () => {
		dispatch(textValueFunc(textValue + `${imageContentUrl}`))
	}

	const nameRef = useRef(null)
	const filesRef = useRef(null)
	const submitForm = e => {
		e.preventDefault()

		addImagesArr()
	}

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()
	const onSubmit = data => {
		if (data.URLPage.includes('/') || data.URLPage.includes(' ')) {
			alert('Данный url создается без "/" и не может содержать пробелов.')
		}
		setTypePage(data.TypePage)
		setURLPage(data.URLPage)
		setTitlePage(data.titlePage)
		Cookies.set('isNew', true)
		Cookies.set('typePage', data.TypePage)
		Cookies.set('urlPage', data.URLPage)
		Cookies.set('titlePage', data.titlePage)
	}

	const handleSubmit22 = async event => {
		try {
			const file = event.target.files[0]
			const formData = new FormData()
			formData.append('image', file)

			const token = await Cookies.get('token')
			const { data } = await axios.post(
				`${process.env.NEXT_PUBLIC_SERVER_URL}/upload`,
				formData,
				{ headers: { Authorization: `Bearer ${token}` } }
			)

			setImageUrl(data.imagelink)
			Cookies.set('imgUrl', data.imagelink)
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<div>
			<div>
				{isPage && (
					<div>
						{isForm == 'false' && (
							<div style={{ color: '#D73636' }}>
								Форма не заполнена либо одно из полей не было заполнено!
							</div>
						)}

						<form onSubmit={handleSubmit(onSubmit)}>
							<div>
								<input
									className={style.createpage__input}
									type='text'
									placeholder='пишите адрес без пробелов и без "/":'
									{...register('URLPage')}
								/>
							</div>

							<div>
								<Popup
									trigger={
										<button
											style={{
												marginTop: 10,
												marginBottom: 10,
												padding: 10,
												fontSize: 18,
												borderRadius: 10,
												fontWeight: 500,
												backgroundColor: '#0066FF',
											}}
										>
											Загрузить обложку
										</button>
									}
									position='right center'
								>
									<div>
										<input
											id='create-post-img'
											type='file'
											accept='.jpg, .png, .jpeg, .webp'
											onChange={handleSubmit22}
											hidden
										/>
										<label htmlFor='create-post-img'>
											Загрузить изображение
										</label>
									</div>
								</Popup>
							</div>
							<div>
								<input
									type='text'
									className={style.createpage__input}
									placeholder='Заголовок страницы:'
									{...register('titlePage')}
								/>
							</div>
							<div
								style={{
									marginTop: 10,
									marginBottom: 10,
									padding: 10,
									fontSize: 15,
									borderRadius: 10,
									fontWeight: 500,
									backgroundColor: '#131313',
									width: 200,
								}}
							>
								<label>Наш колледж</label>
								<input {...register('TypePage')} type='radio' value='own' />
							</div>
							<div
								style={{
									marginTop: 10,
									marginBottom: 10,
									padding: 10,
									fontSize: 15,
									borderRadius: 10,
									fontWeight: 500,
									backgroundColor: '#131313',
									width: 200,
								}}
							>
								<label>Посты</label>
								<input {...register('TypePage')} type='radio' value='post' />
							</div>
							<input
								type='submit'
								style={{
									marginTop: 10,
									marginBottom: 10,
									padding: 20,
									width: '100%',
									fontSize: 20,
									borderRadius: 10,
									fontWeight: 500,
									backgroundColor: '#0066FF',
								}}
							/>
						</form>
						<button
							onClick={async () => {
								try {
									if (typePage != '' && URLPage != '' && titlePage != '') {
										setIsForm('true')

										function getCurrentDate() {
											const today = new Date()
											const date = new Date()
											const options = { weekday: 'long' }
											const dayOfWeek = date.toLocaleString('ru-RU', options)

											const day = today.getDate().toString().padStart(2, '0') // add leading zero if needed
											const month = (today.getMonth() + 1)
												.toString()
												.padStart(2, '0') // month is zero-based, so add 1
											const year = today.getFullYear()
											return `${dayOfWeek}, ${day}.${month}.${year}`
										}
										if (dataFetch !== null) {
											console.log('is not null')
											const token = await Cookies.get('token')
											await axios
												.post(
													`${process.env.NEXT_PUBLIC_SERVER_URL}/page/create`,
													{
														data,
														URLPage,
														pageTypePublish: false,
														pageDate: getCurrentDate(),
														titlePage,
														pageImage: imageUrl,
														typePage,
													},
													{
														headers: {
															'Access-Control-Allow-Origin': '*',
															Authorization: `Bearer ${token}`,
														},
													}
												)
												.then(response => {
													//console.log(response.data)
													setIsPage(false)
												})
												.catch(error => {
													alert(
														`${error.response.data.message}. Текущий статус:${error.response.status}`
													) // Handle any errors

													setIsPage(true)
													// You can display an error message or perform other actions based on the error
												})
										}
									} else if (
										typePage == '' ||
										URLPage == '' ||
										titlePage == '' ||
										(data == '' && URLPage == '' && titlePage == '')
									) {
										console.log('не заполнены поля!')

										setIsForm('false')
										console.log(isForm)
									} else if (
										typePage == null ||
										URLPage == '' ||
										titlePage == '' ||
										(data == null && URLPage == '' && titlePage == '')
									) {
										console.log('не заполнены поля')
										setIsForm('false')
									}
								} catch (error) {
									console.log(error)
									setIsForm('false')
									console.log(isForm)
								}
							}}
							style={{
								marginTop: 10,
								marginBottom: 10,
								padding: 20,
								fontSize: 20,
								width: '100%',
								borderRadius: 10,
								fontWeight: 500,
								backgroundColor: '#131313',
							}}
						>
							Загрузить страницу
						</button>

						<RenderPredImage imageUrl={imageUrl} />
					</div>
				)}
			</div>
			<div>
				{!isPage && (
					<>
						{/* <button onClick={() => addPageInServer()}>ОПУБЛИКОВАТЬ</button> */}

						<IFrameRedactor content={'Создайте страницу!'} />
					</>
				)}
			</div>
		</div>
	)
}

export default CreatePage
