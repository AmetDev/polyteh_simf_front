'use client'
import ButtonIcon from '@/shared/buttons/ButtonIcon/ButtonIcon'
import door from '@public/assets/icons/door.svg?url'
import logo from '@public/assets/icons/logo.svg?url'
import bubbles from '@public/assets/images/home/bubbles.png'
import Link from 'next/link'
import style from './Firstscreen.module.scss'
const FirstScreen = () => {
	return (
		<section className={style.firstScreen}>
			<img className={style.bubbles} src={bubbles.src} />

			<h1 className={style.title} data-img={bubbles.src}>
				<img
					style={{ width: '13rem', height: 'auto', marginTop: '2rem' }}
					src={logo.src}
				/>
				ГБПОУ РК <br /> «Симферопольский политехнический колледж»
			</h1>

			<Link href='https://rutube.ru/video/private/5d2d95ad181d372836339537d8e85613/?p=iILF1Vkzzgj5eModSIqeFg'>
				<ButtonIcon
					text='День открытых дверей'
					iconPath={door.src}
					className={style.button}
				/>
			</Link>
		</section>
	)
}

export default FirstScreen
