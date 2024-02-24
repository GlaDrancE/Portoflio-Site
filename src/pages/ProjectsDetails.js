import React, { useEffect, useState } from 'react'
import ProjectSlider, { TestimonialsSwiper } from '../components/Slider'
import SideNav from '../components/SideNav'
import SiteLogo from '../components/SiteLogo'
import { useParams } from 'react-router-dom'
export default function ProjectsDetails() {
    const id = useParams()
    const [projectData, setProjectData] = useState({})
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchData = async () => {
            try {

                let response = await fetch("http://localhost:3001/api/get-project/65a2a56a2f2603ca39688fc7", {
                    method: "GET"
                });

                let data = await response.json()
                setProjectData(data)
            }
            catch (err) {
                console.error(err)
            }
            finally { setLoading(false) }
        }
        fetchData();
    }, [])

    return (
        <div>
            {loading ? (<p className='text-light'>Loading...</p>) : (<>
                <div className="body-container">
                    <SiteLogo />
                    <div className="project-images">
                        <h3 className="project-headings">Tiles: </h3>
                        <ProjectSlider thumbnail={projectData.project.images} />
                    </div>
                    <div className="project-desc-section">
                        <div className="d-flex my-3 justify-content-center">
                            <div className="project-headings h3 mx-3" style={{ color: 'var(--secondary-color)' }}>
                                {projectData.project.name}
                            </div>
                        </div>
                        <h3 className="project-headings">Details: </h3>
                        <div className="project-description">
                            <div className="project-details">
                                <div>{projectData.project.description}</div>
                            </div>
                            <div className="order-details">
                                <div className="inner-order-details">

                                    <div className="name-percentage">
                                        <p>Front End: </p>
                                        {projectData.project.technologies.frontEnd.join(', ')}
                                    </div>
                                    <div className="name-percentage">
                                        <p>Back End: </p>
                                        {projectData.project.technologies.backEnd.join(', ')}
                                    </div>
                                    <div className="name-percentage">
                                        <p>Database: </p>
                                        {projectData.project.technologies.database.join(', ')}
                                    </div>
                                    <div className="name-percentage">
                                        <p>Frameworks: </p>
                                        {projectData.project.technologies.frameworks.join(', ')}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonials-section section-heading">
                        <h2>Client Reviews</h2>
                        <div className="testimonials-block">
                            <TestimonialsSwiper />
                        </div>
                    </div>
                </div>
                <SideNav />
            </>)}
        </div>
    )
}
