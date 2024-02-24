import React from 'react'
import ProfileBlock from '../components/ProfileBlock'
import SideNav from '../components/SideNav'
export default function Contact() {
    return (
        <>
            <main className="body-container">

                <div className="contact-details">
                    <div className="location contact-details-blocks">
                        <div>
                            <p>Country:</p>
                            <p>India</p>
                        </div>
                        <div>
                            <p>City:</p>
                            <p>Nagpur</p>
                        </div>
                        <div>
                            <p>Street:</p>
                            <p>KT Nagar, Katol Road</p>
                        </div>
                    </div>
                    <div className="phone contact-details-blocks">
                        <div>
                            <p>Email:</p>
                            <p>ayushr1606@gmail.com</p>
                        </div>
                        <div>
                            <p>Whatsapp:</p>
                            <p>+91 9049606217</p>
                        </div>
                        <div>
                            <p>Phone:</p>
                            <p>+91 9359339507</p>
                        </div>
                    </div>
                    <div className="social-media contact-details-blocks">
                        <div>
                            <p>Telegram:</p>
                            <p>@GlaDrancE</p>
                        </div>
                        <div>
                            <p>Instagram:</p>
                            <p>/Glad__Code</p>
                        </div>
                        <div>
                            <p>Facebook:</p>
                            <p>/Gladrance</p>
                        </div>
                    </div>
                </div>
                <form action="#" id="contact-form">
                    <h1>Get In Touch</h1>
                    <input type="text" name="name" id="name" placeholder="Name" required />
                    <input type="email" name="email" id="email" placeholder="Email" required />
                    <input type="number" name="phone" id="phone" placeholder="Phone Number" required />
                    <textarea name="message" id="message" cols="30" rows="10" placeholder="Message" required></textarea>
                    <button type="submit">Send</button>
                </form>
            </main>
            <SideNav />
        </>
    )
}
