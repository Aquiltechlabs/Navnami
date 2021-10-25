import React, { Fragment ,useEffect} from 'react'
// import './App.css';

import AOS from 'aos'
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'font-awesome/css/font-awesome.min.css'

import './assets/css/stylesheet.css';
// import './assets/css/stylesheet.css';

import Routes from './Routes'

function App() {

  useEffect(() => {
    AOS.init({
      startEvent: 'load',
      duration: 500,
      offset: 50
    });

    //loder js//
    $(window).on('load', function () { // makes sure the whole site is loaded 
      // $('#status').fadeOut(); // will first fade out the loading animation 
      $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
      $('body').delay(350).css({ 'overflow': 'visible' });
    });
	//End loder js//

    // Scroll to Top
    $(".totop").click(function () {
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    });
    $(window).scroll(function () {
      if ($(this).scrollTop()) {
        $('.totop:hidden').stop(true, true).fadeIn();
      } else {
        $('.totop').stop(true, true).fadeOut();
      }
    });
  })
  
  return (
    <Fragment>
      <Routes />
    </Fragment>
  );
}

export default App;
