import React from 'react'

export default function BlogCard({ blogData }) {
    return (
        <>
            <div className="card mb-3 blog-card">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={`data:${blogData.blogThumb.contentType};base64,${blogData.blogThumb.data.toString('base64')}`} className="img-fluid rounded-start" style={{ objectFit: 'cover', height: '100%' }} alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h3 className="card-title">{blogData.blogTitle}
                            </h3>
                            <p className="author">BY - <a href="#">GLADCODE</a>
                                <p className="publish-date">{blogData.publishDate}</p>
                            </p>
                            <p className="card-text">{blogData.blogContent.slice(0, 450)}...</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
