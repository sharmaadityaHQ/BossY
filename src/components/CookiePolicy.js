import React from 'react'
import '../assets/scss/cookiepolicy.scss'
import toggleon from '../assets/img/toggleon.svg'
import toggleoff from '../assets/img/toggleoff.svg'

export default function CookiePolicy() {
    return(
        <div>
            <div className='container'>
                <div className="section1">
                    <h1>Cookie policy</h1>
                    <br/>
                    <p>We reserve the right to change this policy when necessary. Any changes to this policy will be posted here. Your continued use of our websites after changes have been posted will constitute your agreement to any such changes.</p>
                </div>

                <hr></hr>

                <div className="section2">
                    <h4>Cookie preferences</h4>
                    <br></br>
                     <p>Some essential features on our sites just won’t work without cookies. And having other cookies switched off can seriously affect the way you’ll be able to enjoy our services.</p>
                     <p>Please check your cookie settings below and turn on any cookies you're happy with.</p>
                     <p>"Strictly necessary" cookies can't be turned off. But "Analytics/Performance" cookies can be turned on or off below. You can learn more about cookies and what they do in the link below.</p>
                     <div className="cookiecontent">
                         <div className="cookieitem">
                             <div className="cookie-icon">
                                <img className="togglecontainer" src={toggleon} alt='' />
                             </div>
                            <div className="cookie-description">
                                <h5>Strictly necessary cookies</h5>
                                <p>These cookies are essential so that you can move around the website and use its features. Without these cookies services you have asked for cannot be provided.</p>
                            </div>  
                         </div>
                         <div className="cookieitem">
                             <div className="cookie-icon">
                                <img className="togglecontainer" src={toggleoff} alt='' />
                             </div>
                            <div className="cookie-description">
                                <h5>Analytics / Performance</h5>
                                <p>These cookies allow us to collect data which helps us to better understand how the site its being used.</p>
                            </div>
                            
                         </div> 
                     </div> 
                </div>

                <hr></hr>

                <div className="section3">
                    <h4>Our use of cookies</h4>
                    <br></br>
                    <p>Like many websites, the EOS design system uses 'cookies'. A cookie is a small file of letters and numbers that is placed on your computer's hard drive when you visit certain websites. We may use cookies to tell us, for example, whether you have visited us before or if you are a new visitor and to help us identify site features in which you may have the greatest interest. Cookies may enhance your online experience by saving your preferences while you are visiting a particular page.</p>
                    <br></br>
                    <p>The cookies we use are 'analytics cookies' which monitor how visitors use our websites and give us a better understanding of what content visitors are spending most time reading so we can continue improving the user experience. The types of cookies used on our website are as follows:</p>
                    <div className="cookies-table">
                        <div className="cookies-table-title">
                            <span>Cookie type</span>
                            <span>Purpose</span>
                            <span>Name</span>
                        </div>
                        <div className="cookies-table-content">
                            <div>
                                <p>Analytics / Performance</p>
                            </div>
                            <div>
                                <p>These cookies are used only to help us to improve our websites over time, by giving us insights into how the various sections of the websites are used and how users interact with the websites, for example which pages visitors go to most often and whether they get error messages from web pages. The information collected is anonymous and statistical.</p>
                            </div>
                            <div>
                            <span>AID</span>
                                <span>APISID</span>
                                <span>CAL</span>
                                <span>GAPS</span>
                                <span>HSID</span>
                                <span>NID</span>
                                <span>OGP</span>
                                <span>OGPC</span>
                                <span>PREF</span>
                                <span>SAPISID</span>
                                <span>SID</span>
                                <span>SNID</span>
                                <span>SSID</span>
                                <span>_utma</span>
                                <span>_utmb</span>
                                <span>_utmt</span>
                                <span>_utmv</span>
                                <span>_utmx</span>
                                <span>_utmxx</span>
                                <span>_utmz</span>
                                <span>_ga</span>
                                <span>_gat</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}