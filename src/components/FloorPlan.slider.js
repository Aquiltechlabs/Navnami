
import React, { Fragment, memo } from 'react'
import Slider from "react-slick";

import f_plan_1 from '../assets/images/f-plan-1.jpg';
import f_plan_2 from '../assets/images/f-plan-2.jpg';
import f_plan_3 from '../assets/images/f-plan-3.jpg';
import f_plan_4 from '../assets/images/f-plan-4.jpg';

const PrevButton=()=>{
    return(
        <button class="slide-arrow prev-arrow"></button>
    )
}

const NextButton = () => {
    return (
        <button class="slide-arrow next-arrow"></button>
    )
}

function FloorPlan() {
    var settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 2000,
        prevArrow: <PrevButton/>,
        nextArrow: <NextButton/>,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    }

    return (
        <Fragment>
            {/* START FLOOR PLAN----------------------------------------- */}
            {/* SLIDER */}
            <div className="floor_plans page-section" id="floor-plan">
                <div className="main-container">
                    <div className="f-s-60 clr-orange text-center" data-aos="fade-up" data-aos-delay={300} data-aos-duration={700}>Floor Plans</div>
                    <div className="slider" data-aos="fade-up" data-aos-delay={500} data-aos-duration={700}>
                        <div className="gallery-slider">
                            < Slider {...settings}>
                                <div className="slider-img">
                                    <img className="w-100" src={f_plan_1} alt="floor-plan-1" />
                                </div>
                                <div className="slider-img">
                                    <img className="w-100" src={f_plan_2} alt="floor-plan-2" />
                                </div>
                                <div className="slider-img">
                                    <img className="w-100" src={f_plan_3} alt="floor-plan-3" />
                                </div>
                                <div className="slider-img">
                                    <img className="w-100" src={f_plan_4} alt="floor-plan-4" />
                                </div>
                                <div className="slider-img">
                                    <img className="w-100" src={f_plan_4} alt="floor-plan-4" />
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
            {/* END FLOOR PLAN----------------------------------------- */}
        </Fragment>
    )
}

export default memo(FloorPlan)


// < script >
//     $('.gallery-slider').slick({
//         infinite: true,
//         slidesToShow: 4,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 5000,
//         speed: 2000,
//         prevArrow: '<button class="slide-arrow prev-arrow"></button>',
//         nextArrow: '<button class="slide-arrow next-arrow"></button>',
//         responsive: [
//             {
//                 breakpoint: 992,
//                 settings: {
//                     slidesToShow: 3,
//                 }
//             },
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 2,
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1,
//                 }
//             }
//         ]
//     });
// </script >


