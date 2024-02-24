import React, { useRef, useEffect, useState } from 'react'
const monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
export default function UploadBlog() {
    const blogTitle = useRef(null);
    const [blogThumb, setBlogThumb] = useState(null);
    const blogContent = useRef(null);
    const d = new Date();
    let date = d.getDate();
    let month = monthName[d.getMonth()];
    let year = d.getFullYear();
    let publishDate = month + ', ' + date + ' ' + year;


    const handleFileChange = (e) => {
        let file = e.target.files[0];
        setBlogThumb(file)
    }
    const fetchData = async () => {
        console.log(blogThumb)
        const requestData = new FormData();
        requestData.append('blog_title', blogTitle.current.value);
        requestData.append('blog_thumbnail', blogThumb);
        requestData.append('blog_content', blogContent.current.value);
        requestData.append('publish_date', publishDate);
        const requestOptions = {
            method: 'POST', // HTTP methods
            body: requestData
        };
        // Make the fetch request
        const response = await fetch('http://localhost:3001/api/blog', requestOptions)
        const data = await response.json();
        console.log(data);
    }
    return (
        <>
            <form action="/api/blog" method="post" encType="multipart/form-data">
                <div className="mb-3">
                    <label htmlFor="blogTitle" className="form-label">Email address</label>
                    <input type="text" ref={blogTitle} className="form-control" id="blogTitle" name='blog_title' placeholder="Enter title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="blogThumb" className="form-label">Email address</label>
                    <input type="file" name='blog_thumbnail' accept='image/*' className="form-control" id="blogThumb" onChange={handleFileChange} placeholder="Enter Image" />
                </div>
                <div className="mb-3">
                    <label htmlFor="blogContent" className="form-label">Example textarea</label>
                    <textarea className="form-control" ref={blogContent} id="blogContent" rows="3"></textarea>
                </div>
                <button type='button' className="btn btn-secondary" onClick={fetchData}>Submit Blog</button>

            </form>
        </>
    )
}
