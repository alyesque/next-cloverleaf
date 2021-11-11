import React, { useState, useEffect } from 'react';
import axios from 'axios';


const FeaturedPosts = () => {

    function handleResponse(response) {
        const parser = new DOMParser();
        const html = parser.parseFromString(response.content, 'text/html');
        const img = html.querySelector('img');
        const url = img ? img.src : '';
        return url
    }

    function prevPara(response) {
        const parser = new DOMParser();
        const html = parser.parseFromString(response.content, 'text/html');
        const para = html.querySelector('span');
        const preview = para ? para.innerHTML : '';
        console.log(preview)
        return preview
    }

    const [readMore, setReadMore] = useState(false)
    const [lastClicked, setLastClicked] = useState()
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetchPosts();
    }, []);

    const expand = (posts, id) => {
        setReadMore(true)
        posts[id]['expand'] = true
        let newposts = posts
        setPosts(newposts)
        console.log(posts)
        setLastClicked(posts[id])
    };

    const shrink = (posts, id) => {
        setReadMore(false)
        posts[id]['expand'] = false
        let newposts = posts
        setPosts(newposts)
        console.log(posts)
        setLastClicked(posts[id])
    };



    const fetchPosts = () => {
        axios
            .get('https://www.googleapis.com/blogger/v3/blogs/6835549372255884484/posts?key=AIzaSyCgmIgM0Ld_eI6FdUNxqDT_HHOGkh8MH-M&fbclid=IwAR35jRH4P8wmjbiNsilxV1rnWwdrjgJPEE9hJVSx85IB6DGx8BEJXVqhim0')
            .then((res) => {
                setPosts(res.data.items);
                handleResponse(posts)
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div>
            <div className='subjectheader'>Recent Posts</div>
            <div className='item-container'>
                {posts.map((post) => {
                    if (post.expand === true) {
                        return (
                            <div className='card' key={post.id}>


                                <h1> {post.title} </h1>
                                <div className="blogPost" dangerouslySetInnerHTML={{ __html: post.content }} />
                                <div className='sec'><button onClick={() => shrink(posts, posts.indexOf(post))}>Close</button></div>
                            </div>
                        )
                    } else {
                        return (
                            <div className='cardSmall' key={post.id}>
                                <div className='left'> <img src={handleResponse(post)} alt='image' /><br /> </div>
                                <div className='right'>
                                    <h1>{post.title}</h1>

                                    <p> {prevPara(post)} </p>

                                    <div className='sec'><button onClick={() => expand(posts, posts.indexOf(post))}>Read More</button></div>
                                </div>




                            </div>
                        )
                    }

                })}
            </div>
        </div >

    );
};
export default FeaturedPosts;

// Fd5_Hc@h //