import React from 'react'
import { Link } from 'react-router-dom'
export default function ProjectCard({ thumbnail, projectTitle, projectDescription, link }) {
    return (
        <>

            <Link to={'/projects/' + link} className="project-thumbnail" style={{
                background: `url('${thumbnail}')`
            }}>
                <div className="project-desc">
                    <h3>{projectTitle}</h3>
                    <p>{projectDescription}</p>
                </div>
            </Link>
        </>
    )
}
