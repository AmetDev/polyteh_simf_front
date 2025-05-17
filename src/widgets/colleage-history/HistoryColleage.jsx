// import colleage from '@public/assets/images/colleage-history/colleage.jpg'
import style from './ColleageHistory.module.scss'

const HistoryColleage = () => {
	return (
		<>
			<section className={style.colleage__history}>
				<img
					src='https://simfpolyteh.ru/api/uploads/1733483582297.png'
					alt='colleage'
				/>
			</section>
			<br />
			<section className={style.colleage__text}>
				<p>
					Исследуя материалы архивного фонда Государственного казенного
					учреждения Республики Крым «Государственный архив Республики Крым»
					выяснилось, что история Симферопольского политехнического колледжа
					имеет очень давние традиции. «Московское Товарищество паровой фабрики
					шоколадных конфет и чайных печений» Эйнем купило прекрасное,
					живописное место в лощине между двух гор, вдоль берега реки Салгир и в
					1884 году построило конфетную фабрику по улице Воронцовской, 14.
				</p>
			</section>
		</>
	)
}

export default HistoryColleage
