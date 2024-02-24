import React, { Component, useRef, useState, useEffect } from 'react'
import myprofile from '../images/profile.jpg'

export default function ProfileBlock() {
    const profileRef = useRef(null)
    const iconRef = useRef(null);
    const [showProfile, setShowProfile] = useState(false)



    //! close the menu when clicked outside

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (iconRef.current && !iconRef.current.contains(event.target) && profileRef.current && !profileRef.current.contains(event.target)) {
                setShowProfile(false);
            }
        }
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);
    function mobile_profile() {
        setShowProfile(!showProfile)
    }


    var dob = new Date("06/16/2005");
    //calculate month difference from current date in time
    var month_diff = Date.now() - dob.getTime();

    //convert the calculated difference in date format
    var age_dt = new Date(month_diff);

    //extract year from date    
    var year = age_dt.getUTCFullYear();

    //now calculate the age of the user
    var age = Math.abs(year - 1970);

    //display the calculated age
    return (
        <>
            <div id="mobile-profile" ref={iconRef} onClick={mobile_profile}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="profile"><path fill="#200E32" d="M5.88450545,12.7673223 C7.32107647,12.6441193 8.76545208,12.6441193 10.2020231,12.7673223 C10.9876051,12.819974 11.7678606,12.9347129 12.5355802,13.1104786 C14.1961639,13.4448359 15.2799133,14.1047518 15.7343888,15.0726283 C16.0974922,15.8767717 16.08789,16.80158 15.7081691,17.5979063 C15.2449536,18.5657829 14.1612043,19.2256987 12.4744008,19.568855 C11.7092951,19.7410988 10.9319902,19.8528915 10.1495836,19.9032123 C9.2843321,20 8.5501793,20 7.86846599,20 L7.59752865,20 C7.21132744,19.9581349 6.91855939,19.6299512 6.91855939,19.2388971 C6.91855939,18.8478429 7.21132744,18.5196592 7.59752865,18.4777941 L7.59752865,18.4777941 L8.19552997,18.4776566 C8.7948969,18.470645 9.39795098,18.4425986 10.0010051,18.3898053 C10.7124372,18.3432116 11.4194216,18.2432131 12.1160643,18.0906435 C13.3134326,17.8266771 14.0650652,17.4483254 14.3010429,16.9467893 C14.484604,16.5631348 14.484604,16.1161987 14.3010429,15.7325442 C14.0650652,15.2222093 13.3134326,14.8262598 12.1422841,14.5886901 C11.4348379,14.4289038 10.7159053,14.3259265 9.99226515,14.2807293 C8.64034215,14.1575279 7.28012802,14.1575279 5.92820502,14.2807293 C5.21388459,14.3273105 4.50399397,14.4273069 3.80440586,14.5798912 C2.6070376,14.8438575 1.86414489,15.2222093 1.61942729,15.7237453 C1.53272302,15.9142245 1.48799947,16.1213408 1.48832858,16.3308679 C1.48783807,16.5432444 1.53254045,16.7532629 1.61942729,16.9467893 C2.03541113,17.5187562 2.66831687,17.8915039 3.36741014,17.9762581 L3.36741014,17.9762581 L3.46883074,18.003768 C3.69882672,18.0836728 3.87936538,18.2709306 3.94969781,18.5098707 C4.03007773,18.7829451 3.95322349,19.0783682 3.75020277,19.2767179 C3.54718205,19.4750675 3.25156561,19.5435453 2.98285392,19.4544696 C1.85607336,19.2695203 0.86780853,18.5933528 0.282220408,17.6067052 C-0.0940734694,16.8075691 -0.0940734694,15.8805633 0.282220408,15.0814272 C0.745435864,14.087154 1.82918523,13.4448359 3.49850886,13.1016797 C4.28445329,12.9305221 5.08200812,12.8187582 5.88450545,12.7673223 Z M5.96471469,0.407206951 C7.95471011,-0.421671419 10.2447427,0.0383955276 11.7663081,1.57274551 C13.2878734,3.1070955 13.7410933,5.41333076 12.9145002,7.41538679 C12.0879072,9.41744281 10.1444105,10.7207439 7.99082479,10.717191 C5.05464341,10.7123299 2.67695692,8.31466134 2.67695692,5.35866706 L2.67695692,5.35866706 L2.68189526,5.12722783 C2.77053718,3.05238043 4.04579053,1.20648252 5.96471469,0.407206951 Z M7.99082479,1.53114502 C6.98099466,1.52881803 6.01172919,1.93104061 5.29685022,2.6490918 C4.58197126,3.367143 4.18021208,4.34202145 4.18021208,5.35866706 C4.17668538,6.91110569 5.10286315,8.31266199 6.52650415,8.90922336 C7.95014515,9.50578474 9.59058472,9.17974169 10.6822224,8.08325997 C11.77386,6.98677826 12.1014841,5.3360245 11.512191,3.90141287 C10.9228979,2.46680125 9.53286415,1.53114502 7.99082479,1.53114502 Z" transform="translate(4 2)"></path></svg>
            </div>
            <aside ref={profileRef} className={showProfile ? "profile-block showProfileBlock" : "profile-block"}>
                <div className="profile-section">
                    <div className="profile-img">
                        <img src={myprofile} width="120px" height="120px" />
                    </div>
                    <div className="profile-name">Ayush Ramteke</div>
                    <div className="profile-bio">Full stack web developer and Programmer</div>
                    <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 24 24" id="close"><g data-name="Layer 2"><path d="m13.41 12 4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z" data-name="close"></path></g></svg>
                </div>
                <div className="profile-details">
                    <div className="profile-address">
                        <div className="profile-add-opt">
                            <p>Country:</p>
                            <p>India</p>
                        </div>
                        <div className="profile-add-opt">
                            <p>City:</p>
                            <p>Nagpur</p>
                        </div>
                        <div className="profile-add-opt">
                            <p>Age:</p>
                            <p>{age} Years</p>
                        </div>
                    </div>
                    <hr />
                    <div className="profile-languages">
                        <div className="lang">
                            <div className="pie animate" style={{ '--p': '80', '--c': '#FFC700' }}> 80%</div>
                            <p className="lang-name">Hindi</p>
                        </div>
                        <div className="lang">
                            <div className="pie animate" style={{ "--p": '60', '--c': "#FFC700" }}> 60%</div>
                            <p className="lang-name">English</p>
                        </div>
                        <div className="lang">
                            <div className="pie animate" style={{ "--p": '70', '--c': "#FFC700" }}> 70%</div>
                            <p className="lang-name">Marathi</p>
                        </div>
                    </div>
                    <hr />
                    <div className="profile-skills">
                        <h2>Skills:</h2>
                        <div className="skills-bars">
                            <div className="my-skills">
                                <div className="name-percentage">
                                    <p>HTML</p>
                                    <p>80%</p>
                                </div>
                                <div className="skill-bar bar" data="80"></div>
                            </div>
                            <div className="my-skills">
                                <div className="name-percentage">
                                    <p>CSS</p>
                                    <p>70%</p>
                                </div>
                                <div className="skill-bar bar" data="70"></div>
                            </div>
                            <div className="my-skills">
                                <div className="name-percentage">
                                    <p>Javascript</p>
                                    <p>60%</p>
                                </div>
                                <div className="skill-bar bar" data="60"></div>
                            </div>
                            <div className="my-skills">
                                <div className="name-percentage">
                                    <p>Node.JS</p>
                                    <p>55%</p>
                                </div>
                                <div className="skill-bar bar" data="55"></div>
                            </div>
                            <div className="my-skills">
                                <div className="name-percentage">
                                    <p>C</p>
                                    <p>75%</p>
                                </div>
                                <div className="skill-bar bar" data="75"></div>
                            </div>
                            <div className="my-skills">
                                <div className="name-percentage">
                                    <p>C++</p>
                                    <p>60%</p>
                                </div>
                                <div className="skill-bar bar" data="60"></div>
                            </div>
                            <div className="my-skills">
                                <div className="name-percentage">
                                    <p>React.Js</p>
                                    <p>60%</p>
                                </div>
                                <div className="skill-bar bar" data="60"></div>
                            </div>
                            <div className="my-skills">
                                <div className="name-percentage">
                                    <p>Express.Js</p>
                                    <p>60%</p>
                                </div>
                                <div className="skill-bar bar" data="60"></div>
                            </div>
                            <div className="my-skills">
                                <div className="name-percentage">
                                    <p>MongoDB</p>
                                    <p>60%</p>
                                </div>
                                <div className="skill-bar bar" data="60"></div>
                            </div>
                            <div className="my-skills">
                                <div className="name-percentage">
                                    <p>MySql</p>
                                    <p>60%</p>
                                </div>
                                <div className="skill-bar bar" data="60"></div>
                            </div>
                        </div>
                    </div>
                    <a href="#" className="d-flex align-center justify-content-center text-secondary my-4">
                        <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 512 512" width="32" height="32"><g data-name="&amp;lt;Group&amp;gt;" fill="#ffffff" className="color000 svgShape"><path d="M334.721,22.487A8.058,8.058,0,0,0,328.98,20H116.231A48.353,48.353,0,0,0,68,68.118V443.882A48.353,48.353,0,0,0,116.231,492H395.769A48.353,48.353,0,0,0,444,443.882V138.132a8.188,8.188,0,0,0-2.375-5.6ZM337,47.846,416.854,130H348.98A11.884,11.884,0,0,1,337,118.132ZM395.769,476H116.231A32.337,32.337,0,0,1,84,443.882V68.118A32.337,32.337,0,0,1,116.231,36H321v82.132A27.9,27.9,0,0,0,348.98,146H428V443.882A32.337,32.337,0,0,1,395.769,476Z" data-name="&amp;lt;Compound Path&amp;gt;" fill="#ffffff" className="color000 svgShape"></path><path d="M203.524,221h0a7.961,7.961,0,0,0-1.461.061,25.845,25.845,0,1,0-31.6.006A7.982,7.982,0,0,0,169,221h0a23.892,23.892,0,0,0-24,23.89v24.42a7.693,7.693,0,0,0,7.943,7.69h66.633c4.418,0,8.424-3.272,8.424-7.69V244.891C228,231.627,216.788,221,203.524,221ZM186.26,190.69a9.849,9.849,0,1,1-9.848,9.848A9.859,9.859,0,0,1,186.26,190.69Zm0,35.7a25.694,25.694,0,0,0,10.924-2.429c-.036.045-.076.085-.11.131a13.421,13.421,0,0,1-21.629,0c-.034-.046-.074-.086-.109-.132A25.688,25.688,0,0,0,186.26,226.387ZM212,244.89V261H161V244.89a8.052,8.052,0,0,1,4.971-7.459,29.393,29.393,0,0,0,40.6,0,8.269,8.269,0,0,1,5.217,7.461Z" data-name="&amp;lt;Compound Path&amp;gt;" fill="#ffffff" className="color000 svgShape"></path><path d="M254,165a8,8,0,0,0-8-8H126a8,8,0,0,0-8,8V288a8,8,0,0,0,8,8H246a8,8,0,0,0,8-8Zm-120,8H238V279H134Z" data-name="&amp;lt;Compound Path&amp;gt;" fill="#ffffff" className="color000 svgShape"></path><path d="M265.978 201h63.11a8 8 0 0 0 0-16h-63.11a8 8 0 0 0 0 16zM385.5 218H265.978a8 8 0 0 0 0 16H385.5a8 8 0 0 0 0-16zM385.5 251H265.978a8 8 0 0 0 0 16H385.5a8 8 0 0 0 0-16zM376 382H126.5a8 8 0 0 0 0 16H376a8 8 0 0 0 0-16zM376 328H126.5a8 8 0 1 0 0 16H376a8 8 0 0 0 0-16z" data-name="&amp;lt;Path&amp;gt;" fill="#ffffff" className="color000 svgShape"></path></g></svg>
                        <p>Download CV</p>
                    </a>
                </div>
                <div className="profile-social-media">
                    <ul>
                        <a href="youtube.com"><i className="fa-brands fa-youtube"></i></a>
                        <a href="#"></a>
                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                    </ul>
                </div>
            </aside>
        </>
    )
}