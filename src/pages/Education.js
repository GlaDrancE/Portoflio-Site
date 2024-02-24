import React from 'react'
import EducationCard from '../components/EducationCard'
import SideNav from '../components/SideNav'
import ProfileBlock from '../components/ProfileBlock'
export default function Education() {
    const education_data = [
        { heading: 'SSC (10th Standard)', institution: 'Blue Diamond English School', address: '53M2+P2G, Gorewada Rd Gokul Housing Society, Borgaon, Nagpur, Maharashtra 440013' }
    ]
    return (
        <>
            <ProfileBlock />
            <main className="body-container" style={{ width: 'calc(100% - 320px - 100px)', left: "320px" }}>
                <div className="education-container">
                    <div className="education">
                        <h2>Education</h2>
                        <EducationCard data={education_data} />
                        <EducationCard data={education_data} />
                        <EducationCard data={education_data} />
                    </div>
                    <div className='edu-spots-container'>
                        <div className="edu-spots"></div>
                        <div className="edu-spots"></div>
                        <div className="edu-spots"></div>
                    </div>
                    <div className="work-exp">
                        <h2>Work Experience</h2>
                        <EducationCard data={education_data} />
                        <EducationCard data={education_data} />
                        <EducationCard data={education_data} />
                    </div>
                </div>
            </main>
            <SideNav />
        </>
    )
}
