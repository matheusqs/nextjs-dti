import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <p className={styles.title}>DEV</p>
            <Link href="/articles">
                <a className={styles.card} >Ver os meus artigos</a>
            </Link>
        </div>
    )
}
