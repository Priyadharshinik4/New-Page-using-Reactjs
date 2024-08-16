import React from "react";
import Img1 from './assets/Img1.jpg';
import Img2 from './assets/Img2.jpg';
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
    return (
        <div className="footer">
            <div className="footer1">
                <div className="title">
                    <h1>VIEWS <span>TODAY</span></h1>
                </div>
                <div className="image">
                    <img src={Img1} alt="Description of Img1"/>
                    <img src={Img2} alt="Description of Img2"/>
                </div>
            </div>
            <div className="footer2">
                <div>
                    <p className="bold underline"><a href="#">Views Today</a></p>
                    <p><a href="#">About Us</a></p>
                    <p><a href="#">Code of Editorial Values</a></p>
                    <p><a href="#">News Archives</a></p>
                    <p><a href="#">Sitemap</a></p>
                    <p><a href="#">RSS Feeds</a></p>
                    <p><a href="#">Authors & Contributors</a></p>
                    <p className="bold"><a href="#">Sci-Tech</a></p>
                    <p><a href="#">Science</a></p>
                    <p><a href="#">Technology</a></p>
                    <p><a href="#">Health</a></p>
                    <p><a href="#">Agriculture</a></p>
                    <p><a href="#">Environment</a></p>
                    <p><a href="#">Gadgets</a></p>
                </div>
                <div>
                    <p className="bold underline"><a href="#">Other Products</a></p>
                    <p><a href="#">RoofandFloor</a></p>
                    <p><a href="#">STEP</a></p>
                    <p><a href="#">Classifieds - Print</a></p>
                    <p><a href="#">Bookstore & Special <br />Publications</a></p>
                    <p className="bold"><a href="#">Opinion</a></p>
                    <p><a href="#">Editorial</a></p>
                    <p><a href="#">Columns</a></p>
                    <p><a href="#">Comment</a></p>
                    <p><a href="#">Cartoon</a></p>
                    <p><a href="#">Letters</a></p>
                    <p><a href="#">Interview</a></p>
                </div>
                <div>
                    <p className="bold underline"><a href="#">Business</a></p>
                    <p><a href="#">Agri-Business</a></p>
                    <p><a href="#">Industry</a></p>
                    <p><a href="#">Economy</a></p>
                    <p><a href="#">Markets</a></p>
                    <p><a href="#">Budget</a></p>
                    <p className="bold"><a href="#">Group News Sites</a></p>
                    <p><a href="#">Business Line</a></p>
                    <p><a href="#">BL on Campus</a></p>
                    <p><a href="#">Sportstar</a></p>
                    <p><a href="#">இந்து தமிழ் திசை</a></p>
                    <p><a href="#">Frontline</a></p>
                    <p><a href="#">Young World Club</a></p>
                </div>
                <div>
                    <p className="bold underline"><a href="#">City</a></p>
                    <p><a href="#">Bengaluru</a></p>
                    <p><a href="#">Chennai</a></p>
                    <p><a href="#">Delhi</a></p>
                    <p><a href="#">Coimbatore</a></p>
                    <p><a href="#">Hyderabad</a></p>
                    <p><a href="#">Kochi</a></p>
                    <p><a href="#">Visakhapatnam</a></p>
                    <p><a href="#">Vijayawada</a></p>
                    <p><a href="#">Tiruchirapalli</a></p>
                    <p><a href="#">Thiruvananthapuram</a></p>
                    <p><a href="#">Mumbai</a></p>
                    <p><a href="#">Mangaluru</a></p>
                    <p><a href="#">Madurai</a></p>
                    <p><a href="#">Kozhikode</a></p>
                    <p><a href="#">Kolkata</a></p>
                </div>
                <div>
                    <p className="bold underline"><a href="#">Sport</a></p>
                    <p><a href="#">Cricket</a></p>
                    <p><a href="#">Football</a></p>
                    <p><a href="#">Hockey</a></p>
                    <p><a href="#">Tennis</a></p>
                    <p><a href="#">Athletics</a></p>
                    <p><a href="#">Other Sport</a></p>
                    <p className="bold"><a href="#">Contact us</a></p>
                    <p><a href="#">Contact us</a></p>
                    <p><a href="#">Social Media</a></p>
                    <p><a href="#">Advertise With Us</a></p>
                </div>
                <div>
                    <p className="bold underline"><a href="#">Popular Sections</a></p>
                    <p><a href="#">Elections</a></p>
                    <p><a href="#">Israeli–Palestinian conflict <br />2023</a></p>
                    <p><a href="#">Latest News</a></p>
                    <p><a href="#">National News</a></p>
                    <p><a href="#">International News</a></p>
                    <p><a href="#">Life & Style</a></p>
                    <p className="bold"><a href="#">Trending on Group sites</a></p>
                    <p><a href="#">Stock Market Live Updates</a></p>
                    <p><a href="#">IND vs SL, 1st ODI </a></p>
                    <p><a href="#">Olympics </a></p>
                    <p><a href="#">Silver Rate Today</a></p>
                    <p><a href="#">Gold Rate Today</a></p>
                </div>
            </div>
            <div className="icons">
                <a href="#"><FaWhatsapp /></a>
                <a href="#"><FaXTwitter /></a>
                <a href="#"><FaFacebook /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaLinkedin /></a>
                <a href="#"><IoLogoYoutube /></a>
                <a href="#"><FaTelegramPlane /></a>
            </div>
            <div className="footer3">
                <p><a href="#">TERMS OF USE /</a></p>
                <p><a href="#">PRIVACY POLICY /</a></p>
            </div>
            <div className="footer4">
                <p>Copyright© 2024, THG PUBLISHING PVT LTD. or its affiliated companies. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;
