import './Footer.css'
import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="footer">

                <div className="body">

                    <div className="top">
                        <div className="wrapper">

                            <div className="box brand">
                                <img src="https://designarc.biz/demos/cleanex/assets/images/footer-logo.png" alt="" />
                                <div className="logos">
                                    <i className="ri-instagram-line"></i>
                                    <i className="ri-instagram-line"></i>
                                    <i className="ri-instagram-line"></i>
                                    <i className="ri-instagram-line"></i>
                                </div>

                            </div>

                            <div className="box links">
                                <h2>Useful Links</h2>
                                <a href="">Home</a>
                                <a href="">About Us</a>
                                <a href="">Schedule Appointment</a>
                                <a href="">Testimonial</a>
                                <a href="">Contact Us</a>
                            </div>

                        </div>
                        <div className="box wrapper">

                            <div className="box links">
                                <h2>Services</h2>
                                <a href="">Home Cleaning</a>
                                <a href="">Office Cleaning</a>
                                <a href="">Window Cleaning</a>
                                <a href="">Commerial Cleaning</a>
                                <a href="">Residential Cleaning</a>
                            </div>

                            <div className="box address">
                                <h2>Office Address</h2>
                                <p>
                                    54B, Tailstoi Town 5238 ST, <br />
                                    La city, IA 522364
                                </p>
                                <p>
                                    Email us :
                                    contact@example.com
                                </p>
                                <h2>+ 1800 456 7890</h2>
                            </div>

                        </div>
                    </div>

                    <div className="bottom">
                        <p>© Copyright Cleanex 2023 . All right reserved.</p>
                        <p>Created By DesignArc</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer
