import React, { useEffect, useState } from 'react'

export default function Testimonials({ testimonial }) {
    const fullRating = (range) => {
        const comp = []
        for (let i = 0; i < range; i++) {
            comp.push(<i className={"fa-solid fa-star"}></i>)

        }
        return <>
            {comp}
        </>
    }
    const halfRating = (range) => {
        const comp = []
        for (let i = 0; i < range - 1; i++) {
            comp.push(<i className={"fa-solid fa-star"}></i>)
        }
        return <>
            {comp}
            <i className={"fa-solid fa-star-half"}></i>
        </>
    }
    console.log(testimonial);
    return (
        <>
            <div className="comment-content">
                <div className="name-ratings">
                    <div className="customer-name">{testimonial.customer_name}</div>
                    <div className="ratings">
                        {testimonial.ratings % 1 !== 0 ? (halfRating(testimonial.ratings)) : (fullRating(testimonial.ratings))}
                    </div>
                </div>
                <p className="comment">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, temporibus voluptatem ipsa eaque assumenda, voluptatum ea dolorum, blanditiis error eos aspernatur minus perferendis.
                </p>
            </div>
        </>
    )
}
