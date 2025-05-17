'use client'
import 'react-loading-skeleton/dist/skeleton.css'

// import FirstScreen from "../../widgets/home/FirstScreen/FirstScreen";
// import Posts from "../../widgets/home/Posts/Posts";
// import HomeSearchBar from "../../features/home/HomeSearchBar/HomeSearchBar"
// import About from "../../widgets/home/About/About";
// import Background from "../../entities/home/Background/Background";
// import ContactForm from "../../widgets/home/ContactForm/ContactForm";
// import Departments from "../../widgets/home/Departments/Departments";
// import EssentialLinks from "../../widgets/home/EssentialLinks/EssentialLinks";
// import Ministries from "../../widgets/home/Ministries/Ministries";

import style from '@pages/home/home.module.scss'
import EnrolleeContacts from '@widgets/enrolleeContacts/page'
import SearchPage from '@widgets/ExtenSearch/Exten'
import About from '@widgets/home/About/About'
import AboutImage from '@widgets/home/AboutImage/AboutImage'
import ContactForm from '@widgets/home/ContactForm/ContactForm'
import Departments from '@widgets/home/Departments/Departments'
import EssentialLinks from '@widgets/home/EssentialLinks/EssentialLinks'
import FirstScreen from '@widgets/home/FirstScreen/FirstScreen'
import Ministries from '@widgets/home/Ministries/Ministries'
import Posts from '@widgets/home/Posts/Posts'
import SwiperInner from '@widgets/Swiper/SwiperInner'

const Home = () => {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth', // Плавная прокрутка
		})
	}

	return (
		<section>
			<FirstScreen />
			<AboutImage />
			<SwiperInner />
			<div className={style.home__search}>
				{/* <HomeSearchBar /> */}
				<SearchPage />
			</div>
			<div className={style.home__main}>
				<About />
				<Posts />
			</div>

		{/*<ContactForm />*/}
			<EnrolleeContacts />

			<EssentialLinks />

			<Departments />
			<Ministries />
			<button
				onClick={scrollToTop}
				style={{
					position: 'fixed',
					bottom: '20px',
					right: '20px',
					backgroundColor: '#131313',
					borderRadius: '50%',
					padding: '15px',
					color: '#FFF',
					fontSize: '24px',
					boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
				}}
			>
				↑
			</button>
		</section>
	)
}

export default Home
