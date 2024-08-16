import React from "react";
import Img3 from './assets/Img3.jpg';
import Img4 from './assets/Img4.jpg';
import vid1 from './assets/vid1.mp4';
import vid2 from './assets/vid2.mp4';
import vid3 from './assets/vid3.mp4';
import vid4 from './assets/vid4.mp4';
import { FaLongArrowAltRight } from "react-icons/fa";

function Content(){
    return(
        <div className="content">
            <div className="content1">
                <div className="left">
                    <h2>Primium</h2>
                    <h3>Exam crazy: NEET scandals are<br /> part of a global trend</h3>
                    <p>PHILIP G. ALTBAH,ELDHO MATHEWS</p>
                    <hr />
                    <h3>Impact of institutional stigma<br /> on Dalit business owners’ <br />earning capacity</h3>
                    <p>REBECCA ROSE VARGHESE</p>
                    <hr />
                    <h3>Melting polar ice due to climate <br />change is making earth’s<br /> days longer</h3>
                    <p>ROHINI SUBRAHMANYAM</p>
                    <hr />
                    <h3>Does India have laws against<br /> invasive species from ballast <br />water?</h3>
                    <p>M. KALYANARAMAN</p>
                </div>
                <div className="center">
                    <h2><small className="blink"></small>LIVE</h2>
                    <h1>President’s Independence Day <br />eve speech: Droupadi Murmu <br />addresses the nation</h1>
                    <h3>The government announced service medals for 1,037 <br />police personnel of various central and State forces</h3>
                    <p>THE HINDU BUREAU</p>
                    <img src={Img3} alt="img3"/>
                </div>
                <div className="right">
                    <h2>Latest News</h2>
                    <h3>Parvathaneni Harish appointed as India’s<br /> Permanent Representative to<br /> U.N.</h3>
                    <img src={Img4} alt="img4" />
                    <hr />
                    <h3>Army captain killed, civilian injured <br />in encounter with militants<br /> in J&K’s Doda</h3>
                    <p>THE HINDU BUREAU</p>
                    <hr />
                    <h3>CBI team reaches Kolkata, begins probe <br />into doctor’s rape, murder case</h3>
                    <hr />
                    <h3>Kerala on high alert as intense rain <br />forecast across State</h3>
                    <hr />
                    <h3>Watch: The Olympics and its financial <br />distress</h3>
                </div>
            </div>
            <div className="content2">
                <div className="video1">
                    <h2><small>TH</small>Top Videos</h2><br />
                    <video width="100%" height="100%" controls>
                        <source src={vid1} type="video/mp4"/>
                    </video>
                    <h3>VIEW ALL VIDEOS<span> <FaLongArrowAltRight /></span></h3>
                </div>
                <div className="video2">
                    <video width="80%" height="40%" controls>
                        <source src={vid2} type="video/mp4"/>
                    </video><br />
                    <video width="80%" height="40%" controls>
                        <source src={vid3} type="video/mp4"/>
                    </video><br />
                    <video width="80%" height="40%" controls>
                        <source src={vid4} type="video/mp4"/>
                    </video>
                </div>
            </div>
        </div>
    )
}
export default Content;