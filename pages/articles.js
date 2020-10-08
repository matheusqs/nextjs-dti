import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Articles({articles}){
    console.log(articles)
    return (
        <div className={styles.container}>
            <Link href="/">
                <a className={styles.link}>Voltar</a>
            </Link>
                {articles.map((article) => (
                    <div key={article.id} className={styles.card}>
                        <img className={styles.profile} src={article.user.profile_image} alt={article.user.name}/>
                        <h1>{article.title}</h1>
                        <p>{article.description}</p>
                    </div>
                ))}
        </div>
    )
}

export async function getStaticProps(){
    const response = await fetch(`https://dev.to/api/articles/me/all`, {
        headers: {
            'api-key': process.env.DEV_TO_KEY
        }
    })
    const articles = await response.json()
    console.log(articles)
    return {
        props: {
            articles
        },
        revalidate: 10
    }
}