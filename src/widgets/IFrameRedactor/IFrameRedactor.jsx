import { useEffect, useRef } from 'react'

const IFrameRedactor = ({ content }) => {
	const iframeRef = useRef(null)

	useEffect(() => {
		const handleLoad = () => {
  if (iframeRef.current?.contentWindow) {
    console.log('Sending message to iframe:', content); // Лог отправляемого сообщения
    iframeRef.current.contentWindow.postMessage(
      { key: 'contentPolytech', value: content },
      `${process.env.NEXT_PUBLIC_ADMIN_URL}` // Укажите домен iframe
    );
  }
};
		const iframe = iframeRef.current
		if (iframe) {
			console.log("ddd")
			iframe.addEventListener('load', handleLoad)
		}

		// Убираем обработчик при размонтировании
		return () => {
			if (iframe) {
				iframe.removeEventListener('load', handleLoad)
			}
		}
	}, [content])

	return (
		<div>
			<iframe
				ref={iframeRef}
				src={`${process.env.NEXT_PUBLIC_ADMIN_URL}`} 
				style={{ width: '100%', height: '700px', border: 'none' }}
				title='IFrame Editor'
			/>
		</div>
	)
}

export default IFrameRedactor
