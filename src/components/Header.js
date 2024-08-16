import React from "react";

function Header(){
    return(
        <div className="header">
            <div className="title">
                <h1>VIEWS <span>TODAY</span></h1>
            </div>
            <div className="menu">
                <ul>
                    <li><a href="#">India</a></li>
                    <li><a href="#">World</a></li>
                    <li><a href="#">Movie</a></li>
                    <li><a href="#">Technology</a></li>
                    <li><a href="#">e-paper</a></li>
                </ul>
            </div>
            <div className="search">
                <div className="search1">
                    <ul>
                        <li><a href="#">Science /</a></li>
                        <li><a href="#">Data /</a></li>
                        <li><a href="#">Health</a></li>
                    </ul>
                    <input type="text" placeholder="Search"/>
                </div>
                <div className="btn">
                    <a href="#">FREE TRAIL</a>
                    <button className="btn1">Subscribe</button>
                    <button className="btn2">Login</button>
                </div>
            </div>
        </div>
    )
}
export default Header;