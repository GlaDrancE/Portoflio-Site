import React from 'react'

export default function EducationCard({ data }) {
    return (
        <div className="education-card">
            <h3 className='edu-card-heading'>{data[0].heading}</h3>
            <p className='my-3'>{data[0].institution}</p>
            <p>{data[0].address}</p>
        </div>
    )
}
