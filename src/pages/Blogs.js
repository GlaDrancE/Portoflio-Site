import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SideNav from '../components/SideNav'
import BlogCard from '../components/BlogCard';
import SiteLogo from '../components/SiteLogo';
export default function Blogs() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchBlogData = async () => {

            let response = await fetch("http://localhost:3001/api/get-blogs", {
                method: "GET"
            });

            let bData = await response.json();
            setData(bData);
        }
        fetchBlogData();
    }, [])

    console.log(data)

    return (
        <>
            <div className="body-container blog-body-container">
                <SiteLogo />
                <section id="blogs-list">
                    {data.map(blogdata => (
                        <Link to={'/blogs/' + blogdata._id}>
                            <BlogCard key={blogdata._id} blogData={blogdata} />
                        </Link>
                    ))}
                </section>
            </div>
            <SideNav />
        </>
    )
}
