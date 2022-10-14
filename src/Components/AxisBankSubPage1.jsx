import React from 'react'
import { useEffect } from 'react'
import '../Styles/AxisBankSubPage1.css'
import $ from "jquery";
import Profilepng from '../Assets/Profile.png'
import ThumbUpPng from '../Assets/ThumbUpPng.png'
import BulbPng from '../Assets/BulbPng.png'
import TickPng from '../Assets/TickPng.png'
import PhonePng from '../Assets/PhonePng.png'
import EmailPng from '../Assets/EmailPng.png'
import poweredByManipalPngCropped from '../Assets/poweredByManipalPngCropped.png'
import AxisBankDart from '../Assets/AxisBankDart.png'
import AxisBankSettings from '../Assets/AxisBankSettings.png'

function AxisBankSubPage1() {
  useEffect(()=>{
  $("ul.tabs li").click(function() {
    
    $(".tab_content").hide();
    var activeTab = $(this).attr("rel"); 
    $("#"+activeTab).fadeIn();    
  
    $("ul.tabs li").removeClass("active");
    $(this).addClass("active");

  $(".tab_drawer_heading").removeClass("d_active");
  $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
  
  });
$(".tab_drawer_heading").click(function() {
    
    var d_activeTab = $(this).attr("rel"); 
    
 if($(this).hasClass('d_active')){
$(".tab_drawer_heading").removeClass("d_active");
$(".tab_content").hide();
} else{
$(this).addClass("d_active");
$("#"+d_activeTab).fadeIn();
}
  
  $("ul.tabs li").removeClass("active");
  $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
  });


/* Extra class "tab_last" 
   to add border to right side
   of last tab */
$('ul.tabs li').last().addClass("tab_last");


  var acc = document.getElementsByClassName("accordion");
  var panel = document.getElementsByClassName('panel');
  
  for (var i = 0; i < acc.length; i++) {
      acc[i].onclick = function() {
          var setClasses = !this.classList.contains('active');
          setClass(acc, 'active', 'remove');
          setClass(panel, 'show', 'remove');
  
          if (setClasses) {
              this.classList.toggle("active");
              this.nextElementSibling.classList.toggle("show");
          }
      }
  }
  
  function setClass(els, className, fnName) {
      for (var i = 0; i < els.length; i++) {
          els[i].classList[fnName](className);
      }
  }
  
  
  

  
$( document ).ready(function() {
  var elements = $('#page-block-78d68za7bd6, #page-block-qmg27nr60bc, #page-block-wlohbdx6heo, #page-block-1soybar3b05, #page-block-0zru0wlccknc, #page-block-8mfxh9hveo7');
$(elements).prepend('<span class="plus"></span>')
$(elements).on('click', function(){
$(this).next().slideToggle();
$(this).find('.plus').toggleClass('minus');
});
});
  })

  return (
          <div className='sub-page-main-font-size' >
            {/* Added by HTTrack */}<meta httpEquiv="content-type" content="text/html;charset=utf-8" />{/* /Added by HTTrack */}
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="format-detection" content="telephone=no" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
            <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
            <meta name="description" content />
            <meta name="keywords" content />
            <link rel="canonical" href="axisbank.html" />
            <link rel="shortcut icon" href="../v.fastcdn.co/u/2990d1d3/35735576-0-man.png" type="image/ico" />
            <title>Axis Bank</title>
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="article" />
            <meta property="og:title" content />
            <meta property="og:description" content />
            <meta property="og:site_name" content />
            <meta property="og:url" content="axisbank.html" />
            <meta property="og:image" content="https://dfsm9194vna0o.cloudfront.net/460974-0-undefined." />
            <link rel="preload" as="script" href="../js/utils.cd5b4894ab46ac49c25b.js" />
            <link rel="preload" as="script" href="../js/Cradle.2834144546d6c56f4dd5.js" />
            <link rel="preload" as="script" href="../js/LazyImage.90aa95d960c719e556c2.js" />
            <link rel="preconnect dns-prefetch" href="https://fonts.gstatic.com/" crossOrigin />
            {/* Facebook Pixel */}
            <noscript><img height="1" width="1" style="display:none"
              src="https://www.facebook.com/tr?id=5772729232752071&&ev=PageView&&noscript=1"
              /></noscript>
            {/* End Facebook Pixel */}
            {/* Google Tag Manager */}
            {/* End Google Tag Manager */}
            <link type="text/css" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800" />
            {/* F_INSTAPAGE[dynamic_text_replacement;page_generator] */}
            {/* Workspace Level Script Head */}
            {/* end Workspace Level Script Head */}
            {/* custom HEAD code*/}
            {/* Google Tag Manager */}
            {/* End Google Tag Manager */}
            {/* Global site tag (gtag.js) - Google Ads: 10804415906 */}
            {/* Facebook Pixel Code */}
            <noscript><img height="1" width="1" style="display:none"
              src="https://www.facebook.com/tr?id=923551715251054&&ev=PageView&&noscript=1"
              /></noscript>
            {/* End Facebook Pixel Code */}
            <meta name="facebook-domain-verification" content="xw01ktijx9lrf8flnzbpizwk9gw300" />
            {/* end custom HEAD code*/}
            {/* Workspace Level Script Body */}
            {/* end Workspace Level Script Body */}
            {/* custom BODY code*/}
            {/* Google Tag Manager (noscript) */}
            <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PFXVVBT"
              height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
            {/* End Google Tag Manager (noscript) */}
            <noscript>
              <img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=3186692&&fmt=gif" />
            </noscript>
            {/* end custom BODY code*/}
            {/* Google Tag Manager (noscript) */}
            <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PKDC4HZ"
              height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
            {/* End Google Tag Manager (noscript) */}
            <main>
              <section className="section section-relative " id="page_block_header" data-at="section">
                <div className="section-holder-border item-block item-absolute" data-at="section-border" />
                <div className="section-holder-overlay item-block item-absolute" data-at="section-overlay" />
                <div className="section-block">
                  <div className="section-inner section-fit section-relative">
                    <div className="widget item-absolute  " id="element-650">
                      <div className="contents cropped item-block" data-at="image-cropp">
                        <img className="item-content-box item-block image " data-at="image" alt="" src={poweredByManipalPngCropped} srcSet={poweredByManipalPngCropped} style={{objectFit:"contain"}}/>
                      </div>
                    </div>
                    <div className="widget item-absolute headline  " id="element-620" data-at="headline">
                      <div className="contents">
                        <h1>
                          <span className="x_1c817472 x_519e17eb"><span className="x_f2074b6c"><strong>Fintech Training Program
                              </strong></span></span><span className="x_1c817472 x_519e17eb"><strong><span className="x_16f4d2ca">With 100% Job Guarantee* at Axis Bank</span></strong></span>
                        </h1>
                      </div>
                    </div>
                    <div className="widget item-absolute " id="element-1021">
                      <div className="contents shape  box figure " data-at="shape" />
                    </div>
                    <div className="widget item-absolute headline  " id="element-651" data-at="headline">
                      <div className="contents">
                        <h1>
                          <span className="x_00098c5b x_19c19dde"><span className="x_f2074b6c">Start your dream job with an 8 lakh salary package.&nbsp;</span><span className="x_f2074b6c">Join the first-ever job assured fintech program for a successful future.</span></span>
                        </h1>
                      </div>
                    </div>
                    <div className="widget item-absolute headline  " id="element-1022" data-at="headline">
                      <div className="contents">
                        <h1>
                          <span className="x_178925bc x_d9d010c1"><span className="x_f2074b6c">Eligibility: B.E/B.Tech graduates with 60% across 10th, 12th, and UG.</span></span>
                        </h1>
                      </div>
                    </div>
                    <div className="widget item-absolute  " id="element-1032">
                      <div className="contents html-widget__text-center " data-at="html">
                        <button style={{fontSize: '20px', backgroundColor:"#8c1147", color:"white",padding:"5%", cursor:"pointer", borderRadius:"10px"}} type="button" className="npfWidgetButton npfWidget-470206e5b4bbac9a5e73822d9134eb76"><a href='https://forms.gle/6mzLg1xHVGtL4Une8'>Apply Now</a></button>
                      </div>
                    </div>
                    <div className="widget item-absolute  " id="element-948">
                      <div className="contents cropped item-block" data-at="image-cropp">
                      </div>
                    </div>
                    <div className="widget item-absolute " id="element-959">
                      <div className="contents shape  box figure " data-at="shape" />
                    </div>
                    <div className="widget item-absolute  " id="element-952">
                      <div className="contents cropped item-block" data-at="image-cropp">
                        <img className="item-content-box item-block image " data-at="image" alt="" src="../v.fastcdn.co/u/2990d1d3/51770121-0-Axis-logo-1.png" srcSet="//v.fastcdn.co/u/2990d1d3/51770121-0-Axis-logo-1.png 2x" />
                      </div>
                    </div>
                    <div className="widget item-absolute  " id="element-951">
                      <div className="contents cropped item-block" data-at="image-cropp">
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="section section-relative " id="page-block-0ew8rhwlyvu" data-at="section">
                <div className="section-holder-border item-block item-absolute" data-at="section-border" />
                <div className="section-holder-overlay item-block item-absolute" data-at="section-overlay" />
                <div className="section-block">
                  <div className="section-inner section-fit section-relative">
                    <div className="widget item-absolute headline  " id="element-721" data-at="headline">
                      <div className="contents">
                        <h1>
                          <span className="x_82ea7ee4 x_52f6981f"><span className="x_b0c52866"><strong>Your Dream Role in Tech Starting Salary ₹8 Lakhs p.a. </strong></span></span>
                        </h1>
                      </div>
                    </div>
                    <div className="widget item-absolute headline  " id="element-722" data-at="headline">
                      <div className="contents">
                        <h1>
                          <span className="x_00098c5b x_fcd2d15f"><span className="x_f9a61538">Assured job after successful completion of program</span></span>
                        </h1>
                      </div>
                    </div>
                    <div className="widget item-absolute headline  " id="element-723" data-at="headline">
                      <div className="contents">
                        <h1>
                          <span className="x_c3a17f25 x_d090193b"><span className="x_f9a61538">Technological innovations will be the heart of the banking industry and we are providing you a gateway to this realm through our program. You will be placed at Axis Bank across the following roles.&nbsp;</span></span>
                        </h1>
                      </div>
                    </div>
                    <div className="widget item-absolute headline  " id="element-725" data-at="headline">
                      <div className="contents">
                        <h1>
                          <span className="x_921029fa x_504bdd99"><span className="x_f9a61538">Full Stack Developer </span></span>
                        </h1>
                      </div>
                    </div>
                    <div className="widget item-absolute  " id="element-765">
                      <div className="contents cropped item-block" data-at="image-cropp">
                        <img className="item-content-box item-block image img-lazy" data-at="image" alt="" src={TickPng} />
                      </div>
                    </div>
                    <div className="widget item-absolute headline  " id="element-787" data-at="headline">
                      <div className="contents">
                        <h1>
                          <span className="x_921029fa x_504bdd99"><span className="x_f9a61538">Deputy Manager - IT</span></span>
                        </h1>
                      </div>
                    </div>
                    <div className="widget item-absolute  " id="element-789">
                      <div className="contents cropped item-block" data-at="image-cropp">
                        <img className="item-content-box item-block image img-lazy" data-at="image" alt="" src={TickPng} />
                      </div>
                    </div>
                    {/* <div className="widget item-absolute  " id="element-771">
                      <div className="contents cropped item-block" data-at="image-cropp">
                        <img className="item-content-box item-block image img-lazy" data-at="image" alt="" src={TickPng} />
                      </div>
                    </div>
                    <div className="widget item-absolute headline  " id="element-769" data-at="headline">
                      <div className="contents">
                        <h1>
                          <span className="x_921029fa x_504bdd99"><span className="x_f9a61538">Full Stack Developer&nbsp;</span></span>
                        </h1>
                      </div>
                    </div>
                    <div className="widget item-absolute headline  " id="element-784" data-at="headline">
                      <div className="contents">
                        <h1>
                          <span className="x_921029fa x_504bdd99"><span className="x_f9a61538">Quality Assurance </span></span>
                        </h1>
                      </div>
                    </div> */}
                    {/* <div className="widget item-absolute  " id="element-791">
                      <div className="contents cropped item-block" data-at="image-cropp">
                        <img className="item-content-box item-block image img-lazy" data-at="image" alt="" src={TickPng} />
                      </div>
                    </div> */}
                    <div className="widget item-absolute headline  " id="element-744" data-at="headline">
                      <div className="contents">
                        <h1>
                          <span className="x_b8c49765 x_24e44f2f"><strong><span className="x_b0c52866">Program Fees</span></strong></span>
                        </h1>
                      </div>
                    </div>
                    <div className="widget item-absolute headline  " id="element-746" data-at="headline">
                      <div className="contents">
                        <h1>
                          <span className="x_8b236db7 x_0fa34b5f"><span className="x_f9a61538"><strong>₹ 2,50,000</strong></span></span>
                        </h1>
                      </div>
                    </div>
                    <div className="widget item-absolute headline  " id="element-747" data-at="headline">
                      <div className="contents">
                        <h1>
                          <span className="x_c3a17f25 x_20e3a429"><span className="x_f9a61538">+ GST</span></span>
                        </h1>
                      </div>
                    </div>
                    <div className="widget item-absolute headline  " id="element-745" data-at="headline">
                      <div className="contents">
                        <h1>
                          <span className="x_c3a17f25 x_d090193b"><span className="x_f9a61538">Online proctored assessment</span></span><span className="x_c3a17f25 x_d090193b"><span className="x_f9a61538">Academic interview - Interview with Axis bank&nbsp;</span></span><span className="x_c3a17f25 x_d090193b"><span className="x_f9a61538">Provisional Offer-Letter - Registration Fees : 5,000&nbsp;</span><br /></span><span className="x_c3a17f25 x_d090193b"><span className="x_f9a61538">Training
                            </span></span><span className="x_c3a17f25 x_d090193b"><span className="x_f9a61538">Start Working At AXIS BANK
                            </span></span><span className="x_c3a17f25 x_d090193b"><br /></span>
                        </h1>
                      </div>
                    </div>
                    <div className="widget item-absolute headline  " id="element-748" data-at="headline">
                      <div className="contents">
                        <h1>
                          <span className="x_00098c5b x_fcd2d15f"><span className="x_f9a61538"><strong>Application Fees :</strong></span></span>
                        </h1>
                      </div>
                    </div>
                    <div className="widget item-absolute headline  " id="element-749" data-at="headline">
                      <div className="contents">
                        <h1>
                          <span className="x_921029fa x_561aca13"><span className="x_f9a61538"><strong> ₹499</strong></span></span>
                        </h1>
                      </div>
                    </div>
                    <div className="widget item-absolute headline  " id="element-750" data-at="headline">
                      <div className="contents">
                        <h1>
                          <span className="x_b8c49765 x_52f6981f"><strong><span className="x_b0c52866">Eligibility:</span></strong></span>
                        </h1>
                      </div>
                    </div>
                    <div className="widget item-absolute headline  " id="element-752" data-at="headline">
                      <div className="contents">
                        <h1>
                          <span className="x_c3a17f25 x_87ddc26c"><span className="x_f9a61538">B.E / B.Tech / BSc-IT/ MCA&nbsp;</span></span><span className="x_c3a17f25 x_87ddc26c"><span className="x_f9a61538">
                            </span></span><span className="x_c3a17f25 x_87ddc26c"><span className="x_f9a61538"><br /></span></span>
                        </h1>
                      </div>
                    </div>
                    <div className="widget item-absolute  " id="element-792">
                      <div className="contents cropped item-block" data-at="image-cropp">
                        <img className="item-content-box item-block image img-lazy" data-at="image" alt="" src={TickPng}/>
                      </div>
                    </div>
                    <div className="widget item-absolute headline  " id="element-1003" data-at="headline">
                      <div className="contents">
                        <h1>
                          <span className="x_c3a17f25 x_87ddc26c"><span className="x_f9a61538">60% across 10th, 12th and UG</span></span>
                        </h1>
                      </div>
                    </div>
                    <div className="widget item-absolute  " id="element-1004">
                      <div className="contents cropped item-block" data-at="image-cropp">
                        <img className="item-content-box item-block image img-lazy" data-at="image" alt="" src={TickPng}/>
                      </div>
                    </div>
                    <div className="widget item-absolute headline  " id="element-758" data-at="headline">
                      <div className="contents">
                        <h1>
                          <span className="x_c3a17f25 x_87ddc26c"><span className="x_f9a61538">Graduated in 2019 or Later.
                            </span></span><span className="x_c3a17f25 x_87ddc26c"><span className="x_f9a61538">
                            </span></span><span className="x_c3a17f25 x_87ddc26c"><span className="x_f9a61538"><br /></span></span>
                        </h1>
                      </div>
                    </div>
                    <div className="widget item-absolute  " id="element-793">
                      <div className="contents cropped item-block" data-at="image-cropp">
                        <img className="item-content-box item-block image img-lazy" data-at="image" alt="" src={TickPng}/>
                      </div>
                    </div>
                    {/* <div className="widget item-absolute  " id="element-794">
                      <div className="contents cropped item-block" data-at="image-cropp">
                        <img className="item-content-box item-block image img-lazy" data-at="image" alt="" src={TickPng}/>
                      </div>
                    </div>
                    <div className="widget item-absolute headline  " id="element-764" data-at="headline">
                      <div className="contents">
                        <h1>
                          <span className="x_c3a17f25 x_87ddc26c"><span className="x_f9a61538">Should be a graduate of 2017, 2018, 2019, 2020 and 2021 batches
                            </span></span>
                        </h1>
                      </div>
                    </div> */}
                    <div className="widget item-absolute  " id="element-995">
                      <a href="https://forms.gle/6mzLg1xHVGtL4Une8" id="link-o1ov87tag8h" className="onpage-link btn    item-block" data-at="button" data-link-o1ov87tag8h>
                        Request Call Back
                      </a>
                    </div>
                  </div>
                </div>
              </section>
              <section className="section section-relative " id="page-block-8nc6hbmvdce" data-at="section">
                <div className="section-holder-border item-block item-absolute" data-at="section-border" />
                <div className="section-holder-overlay item-block item-absolute" data-at="section-overlay" />
                <div className="section-block">
                  <div className="section-inner section-fit section-relative">
                    <div className="widget item-absolute headline  " id="element-795" data-at="headline">
                      <div className="contents">
                        <h1>
                          <span className="x_82ea7ee4 x_52f6981f"><span className="x_f2074b6c">The Selection Process</span></span>
                        </h1>
                      </div>
                    </div>
                    <div className="widget item-absolute  " id="element-836">
                      <div className="contents cropped item-block" data-at="image-cropp">
                        <img className="item-content-box item-block image img-lazy" data-at="image" alt="" src={AxisBankDart} data-src={AxisBankDart} data-retina-src={AxisBankDart} />
                      </div>
                    </div>
                    <div className="widget item-absolute  " id="element-846">
                      <div className="contents cropped item-block" data-at="image-cropp">
                        <img className="item-content-box item-block image img-lazy" data-at="image" alt="" src={ThumbUpPng}/>
                      </div>
                    </div>
                    <div className="widget item-absolute  " id="element-855">
                      <div className="contents cropped item-block" data-at="image-cropp">
                        <img className="item-content-box item-block image img-lazy" data-at="image" alt="" src={BulbPng}/>
                      </div>
                    </div>
                    <div className="widget item-absolute  " id="element-864">
                      <div className="contents cropped item-block" data-at="image-cropp">
                        <img className="item-content-box item-block image img-lazy" data-at="image" alt="" src={AxisBankSettings} data-src={AxisBankSettings} data-retina-src={AxisBankSettings} />
                      </div>
                    </div>
                    <div className="widget item-absolute  " id="element-798">
                      <div className="contents cropped item-block" data-at="image-cropp">
                        <img className="item-content-box item-block image img-lazy" data-at="image" alt="" src={Profilepng}/>
                      </div>
                    </div>
                    <div className="widget item-absolute  " id="element-838">
                      <div className="contents cropped item-block" data-at="image-cropp">
                      </div>
                    </div>
                    <div className="widget item-absolute  " id="element-848">
                      <div className="contents cropped item-block" data-at="image-cropp">
                        {/* <img className="item-content-box item-block image img-lazy" data-at="image" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM89h8AApEBx2iaqpQAAAAASUVORK5CYII=" data-src="//v.fastcdn.co/u/2990d1d3/51489726-0-Icon-3.png" data-retina-src="//v.fastcdn.co/u/2990d1d3/51489726-0-Icon-3.png" /> */}
                      </div>
                    </div>
                    <div className="widget item-absolute  " id="element-857">
                      <div className="contents cropped item-block" data-at="image-cropp">
                        {/* <img className="item-content-box item-block image img-lazy" data-at="image" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM89h8AApEBx2iaqpQAAAAASUVORK5CYII=" data-src="//v.fastcdn.co/u/2990d1d3/51489732-0-Icon-4.png" data-retina-src="//v.fastcdn.co/u/2990d1d3/51489732-0-Icon-4.png" /> */}
                      </div>
                    </div>
                    <div className="widget item-absolute  " id="element-866">
                      <div className="contents cropped item-block" data-at="image-cropp">
                      </div>
                    </div>
                    <div className="widget item-absolute  " id="element-799">
                      <div className="contents cropped item-block" data-at="image-cropp">
                        {/* <img className="item-content-box item-block image img-lazy" data-at="image" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM89h8AApEBx2iaqpQAAAAASUVORK5CYII=" data-src="//v.fastcdn.co/u/2990d1d3/51489714-0-2x---Icon-1.png" data-retina-src="//v.fastcdn.co/u/2990d1d3/51489714-0-2x---Icon-1.png" /> */}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="section section-relative " id="page-block-sbqc77d81j5fyor6age7sc3di" data-at="section">
                <div className="section-holder-border item-block item-absolute" data-at="section-border" />
                <div className="section-holder-overlay item-block item-absolute" data-at="section-overlay" />
                <div className="section-block">
                  <div className="section-inner section-fit section-relative">
                    <div className="widget item-absolute  " id="element-796">
                      <div className="contents cropped item-block" data-at="image-cropp">
                        <div className="item-content-box item-block image img-lazy" data-at="image" alt=""  />
                      </div>
                    </div>
                    <div className="widget item-absolute  " id="element-834">
                      <div className="contents cropped item-block" data-at="image-cropp">
                        <div className="item-content-box item-block image img-lazy" data-at="image" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM89h8AApEBx2iaqpQAAAAASUVORK5CYII=" data-src="//v.fastcdn.co/u/2990d1d3/51489666-0-Rectangle-BG.png" data-retina-src="//v.fastcdn.co/u/2990d1d3/51489666-0-Rectangle-BG.png" />
                      </div>
                    </div>
                    <div className="widget item-absolute  " id="element-844">
                      <div className="contents cropped item-block" data-at="image-cropp">
                        <div className="item-content-box item-block image img-lazy" data-at="image" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM89h8AApEBx2iaqpQAAAAASUVORK5CYII=" data-src="//v.fastcdn.co/u/2990d1d3/51489666-0-Rectangle-BG.png" data-retina-src="//v.fastcdn.co/u/2990d1d3/51489666-0-Rectangle-BG.png" />
                      </div>
                    </div>
                    <div className="widget item-absolute  " id="element-853">
                      <div className="contents cropped item-block" data-at="image-cropp">
                        <div className="item-content-box item-block image img-lazy" data-at="image" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM89h8AApEBx2iaqpQAAAAASUVORK5CYII=" data-src="//v.fastcdn.co/u/2990d1d3/51489666-0-Rectangle-BG.png" data-retina-src="//v.fastcdn.co/u/2990d1d3/51489666-0-Rectangle-BG.png" />
                      </div>
                    </div>
                    <div className="widget item-absolute  " id="element-862">
                      <div className="contents cropped item-block" data-at="image-cropp">
                        <div className="item-content-box item-block image img-lazy" data-at="image" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM89h8AApEBx2iaqpQAAAAASUVORK5CYII=" data-src="//v.fastcdn.co/u/2990d1d3/51489666-0-Rectangle-BG.png" data-retina-src="//v.fastcdn.co/u/2990d1d3/51489666-0-Rectangle-BG.png" />
                      </div>
                    </div>
                    <div className="widget item-absolute headline  " id="element-800" data-at="headline">
                      <div className="contents">
                        <h1>
                          <span className="x_99190cd2 x_2b60e4ec"><span className="x_7b2817bf">Online proctored assessment</span></span>
                        </h1>
                      </div>
                    </div>
                    <div className="widget item-absolute headline  " id="element-840" data-at="headline">
                      <div className="contents">
                        <h1>
                          <span className="x_99190cd2 x_2b60e4ec"><span className="x_7b2817bf">Academic interview</span></span>
                        </h1>
                      </div>
                    </div>
                    <div className="widget item-absolute headline  " id="element-850" data-at="headline">
                      <div className="contents">
                        <h1>
                          <span className="x_99190cd2 x_2b60e4ec"><span className="x_7b2817bf">Interview with Axis bank</span></span>
                        </h1>
                      </div>
                    </div>
                    <div className="widget item-absolute headline  " id="element-859" data-at="headline">
                      <div className="contents">
                        <h1>
                          <span className="x_99190cd2 x_2b60e4ec"><span className="x_7b2817bf">18 week training programme</span></span>
                        </h1>
                      </div>
                    </div>
                    <div className="widget item-absolute headline  " id="element-868" data-at="headline">
                      <div className="contents">
                        <h1>
                          <span className="x_99190cd2 x_2b60e4ec"><span className="x_7b2817bf">Start working in Axis bank as IT Deputy Manager</span></span>
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="section section-relative " id="page-block-ivikw0mcv0h" data-at="section">
                <div className="section-holder-border item-block item-absolute" data-at="section-border" />
                <div className="section-holder-overlay item-block item-absolute" data-at="section-overlay" />
                <div className="section-block">
                  <div className="section-inner section-fit section-relative">
                    <div className="widget item-absolute headline  " id="element-869" data-at="headline">
                      <div className="contents">
                        <h1>
                          <span className="x_82ea7ee4 x_52f6981f"><span className="x_b0c52866">Training Structure 
                            </span></span>
                        </h1>
                      </div>
                    </div>
                    <div className="widget item-absolute  " id="element-870">
                      <div className="contents cropped item-block" data-at="image-cropp">
                        <img className="item-content-box item-block image img-lazy" data-at="image" alt="" src={TickPng}/>
                      </div>
                    </div>
                    <div className="widget item-absolute headline  " id="element-875" data-at="headline">
                      <div className="contents">
                        <h1>
                          <span className="x_99190cd2"><span className="x_f9a61538">11-week training program I 7-week live project</span></span>
                        </h1>
                      </div>
                    </div>
                    <div className="widget item-absolute  " id="element-871">
                      <div className="contents cropped item-block" data-at="image-cropp">
                        <img className="item-content-box item-block image img-lazy" data-at="image" alt="" src={TickPng}/>
                      </div>
                    </div>
                    <div className="widget item-absolute headline  " id="element-876" data-at="headline">
                      <div className="contents">
                        <h1>
                          <span className="x_99190cd2"><span className="x_f9a61538">Learning Platform - <strong><em>EduNxt</em></strong></span></span>
                        </h1>
                      </div>
                    </div>
                    <div className="widget item-absolute  " id="element-872">
                      <div className="contents cropped item-block" data-at="image-cropp">
                        <img className="item-content-box item-block image img-lazy" data-at="image" alt="" src={TickPng}/>
                      </div>
                    </div>
                    <div className="widget item-absolute headline  " id="element-877" data-at="headline">
                      <div className="contents">
                        <h1>
                          <span className="x_99190cd2"><span className="x_f9a61538">Integrated programming environment&nbsp;</span></span>
                        </h1>
                      </div>
                    </div>
                    <div className="widget item-absolute  " id="element-873">
                      <div className="contents cropped item-block" data-at="image-cropp">
                        <img className="item-content-box item-block image img-lazy" data-at="image" alt="" src={TickPng}/>
                      </div>
                    </div>
                    <div className="widget item-absolute headline  " id="element-878" data-at="headline">
                      <div className="contents">
                        <h1>
                          <span className="x_99190cd2"><span className="x_f9a61538">Remote proctored assessments</span></span>
                        </h1>
                      </div>
                    </div>
                    <div className="widget item-absolute  " id="element-874">
                      <div className="contents cropped item-block" data-at="image-cropp">
                        <img className="item-content-box item-block image img-lazy" data-at="image" alt="" src={TickPng}/>
                      </div>
                    </div>
                    <div className="widget item-absolute headline  " id="element-879" data-at="headline">
                      <div className="contents">
                        <h1>
                          <span className="x_99190cd2"><span className="x_f9a61538">Agile practices interweaved in daily schedule</span></span>
                        </h1>
                      </div>
                    </div>
                    <div className="widget item-absolute  " id="element-946">
                      <div className="contents cropped item-block" data-at="image-cropp">
                        <img className="item-content-box item-block image img-lazy" data-at="image" alt="" src={TickPng}/>
                      </div>
                    </div>
                    <div className="widget item-absolute headline  " id="element-947" data-at="headline">
                      <div className="contents">
                        <h1>
                          <span className="x_225e04ca"><span className="x_f9a61538">Instructor led virtual classroom sessions</span></span>
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="section section-relative " id="page-block-4nquya832kw" data-at="section">
                <div className="section-holder-border item-block item-absolute" data-at="section-border" />
                <div className="section-holder-overlay item-block item-absolute" data-at="section-overlay" />
                <div className="section-block">
                  <div className="section-inner section-fit section-relative">
                    <div className="widget item-absolute headline  " id="element-880" data-at="headline">
                      <div className="contents">
                        <h1>
                          <span className="x_82ea7ee4 x_52f6981f"><span className="x_b0c52866">Topics Covered</span></span>
                        </h1>
                      </div>
                    </div>
                    <div className="widget item-absolute  " id="element-1029">
                      <div className="contents cropped item-block" data-at="image-cropp">
                        <img className="item-content-box item-block image img-lazy" data-at="image" alt="" src={TickPng}/>
                      </div>
                    </div>
                    <div className="widget item-absolute headline  " id="element-883" data-at="headline">
                      <div className="contents">
                        <h1>
                          <span className="x_5e4484a5 x_efd3fa39"><span className="x_f9a61538">Agile practices</span></span>
                        </h1>
                      </div>
                    </div>
                    <div className="widget item-absolute  " id="element-887">
                      <div className="contents cropped item-block" data-at="image-cropp">
                        <img className="item-content-box item-block image img-lazy" data-at="image" alt="" src={TickPng}/>
                      </div>
                    </div>
                    <div className="widget item-absolute headline  " id="element-889" data-at="headline">
                      <div className="contents">
                        <h1>
                          <span className="x_5e4484a5 x_efd3fa39"><span className="x_f9a61538">Spring boot&nbsp;</span></span>
                        </h1>
                      </div>
                    </div>
                    <div className="widget item-absolute  " id="element-892">
                      <div className="contents cropped item-block" data-at="image-cropp">
                        <img className="item-content-box item-block image img-lazy" data-at="image" alt="" src={TickPng}/>
                      </div>
                    </div>
                    <div className="widget item-absolute headline  " id="element-894" data-at="headline">
                      <div className="contents">
                        <h1>
                          <span className="x_5e4484a5 x_efd3fa39"><span className="x_f9a61538">Javascript&nbsp;</span></span>
                        </h1>
                      </div>
                    </div>
                    <div className="widget item-absolute  " id="element-897">
                      <div className="contents cropped item-block" data-at="image-cropp">
                        <img className="item-content-box item-block image img-lazy" data-at="image" alt="" src={TickPng}/>
                      </div>
                    </div>
                    <div className="widget item-absolute headline  " id="element-899" data-at="headline">
                      <div className="contents">
                        <h1>
                          <span className="x_5e4484a5 x_da6ad2be"><span className="x_f9a61538">Cloud concepts (AWS)</span></span>
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="section section-relative " id="page-block-40r3alux4en" data-at="section">
                <div className="section-holder-border item-block item-absolute" data-at="section-border" />
                <div className="section-holder-overlay item-block item-absolute" data-at="section-overlay" />
                <div className="section-block">
                  <div className="section-inner section-fit section-relative">
                    <div className="widget item-absolute  " id="element-926">
                      <div className="contents cropped item-block" data-at="image-cropp">
                      </div>
                    </div>
                    <div className="widget item-absolute headline  " id="element-902" data-at="headline">
                      <div className="contents">
                        <h1>
                          <span className="x_82ea7ee4 x_52f6981f"><span className="x_201ff7b6">Training Partner -</span></span><span className="x_82ea7ee4 x_52f6981f"><strong><span className="x_201ff7b6">Manipal Global Skills Academy</span></strong></span>
                        </h1>
                      </div>
                    </div>
                    <div className="widget item-absolute headline  " id="element-904" data-at="headline">
                      <div className="contents">
                        <h1>
                          <span className="x_c3a17f25 x_87ddc26c"><span className="x_f9a61538">Manipal Global is India's leading talent development and employee productivity solutions provider. Established in 2008, the Academy has trained over 200,000 professionals for 50+ leading banks, insurance providers, NBFCs, fintech companies and industry bodies.&nbsp;</span></span>
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="section section-relative " id="page-block-oebk4cv20c" data-at="section">
                <div className="section-holder-border item-block item-absolute" data-at="section-border" />
                <div className="section-holder-overlay item-block item-absolute" data-at="section-overlay" />
                <div className="section-block">
                  <div className="section-inner section-fit section-relative">
                    <div className="widget item-absolute headline  " id="element-928" data-at="headline">
                      <div className="contents">
                        <h1>
                          <span className="x_82ea7ee4 x_52f6981f"><span className="x_f2074b6c">About&nbsp;</span></span><span className="x_82ea7ee4 x_52f6981f"><span className="x_f2074b6c"><strong>AXIS Bank</strong></span></span>
                        </h1>
                      </div>
                    </div>
                    <div className="widget item-absolute headline  " id="element-937" data-at="headline">
                      <div className="contents">
                        <h1>
                          <span className="x_c3a17f25 x_87ddc26c"><span className="x_9e944260">Axis Bank is the third largest private sector bank in India. The Bank offers the entire spectrum of financial services to customer segments covering Large and Mid-Corporates, MSME, Agriculture and Retail Businesses. Axis Bank is one of the first new generation private sector banks to have begun operations in 1994. 
                            </span></span><span className="x_c3a17f25 x_87ddc26c"><span className="x_9e944260"><br /></span></span><span className="x_c3a17f25 x_87ddc26c"><span className="x_9e944260">Axis Bank has been a neighbourhood bank striving to serve a billion lives everyday in a meaningful and humane manner. Trust and customer centricity have always been the hallmark of the Bank's association with its customers.</span></span>
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="section section-relative " id="page-block-48wgofo2lw4" data-at="section">
                <div className="section-holder-border item-block item-absolute" data-at="section-border" />
                <div className="section-holder-overlay item-block item-absolute" data-at="section-overlay" />
                <div className="section-block">
                  <div className="section-inner section-fit section-relative">
                    <div className="widget item-absolute  " id="element-1034">
                      <a href="https://forms.gle/6mzLg1xHVGtL4Une8" id="link-fyyoy8cew1l" className="onpage-link btn    item-block" data-at="button" data-link-fyyoy8cew1l>
                        Join the Program
                      </a>
                    </div>
                    <div className="widget item-absolute paragraph  " id="element-954" data-at="paragraph">
                      <div className="contents">
                        <p className="x_1925a137 x_7df451b3"><span className="x_b0c52866">FAQ's</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="section section-relative " id="page-block-re0bbw9rwq" data-at="section">
                <div className="section-holder-border item-block item-absolute" data-at="section-border" />
                <div className="section-holder-overlay item-block item-absolute" data-at="section-overlay" />
                <div className="section-block">
                  <div className="section-inner section-fit section-relative">
                    <div className="widget item-absolute  " id="element-955">
                      <div className="contents html-widget__text-center " data-at="html">
                        <ul className="tabs">
                          <li className="active" rel="tab1" style={{borderLeft: '0px solid #ffffff'}}>ABOUT THE PROGRAM</li>
                          <li rel="tab2">ABOUT THE JOB</li>
                          <li rel="tab3">ON-THE-JOB TRAINING &amp; INTERNSHIP</li>
                          <li rel="tab4" style={{borderRight: '0px solid #ffffff'}}>PROGRAM FEE &amp; POLICIES</li>
                        </ul>
                        <br />
                        <div className="tab_container">
                          <h3 className="tab_drawer_heading" rel="tab1">ABOUT THE PROGRAM</h3>
                          <div id="tab1" className="tab_content">
                            <button className="accordion">What is the program structure?</button>
                            <div className="panel show" style={{fontSize: '15px'}}><br />
                              <p>It is an 18-week program comprising  11 weeks of online training and 7 weeks of live online project. Post the successful completion of the training program, the candidate will join Axis Bank as Deputy Manager, IT.
                                <br />
                                <br />
                              </p>
                            </div>
                            <br />
                            <button className="accordion">Who is eligible to join the program?
                            </button>
                            <div className="panel" style={{fontSize: '15px'}}><br />
                              <p>Science and Engineering (BE/BTech) graduates from any branch and MCAs. Should be a graduate of 2017, 2018, 2019, 2020 and 2021 batches.<br /><br />
                              </p>
                            </div>
                            <br />
                            <button className="accordion">Does this program offer an assured job? If yes – are there any pre-conditions to it?</button>
                            <div className="panel" style={{fontSize: '15px'}}><br />
                              <p>Yes, the program offers an assured job, however that is subject to the participant successfully completing the training.
                                <br /><br />
                              </p>
                            </div>
                            <br />
                            <button className="accordion">How do I get enrolled for the program?
                            </button>
                            <div className="panel" style={{fontSize: '15px'}}><br />
                              <p>Refer to Apply now tab on this page. 
                                <br />
                                <br />
                              </p>
                            </div>
                            <br />
                            <button className="accordion">What is the selection process for the program?</button>
                            <div className="panel" style={{fontSize: '15px'}}><br />
                              Stage 1 – Online Proctored-Assessment<br />
                              Stage 2 – Interview with Manipal Academic Team <br />
                              Stage 3 – Interview with Axis Bank <br />
                              Stage 4 – 18-week online training program with Manipal Global Academy of BFSI <br />
                              Stage 5 – Join Axis Bank in your dream role <br />
                              <br />
                              <br />
                              <p />
                            </div>
                            <br />
                            <button className="accordion">What is the duration of the program?</button>
                            <div className="panel" style={{fontSize: '15px'}}><br />
                              Duration of the program is 18-weeks (11 weeks of online training and 7 weeks of live online     project). The first batch is slated to commence in August, 2020.
                              <br />
                              <br />
                              <p />
                            </div>
                            <br />
                            <button className="accordion">What is the duration of the online proctored test and what areas are covered in the test?</button>
                            <div className="panel" style={{fontSize: '15px'}}><br />Functional Competency Assessment
                              <table>
                                <tbody><tr>
                                    <th>Section Name</th>
                                    <th>No. of Items</th>
                                    <th>Duration (mins)</th>
                                  </tr>
                                  <tr>
                                    <td>Verbal Ability</td>
                                    <td>10</td>
                                    <td>10</td>
                                  </tr>
                                  <tr>
                                    <td>Thinking Ability</td>
                                    <td>10</td>
                                    <td>20</td>
                                  </tr>
                                  <tr>
                                    <td>Programming Ability</td>
                                    <td>20</td>
                                    <td>30</td>
                                  </tr>
                                  <tr>
                                    <td>Code Correction</td>
                                    <td>1</td>
                                    <td>15</td>
                                  </tr>
                                  <tr>
                                    <td>Coding (Short)
                                    </td>
                                    <td>1</td>
                                    <td>15</td>
                                  </tr>
                                  <tr>
                                    <td>Coding (Long)</td>
                                    <td>1</td>
                                    <td>30</td>
                                  </tr>
                                  <tr>
                                    <td>Total Duration (2 hr)</td>
                                    <td />
                                    <td>120</td>
                                  </tr>
                                </tbody></table><br />
                              <br />Behavioural Competency Assessment
                              <table>
                                <tbody><tr>
                                    <th>Section Name</th>
                                    <th>No. of Items</th>
                                    <th>Duration(mins)</th>
                                  </tr>
                                  <tr>
                                    <td>Willingness to Learn</td>
                                    <td>40</td>
                                    <td>20</td>
                                  </tr>
                                  <tr>
                                    <td>Emotional Intelligence</td>
                                    <td>40</td>
                                    <td>25</td>
                                  </tr>
                                  <tr>
                                    <td>Total Duration</td>
                                    <td />
                                    <td>45</td>
                                  </tr>
                                </tbody></table><br />
                            </div>
                            <br />
                            <button className="accordion">What documents are required for enrolment in the program?</button>
                            <div className="panel" style={{fontSize: '15px'}}><br />
                              <p>
                                i. CV/Resume <br />
                                ii. Class X, XII, Graduation/Post Graduation Marksheets/Certificate <br />
                                iii. Experience letter of previous employer if any <br />
                                iv. PAN Card <br />
                                v. Aadhar Card <br />
                                <br /><br /> </p>
                            </div>
                            <br />
                            <button className="accordion">What is the program fee?</button>
                            <div className="panel" style={{fontSize: '15px'}}><br />
                              <p>The total program fee is INR 2,50,000 + taxes. Laptop will be provided for the course, charges on actuals (not included in program fees)
                                <br /> <br />
                              </p>
                            </div>
                            <br />
                            <button className="accordion">Will I get a loan for the program fee?</button>
                            <div className="panel" style={{fontSize: '15px'}}><br />
                              <p>Yes, Loans are available. However, loan availability is subject to approval as per the bank’s policy.
                                <br /> <br />
                              </p>
                            </div>
                            <br />
                            <button className="accordion">Is there any application fee for the program?
                            </button>
                            <div className="panel" style={{fontSize: '15px'}}><br />
                              <p>Yes, there is a non-refundable application fee of INR 499 for the program.
                                <br /> <br />
                              </p>
                            </div>
                            <br />
                            <button className="accordion">Is there any registration fee I need to pay to join the program? </button>
                            <div className="panel" style={{fontSize: '15px'}}><br />
                              <p>Yes, post selection you are required to deposit registration fee of INR 25,000 to block your seat for the program. Remaining fees to be deposited before start of the program.
                                <br /><br />
                              </p>
                            </div>
                            <br />
                            <button className="accordion">I am an undergraduate, can I enrol for the program?</button>
                            <div className="panel" style={{fontSize: '15px'}}><br />
                              <p>No – this program is only for engineering graduates and MCAs’ of 2017,2018,2019 and 2020 batches.
                                <br /><br />
                              </p>
                            </div>
                            <br />
                            <button className="accordion">Is there any certificate post successful completion of this program? Who will give the certificate?</button>
                            <div className="panel" style={{fontSize: '15px'}}><br />
                              <p>Yes, you will get a certificate of training from Manipal Global post successful completion of the training.
                                <br /><br />
                              </p>
                            </div>
                            <br />
                            <button className="accordion">What happens if I do not complete the program?
                            </button>
                            <div className="panel" style={{fontSize: '15px'}}><br />
                              <p>In case you do not complete the 18-week training program, then the final job offer will be withheld.
                                <br /><br />
                              </p>
                            </div>
                            <br />
                          </div>
                          {/* #tab1 */}
                          <h3 className="tab_drawer_heading" rel="tab2">ABOUT THE JOB</h3>
                          <div id="tab2" className="tab_content">
                            <button className="accordion" data-toggle="collapse">Will I be an Axis Bank employee? </button>
                            <div className="panel show" style={{fontSize: '15px'}}><br />
                              <p>Yes, on successful completion of the program, you will be offered a job on the payroll of Axis Bank as a deputy manager in the IT vertical.
                                <br />
                                <br />
                              </p>
                            </div>
                            <br />
                            <button className="accordion" data-toggle="collapse">What is the description of the job being offered through this program?
                            </button>
                            <div className="panel " style={{fontSize: '15px'}}><br />
                              <p>You will land a job at Axis Bank in any of these four roles<br />
                                i. BA Product Owner<br />
                                Develop applications using a range of different technologies (Java and JavaScript)<br />
                                ii. Full stack developer<br />
                                Oversee automation of all manual tasks for the building and deployment of codes and data<br />
                                iii. Infra and Dev Ops lead<br />
                                Be responsible for ensuring that the final product observes the company’s quality standards<br />
                                iv. Quality Assurance<br />
                                Ensure that the solutions stay in line with the product roadmap and business goals
                                <br />
                                <br />
                              </p>
                            </div>
                            <br />
                            <button className="accordion">What will be my designation and salary?
                            </button>
                            <div className="panel" style={{fontSize: '15px'}}><br />
                              <p>You will be offered a designation of Deputy Manager, IT after the successful completion of the training program and your salary will be INR 8.00 LPA.
                                <br />
                                <br />
                              </p>
                            </div>
                            <br />
                            <button className="accordion">Who will issue the job offer?
                            </button>
                            <div className="panel" style={{fontSize: '15px'}}><br />
                              <p>Axis Bank will issue the provisional job offer
                                <br /> <br />
                              </p>
                            </div>
                            <br />
                            <button className="accordion">What will be my work location? 
                            </button>
                            <div className="panel" style={{fontSize: '15px'}}><br />
                              <p>The hiring is for Bangalore or Mumbai location
                                <br />
                                <br />
                              </p>
                            </div>
                            <br />
                            <button className="accordion">Can I get transferred to a different location?
                            </button>
                            <div className="panel" style={{fontSize: '15px'}}><br />
                              <p>You can be transferred anywhere at Axis Bank’s discretion, depending on the company’s requirements
                                <br />
                                <br />
                              </p>
                            </div>
                            <br />
                            <button className="accordion">Who will I report into?
                            </button>
                            <div className="panel" style={{fontSize: '15px'}}><br />
                              <p>You will report to the BU Head at Axis Bank
                                <br />
                                <br />
                              </p>
                            </div>
                            <br />
                            <button className="accordion">Will I be eligible for annual salary increment after I join? 
                            </button>
                            <div className="panel" style={{fontSize: '15px'}}><br />
                              <p>Yes, you will be part of the annual performance appraisal process and will be eligible for annual increase based on performance
                                <br /><br />
                              </p>
                            </div>
                            <br />
                            <button className="accordion">What will be the compensation?</button>
                            <div className="panel" style={{fontSize: '15px'}}><br />
                              <p>Your compensation will be INR 8.00 LPA. Other than this you will be eligible for medical and life insurance and other perks and benefits applicable as per banks policy.
                                <br />
                                <br />
                              </p>
                            </div>
                            <br />
                            <button className="accordion">Is there any service bond?</button>
                            <div className="panel" style={{fontSize: '15px'}}><br />
                              <p>No, there is no service bond.<br /> <br />
                              </p>
                            </div>
                            <br />
                            <button className="accordion">Is there a probation period post joining?</button>
                            <div className="panel" style={{fontSize: '15px'}}><br />
                              <p>Yes, there is a probation period of 6 months 
                                <br /><br />
                              </p>
                            </div>
                            <br />
                          </div>
                          {/* #tab2 */}
                          <h3 className="tab_drawer_heading" rel="tab3">ON-THE-JOB TRAINING &amp; INTERNSHIP</h3>
                          <div id="tab3" className="tab_content">
                            <button className="accordion">Where will the training be conducted and for how long?</button>
                            <div className="panel show" style={{fontSize: '15px'}}><br />
                              <p>The entire training will be online, and the training duration is 18 weeks (11 weeks of online training + 7 weeks of live online project) 
                                <br /> <br />
                              </p>
                            </div>
                            <br />
                            <button className="accordion">Will I be paid during the training?
                            </button>
                            <div className="panel" style={{fontSize: '15px'}}><br />
                              <p>No, you will not be paid during the training
                                <br /> <br />
                              </p>
                            </div>
                            <br />
                            <button className="accordion">What happens if I don’t complete my training?
                            </button>
                            <div className="panel" style={{fontSize: '15px'}}><br />
                              <p>In the event of you not successfully completing the training, the final job will be withheld.
                                <br /> <br />
                              </p>
                            </div>
                            <br />
                          </div>
                          {/* #tab3 */}
                          {/* #tab4 */} 
                          <h3 className="tab_drawer_heading" rel="tab4">PROGRAM FEE &amp; POLICIES</h3>
                          <div id="tab4" className="tab_content">
                            <button className="accordion">What is the total fee of this program? </button>
                            <div className="panel show" style={{fontSize: '15px'}}><br />
                              <p>The total program fee is INR 2,50,000 + taxes.
                                Laptop will be provided for the course, charges on actuals (not included in program fees)
                                <br />
                                <br />
                              </p>
                            </div>
                            <br />
                            <button className="accordion">Is there any other fee, other than program fee involved?
                            </button>
                            <div className="panel" style={{fontSize: '15px'}}><br />
                              <p>Apart from the application fee and the program fee, laptop will be provided, charges on actuals. 
                                <br /><br />
                              </p>
                            </div>
                            <br />
                            <button className="accordion">How will I be paid back the amount?</button>
                            <div className="panel" style={{fontSize: '15px'}}><br />
                              <p>Axis Bank does not payback the program fee.
                                <br /><br />
                              </p>
                            </div>
                            <br />
                            <button className="accordion">What all does my program fee cover? </button>
                            <div className="panel" style={{fontSize: '15px'}}><br />
                              <p>The program fee includes 11 weeks of online training + 7 weeks of online project training.<br /><br />
                              </p>
                            </div>
                            <br />
                            <button className="accordion">When do I make the payment? </button>
                            <div className="panel" style={{fontSize: '15px'}}><br />
                              <p>Once you clear all the interview rounds, Axis Bank HR will send you a provisional offer letter after which you will be asked to pay a registration amount of INR 10,000 to Manipal Global Education Services. You must pay the balance amount before your online training starts.
                                <br /><br />
                              </p>
                            </div>
                            <br />
                            <button className="accordion">Do I have to pay the entire program fee in single payment?
                            </button>
                            <div className="panel" style={{fontSize: '15px'}}><br />
                              <p>No, you have the option of booking your seat by paying only INR. 25,000 and the balance to be arranged by self-funding or through loan. 
                                <br /><br />
                              </p>
                            </div>
                            <br />
                          </div>
                          {/* #tab5 */} 
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="section section-relative " id="page-block-0hkn14op15hm" data-at="section">
                <div className="section-holder-border item-block item-absolute" data-at="section-border" />
                <div className="section-holder-overlay item-block item-absolute" data-at="section-overlay" />
                <div className="section-block">
                  <div className="section-inner section-fit section-relative">
                    <div className="widget item-absolute headline  " id="element-1009" data-at="headline">
                      <div className="contents">
                        <h1>
                          <span className="x_9317fdfd x_5e07e3a7"><span className="x_f2074b6c"><strong>Get In Touch With Us</strong></span></span>
                        </h1>
                      </div>
                    </div>
                    <div className="widget item-absolute headline  " id="element-1014" data-at="headline">
                      <div className="contents">
                        <h1>
                          <span className="x_8ae9aa76 x_b6c3675a"><span className="x_f2074b6c"><a href="tel:+918951869984" id="link-goi1s1yvfyu" aria-label="call" data-link-goi1s1yvfyu className="url-link">+91 </a>7200696023</span></span>
                        </h1>
                      </div>
                    </div>
                    <div className="widget item-absolute  " id="element-1015">
                      <div className="contents cropped item-block" data-at="image-cropp">
                        <img className="item-content-box item-block image img-lazy" data-at="image" alt="" src={PhonePng} />
                      </div>
                    </div>
                    <div className="widget item-absolute headline  " id="element-1011" data-at="headline">
                      <div className="contents">
                        <h1>
                          <span className="x_8ae9aa76 x_b6c3675a"><span className="x_f2074b6c"><a href="http://mailnto:jobs.mgsa@jobbcart.com/" id="link-8p4k6a6q5s2" target="_blank" aria-label="mail" data-link-8p4k6a6q5s2 className="url-link">jobs.mgsa@jobbcart.com</a></span></span>
                        </h1>
                      </div>
                    </div>
                    <div className="widget item-absolute  " id="element-1012">
                      <div className="contents cropped item-block" data-at="image-cropp">
                        <img className="item-content-box item-block image img-lazy" data-at="image" alt="" src={EmailPng} />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="section section-relative " id="page-block-pni8dr5epqp" data-at="section">
                <div className="section-holder-border item-block item-absolute" data-at="section-border" />
                <div className="section-holder-overlay item-block item-absolute" data-at="section-overlay" />
                <div className="section-block">
                  <div className="section-inner section-fit section-relative">
                    <div className="widget item-absolute headline  " id="element-658" data-at="headline">
                      {/* <div className="contents">
                        <h1>
                          <span className="x_48aa50a2 x_2f24d43a"><span className="x_1795d04c">Copyright @Manipal Global Skills Academy</span></span>
                        </h1>
                      </div> */}
                    </div>
                    <div className="widget item-absolute headline  " id="element-1025" data-at="headline">
                      <div className="contents">
                        <h1>
                          <span className="x_4cb1d84e x_81835c21"><a href="https://drive.google.com/file/d/1YhY8e4YAEQb5wBtokLT1-tZnQT6FrSSO/view?usp=sharing" id="link-n24w10d4m28" target="_blank" aria-label="P&P" data-link-n24w10d4m28 className="url-link"><span className="x_f2074b6c">Privacy Policy</span></a></span>
                        </h1>
                      </div>
                    </div>
                    <div className="widget item-absolute headline  " id="element-1024" data-at="headline">
                      <div className="contents">
                        <h1>
                          <span className="x_4cb1d84e x_81835c21"><a href="https://drive.google.com/file/d/1t84FHk_Y8sf0BOhJIi_EZtrMXY-Aftc0/view?usp=sharing" id="link-prkjum8ss2h" target="_blank" aria-label="T&C" data-link-prkjum8ss2h className="url-link"><span className="x_f2074b6c">Terms &amp; Conditions</span></a></span>
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </main>
            {/* Workspace Level Script Footer */}
            {/* end Workspace Level Script Footer */}
            {/* custom FOOTER code*/}
            {/* end custom FOOTER code*/}
            {/* Generated at: 2022-09-21T17:08:00.593Z */}
            {/*
    
    */}
            {/* Mirrored from upskill.manipalbfsi.com/axisbank by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 23 Sep 2022 18:04:00 GMT */}
          </div>
  )
}

export default AxisBankSubPage1