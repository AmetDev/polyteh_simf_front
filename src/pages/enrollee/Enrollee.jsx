/* itsZeroFour@gmail.com code side */

'use client'

import EnrolleeSpecialityes from '@/widgets/Enrollee/EnrolleeSpecialityes'

const Enrollee = ({ files, specialityes }) => {
	return (
		<section>
			<EnrolleeSpecialityes specialityes={specialityes} />
		</section>
	)
}

export default Enrollee
