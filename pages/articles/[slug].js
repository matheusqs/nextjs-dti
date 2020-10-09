import {useRouter} from "next/router";

export default function Article({article}){
    const {isFallback} = useRouter()
    if(isFallback) return <p>Loading...</p>
    return(
        <>
            <h1>{article.title}</h1>
            <p>{article.description}</p>
            <img src={article.cover_image} alt=""/>
            </>
    )
}

export const getStaticPaths = async () => {
    const response = await fetch(`https://dev.to/api/articles/me/all`, {
        headers: {
            'api-key': process.env.DEV_TO_KEY
        }
    })
    const articles = await response.json();

    const paths = articles.map(article => ({
        params: {slug: article.slug}
    }))
    return {
        paths,
        fallback: true
    }
}

export const getStaticProps = async (context) => {
    const {slug} = context.params;

    const response = await fetch(`https://dev.to/api/articles/wolfmaster8/${slug}`, {
        headers: {
            'api-key': process.env.DEV_TO_KEY
        }
    })
    const article = await response.json()
    console.log('article!');

    return {
        props: {
            article,
        },
            revalidate: 10
    }
}