
import React, { Fragment, memo } from 'react'
import spcifi_img from '../assets/images/spcifi-img.jpg';
import Slider from "react-slick";

const PrevButton = () => {
    return (
        <button class="slide-arrow prev-arrow "></button>
    )
}

const NextButton = () => {
    return (
        <button class="slide-arrow next-arrow"></button>
    )
}

function Specification() {

    let settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 2000,
        // prevArrow: <PrevButton/>,
        // nextArrow: <NextButton/>
    }
    

    return (
        <Fragment>
            {/* START SPECIFICATION----------------------------------- */}
            {/* SLIDER */}
            <div className="specification page-section" id="specification">
                <div className="main-container">
                    <div className="f-s-60 clr-orange text-center" data-aos="fade-up" data-aos-delay={300} data-aos-duration={700}>Specification</div>
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <div className="speci-wrap" data-aos="fade-up" data-aos-delay={500} data-aos-duration={700}>
                                <div className="slider">
                                    <div className="specification-slider">
                                        <Slider {...settings}>
                                            <div className="slider-img" data-aos="fade-left" data-aos-delay={300} data-aos-duration={700}>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <div className="spcifiImg">
                                                            <img className="w-100" src={spcifi_img} alt="spcifi-imgs" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 align-self-center">
                                                        <div className="spcifiDeti text-white">
                                                            <div className="spcifiText">Structure</div>
                                                            <div className="spcifiTextsub">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider-img">
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <div className="spcifiImg">
                                                            <img className="w-100" src={spcifi_img} alt="spcifi-imgs" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 align-self-center">
                                                        <div className="spcifiDeti text-white">
                                                            <div className="spcifiText">Structure</div>
                                                            <div className="spcifiTextsub">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                       </Slider>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* END SPECIFICATION----------------------------------- */}
        </Fragment>
    )
}

export default memo(Specification)



{/* < script >
    $('.specification-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 2000,
        prevArrow: '<button class="slide-arrow prev-arrow"></button>',
        nextArrow: '<button class="slide-arrow next-arrow"></button>'
    });
</script > */}