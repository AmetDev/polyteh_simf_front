import Link from 'next/link'
import './table.css'

const ProgramSection = ({ id, imgSrc, title, links, color }) => (
	<Link
		href={id}
		style={{
			display: 'block',
			marginTop: '10px',
			marginBottom: '10px',
			textDecoration: 'none',
		}}
	>
		<table>
			<tr
				style={{
					backgroundColor: color,
					color: '#000',
					fontFamily: 'Times New Roman',
					fontSize: '16px',
				}}
				id={id}
				className={id}
			>
				<td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
					<div className='wrapperImg'>
						<img
							className='program-image'
							src={imgSrc}
							alt={title}
							style={{
								width: '15rem',
								height: '10rem',
								flexShrink: '0',
								objectFit: 'cover',
							}}
						/>
					</div>
				</td>
				<td
					style={{
						textAlign: 'center',
						verticalAlign: 'middle',
						fontSize: '1.7rem',
					}}
				>
					<b>{title}</b>
				</td>
			</tr>
		</table>
	</Link>
)

const Table = () => {
	const programmers = [
		{
			id: 'relazie-programmers#1',

			className: 'system',
			imgSrc: 'https://simfpolyteh.ru/api/uploads/1732774565225.jpg',
			altText: 'name',
			color: 'rgb(149, 179, 215)',
			title:
				'09.02.06 Сетевое и системное администрирование (направленность: Эксплуатация объектов сетевой инфраструктуры)',
		},
		{
			id: 'relazie-programmers#2',
			className: 'programmer',
			imgSrc: 'https://simfpolyteh.ru/api/uploads/1732775905467.jpg',
			altText: 'name',
			color: 'rgb(149, 179, 215)',
			title:
				'09.02.07 Информационные системы и программирование (квалификация: Программист)',
		},
		{
			id: 'relazie-programmers#3',
			className: 'web',
			imgSrc: 'https://simfpolyteh.ru/api/uploads/1732874027498.png',
			altText: 'name',
			color: 'rgb(149, 179, 215)',
			title:
				'09.02.07 Информационные системы и программирование (квалификация: Разработчик веб и мультимедийных приложений)',
		},
		{
			id: 'relazie-programmers#4',
			className: 'fridge',
			imgSrc: 'https://simfpolyteh.ru/api/uploads/1732774690675.jpg',
			altText: 'name',
			color: 'rgb(182, 221, 232)',
			title:
				'15.02.06 Монтаж, техническая эксплуатация и ремонт холодильно-компрессорных и теплонасосных машин и установок (по отраслям) (направленность: Холодильно-вентиляционная техника и система кондиционирования воздуха)',
		},
		{
			id: 'relazie-programmers#5',
			className: 'fridge',
			imgSrc: 'https://simfpolyteh.ru/api/uploads/1732774776651.jpg',
			altText: 'nddsg',
			color: ' rgb(182, 221, 232)',
			title:
				'15.02.17 Монтаж, техническое обслуживание, эксплуатация и ремонт промышленного оборудования (по отраслям) (направленность: Монтаж, техническое обслуживание, эксплуатация и ремонт промышленного оборудования пищевой промышленности)',
		},
		{
			id: 'relazie-programmers#6',
			imgSrc: 'https://simfpolyteh.ru/api/uploads/1732774921221.jpg',
			className: 'fridge',
			color: 'rgb(194, 214, 155)',
			altText: 'etg',
			title:
				'19.02.11 Технология продуктов питания из растительного сырья (направленность: Технология хлеба, хлебобулочных, макаронных и изделий кондитерских)',
		},
		{
			id: 'relazie-programmers#7',
			className: 'fridge',
			altText: 'etg',
			color: 'rgb(194, 214, 155)',
			imgSrc: 'https://simfpolyteh.ru/api/uploads/1732774945520.jpg',
			title:
				'19.02.11 Технология продуктов питания из растительного сырья (направленность: Технология солода, продукции бродильных производств и виноделия, безалкогольных напитков)',
		},
		{
			id: 'relazie-programmers#8',
			color: 'rgb(194, 214, 155)',
			imgSrc: 'https://simfpolyteh.ru/api/uploads/1732774973749.jpg',
			title:
				'19.02.12 Технология продуктов питания животного происхождения (направленность: Производство продуктов питания из мясного сырья)',
		},
		{
			id: 'relazie-programmers#9',
			color: 'rgb(229, 184, 183)',
			imgSrc: 'https://simfpolyteh.ru/api/uploads/1732775019573.jpg',
			title:
				'38.02.01 Экономика и бухгалтерский учет (по отраслям) (квалификация: Бухгалтер)',
		},
		{
			id: 'relazie-programmers#10',
			color: 'rgb(251, 212, 180)',
			imgSrc: 'https://simfpolyteh.ru/api/uploads/1732775512232.jpg',
			title:
				'43.02.16 Туризм и гостеприимство (направленность: Гостиничные услуги)',
		},
		// Add more course data here...
	]

	return (
		<div>
			<table>
				<tbody>
					{programmers.map(program => (
						<ProgramSection
							key={program.id}
							id={program.id}
							imgSrc={program.imgSrc}
							title={program.title}
							color={program.color}
						/>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default Table
