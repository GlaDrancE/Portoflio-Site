import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import SideNav from '../components/SideNav';
import SiteLogo from '../components/SiteLogo';
import logo from '../images/logo.png'

export default function BlogContent() {
    const id = useParams();
    const [blogData, setBlogData] = useState([])
    useEffect(() => {
        const fetchBlogData = async () => {
            const res = await fetch('http://localhost:3001/api/blog/' + id.id)
            const data = await res.json();
            setBlogData(data[0])
        }
        fetchBlogData();
    })
    // console.log(blogData);
    return (
        <>
            <div className="body-container blog-body-container">
                <SiteLogo />
                <section className="blog-body">
                    <div className="home-link">
                        <Link href="/">Home</Link>
                        <hr className="border border-light" />
                    </div>
                    <div className="blog-content-body">
                        <header className="blog-header">
                            <h1 className="blog-heading">
                                {blogData.blogTitle}
                            </h1>
                            <div className="author-details">
                                <div className="author-img">
                                    <img src={logo} alt="" width="32px" height="32px" />
                                </div>
                                By
                                <div className="author-name">
                                    GladCode
                                </div>
                                <div className="publish-date">
                                    {blogData.publishDate}
                                </div>
                            </div>
                        </header>
                        <p className="blog-content">
                            {blogData.blogContent}
                        </p>
                        <hr className="border border-light" />
                    </div>
                    {/* <div className="blog-recommendation-container">
                        <h3>You Might Also Like: </h3>
                        <div className="blog-recommendation">
                            <a href="#" className="br-card">
                                <div >
                                    <img className="d-block my-4" style="object-fit: contain; width: 100% ; height: 100%;"
                                        src={`data:${blogData.blogThumb.contentType};base64, ${blogData.blogThumb.data.toString('base64')}`} alt="" />
                                </div>
                                <h4>Blog Heading</h4>
                                <div className="publish-date">
                                    20 Nov 2023
                                </div>
                            </a>
                            <a href="#" className="br-card">
                                <div >
                                    <img className="d-block my-4" style="object-fit: contain; width: 100% ; height: 100%;"
                                        src={`data:${blogData.blogThumb.contentType};base64, ${blogData.blogThumb.data.toString('base64')}`} alt="" />
                                </div>
                                <h4>Blog Heading</h4>
                                <div className="publish-date">
                                    20 Nov 2023
                                </div>
                            </a>
                            <a href="#" className="br-card">
                                <div >
                                    <img className="d-block my-4" style="object-fit: contain; width: 100% ; height: 100%;"
                                        src={`data:${blogData.blogThumb.contentType};base64, ${blogData.blogThumb.data.toString('base64')}`} alt="" />
                                </div>
                                <h4>Blog Heading</h4>
                                <div className="publish-date">
                                    20 Nov 2023
                                </div>
                            </a>
                        </div>
                    </div> */}
                </section>
            </div>
            <SideNav />
        </>
    )
}
