import React from 'react';
import {Helmet} from "react-helmet";
export default function Scripts() {
  return (
   <Helmet>
        <script src={process.env.PUBLIC+'/js/jquery-3.5.1.min.js'}/>
        <script src={process.env.PUBLIC+'/js/rangeSlider.js'}/>
        <script src={process.env.PUBLIC+'/js/tether.min.js'}/>
        <script src={process.env.PUBLIC+'/js/moment.js'}/>
        <script src={process.env.PUBLIC+'/js/bootstrap.min.js'}/>
        <script src={process.env.PUBLIC+'/js/mmenu.min.js'}/>
        <script src={process.env.PUBLIC+'/js/mmenu.js'}/>
        <script src={process.env.PUBLIC+'/js/aos.js'}/>
        <script src={process.env.PUBLIC+'/js/aos2.js'}/>
        <script src={process.env.PUBLIC+'/js/animate.js'}/>
        <script src={process.env.PUBLIC+'/js/slick.min.js'}/>
        <script src={process.env.PUBLIC+'/js/fitvids.js'}/>
        <script src={process.env.PUBLIC+'/js/jquery.waypoints.min.js'}/>
        <script src={process.env.PUBLIC+'/js/typed.min.js'}/>
        <script src={process.env.PUBLIC+'/js/jquery.counterup.min.js'}/>
        <script src={process.env.PUBLIC+'/js/imagesloaded.pkgd.min.js'}/>
        <script src={process.env.PUBLIC+'/js/isotope.pkgd.min.js'}/>
        <script src={process.env.PUBLIC+'/js/smooth-scroll.min.js'}/>
        <script src={process.env.PUBLIC+'/js/lightcase.js'}/>
        <script src={process.env.PUBLIC+'/js/search.js'}/>
        <script src={process.env.PUBLIC+'/js/owl.carousel.js'}/>
        <script src={process.env.PUBLIC+'/js/jquery.magnific-popup.min.js'}/>
        <script src={process.env.PUBLIC+'/js/ajaxchimp.min.js'}/>
        <script src={process.env.PUBLIC+'/js/newsletter.js'}/>
        <script src={process.env.PUBLIC+'/js/jquery.form.js'}/>
        <script src={process.env.PUBLIC+'/js/jquery.validate.min.js'}/>
        <script src={process.env.PUBLIC+'/js/searched.js'}/>
        <script src={process.env.PUBLIC+'/js/forms-2.js'}/>
        <script src={process.env.PUBLIC+'/js/map-style2.js'}/>
        <script src={process.env.PUBLIC+'/js/range.js'}/>
        <script src={process.env.PUBLIC+'/js/color-switcher.js'}/>
   </Helmet>
  )
}
