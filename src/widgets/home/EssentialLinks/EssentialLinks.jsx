import Link from 'next/link'
import style from './EssentialLinks.module.scss'

const data = [
	{
		text: 'Обучение с применением ЭО и ДОТ',
		url: '/our-colleage/special-study',
	},
	{
		text: 'Пройди бесплатное обучение',
		url: '/our-colleage/free-study',
	},
	{
		text: 'АИС «Электронный журнал»',
		url: 'https://edu.rk.gov.ru/authorize',
	},
	{
		text: 'Закрытое образовательное пространство для педагогов, учеников и их родителей  Сферум',
		url: 'https://sferum.ru/?p=start',
	},
	{
		text: 'Вы можете оставить мнение о нашей организации.',
		url: '/our-colleage/mean',
	},
]

function EssentialLinks() {
	return (
		<>
			<div className={style.delimiter}></div>

			<nav className={style.links}>
				<h2 className={style.title}>Основные ссылки</h2>
				{data.map(({ text, url }, index) => (
					<li className={style.link} key={index}>
						<Link href={url}>{text}</Link>
					</li>
				))}
			</nav>
		</>
	)
}

export default EssentialLinks
