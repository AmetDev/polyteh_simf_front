// Указываем, что это клиентский компонент (для Next.js 13+)
'use client'

// Импортируем компоненты Swiper
import { Swiper, SwiperSlide } from 'swiper/react'

// Импортируем стили Swiper
import 'swiper/css'
import 'swiper/css/autoplay' // Стили для автопереключения
import 'swiper/css/navigation'

// Импортируем модули Navigation и Autoplay
import { Autoplay, Navigation } from 'swiper/modules'

// Импортируем изображения из папки ./imgs
import Image1 from './imgs/1.png'
import Image2 from './imgs/2.png'
import Image3 from './imgs/3.png'
import Image4 from './imgs/4.jpg'
import Image5 from './imgs/5.png'
// Импортируем стили
import './styles.css'

export default function SwiperInner() {
	return (
		<>
			<Swiper
				navigation={true} // Включение навигации
				modules={[Navigation, Autoplay]} // Подключаем модули
				className='mySwiper'
				autoplay={{
					delay: 3000, // Задержка между переключениями (в миллисекундах)
					disableOnInteraction: false, // Продолжать автопереключение после взаимодействия пользователя
				}}
				loop={true} // Бесконечный цикл слайдов
			>
				<SwiperSlide>
					<div className='slide-image-container'>
						<img src={Image1.src} alt='Slide 1' className='slide-image' />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='slide-image-container'>
						<img src={Image2.src} alt='Slide 2' className='slide-image' />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='slide-image-container'>
						<img src={Image3.src} alt='Slide 3' className='slide-image' />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='slide-image-container'>
						<img src={Image4.src} alt='Slide 4' className='slide-image' />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='slide-image-container'>
						<img src={Image5.src} alt='Slide 5' className='slide-image' />
					</div>
				</SwiperSlide>
			</Swiper>
		</>
	)
}
