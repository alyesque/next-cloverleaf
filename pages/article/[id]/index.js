import { useRouter } from "next/dist/client/router"
import Head from "next/dist/shared/lib/head"

const Article = ({ articles }) => {
    const router = useRouter()
    const { id, content } = router.query
    console.log(articles[id])
    return (

        <div className='card' key={articles[id]}>
            <Head>
                <title>{articles[id].title}</title>
            </Head>

            <h1> {articles[id].title} </h1>
            <div className="blogPost" dangerouslySetInnerHTML={{ __html: articles[id].content }} />

        </div>
    )
}

export const getServerSideProps = async (context) => {
    const res = await fetch('https://www.googleapis.com/blogger/v3/blogs/6835549372255884484/posts?key=AIzaSyCgmIgM0Ld_eI6FdUNxqDT_HHOGkh8MH-M&fbclid=IwAR35jRH4P8wmjbiNsilxV1rnWwdrjgJPEE9hJVSx85IB6DGx8BEJXVqhim0')
    const results = await res.json()
    let articles = results.items


    return {
        props: {
            articles
        }
    }
}

export default Article