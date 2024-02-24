import React, { useState, useEffect } from 'react'
import ProjectCard from '../components/ProjectCard';
import SideNav from '../components/SideNav';
import SiteLogo from '../components/SiteLogo';
export default function Projects() {
    const [projectData, setProjectData] = useState([])
    useEffect(() => {
        const fetchData = async () => {

            const req = await fetch('http://localhost:3001/api/get-project')
            const data = await req.json();
            setProjectData(data)
        }
        fetchData();
    }, [])
    return (
        <>
            <div className="body-container">
                <SiteLogo />
                <div className="project-container">
                    {projectData.map(project => (
                        <ProjectCard key={project._id} thumbnail={require(`../images/projects-images/${project.project.images[0]}`)} projectTitle={project.project.name} projectDescription={project.project.description} link={project._id} />
                    ))}
                </div>
            </div>
            <SideNav />
        </>
    )
}
