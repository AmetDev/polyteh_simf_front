'use client'
import {
	setImages1,
	textValueFunc,
} from '@app/store/pagesAdmin/UndoRendoSlice.js'
import IFrameRedactor from '@widgets/IFrameRedactor/IFrameRedactor'
import axios from 'axios'
import { Interweave, Markup } from 'interweave'
import Cookies from 'js-cookie'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import Popup from 'reactjs-popup'
export default function App() {
	const [isPage, setIsPage] = useState(true)
	const state = useSelector(state => state)
	console.log(state)
	const images1 = useSelector(state => state.counter.present.images1)
	const textValue = useSelector(state => state.counter.present.textValue)
	const images = useSelector(state => state.counter.present.images)
	const [isFound, setIsFound] = useState(false)
	const count = useSelector(state => state.counter.present.value)
	const [postImage, setPostImage] = useState({ myFile: '' })
	const [checkerForPanel, setCheckerForPanel] = useState(false)
	const [selectedText, setSelectedText] = useState('')
	const dispatch = useDispatch()
	const [image, setImage] = useState(null)
	const [image1, setImage1] = useState(null)
	const [netImage, setNewImage] = useState([])
	const [netImage1, setNewImage1] = useState('')
	const [postImage1, setPostImage1] = useState({})
	const [localrenderImage, setLocalrenderImage] = useState('')
	const [titleHandler, setTitleHandler] = useState('')
	const [isButtonClicked, setIsButtonClicked] = useState(false)
	const [imageUrl, setImageUrl] = useState('')
	const [imageContentUrl, setImageContentUrl] = useState('')
	const [replaceTitle, setReplaceTitle] = useState('')
	const [dataUrl, setDataUrl] = useState('')
	const [isForm, setIsForm] = useState('default')
	const [typePage, setTypePage] = useState('')
	const [URLPage, setURLPage] = useState('')
	const [data, setdata] = useState('')
	const [dataFetch, setDataFetch] = useState(null)
	const [titlePage, setTitlePage] = useState('')
	const searchEvent = e => {}
	let tmp = '../../app/testing'
	const [dataPage, setDataPage] = useState([])
	const [urlPage, setUrlPage] = useState('')
	const [isUpdatedImage, setIsUpdatedImage] = useState(false)
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()
	const onSubmit = data1 => {
		setUrlPage(data1.url)
	}
	const RenderAll = () => {
		return <Interweave content={textValue} />
	}
	const RenderPredImage = () => {
		return <Interweave content={imageUrl} />
	}
	function convertToBase64(file) {
		return new Promise((resolve, reject) => {
			const fileReader = new FileReader()
			fileReader.readAsDataURL(file)
			fileReader.onload = () => {
				resolve(fileReader.result)
			}
			fileReader.onerror = error => {
				reject(error)
			}
		})
	}

	const sendImage = async (imageUrl, pageUrl) => {
		try {
			console.log('it a send image', pageUrl, imageUrl)
			const token = await Cookies.get('token')
			function extractImagePath(text) {
				const regex = /\/uploads\/[\w.-]+\.(jpg|jpeg|png|gif)/
				const result = text.match(regex)

				if (result && result.length > 0) {
					return result[0]
				} else {
					return ''
				}
			}
			await axios.put(
				`${process.env.NEXT_PUBLIC_SERVER_URL}/page/imagepage`,
				{
					pageUrl,
					pageImageUrl: extractImagePath(imageUrl),
					isUpdatedImage,
				},
				{ headers: { Authorization: `Bearer ${token}` } }
			)
		} catch (error) {
			console.log(error)
			alert('произошла ошибка сервера')
		}
	}

	const handleAddHeadingThree = () => {
		const isExtend = textValue.includes(selectedText)

		if (isExtend) {
			let initium_index = textValue.indexOf(selectedText)

			let finis_index = initium_index + selectedText.length - 1

			if (initium_index !== -1) {
				let newSubString = '<h3>' + selectedText + '</h3>'
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
	const handleAddHeadingTwo = () => {
		const isExtend = textValue.includes(selectedText)

		if (isExtend) {
			let initium_index = textValue.indexOf(selectedText)

			// Adipiscens index verbi finis
			let finis_index = initium_index + selectedText.length - 1

			if (initium_index !== -1) {
				let newSubString = '<h2>' + selectedText + '</h2>'
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

	const addStrong = () => {
		const isExtend = textValue.includes(selectedText)

		if (isExtend) {
			let initium_index = textValue.indexOf(selectedText)

			let finis_index = initium_index + selectedText.length - 1

			if (initium_index !== -1) {
				let newSubString = '<b>' + selectedText + '</b>'
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
	const handleFileChange = async event => {
		try {
			const file = event.target.files[0]
			const formData = new FormData()
			formData.append('file', file)
			console.log(formData)
			const token = await Cookies.get('token')
			const { data } = await axios.post(
				`${process.env.NEXT_PUBLIC_SERVER_URL}/uploadpdf`,
				formData,
				{ headers: { Authorization: `Bearer ${token}` } }
			)
			console.log('uploadpdf', data)
			addLinkFile(`${process.env.NEXT_PUBLIC_SERVER_URL}${data.pdflink}`)
		} catch (err) {
			console.log(err)
		}
	}
	const addLinkFile = somelink => {
		const isExtend = textValue.includes(selectedText)

		if (isExtend) {
			let initium_index = textValue.indexOf(selectedText)

			let finis_index = initium_index + selectedText.length - 1

			if (initium_index !== -1) {
				let newSubString =
					`<a   target="_blank" style="text-decoration: underline" href=${somelink}>` +
					selectedText +
					'</a>'
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
	const addUnderline = () => {
		const isExtend = textValue.includes(selectedText)

		if (isExtend) {
			let initium_index = textValue.indexOf(selectedText)

			let finis_index = initium_index + selectedText.length - 1

			if (initium_index !== -1) {
				let newSubString = '<u>' + selectedText + '</u>'
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
	const addParagraphOne = () => {
		const isExtend = textValue.includes(selectedText)

		if (isExtend) {
			let initium_index = textValue.indexOf(selectedText)

			let finis_index = initium_index + selectedText.length - 1

			if (initium_index !== -1) {
				let newSubString =
					'<p style=" text-indent: 20px;" >' + selectedText + '</p>'
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

	const addListNum = () => {
		const isExtend = textValue.includes(selectedText)

		if (isExtend) {
			let initium_index = textValue.indexOf(selectedText)

			let finis_index = initium_index + selectedText.length - 1

			const newSelectedArr = selectedText.split('<br/>')

			if (initium_index !== -1) {
				const elements = newSelectedArr
					.map((el, index) => `<li>${index + 1}. ${el}</li>`)
					.join('')
				const NewString = () => {
					return (
						textValue.substring(0, initium_index) +
						'<ol>' +
						elements +
						'</ol>' +
						textValue.substring(finis_index + 1)
					)
				}
				dispatch(textValueFunc(NewString()))
			} else {
				console.log('substring not found')
			}
		}
	}
	const addList = () => {
		const isExtend = textValue.includes(selectedText)

		if (isExtend) {
			let initium_index = textValue.indexOf(selectedText)

			let finis_index = initium_index + selectedText.length - 1

			const newSelectedArr = selectedText.split('<br/>')

			if (initium_index !== -1) {
				// Create an array of React elements
				const elements = newSelectedArr
					.map(
						(
							el,
							index
						) => `<li style="display: flex; flex-direction: row; align-items: center; text-align: center; margin: 10px ">
					<div style="width: 10px; height: 10px; background: white; border-radius: 50%; margin-right:10px"></div>
					${el}
			</li>`
					)
					.join('')

				console.log('ELEMENTS', elements)
				// Save JSX elements directly
				const NewString = () => {
					return (
						textValue.substring(0, initium_index) +
						'<ul>' +
						elements +
						'</ul>' +
						textValue.substring(finis_index + 1)
					)
				}
				dispatch(textValueFunc(NewString()))
			} else {
				console.log('substring not found')
			}
		}
	}
	let linkHref = ''
	let linkName = ''
	const addLink = e => {
		console.log('addLink', e.target.value)
		linkHref = e.target.value
	}
	const addNameLink = e => {
		console.log('addNameLink', e.target.value)
		linkName = e.target.value
	}

	const addLinkElement = () => {
		const isExtend = textValue.includes(selectedText)

		if (isExtend) {
			let initium_index = textValue.indexOf(selectedText)

			let finis_index = initium_index + selectedText.length - 1

			if (initium_index !== -1) {
				let newSubString =
					`<a   target="_blank" href=${linkHref}>` + selectedText + '</a>'
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
	const addStrike = () => {
		const isExtend = textValue.includes(selectedText)

		if (isExtend) {
			let initium_index = textValue.indexOf(selectedText)

			let finis_index = initium_index + selectedText.length - 1

			if (initium_index !== -1) {
				let newSubString = '<s>' + selectedText + '</s>'
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
	const handleKeyPress = e => {
		if (e.key === 'Enter') {
			dispatch(textValueFunc(textValue + '<br/>'))
			// Выводим значение напрямую вместо добавления его в массив
			console.log('enter')
			// Очищаем поле ввода после нажатия Enter
		}
		if (e.keyCode == 32) {
			// dispatch(textValueFunc(textValue + ' ')) //default add space
			console.log('spacebar')
		}
	}
	const handleAddHeadingOne = () => {
		const isExtend = textValue.includes(selectedText)

		if (isExtend) {
			let initium_index = textValue.indexOf(selectedText)

			let finis_index = initium_index + selectedText.length - 1

			if (initium_index !== -1) {
				let newSubString = '<h1>' + selectedText + '</h1>'
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
	const addCenterText = () => {
		const isExtend = textValue.includes(selectedText)

		if (isExtend) {
			let initium_index = textValue.indexOf(selectedText)

			let finis_index = initium_index + selectedText.length - 1

			if (initium_index !== -1) {
				let newSubString =
					'<div style="text-align:center">' + selectedText + '</div>'
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
	const addLeftText = () => {
		const isExtend = textValue.includes(selectedText)

		if (isExtend) {
			let initium_index = textValue.indexOf(selectedText)

			let finis_index = initium_index + selectedText.length - 1

			if (initium_index !== -1) {
				let newSubString =
					'<div style="text-align:left">' + selectedText + '</div>'
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
	const addRightText = () => {
		const isExtend = textValue.includes(selectedText)

		if (isExtend) {
			let initium_index = textValue.indexOf(selectedText)

			let finis_index = initium_index + selectedText.length - 1

			if (initium_index !== -1) {
				let newSubString =
					'<div style="text-align:right">' + selectedText + '</div>'
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

	const addRight = () => {
		const isExtend = textValue.includes(selectedText)

		if (isExtend) {
			let initium_index = textValue.indexOf(selectedText)

			let finis_index = initium_index + selectedText.length - 1

			if (initium_index !== -1) {
				let newSubString =
					'<div style="margin-left: 90%">' + selectedText + '</div>'
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
	const addLeft = () => {
		const isExtend = textValue.includes(selectedText)

		if (isExtend) {
			let initium_index = textValue.indexOf(selectedText)

			let finis_index = initium_index + selectedText.length - 1

			if (initium_index !== -1) {
				let newSubString =
					'<div style="margin-right: 90%">' + selectedText + '</div>'
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
	const addCenter = () => {
		const isExtend = textValue.includes(selectedText)

		if (isExtend) {
			let initium_index = textValue.indexOf(selectedText)

			let finis_index = initium_index + selectedText.length - 1

			if (initium_index !== -1) {
				let newSubString =
					'<div style="display: block; margin-left: auto;margin-right: auto; width: 50%;">' +
					selectedText +
					'</div>'
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
	const MarkItalics = () => {
		const isExtend = textValue.includes(selectedText)

		if (isExtend) {
			let initium_index = textValue.indexOf(selectedText)

			let finis_index = initium_index + selectedText.length - 1

			if (initium_index !== -1) {
				let newSubString = '<i>' + selectedText + '</i>'
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

	const handleFocus = e => {
		const activeTextarea = document.activeElement
		const selection = activeTextarea.value.substring(
			activeTextarea.selectionStart,
			activeTextarea.selectionEnd
		)
		setSelectedText(selection)
		console.log(selection)
	}

	const wrapWithTag = () => {
		textValue.map(el => {
			console.log(el)
			if (el == selectedText) {
				el = `<h1>${el}</h1>`
			}
		})
	}
	const MarkedElement = ({ italic }) => {
		return <Markup content={italic} />
	}

	const handleDeleteTegs = () => {
		const isExtend = textValue.includes(selectedText)

		if (isExtend) {
			let initium_index = textValue.indexOf(selectedText)

			let finis_index = initium_index + selectedText.length - 1

			const deleteHTMLTegs = word => {
				return word.replace(/<[^>]*>/g, '')
			}
			let newSubString = deleteHTMLTegs(selectedText)
			if (initium_index !== -1) {
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
	const handleTitleChange = event => {
		setTitleHandler(event.target.value)
		console.log(titleHandler)
	}

	const addImagesArr1 = () => {
		setLocalrenderImage(`<img src=${images1}  alt="name"/>`)
	}
	const addImagesArr = () => {
		dispatch(textValueFunc(textValue + `${imageContentUrl}`))
	}
	const handleImageChange = async event => {
		try {
			const file = event.target.files[0]
			const formData = new FormData()
			formData.append('image', file)
			console.log(formData)
			const token = await Cookies.get('token')
			const { data } = await axios.post(
				`${process.env.NEXT_PUBLIC_SERVER_URL}/upload`,
				formData,
				{ headers: { Authorization: `Bearer ${token}` } }
			)
			console.log(data.imagelink)
			setDataUrl(data.imagelink)
			console.log(dataUrl)
			setImageContentUrl(
				`<img style="max-width:100%, height: auto;" src=${
					`${process.env.NEXT_PUBLIC_SERVER_URL}` + `${data.imagelink}`
				}  alt="name"/>`
			)
			console.log(imageContentUrl)
		} catch (err) {
			console.log(err)
		}
	}

	const handleImageChange1 = async e => {
		const file = e.target.files[0]
		const reader = new FileReader()
		const base64 = await convertToBase64(file)
		setPostImage1({ ...postImage1, base64 })
		setNewImage1(postImage1)
		reader.onloadend = () => {
			setImage1(reader.result)

			dispatch(setImages1(reader.result))
			console.log(images1)
		}

		if (file) {
			reader.readAsDataURL(file)
		}
	}

	const nameRef = useRef(null)
	const filesRef = useRef(null)
	const submitForm = e => {
		e.preventDefault()

		addImagesArr()
	}
	const submitForm1 = e => {
		e.preventDefault()
		addImagesArr1()
	}
	const addPageInServer = async () => {
		try {
			let newUrl = ''
			sendImage(imageUrl, urlPage)

			const token = await Cookies.get('token')
			const sometext = textValue
			function removeLocalhostURL(text) {
				// Используем регулярное выражение для замены ссылки на пустую строку с использованием переменной link
				const link = process.env.NEXT_PUBLIC_SERVER_URL
				return text.replace(new RegExp(link, 'g'), '')
			}

			const resultText = removeLocalhostURL(sometext)
			console.log('resultText', resultText)
			function removeLocalhostFromHref(htmlString) {
				const link = process.env.NEXT_PUBLIC_FRONTEND_URL
				return htmlString.replace(new RegExp(link, 'g'), '')
			}
			const cleanedHtml = removeLocalhostFromHref(resultText)

			const someDate = await axios.put(
				`${process.env.NEXT_PUBLIC_SERVER_URL}/page/topublic`,

				{ URLPage, typePage, textValue: cleanedHtml, titlePage },
				{
					headers: {
						'Access-Control-Allow-Origin': '*',
						Authorization: `Bearer ${token}`,
					},
				}
			)

			if (someDate.status == 208) {
				alert(someDate.data.message)
			}
			if (someDate.status == 200) {
				dispatch(textValueFunc(''))
				setImageUrl('')
				alert(someDate.data.message)
			}
		} catch (error) {
			console.log(error)

			alert(
				`${error.response.data.message}. Текущий статус:${error.response.status}`
			) // Handle any errors
		}
	}
	function updateImageSource(text) {
		const link = process.env.NEXT_PUBLIC_SERVER_URL || ''
		return text.replace(/src=['"]\/uploads/g, `src="${link}/uploads`)
	}

	function insertLocalhostToLinks(html) {
		const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL || ''
		if (!serverUrl) {
			console.error('NEXT_PUBLIC_SERVER_URL is not defined')
			return html
		}
		const regex = /href=['"]\/uploads/g
		const replacement = `href="${serverUrl}/uploads`
		return html.replace(regex, replacement)
	}

	const deleteImagesPrev = async pageUrl => {
		try {
			alert('Вы действительно хотите удалить обложку?')
			console.log('it a send image', pageUrl)
			const token = await Cookies.get('token')
			await axios.delete(
				`${process.env.NEXT_PUBLIC_SERVER_URL}/page/removeimage`,
				{
					data: pageUrl,
					headers: { Authorization: `Bearer ${token}` },
				}
			)
		} catch (error) {
			console.log(error)
			alert(error)
			console.log(error)
			alert('произошла ошибка сервера')
		}
	}
	const handleSubmit22 = async event => {
		try {
			const file = event.target.files[0]
			const formData = new FormData()
			formData.append('image', file)
			console.log(formData)
			const token = await Cookies.get('token')
			const { data } = await axios.post(
				`${process.env.NEXT_PUBLIC_SERVER_URL}/upload`,
				formData,
				{ headers: { Authorization: `Bearer ${token}` } }
			)

			setImageUrl(
				`<img style="max-width:100%, height: auto;" src=${
					`${process.env.NEXT_PUBLIC_SERVER_URL}` + `${data.imagelink}`
				}  alt="name"/>`
			)
			Cookies.set(
				'imgUrl',
				`<img style="max-width:100%, height: auto;" src=${
					`${process.env.NEXT_PUBLIC_SERVER_URL}` + `${data.imagelink}`
				}  alt="name"/>`
			)
			setIsUpdatedImage(true)

			console.log('imagelink', data.imagelink)
		} catch (err) {
			alert('произошла ошибка')
		}
	}

	const Search = async () => {
		try {
			const somedata = await axios.get(
				`${process.env.NEXT_PUBLIC_SERVER_URL}/page/takecollege`,
				{ params: { urlPage } },
				{
					headers: { 'Access-Control-Allow-Origin': '*' },
				}
			)
			console.log('Search', somedata)

			setDataPage(somedata)
		} catch (error) {
			setDataPage([null])
			console.log(error.response.status)
		}
	}
	const DataObj = ({ dataPage }) => {
		console.log(dataPage.data.pageTitle)
		return (
			dataPage.status == 200 && (
				<div
					onClick={() => {
						setCheckerForPanel(true)
					}}
				>
					{dataPage.data.PageTitle}
				</div>
			)
		)
	}
	const Checker = ({ dataPage }) => {
		console.log(dataPage)
		if (dataPage.status === 200) {
			return <DataObj dataPage={dataPage} />
		}
		if (dataPage.includes(null)) {
			return <div>Not found 404</div>
		}
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input
				style={{ backgroundColor: 'black' }}
				type='text'
				placeholder='адрес страницы'
				{...register('url', { required: true, maxLength: 500 })}
			/>

			<input type='submit' />
			<button
				style={{
					marginLeft: 10,
					backgroundColor: '#0066FF',
					padding: 10,
					borderRadius: 10,
				}}
				onClick={() => Search()}
			>
				Поиск
			</button>
			{dataPage.status == 200 && !isFound && (
				<div>
					<button
						onClick={() => {
							setIsFound(true)
							console.log(dataPage.data.pageContent)
							const result = updateImageSource(dataPage.data.pageContent)

							const result2 = insertLocalhostToLinks(result)
							dispatch(textValueFunc(result2))
							localStorage.setItem('contentPolytech', result2)
							Cookies.set('typePage', dataPage.data.pageType)
							Cookies.set('urlPage', dataPage.data.pageUrl)
							Cookies.set('titlePage', dataPage.data.pageTitle)
							Cookies.set('isNew', false)
							setURLPage(dataPage.data.pageUrl)
							setTitlePage(dataPage.data.pageTitle)
							setTypePage(dataPage.data.pageType)
						}}
					>
						<h1>{dataPage.data.pageTitle}</h1>
					</button>
					<img
						src={`${process.env.NEXT_PUBLIC_SERVER_URL}${dataPage.data.pageImage}`}
						style={{ width: '50%', height: '50%' }}
						alt=''
						srcset=''
					/>

					<div>{dataPage.data.pageDate}</div>
				</div>
			)}
			{isFound && (
				<div>
					{
						<div className='flex flex-col'>
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
											обновить обложку
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

								<div>
									<input
										onChange={handleTitleChange}
										placeholder='заголовок страницы'
										style={{ backgroundColor: '#000', marginBottom: 10 }}
										type='text'
										value={titleHandler}
									/>
									<button
										type='button'
										onClick={() => {
											console.log('titleHandler', titleHandler)
											let somef = titleHandler
											setTitlePage(somef)
											Cookies.set('titlePage', somef)
											console.log('hh', titlePage)
										}}
									>
										изменить
									</button>
								</div>
							</div>

							<IFrameRedactor content={textValue} />
							<RenderPredImage />
						</div>
					}
				</div>
			)}
		</form>
	)
}
