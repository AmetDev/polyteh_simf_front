'use client'
import Post from '@/features/home/Post'
import PostLoading from '@features/home/PostLoading'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import style from './Posts.module.scss'

const Posts = () => {
	const [data, setData] = useState(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const getPosts = async () => {
			try {
				const response = await fetch(
					`${process.env.NEXT_PUBLIC_SERVER_URL}/page/getpostspages`
				)
				const result = await response.json()
				setData(result)
			} catch (error) {
				console.error('Ошибка загрузки постов:', error)
			} finally {
				setLoading(false)
			}
		}

		getPosts()
	}, [])

	const renderPosts = () => {
		if (loading) return [0, 0, 0].map((_, i) => <PostLoading key={i} />)
		if (!data || data.length === 0) return <p>Нет постов</p>

		return data.slice(-3).map(post => <Post key={post.id} data={post} />)
	}

	return (
		<section className={style.posts}>
			{renderPosts()}
			<p className={style.viewAll}>
				<Link href='/posts'>Смотреть больше...</Link>
			</p>
		</section>
	)
}

export default Posts
