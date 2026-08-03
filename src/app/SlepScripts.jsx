'use client'

import Script from 'next/script'
import { useState } from 'react'

const SlepScripts = () => {
	const [loadUhpv, setLoadUhpv] = useState(false)

	return (
		<>
			<Script
				id='slep-jquery'
				src='/slep/js/jquery.js'
				strategy='lazyOnload'
				onLoad={() => setLoadUhpv(true)}
			/>
			{loadUhpv && (
				<Script
					id='slep-uhpv'
					src='/slep/js/uhpv-full.min.js'
					strategy='lazyOnload'
				/>
			)}
		</>
	)
}

export default SlepScripts
