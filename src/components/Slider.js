import React, { useRef, useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Testimonials from './Testimonials';
import img from '../images/logo.png'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, FreeMode, Pagination, Navigation } from 'swiper/modules';

export default function ProjectSlider({ thumbnail }) {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                {
                    thumbnail.map(t => (
                        <SwiperSlide><img src={require('../images/projects-images/' + t)} alt="" /></SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    );
}
export function TestimonialsSwiper() {
    const [testimonials, setTestimonials] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            let response = await fetch("http://localhost:3001/api/get-testimonials", {
                method: "GET"
            });

            let data = await response.json();
            setTestimonials(data)
            // console.log(data);
        }
        fetchData();

    }, [])
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                }}
                loop={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >

            </Swiper>
            {
                testimonials.map(t => (
                    <SwiperSlide>
                        <Testimonials testimonial={t} />
                    </SwiperSlide>
                ))
            }
        </>
    )
}