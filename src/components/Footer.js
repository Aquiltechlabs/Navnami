import React, { Fragment, memo } from 'react'

function Footer() {
    return (
        <Fragment>
            <div className="ftSec overflow-hidden">
                <div className="main-container" data-aos="fade-up" data-aos-delay={300} data-aos-duration={700}>
                    <div className="ftText">Disclaimer: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, </div>
                    <div className="copyText text-center">
                        © 2021 All Rights Reserved
                    </div>
                </div>
            </div>
           
            <div className="totop">
                <i className="fa fa-angle-up" aria-hidden="true" />
            </div>

        </Fragment>
    )
}


export default memo(Footer)



