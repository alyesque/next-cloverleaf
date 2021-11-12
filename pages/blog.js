import React, { useState, useEffect } from 'react';
import ArticleList from '../components/ArticleList';
import Head from 'next/dist/shared/lib/head';

const FeaturedPosts = ({ articles }) => {

    console.log(articles)

    return (
        <>
            <Head>
                <title>Cloverleaf Math - Blog</title>
            </Head>
            <ArticleList articles={articles} />
        </>
    );
};
export default FeaturedPosts;

export const getStaticProps = async () => {
    const res = await fetch('https://www.googleapis.com/blogger/v3/blogs/6835549372255884484/posts?key=AIzaSyCgmIgM0Ld_eI6FdUNxqDT_HHOGkh8MH-M&fbclid=IwAR35jRH4P8wmjbiNsilxV1rnWwdrjgJPEE9hJVSx85IB6DGx8BEJXVqhim0')
    const results = await res.json()
    let articles = results.items

    return {
        props: {
            articles
        }
    }
}

// Fd5_Hc@h //