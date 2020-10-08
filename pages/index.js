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

            <p className={styles.title}>O Clima!</p>
            <Link href="/clima">
                <a className={styles.card} >Ver o clima atual</a>
            </Link>
        </div>
    )
}
