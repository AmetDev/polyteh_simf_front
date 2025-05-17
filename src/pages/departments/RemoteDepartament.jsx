import Link from 'next/link'
import style from './style.module.scss'

const RemoteDepartament = () => {
	const tursunDesceplines = [
		{
			code: '09.02.06',
			name: 'Сетевое и системное администрирование',
		},

		{
			code: '15.02.17',
			name: 'Монтаж,  техническое обслуживание, эксплуатация и ремонт промышленного оборудования (по отраслям);',
		},

		{
			code: '15.02.06',
			name: 'Монтаж, техническая эксплуатация и ремонт холодильно-компрессорных и теплонасосных машин и установок (по отраслям);',
		},

		{
			code: '19.02.11',
			name: 'Технология продуктов питания из растительного сырья (направленность: Технология хлеба, хлебобулочных, макаронных и кондитерских изделий);',
		},

		{
			code: '19.02.11',
			name: 'Технология продуктов питания из растительного сырья (направленность: Технология солода, продукции бродильных производств и виноделия, безалкогольных напитков);',
		},

		{
			code: '19.02.12',
			name: 'Технология продуктов питания животного происхождения;',
		},

		{
			code: '38.02.01',
			name: 'Экономика и бухгалтерский учет (по отраслям);',
		},

		{
			code: '43.02.16',
			name: 'Туризм и гостеприимство',
		},
	]

	return (
		<main className={style.departament}>
			<h1>Заочная форма обучения</h1>
			<p>
				Срок обучения на заочной форме: 3 года 2 месяца (после 11 класса), 4
				года 2 месяца (после 9 класса)
			</p>

			{/* <img src={mainImg.src} alt="RemoteDepartament" /> */}

			<h2 className={style.departament__desceplines__title}>
				Дисциплины, которые сюда входят
			</h2>

			<ul className={style.departament__desceplines}>
				{tursunDesceplines.map(({ code, name }) => (
					<li key={code}>
						<Link
							className={style.departament__link}
							href='/enrollee/#specialityes'
						>
							<h2>{code}</h2>
							<h3>{name}</h3>
						</Link>
					</li>
				))}
			</ul>
		</main>
	)
}

export default RemoteDepartament
