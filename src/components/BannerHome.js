import React, { Fragment, memo } from 'react'
import main_banner from '../assets/images/main-banner.jpg';
import pricing_lbl from '../assets/images/pricing_lbl.jpg';
function BannerHome() {
    return (
        <Fragment>
            {/* START HOME----------------------------------------- */}
            <div className="mainBanner_sec page-section" id="home">
                <div className="bannerSec-Wrap slide-overlay-wrap h-100">
                    <div className="slideOver slide-bg-1 slide-right" data-aos="slide-right" data-aos-delay={500} data-aos-duration={500} />
                    <div className="slideOver slide-right" data-aos="slide-right" data-aos-delay={200} data-aos-duration={500} />
                    <img src={main_banner} className="w-100 h-100 objCover" alt="Banner" />
                </div>
                <div className="formGet_sec">
                    <div className="main-container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="formBg_sec" data-aos="fade-up" data-aos-delay={600} data-aos-duration={700}>
                                    <div className="enqTitle f-w-B">
                                        Enquire Now
                                    </div>
                                    <div className="enqSubtitle f-w-B f-s-20">
                                        Please fill in your details below:
                                    </div>
                                    <div className="enqTxt f-s-20">
                                        Luxury Sustainable 2 &amp; 3 BHK Apartment - Off Thanisandra Main Road - Sampighalli - Bangaluru North
                                    </div>
                                    <div className="enqform_Wrap">
                                        <form>
                                            <div className="form-group">
                                                <input type="text" name className="fornCrl f-s-20" placeholder="Name" />
                                            </div>
                                            <div className="form-group">
                                                <input type="email" name className="fornCrl f-s-20" placeholder="Email" />
                                            </div>
                                            <div className="form-group">
                                                <input type="number" name className="fornCrl f-s-20" placeholder="Mobile Number" />
                                            </div>
                                            <div className="form-group mb-0">
                                                <input type="submit" name className="fornCrl f-s-20 submitBtn trans_1" defaultValue="Submit" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pricingLbl">
                    <div className="main-container">
                        <div className="pricingImg_sec" data-aos="fade-up" data-aos-delay={600} data-aos-duration={700}>
                            <img src={pricing_lbl} className="w-100" alt="Pricing Lable" />
                        </div>
                    </div>
                </div>
            </div>
            {/* END HOME----------------------------------------- */}
        </Fragment>
    )
}


export default memo(BannerHome)

