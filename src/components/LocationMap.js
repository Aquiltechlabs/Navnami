

import React, { Fragment, memo } from 'react'
import location_map from '../assets/images/location-map.png';

function LocationMap() {
    return (
        <Fragment>
            {/* START LOCATION MAP -------------------------------- */}
            <div className="location-map page-section" id="location-map">
                <div className="main-container">
                    <div className="f-s-60 clr-orange text-center" data-aos="fade-up" data-aos-delay={300} data-aos-duration={700}>Location Map</div>
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="Location-img" data-aos="fade-up" data-aos-delay={500} data-aos-duration={700}>
                                <img className="w-100" src={location_map} alt="location-map" />
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-10 loct-rec-wrap">
                            <div className="row">
                                <div className="col-lg-3 col-sm-6">
                                    <div className="location-rect" data-eq="eq-H" data-aos="fade-up" data-aos-delay={300} data-aos-duration={700}>
                                        <div className="locTitle clr-orange">Work Places</div>
                                        <ul>
                                            <li>- Manyata Tech Park - 3.5 Km</li>
                                            <li>- Karle SEZ Park - 5.0 Km</li>
                                            <li>- Kirloskar Tech Park - 7.5 Km</li>
                                            <li>- Ecopolis IT &amp; SEZ - 8.0 Kms</li>
                                            <li>- Brigade Opus - 6.0 Kms</li>
                                            <li>- Bharatiya City Commercial - 2.5 Kms</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="location-rect" data-eq="eq-H" data-aos="fade-up" data-aos-delay={500} data-aos-duration={700}>
                                        <div className="locTitle clr-orange">Educational Facilities</div>
                                        <ul>
                                            <li>- Green ield Public School - 100Meters</li>
                                            <li>- Diana School &amp; College - 500Meters</li>
                                            <li>- Delhi Public School - 7Kms</li>
                                            <li>- Federal Public School - 3.3Kms</li>
                                            <li>- Vidhya Niketan - 4.0Kms</li>
                                            <li>- Wisdom Montfort Int. School - 3.5Kms</li>
                                            <li>- Rashtrothana School - 2.0Kms</li>
                                            <li>- Kensri Public School - 5.5Kms</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="location-rect" data-eq="eq-H" data-aos="fade-up" data-aos-delay={700} data-aos-duration={700}>
                                        <div className="locTitle clr-orange">Near By Hospitals</div>
                                        <ul>
                                            <li>- Regal Hopital - 2.0Kms</li>
                                            <li>- Columbia Asia Hosp. - 7.0Kms</li>
                                            <li>- Aster CMI Hospital - 7.0Kms</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="location-rect" data-eq="eq-H" data-aos="fade-up" data-aos-delay={900} data-aos-duration={700}>
                                        <div className="locTitle clr-orange">Near By Malls </div>
                                        <ul>
                                            <li>- Element Mall - 5.5Kms</li>
                                            <li>- More Megastore - 6.0Kms</li>
                                            <li>- Esteem Mall - 7.3Kms</li>
                                            <li>- Lulu Shopping Mart - 3.0Kms</li>
                                            <li>- RMZ Galleia Mall - 4.0Kms</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* END LOCATION MAP -------------------------------- */}

        </Fragment>
    )
}


export default memo(LocationMap)



