import React, { Fragment, memo } from 'react'


import project_1 from '../assets/images/project-1.jpg';
import project_2 from '../assets/images/project-2.jpg';

import project_finced from '../assets/images/project-finced.png';
function AboutProject() {
    return (
        <Fragment>
            {/* END ABOUT PROJECT----------------------------------------- */}
            <div className="about_project page-section" id="about-project">
                <div className="main-container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="projectImg_sec">
                                <div className="projectImg_1 slide-overlay-wrap">
                                    <div className="slideOver slide-bg-1 slide-right" data-aos="slide-right" data-aos-delay={500} data-aos-duration={500} />
                                    <div className="slideOver slide-right" data-aos="slide-right" data-aos-delay={200} data-aos-duration={500} />
                                    <img src={project_1} className="w-100" alt="prject Img" />
                                </div>
                                <div className="projectImg_2 slide-overlay-wrap">
                                    <div className="slideOver slide-bg-1 slide-left" data-aos="slide-right" data-aos-delay={500} data-aos-duration={500} />
                                    <div className="slideOver slide-right" data-aos="slide-left" data-aos-delay={200} data-aos-duration={500} />
                                    <img src={project_2} className="w-100" alt="prject Img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 align-self-center" data-aos="fade-up" data-aos-delay={300} data-aos-duration={700}>
                            <div className="f-s-60 clr-orange">About Projects</div>
                            <div className="f-s-24 atSubtext">Position | Privilege | Passion</div>
                            <div className="f-s-24">Luxury Sustainable 2 &amp; 3 BHK Apartment - Off Thanisandra Main Road - Sampighalli - Bangaluru North</div>
                            <div id="main">
                                <div className="accordion" id="faq">
                                    <div className="card">
                                        <div className="card-header" id="faqhead1">
                                            <a href="#" className="btn btn-header-link" data-toggle="collapse" data-target="#faq1" aria-expanded="true" aria-controls="faq1">Position</a>
                                        </div>
                                        <div id="faq1" className="collapse show" aria-labelledby="faqhead1" data-parent="#faq">
                                            <div className="card-body">
                                                Aposition of prestige where the world comes to you. Just a few-minute short from Manyatha Tech Park, Karle Tech park, entertainment, leisure amenities and prestigious school &amp; colleges, ets.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="faqhead2">
                                            <a href="#" className="btn btn-header-link collapsed" data-toggle="collapse" data-target="#faq2" aria-expanded="true" aria-controls="faq2">Privilege</a>
                                        </div>
                                        <div id="faq2" className="collapse" aria-labelledby="faqhead2" data-parent="#faq">
                                            <div className="card-body">
                                                Aposition of prestige where the world comes to you. Just a few-minute short from Manyatha Tech Park, Karle Tech park, entertainment, leisure amenities and prestigious school &amp; colleges, ets.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="faqhead3">
                                            <a href="#" className="btn btn-header-link collapsed" data-toggle="collapse" data-target="#faq3" aria-expanded="true" aria-controls="faq3">Passion</a>
                                        </div>
                                        <div id="faq3" className="collapse" aria-labelledby="faqhead3" data-parent="#faq">
                                            <div className="card-body">
                                                Aposition of prestige where the world comes to you. Just a few-minute short from Manyatha Tech Park, Karle Tech park, entertainment, leisure amenities and prestigious school &amp; colleges, ets.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="projct-finced">
                <div className="main-container" data-aos="fade-up" data-aos-delay={300} data-aos-duration={700}>
                    <div className="f-s-60 clr-orange text-center" data-aos="fade-up" data-aos-delay={300} data-aos-duration={700}>Project Financed by</div>
                    <div className="fincedImg" data-aos="fade-up" data-aos-delay={500} data-aos-duration={700}>
                        <img className="w-100" src={project_finced} alt="Finced Img" />
                    </div>
                </div>
            </div>
            {/* END ABOUT PROJECT----------------------------------------- */}

        </Fragment>
    )
}


export default memo(AboutProject)

