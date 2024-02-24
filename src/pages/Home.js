import React, { Component } from 'react'
import ProfileBlock from '../components/ProfileBlock';
import SideNav from '../components/SideNav';
import { Link } from 'react-router-dom'
// Importing images of projects
import anime_website from '../images/projects/anime-website.png'
import ecom from '../images/projects/ecom.png'
import helpingNotes from '../images/projects/helpingnotes.png'
import homePatient from '../images/projects/homepatient.png'
import medcom from '../images/projects/medcom.png'
import yoursalon from '../images/projects/yoursalon.png'

var projectDetails = [
    { src: anime_website, name: 'Anime Website template', date: '15-03-2020' },
    { src: ecom, name: 'Ecommerce website template', date: '15-03-2020' },
    { src: helpingNotes, name: 'Helping notes application', date: '15-03-2020' },
    { src: homePatient, name: 'Home Patient service', date: '15-03-2020' },
    { src: medcom, name: 'Medicom medical template', date: '15-03-2020' },
    { src: yoursalon, name: 'YourSalon Template', date: '15-03-2020' }
]
export default function Home() {

    // Setting skill bar width
    var bar = document.querySelectorAll('.bar');
    for (let i = 0; i < bar.length; i++) {
        const element = bar[i];
        element.style.setProperty("--skillLevel", element.getAttribute('data') + '%')
    };

    return (
        <>
            <ProfileBlock />
            <main className="body-container" style={{ width: 'calc(100% - 320px - 115px)', left: "320px" }}>
                <div className="welcome-container">
                    <h1 className="text-uppercase">READY TO BOOK AN ORDER</h1>
                    <h3> <span></span> <span> Let's work together!</span></h3>
                    <Link to="/contact">Contact Me</Link>
                </div>
                <div className="whoamI-section section-heading">
                    <h4 className="text-uppercase">Who Am I?</h4>
                    <p>As a web developer with expertise in HTML, CSS, and JavaScript, I offer top-notch web services to
                        clients
                        looking for high-quality, user-friendly, and visually appealing websites. I believe in providing my
                        clients with the best experience possible, which is why I offer a free trial before starting any
                        project. This allows clients to test my skills and see if my services are the right fit for their
                        needs.
                        Whether you're looking to create a simple website or a complex, dynamic one, I have the technical
                        know-how and creative vision to bring your ideas to life. Choose me for your next web development
                        project and experience the best value for your money on Fiverr.
                    </p>
                </div>
                <div className="service-section section-heading">
                    <h4>Services:</h4>
                    <div className="services-blocks">
                        <div className="service-card">
                            <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 256 256" id="code"><rect fill="none"></rect><polyline fill="none" stroke="#000" points="64 88 16 128 64 168"></polyline><polyline fill="none" stroke="#000" points="192 88 240 128 192 168"></polyline><line x1="160" x2="96" y1="40" y2="216" fill="none" stroke="#000"  ></line></svg>
                            <h3>WEB DEVELOPMENT</h3>
                        </div>
                        <div className="service-card">
                            <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} id="webpage"><path fill="#373449" d="M1 3h30c.553 0 1 .485 1 1.084v23.832c0 .6-.447 1.084-1 1.084H1c-.553 0-1-.485-1-1.084V4.084C0 3.486.447 3 1 3z"></path><path fill="#f7f7f8" d="M1.938 7h28.125c.518 0 .938.392.938.875v19.25c0 .483-.42.875-.938.875H1.938C1.42 28 1 27.608 1 27.125V7.875C1 7.392 1.42 7 1.938 7z"></path><path fill="#ef4c45" d="M30 5a1 1 0 1 1-2 0 1 1 0 1 1 2 0z"></path><path fill="#eff0f2" d="M27 5a1 1 0 1 1-2 0 1 1 0 1 1 2 0zm-3 0a1 1 0 1 1-2 0 1 1 0 1 1 2 0z"></path><path fill="#3bc689" d="M3.038 8.992h12v12h-12z"></path><path fill="#216d55" d="M17.038 8.992h11.968v1H17.038z"></path><path fill="#bdc1cb" d="M17.038 10.992h12v1h-12zM17.038 14.992h12v1h-12zM17.038 12.992h12v1h-12z"></path><path fill="#216d55" d="M8.656 14.137 4.163 19.15h.031a.484.484 0 0 0-.156.344.5.5 0 0 0 .5.5H13.538a.5.5 0 0 0 .5-.5.484.484 0 0 0-.156-.344h.031L9.404 14.12c-.261-.262-.586-.145-.748.017z"></path><path fill="#f7f7f8" d="M6.983 11.984a.983.983 0 1 1-1.966 0 .983.983 0 0 1 1.966 0z"></path><path fill="#216d55" d="m12.656 15.164-4.33 4.831c1.862 0 3.42.01 5.712 0v-4l-.681-.807c-.262-.263-.539-.185-.701-.02z"></path><path fill="#bdc1cb" d="M17.038 16.992h12v1h-12zM17.038 18.992h6.968v1h-6.968zM3 22.992h26v1H3zM3 24.992h26v1H3z"></path></svg>
                            <h3>WEB DESIGNING</h3>
                        </div>
                        <div className="service-card">
                            <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} id="settings">
                                <path style={{ isolation: 'auto', mixBlendMode: 'normal' }} fill="#60c5b8" d="M8.923 1034.208a.288.288 0 0 0-.288.289v1.616a6.346 6.346 0 0 0-1.905.785l-1.14-1.14a.288.288 0 0 0-.408 0l-1.633 1.632a.288.288 0 0 0 0 .408l1.143 1.143a6.346 6.346 0 0 0-.789 1.902H2.288a.288.288 0 0 0-.288.288v2.308c0 .16.129.289.288.289h1.616a6.346 6.346 0 0 0 .786 1.904l-1.14 1.14a.288.288 0 0 0 0 .408l1.632 1.633a.288.288 0 0 0 .408 0l1.143-1.143a6.346 6.346 0 0 0 1.902.79v1.614c0 .16.128.288.288.288h2.308c.16 0 .288-.128.288-.288v-1.616a6.346 6.346 0 0 0 1.905-.785l1.14 1.14a.288.288 0 0 0 .408 0l1.632-1.633a.288.288 0 0 0 0-.408l-1.142-1.142a6.346 6.346 0 0 0 .789-1.902h1.614c.16 0 .289-.13.289-.289v-2.307a.288.288 0 0 0-.289-.289H16.25a6.346 6.346 0 0 0-.786-1.904l1.14-1.14a.288.288 0 0 0 0-.409l-1.632-1.632a.288.288 0 0 0-.408 0l-1.143 1.142a6.346 6.346 0 0 0-1.902-.789v-1.614a.288.288 0 0 0-.288-.289H8.923zm1.154 4.039a4.038 4.038 0 0 1 4.038 4.038 4.038 4.038 0 0 1-4.038 4.039 4.038 4.038 0 0 1-4.039-4.039 4.038 4.038 0 0 1 4.039-4.038zm10.603-5.56a.182.182 0 0 0-.13.224l.265.988a4.02 4.02 0 0 0-1.036.793l-.884-.51a.18.18 0 0 0-.25.066l-.731 1.267a.182.182 0 0 0 .067.25l.886.511a4.02 4.02 0 0 0-.17 1.293l-.988.265a.182.182 0 0 0-.13.223l.379 1.412a.182.182 0 0 0 .223.13l.989-.266a4.02 4.02 0 0 0 .793 1.037l-.511.884a.182.182 0 0 0 .067.25l1.266.73c.088.052.199.02.25-.066l.511-.886a4.02 4.02 0 0 0 1.293.17l.265.988a.182.182 0 0 0 .224.13l1.411-.379a.182.182 0 0 0 .13-.224l-.265-.988a4.02 4.02 0 0 0 1.036-.793l.885.51a.182.182 0 0 0 .25-.066l.73-1.267a.182.182 0 0 0-.067-.25l-.886-.51a4.02 4.02 0 0 0 .17-1.294l.989-.264a.182.182 0 0 0 .129-.224l-.378-1.412a.182.182 0 0 0-.224-.13l-.989.266a4.02 4.02 0 0 0-.792-1.036l.51-.885a.182.182 0 0 0-.066-.25l-1.267-.73a.18.18 0 0 0-.25.066l-.511.887a4.02 4.02 0 0 0-1.293-.171l-.265-.988a.182.182 0 0 0-.223-.13l-1.412.38zm1.368 2.282a2.558 2.558 0 0 1 3.132 1.808 2.558 2.558 0 0 1-1.808 3.133 2.558 2.558 0 0 1-3.133-1.809 2.558 2.558 0 0 1 1.809-3.132zm-7.433-12.607a.212.212 0 0 0-.211.212v1.185a4.654 4.654 0 0 0-1.397.576l-.836-.837a.21.21 0 0 0-.299 0l-1.197 1.198a.21.21 0 0 0 0 .299l.838.838a4.654 4.654 0 0 0-.579 1.394H9.75a.21.21 0 0 0-.212.212v1.692c0 .118.095.212.212.212h1.185a4.654 4.654 0 0 0 .576 1.396l-.836.837a.211.211 0 0 0 0 .299l1.197 1.197a.21.21 0 0 0 .3 0l.837-.838a4.654 4.654 0 0 0 1.395.579v1.184c0 .117.094.211.211.211h1.693a.212.212 0 0 0 .211-.211v-1.185a4.654 4.654 0 0 0 1.397-.576l.836.836a.21.21 0 0 0 .3 0l1.196-1.197a.211.211 0 0 0 0-.3l-.837-.837a4.654 4.654 0 0 0 .578-1.395h1.184a.212.212 0 0 0 .212-.212v-1.692a.211.211 0 0 0-.212-.212h-1.185a4.654 4.654 0 0 0-.576-1.396l.836-.836a.21.21 0 0 0 0-.3l-1.197-1.197a.21.21 0 0 0-.299 0l-.838.838a4.654 4.654 0 0 0-1.395-.578v-1.184a.211.211 0 0 0-.211-.212h-1.693zm.847 2.962a2.962 2.962 0 0 1 2.961 2.961 2.962 2.962 0 0 1-2.961 2.962 2.962 2.962 0 0 1-2.962-2.962 2.962 2.962 0 0 1 2.962-2.961z" color="#000" overflow="visible" transform="translate(1.077 -1020.362)"></path>
                            </svg>
                            <h3>WEB MODIFICATIONS</h3>
                        </div>
                    </div>
                </div>
                <div className="projects-section section-heading">
                    <div className="project-section-heading d-flex justify-content-between my-3">
                        <h4>Projects:</h4>
                        <Link to='/projects' className='more-projects'>More <svg style={{ margin: '0 .4rem' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path fill='#000' width={32} d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" data-name="Right" /></svg></Link>
                    </div>
                    <div className="projects-blocks">
                        {projectDetails.map(project => (
                            <div className="project-card" key={project.name}>
                                <div className="project-img">
                                    <img src={project.src} width='100%' height='100%' alt="" />
                                </div>

                                <p className='m-0'>{project.name}</p>
                                <p className='text-small'>{project.date}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="testimonials-section section-heading">
                    <h4>Testimonials:</h4>
                    <div className="testimonials-block">

                        <div className="swiper mySwiper">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="comment-content">
                                        <div className="name-ratings">
                                            <div className="customer-name">diegort99</div>
                                            <div className="ratings">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                        </div>
                                        <p className="comment">
                                            Friendly and attentive seller and cheap and quality service, I sent him some
                                            photos of how I
                                            wanted
                                            my website to look and he gave me some templates that were exactly what I asked
                                            for. He placed
                                            the
                                            order on time and in great detail.
                                        </p>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="comment-content">
                                        <div className="name-ratings">
                                            <div className="customer-name">diegort99</div>
                                            <div className="ratings">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                        </div>
                                        <p className="comment">
                                            Friendly and attentive seller and cheap and quality service, I sent him some
                                            photos of how I
                                            wanted
                                            my website to look and he gave me some templates that were exactly what I asked
                                            for. He placed
                                            the
                                            order on time and in great detail.
                                        </p>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="comment-content">
                                        <div className="name-ratings">
                                            <div className="customer-name">diegort99</div>
                                            <div className="ratings">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                        </div>
                                        <p className="comment">
                                            Friendly and attentive seller and cheap and quality service, I sent him some
                                            photos of how I
                                            wanted
                                            my website to look and he gave me some templates that were exactly what I asked
                                            for. He placed
                                            the
                                            order on time and in great detail.
                                        </p>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="comment-content">
                                        <div className="name-ratings">
                                            <div className="customer-name">diegort99</div>
                                            <div className="ratings">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                        </div>
                                        <p className="comment">
                                            Friendly and attentive seller and cheap and quality service, I sent him some
                                            photos of how I
                                            wanted
                                            my website to look and he gave me some templates that were exactly what I asked
                                            for. He placed
                                            the
                                            order on time and in great detail.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- <div className="swiper-button-next"></div>
                            <div className="swiper-button-prev"></div> --> */}
                            <div className="swiper-pagination"></div>
                        </div>
                    </div>
                    {/* <!-- <div className="comment-change-button">
                        <button className="comment-active"></button>
                        <button></button>
                        <button></button>
                        <button></button>
                    </div> --> */}
                </div>

                <footer>
                    Designed And Develop By: Ayush Ramteke
                </footer>
            </main>
            <SideNav />
        </>
    )
}