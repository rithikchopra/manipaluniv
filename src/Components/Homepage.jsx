import React from 'react'
import '../Styles/Homepage.css'
import '../Styles/PopupStyles.scss'
import ManipalLogopng from '../Assets/ManipalLogopng.png'
import T2SLogopng from '../Assets/T2SLogopng.png'
import manipalUnivCampusResized from '../Assets/manipalUnivCampusResized.png'
import manipalUnivCampusResized2 from '../Assets/manipalUnivCampusResized2.png'
import ilovemanipalResizedpng from '../Assets/ilovemanipalResizedpng.png' 
import Popup from './Popup'
import { useEffect } from 'react'
import $ from 'jquery';

function Homepage({displayOverlay}) {
    useEffect(()=>{
        $('#prev').on('click', function() {
            $('.row').animate({
              scrollLeft: '-=100'
            }, 300, 'swing');
          });
          
          $('#next').on('click', function() {
            $('.row').animate({
              scrollLeft: '+=100'
            }, 300, 'swing');
          });
    });
    function on() {
        document.getElementById("overlay").style.display = "block";
      }
      
      function off() {
        document.getElementById("overlay").style.display = "none";
      }

  return (
    <div style={{display: displayOverlay===true? "none":""}}>

        <div class="navigation">
            <input type="checkbox" class="navigation__checkbox" id="navi-toggle" />
            <label for="navi-toggle" class="navigation__button">
                <span class="navigation__icon">
                    &nbsp;
                </span>
            </label>
            <div class="navigation__background"></div>
            <nav class="navigation__nav">
                <ul class="navigation__list">
                    <li class="navigation__item"><a href="#popup1" class="navigation__link"> <span>01</span> Axis Bank - Java T2S</a></li>
                    <li class="navigation__item"><a href="#popup2" class="navigation__link"> <span>02</span> IDFC - SalesForce T2S</a></li>
                    <li class="navigation__item"><a href="#popup3" class="navigation__link"> <span>03</span> HDFC - VRM T2S</a></li>
                    <li class="navigation__item"><a href="#popup4" class="navigation__link"> <span>04</span> Tech Mahindra - SalesForce T2S</a></li>
                    <li class="navigation__item"><a href="#popup5" class="navigation__link"> <span>05</span> Axis - FullStack T2S</a></li>
                    <li class="navigation__item"><a href="#popup6" class="navigation__link"> <span>06</span> IDFC - Java T2S</a></li>
                </ul>
            </nav>

        </div>

        <header class="header">
            <div class="header__logoBox">
                <img src={ManipalLogopng} alt="logo" class="header__logo" />
            </div>
            <div className='header__logoBox1'>
                <img src={T2SLogopng} alt="logo" class="header__logo" />
            </div>
            <div class="header__textBox">
                <h1 class="headingPrimary">
                    <span class="headingPrimary--main">Manipal University</span>
                    <span class="headingPrimary--sub">T2S</span>
                </h1>
                <a href="#" class="btn btn--white btn--animated">Contact Us</a>
            </div>
        </header>

        <main>
            <section class="section-about">
                <div class="u-center-text u-margin-bottom-large">
                    <h2 class="heading-secondary">
                        Exciting courses for the Next-Gen
                    </h2>
                </div>
                <div class="row">
                    <div class="col-1-of-2">
                        <h3 class="heading-tertiary u-margin-bottom-small">
                            You Are going to fall in love with our courses
                        </h3>
                        <p class="paragraph">
                             We follow choice-based credit system, where students are free to choose their courses. Our curriculum gets revamped from time to time through feedbacks from Students and Industry.
                        </p>
                        <h3 class="heading-tertiary u-margin-bottom-small">
                            Learning experience like you never had before
                        </h3>
                        <p class="paragraph">
                        We are committed to excellence with a holistic approach and have consistently maintained highest standards. We also earnestly endeavour to be among the best and utilize opputunities for the overall improvment of the higher education and training. 
                        </p>
                        <a href="#" class="btn-text">Learn more &rarr;</a>
                    </div>
                    <div class="col-1-of-2">
                        <div class="composition">
                            <img src={ilovemanipalResizedpng} alt="Photo 1"
                                class="composition__photo composition__photo--p1" />
                            <img src={manipalUnivCampusResized2} alt="Photo 2"
                                class="composition__photo composition__photo--p2" />
                            <img src={manipalUnivCampusResized} alt="Photo 3"
                                class="composition__photo composition__photo--p3" />
                        </div>
                    </div>
                </div>
            </section>

            <section class="features">
                <div class="row">
                    <div class="col-1-of-4">
                        <div class="feature-card">
                            <i class="feature-card__icon icon-basic-world"></i>
                            <h3 class="heading-tertiary u-margin-bottom-small">
                                Best Industrial Oppurtunities
                            </h3>
                            <p class="feature-card__text">
                                Great companies like Axis Bank, IDFC Bank, HDFC Bank, Tech Mahindra with great packages upon completion.
                            </p>
                        </div>
                    </div>
                    <div class="col-1-of-4">
                        <div class="feature-card">
                            <i class="feature-card__icon icon-basic-compass"></i>
                            <h3 class="heading-tertiary u-margin-bottom-small">
                                Attend Online
                            </h3>
                            <p class="feature-card__text">
                                Study from Home at your own comfort.
                            </p>
                        </div>
                    </div>
                    <div class="col-1-of-4">
                        <div class="feature-card">
                            <i class="feature-card__icon icon-basic-map"></i>
                            <h3 class="heading-tertiary u-margin-bottom-small">
                                Find your Way
                            </h3>
                            <p class="feature-card__text">
                                Make it possible to enjoy quality-education without even leaving home.
                            </p>
                        </div>
                    </div>
                    <div class="col-1-of-4">
                        <div class="feature-card">
                            <i class="feature-card__icon icon-basic-heart"></i>
                            <h3 class="heading-tertiary u-margin-bottom-small">
                                Start building your IT skills
                            </h3>
                            <p class="feature-card__text">
                               Industry demanding courses such as SalesForce, Java, Fullstack program .etc are available!
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section-tours" id="section-tours">
                <div class="u-center-text u-margin-bottom-large">
                    <h2 class="heading-secondary">
                        Most popular tours
                    </h2>
                </div>
                <div class="row">
                    <div class="col-1-of-3">
                        <div class="card">
                            <div class="card__side card__side--front">
                                <div class="card__picture card__picture-1">

                                </div>
                                <h4 class="card__heading">
                                    <span class="card__heading-span card__heading-span--1">Axis Bank - Java</span>
                                </h4>
                                <div class="card__details">
                                    <ul>
                                        <li>Axis Bank</li>
                                        <li>Deputy Manager IT</li>
                                        <li>CTC of ₹ 6 Lakh</li>
                                        <li>B.E. / B.Tech / B.Sc Graduates</li>
                                        <li>Training Period : 2 Months</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="card__side card__side--back card__side--back-1">
                                <div class="card__cta">
                                    <div class="card__price-box">
                                        <p class="card__price-only">Only</p>
                                        <p class="card__price-value">₹99,000 + GST</p>
                                    </div>
                                    <a href="#popup1" class="btn btn--white">Book Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-1-of-3">
                        <div class="card">
                            <div class="card">
                                <div class="card__side card__side--front">
                                    <div class="card__picture card__picture-2">

                                    </div>
                                    <div class="card__heading">
                                        <span class="card__heading-span card__heading-span--2">IDFC Bank - SalesForce</span>
                                    </div>
                                    <div class="card__details">
                                        <ul>
                                            <li>IDFC First Bank</li>
                                            <li>Software Developer - IT</li>
                                            <li>CTC of ₹ 9.6 Lakh</li>
                                            <li>B.E. / B.Tech / BCA / BSc-IT / BSc / CA / MSc / MCA</li>
                                            <li>Training Period : 8 - 10 Weeks</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="card__side card__side--back card__side--back-2">
                                    <div class="card__cta">
                                        <div class="card__price-box">
                                            <p class="card__price-only">Only</p>
                                            <p class="card__price-value">₹2,00,000 + GST</p>
                                        </div>
                                        <a href="#popup2" class="btn btn--white">Book Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-1-of-3">
                        <div class="card">
                            <div class="card">
                                <div class="card__side card__side--front">
                                    <div class="card__picture card__picture-3">

                                    </div>
                                    <div class="card__heading">
                                        <span class="card__heading-span card__heading-span--3">HDFC Bank - VRM</span>
                                    </div>
                                    <div class="card__details">
                                        <ul>
                                            <li>HDFC Bank</li>
                                            <li>VRM (Virtual relationship Manager) / Asst.Manager</li>
                                            <li>CTC of ₹ 4.63 Lakh</li>
                                            <li>Graduation - Any Stream</li>
                                            <li>Training Period : 45 Days</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="card__side card__side--back card__side--back-3">
                                    <div class="card__cta">
                                        <div class="card__price-box">
                                            <p class="card__price-only">Only</p>
                                            <p class="card__price-value">₹99,000 + GST</p>
                                        </div>
                                        <a href="#popup3" class="btn btn--white">Book Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-1-of-3">
                        <div class="card">
                            <div class="card">
                                <div class="card__side card__side--front">
                                    <div class="card__picture card__picture-4">

                                    </div>
                                    <div class="card__heading">
                                        <span class="card__heading-span card__heading-span--4">Tech&nbsp;Mahindra SalesForce</span>
                                    </div>
                                    <div class="card__details">
                                        <ul>
                                            <li>Tech Mahindra</li>
                                            <li>SalesForce</li>
                                            <li>CTC of ₹ 4.5 Lakh</li>
                                            <li>B.E / B.Tech / MCA Graduates</li>
                                            <li>Training Period : 12 -14 Weeks</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="card__side card__side--back card__side--back-4">
                                    <div class="card__cta">
                                        <div class="card__price-box">
                                            <p class="card__price-only">Only</p>
                                            <p class="card__price-value">₹1,00,000 + GST</p>
                                        </div>
                                        <a href="#popup4" class="btn btn--white">Book Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-1-of-3">
                        <div class="card">
                            <div class="card__side card__side--front">
                                <div class="card__picture card__picture-1">

                                </div>
                                <h4 class="card__heading">
                                    <span class="card__heading-span card__heading-span--1">Axis Bank - Full Stack</span>
                                </h4>
                                <div class="card__details">
                                    <ul>
                                        <li>Axis Bank</li>
                                        <li>Deputy Manager</li>
                                        <li>CTC of ₹ 8 Lakh</li>
                                        <li>B.E. / B.Tech / BSc-IT / MCA Graduates</li>
                                        <li>Training Period : 18 Weeks</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="card__side card__side--back card__side--back-1">
                                <div class="card__cta">
                                    <div class="card__price-box">
                                        <p class="card__price-only">Only</p>
                                        <p class="card__price-value">₹2,50,000 + GST</p>
                                    </div>
                                    <a href="#popup5" class="btn btn--white">Book Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-1-of-3">
                        <div class="card">
                            <div class="card">
                                <div class="card__side card__side--front">
                                    <div class="card__picture card__picture-2">

                                    </div>
                                    <div class="card__heading">
                                        <span class="card__heading-span card__heading-span--2">IDFC Bank - SalesForce</span>
                                    </div>
                                    <div class="card__details">
                                        <ul>
                                            <li>IDFC First Bank</li>
                                            <li>Java Full Stack Developer</li>
                                            <li>CTC of ₹ 9.6 Lakh</li>
                                            <li>B.E. / B.Tech / BSc-IT / MCA</li>
                                            <li>Training Period : 8 - 10 Weeks</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="card__side card__side--back card__side--back-2">
                                    <div class="card__cta">
                                        <div class="card__price-box">
                                            <p class="card__price-only">Only</p>
                                            <p class="card__price-value">₹2,00,000 + GST</p>
                                        </div>
                                        <a href="#popup6" class="btn btn--white">Book Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <div id="nav">
                    <div id="prev">Prev</div>
                    <div id="next">Next</div>
                </div>
                </div>
                {/* <div class="u-center-text u-margin-bottom-huge">
                    <a href="#section-tours" class="btn btn--green">
                        Discover our tours
                    </a>
                </div> */}
            </section>

            <section class="section-stories">
                <div class="bg-video">
                    <video class="bg-video__content" autoplay muted loop>
                        <source src="https://github.com/yashfalke77/Natours-project/blob/master/images/video.mp4" type="video/mp4" />
                        <source src="images/video.webm" type="video/webm" />
                        Your Browser is not Supported
                    </video>
                </div>
                <div class="u-center-text u-margin-bottom-large">
                    <h2 class="heading-secondary">We make people geniuenly happy</h2>
                </div>

                <div class="row">
                    <div class="story">
                        <figure class="story__shape">
                            <img class="story__img" src="https://raw.githubusercontent.com/yashfalke77/Natours-project/master/images/nat-8.jpg" alt="Person on a tour" />
                            <figcaption class="story__caption">
                                Mery Smith
                            </figcaption>
                        </figure>
                        <div class="story__text">
                            <h3 class="heading-tertiary u-margin-bottom-small">
                                The best learning experience
                            </h3>
                            <p>
                                This was a very immersive and interesting course. I enjoyed this course and the format that it was presented in. To be honest, there is nothing that I disliked about the course.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="story">
                        <figure class="story__shape">
                            <img class="story__img" src="https://raw.githubusercontent.com/yashfalke77/Natours-project/master/images/nat-9.jpg" alt="Person on a tour" />
                            <figcaption class="story__caption">
                                Mery Smith
                            </figcaption>
                        </figure>
                        <div class="story__text">
                            <h3 class="heading-tertiary u-margin-bottom-small">
                                Wow my life is completely different now !!
                            </h3>
                            <p>
                                I really enjoyed taking this course.  To be honest, there is nothing that I disliked about the course. It had the most work to do by far and that is what it made it most-enjoyable.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="u-center-text u-margin-top-huge">
                    <a href="#" class="btn-text">Read all stories &rarr;</a>
                </div>
            </section>

            <section class="section-book">
                <div class="row">
                    <div class="book">
                        <div class="book__form">
                            <form action="" class="form" autocomplete="off">
                                <div class=" u-margin-bottom-medium">
                                    <h2 class="heading-secondary">
                                        Try getting your slot now!
                                    </h2>
                                </div>
                                <div class="form__group">
                                    <input type="text" class="form__input" id="name" placeholder="Full Name" required />
                                    <label for="name" class="form__label">Full Name</label>
                                </div>
                                <div class="form__group">
                                    <input type="email" class="form__input" id="email" placeholder="Email Address" required />
                                    <label for="email" class="form__label">Email Address</label>
                                </div>
                                {/* <div class="form__group u-margin-bottom-medium">
                                    <div class="form__radio-group">
                                        <input type="radio" class="form__radio-input" id="small" name="size" hidden />
                                        <label for="small" class="form__radio-label">
                                            <span class="form__radio-button"></span>
                                            Small tour group
                                        </label>
                                    </div>
                                    <div class="form__radio-group">
                                        <input type="radio" class="form__radio-input" id="large" name="size" hidden />
                                        <label for="large" class="form__radio-label">
                                            <span class="form__radio-button"></span>
                                            Large tour group
                                        </label>
                                    </div>
                                </div> */}

                                <div class="form__group">
                                    <button type="submit" class="btn btn--green">Next Step &rarr;</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <footer class="footer">
            <div class="footer__logo-box" >
                {/* <!-- srcset responsive images for one for low resolution and one for high resolution --> */}
                <img src={ManipalLogopng} style={{paddingRight:"5%"}}/>
                <img src={T2SLogopng} style={{width:"10%"}}/>
            </div>
            {/* <div class="row">
                <div class="col-1-of-2">
                    <div class="footer__navigation">
                        <ul class="footer__list">
                            <li class="footer__items"><a href="" class="footer__link">Company</a></li>
                            <li class="footer__items"><a href="" class="footer__link">Contact us</a></li>
                            <li class="footer__items"><a href="" class="footer__link">Carrers</a></li>
                            <li class="footer__items"><a href="" class="footer__link">Privacy Policy</a></li>
                            <li class="footer__items"><a href="" class="footer__link">Terms</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-1-of-2">
                    <p class="footer__copyright">
                        Built by <a href="#" class="footer__link">Yash Falke</a> for the project. Copyright &copy; by
                        Yash Falke, You 100% are allowed to use this webpage for both personal as well as commercial but
                        NOT to claim as it your design. A credit to the original author is of course highly appreciated!
                    </p>
                </div> */}
            {/* </div> */}
        </footer>

        <Popup/>
        </div>

    // </div>
  )
}

export default Homepage