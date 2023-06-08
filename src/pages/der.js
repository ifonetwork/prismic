import { createClient } from "@/prismicio";
import * as prismic from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicText } from "@prismicio/react";

export default function About({ navigation }) {


    return (
        <div id="wrapper">
            {/* //slider */}
            <section id="slider" class="slider-element swiper_wrapper min-vh-50 min-vh-md-100" data-loop="true" data-autoplay="5000">
                <div class="slider-inner">
                    <div class="swiper-container swiper-parent">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">

                                <div class="container">

                                    <div class="slider-caption slider-caption-right" style={{ maxWidth: '700px' }}>

                                        <div>

                                            <h2 data-animate="flipInX">Team of Experts<span>.</span></h2>

                                            <p class="d-none d-sm-block" data-animate="flipInX" data-delay="500">Our Team of Doctors are specialized in Various Disciplines to make sure you get the Best Treatment.</p>

                                        </div>

                                    </div>

                                </div>

                                <div class="swiper-slide-bg" style={{
                                    backgroundImage: "url('/static/demos/medical/images/slider/1.jpg')"
                                }}></div>

                            </div>

                            <div class="swiper-slide">

                                <div class="container">

                                    <div class="slider-caption">

                                        <div>

                                            <h2 data-animate="zoomIn">Heart<span>Beat</span>.</h2>

                                            <p class="d-none d-sm-block" data-animate="zoomIn" data-delay="500">Care for your Loved Ones from the Experts in the Medical &amp; Hospitality Industry.</p>

                                        </div>

                                    </div>

                                </div>

                                <div class="swiper-slide-bg" style={{ backgroundImage: "url('/static/demos/medical/images/slider/2.jpg')" }}></div>

                            </div>

                        </div>



                    </div>



                </div>

            </section>

            {/* //testimatals */}
            <section id="testimotals">


                <div class="content-wrap">

                    <div class="container">



                        <div class="row col-mb-50 mb-0">

                            <div class="col-sm-6 col-md-4">

                                <div class="feature-box fbox-plain">

                                    <div class="fbox-icon" data-animate="bounceIn">

                                        <a href="#"><i class="icon-medical-i-cardiology"></i></a>

                                    </div>

                                    <div class="fbox-content">

                                        <h3>Intensive Care</h3>

                                        <p>Powerful Layout with Responsive functionality that can be adapted to any screen size. Resize browser to view.</p>

                                    </div>

                                </div>

                            </div>



                            <div class="col-sm-6 col-md-4">

                                <div class="feature-box fbox-plain">

                                    <div class="fbox-icon" data-animate="bounceIn" data-delay="200">

                                        <a href="#"><i class="icon-medical-i-social-services"></i></a>

                                    </div>

                                    <div class="fbox-content">

                                        <h3>Family Planning</h3>

                                        <p>Looks beautiful &amp; ultra-sharp on Retina Screen Displays. Retina Icons, Fonts &amp; all others graphics are optimized.</p>

                                    </div>

                                </div>

                            </div>



                            <div class="col-sm-6 col-md-4">

                                <div class="feature-box fbox-plain">

                                    <div class="fbox-icon" data-animate="bounceIn" data-delay="400">

                                        <a href="#"><i class="icon-medical-i-neurology"></i></a>

                                    </div>

                                    <div class="fbox-content">

                                        <h3>Expert Consultation</h3>

                                        <p>Canvas includes tons of optimized code that are completely customizable and deliver unmatched fast performance.</p>

                                    </div>

                                </div>

                            </div>



                            <div class="col-sm-6 col-md-4">

                                <div class="feature-box fbox-plain">

                                    <div class="fbox-icon" data-animate="bounceIn">

                                        <a href="#"><i class="icon-medical-i-dental"></i></a>

                                    </div>

                                    <div class="fbox-content">

                                        <h3>Dental Sciences</h3>

                                        <p>Powerful Layout with Responsive functionality that can be adapted to any screen size. Resize browser to view.</p>

                                    </div>

                                </div>

                            </div>



                            <div class="col-sm-6 col-md-4">

                                <div class="feature-box fbox-plain">

                                    <div class="fbox-icon" data-animate="bounceIn" data-delay="200">

                                        <a href="#"><i class="icon-medical-i-imaging-root-category"></i></a>

                                    </div>

                                    <div class="fbox-content">

                                        <h3>X-Ray Services</h3>

                                        <p>Looks beautiful &amp; ultra-sharp on Retina Screen Displays. Retina Icons, Fonts &amp; all others graphics are optimized.</p>

                                    </div>

                                </div>

                            </div>



                            <div class="col-sm-6 col-md-4">

                                <div class="feature-box fbox-plain">

                                    <div class="fbox-icon" data-animate="bounceIn" data-delay="400">

                                        <a href="#"><i class="icon-medical-i-ambulance"></i></a>

                                    </div>

                                    <div class="fbox-content">

                                        <h3>24x7 Emergency</h3>

                                        <p>Canvas includes tons of optimized code that are completely customizable and deliver unmatched fast performance.</p>

                                    </div>

                                </div>

                            </div>

                        </div>



                    </div>
                </div>
            </section>


            {/* //form  */}

            <section id="content-contact">

                <div class="section row p-0 align-items-stretch dark mt-4">

                    <div class="col-lg-5"
                        style={{
                            background: "url('/static/demos/medical/images/section-bg.jpg') center center no-repeat; background-size: cover; min-height: 250px;"
                        }}
                    >

                        <div>&nbsp;</div>

                    </div>

                    <div id="booking-appointment-form" class="col-lg-7 p-0">

                        <div class="bg-color form-widget col-padding" data-loader="button">

                            <h2>Book an Appointment.</h2>

                            <div class="form-result"></div>

                            <form class="row mb-0" id="template-medical-form" name="template-medical-form" action="include/form.php" method="post">

                                <div class="form-process">

                                    <div class="css3-spinner">

                                        <div class="css3-spinner-scaler"></div>

                                    </div>

                                </div>

                                <div class="col-md-8 form-group">

                                    <label for="template-medical-name">Name:</label>

                                    <input type="text" id="template-medical-name" name="template-medical-name" class="form-control not-dark required" value="" />

                                </div>

                                <div class="col-md-4 form-group">

                                    <label for="template-medical-phone">Phone:</label>

                                    <input type="text" id="template-medical-phone" name="template-medical-phone" class="form-control not-dark required" value="" />

                                </div>

                                <div class="w-100"></div>

                                <div class="col-md-8 form-group">

                                    <label for="template-medical-email">Email Address:</label>

                                    <input type="email" id="template-medical-email" name="template-medical-email" class="form-control not-dark required" value="" />

                                </div>

                                <div class="col-md-4 form-group">

                                    <label for="template-medical-dob">Date of Birth:</label>

                                    <input type="text" id="template-medical-dob" name="template-medical-dob" class="form-control not-dark required" value="" placeholder="DD/MM/YYYY" />

                                </div>

                                <div class="w-100"></div>

                                <div class="col-md-5">

                                    <div class="row">

                                        <div class="col-12 form-group">

                                            <label for="template-medical-appoint-date">Appointment Date:</label>

                                            <input type="text" id="template-medical-appoint-date" name="template-medical-appoint-date" class="form-control not-dark required" value="" placeholder="DD/MM/YYYY" />

                                        </div>

                                        <div class="col-12 form-group">

                                            <label for="template-medical-second-booking">Booked with us Before?</label><br />

                                            <label class="me-4">

                                                <input type="radio" id="template-medical-second-booking" name="template-medical-second-booking" value="yes" />

                                                Yes

                                            </label>

                                            <label>

                                                <input type="radio" name="template-medical-second-booking" value="no" checked />

                                                No

                                            </label>

                                        </div>

                                    </div>

                                </div>

                                <div class="col-md-7 form-group">

                                    <label for="template-medical-message">Message:</label>

                                    <textarea id="template-medical-message" name="template-medical-message" class="form-control not-dark required" cols="30" rows="5"></textarea>

                                </div>

                                <div class="w-100"></div>

                                <div class="col-12 form-group d-none">

                                    <input type="text" name="template-medical-botcheck" value="" />

                                </div>

                                <div class="col-12 form-group text-end">

                                    <button class="button button-white button-light button-rounded m-0" type="submit" value="submit">Confirm Booking</button>

                                </div>

                                <input type="hidden" name="prefix" value="template-medical-" />

                            </form>



                        </div>

                    </div>

                </div>

                {/* </div> */}
            </section>

            {/* Treatments Offered */}

            <section id="Treatments">

                <div class="content-wrap">

                    <div class="container">



                        <div class="row col-mb-50 mb-0">

                            <div class="col-md-7">

                                <h4>Treatments Offered<span>.</span></h4>



                                <div class="accordion accordion-lg">



                                    <div class="accordion-header">

                                        <div class="accordion-icon">

                                            <i class="accordion-closed bi-check-circle-fill"></i>

                                            <i class="accordion-open bi-x-circle-fill"></i>

                                        </div>

                                        <div class="accordion-title">

                                            Kidney Transplant

                                        </div>

                                    </div>

                                    <div class="accordion-content">Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</div>



                                    <div class="accordion-header">

                                        <div class="accordion-icon">

                                            <i class="accordion-closed bi-check-circle-fill"></i>

                                            <i class="accordion-open bi-x-circle-fill"></i>

                                        </div>

                                        <div class="accordion-title">

                                            Pulmonary Treament

                                        </div>

                                    </div>

                                    <div class="accordion-content">Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Duis mollis, est non commodo luctus. Aenean lacinia bibendum nulla sed consectetur. Cras mattis consectetur purus sit amet fermentum.</div>



                                    <div class="accordion-header">

                                        <div class="accordion-icon">

                                            <i class="accordion-closed bi-check-circle-fill"></i>

                                            <i class="accordion-open bi-x-circle-fill"></i>

                                        </div>

                                        <div class="accordion-title">

                                            Eye Care &amp; Lasik Surgery

                                        </div>

                                    </div>

                                    <div class="accordion-content">Nullam id dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Duis mollis, est non commodo luctus. Aenean lacinia bibendum nulla sed consectetur.</div>



                                    <div class="accordion-header">

                                        <div class="accordion-icon">

                                            <i class="accordion-closed bi-check-circle-fill"></i>

                                            <i class="accordion-open bi-x-circle-fill"></i>

                                        </div>

                                        <div class="accordion-title">

                                            Ear, Nose &amp; Throat

                                        </div>

                                    </div>

                                    <div class="accordion-content">Nullam id dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Duis mollis, est non commodo luctus. Aenean lacinia bibendum nulla sed consectetur.</div>



                                    <div class="accordion-header">

                                        <div class="accordion-icon">

                                            <i class="accordion-closed bi-check-circle-fill"></i>

                                            <i class="accordion-open bi-x-circle-fill"></i>

                                        </div>

                                        <div class="accordion-title">

                                            Cardiology Department

                                        </div>

                                    </div>

                                    <div class="accordion-content">Nullam id dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Duis mollis, est non commodo luctus. Aenean lacinia bibendum nulla sed consectetur.</div>



                                </div>

                            </div>



                            <div class="col-md-5">

                                <h4>Patient Testimonials<span>.</span></h4>

                                <div class="row gy-4">

                                    <div class="col-12">

                                        <div class="row flex-row-reverse g-2">

                                            <div class="col">

                                                <div class="quote-bubble quote-bubble-left mb-3">

                                                    <p>Incidunt deleniti blanditiis quas aperiam recusandae consequatur ullam quibusdam cum libero illo rerum repellendus!</p>

                                                </div>

                                                <h4 class="ps-3 h6 mb-0 fw-bolder">John Doe</h4>

                                                <small class="ps-3 text-muted">Google Inc.</small>

                                            </div>

                                            <div class="col-auto">

                                                <img class="rounded-circle mt-1" src="/static/images/testimonials/1.jpg" width="48" alt="Customer Testimonails" />

                                            </div>

                                        </div>

                                    </div>

                                    <div class="col-12">

                                        <div class="row flex-row-reverse g-2">

                                            <div class="col">

                                                <div class="quote-bubble quote-bubble-left mb-3">

                                                    <p>Seamlessly conceptualize multimedia based web services for optimal human capital. Collaboratively evisculate e-business value.</p>

                                                </div>

                                                <h4 class="ps-3 h6 mb-0 fw-bolder">Alex Whiteman</h4>

                                                <small class="ps-3 text-muted">Amazon Co.</small>

                                            </div>

                                            <div class="col-auto">

                                                <img class="rounded-circle mt-1" src="/static/images/testimonials/2.jpg" width="48" alt="Customer Testimonails" />

                                            </div>

                                        </div>

                                    </div>

                                </div>

                                <div class="w-100 text-end mt-3">

                                    <a href="#" class="button button-mini button-rounded me-0">More Patient Feedbacks...</a>

                                </div>

                            </div>

                        </div>



                    </div>

                </div>

            </section>

            {/* // new */}
            <section id="numbers">

                <div class="content-wrap">

                


                    <div class="section mt-0">

                        <div class="container">



                            <div class="row">

                                <div class="col-lg-3 col-md-6">

                                    <div class="feature-box fbox-outline fbox-dark fbox-effect">

                                        <div class="fbox-icon">

                                            <a href="#"><i class="bi-layers-half i-alt"></i></a>

                                        </div>

                                        <div class="fbox-content">

                                            <div class="counter counter-small"><span data-from="100" data-to="23331" data-refresh-interval="200" data-speed="2500"></span>+</div>

                                            <h5 class="m-0 color">Clients Served</h5>

                                            <div class="d-block d-md-block d-lg-none mb-5"></div>

                                        </div>

                                    </div>

                                </div>



                                <div class="col-lg-3 col-md-6">

                                    <div class="feature-box fbox-outline fbox-dark fbox-effect">

                                        <div class="fbox-icon">

                                            <a href="#"><i class="bi-droplet-half i-alt"></i></a>

                                        </div>

                                        <div class="fbox-content">

                                            <div class="counter counter-small"><span data-from="100" data-to="56841" data-refresh-interval="250" data-speed="2000"></span>+</div>

                                            <h5 class="m-0 color">X-Rays Done</h5>

                                            <div class="d-block d-md-block d-lg-none mb-5"></div>

                                        </div>

                                    </div>

                                </div>



                                <div class="col-lg-3 col-md-6">

                                    <div class="feature-box fbox-outline fbox-dark fbox-effect">

                                        <div class="fbox-icon">

                                            <a href="#"><i class="bi-droplet-half i-alt"></i></a>

                                        </div>

                                        <div class="fbox-content">

                                            <div class="counter counter-small"><span data-from="100" data-to="332" data-refresh-interval="50" data-speed="3000"></span>+</div>

                                            <h5 class="m-0 color">Worldwide Staff</h5>

                                            <div class="d-block d-md-none mb-5"></div>

                                        </div>

                                    </div>

                                </div>



                                <div class="col-lg-3 col-md-6">

                                    <div class="feature-box fbox-outline fbox-dark fbox-effect">

                                        <div class="fbox-icon">

                                            <a href="#"><i class="bi-textarea-t i-alt"></i></a>

                                        </div>

                                        <div class="fbox-content">

                                            <div class="counter counter-small"><span data-from="100" data-to="2213" data-refresh-interval="110" data-speed="3500"></span>+</div>

                                            <h5 class="m-0 color">Lives Saved</h5>

                                        </div>

                                    </div>

                                </div>

                            </div>



                        </div>

                    </div>



        

                </div>

            </section>

            
            {/* // specialists */}
            <section id="specialists">
                <div class="content-wrap">
                    <div class="container">
                        <div class="heading-block text-center border-bottom-0">
                            <h3>Meet our Team of Specialists<span>.</span></h3>

                            <span>We make sure that your Life are in Good Hands.</span>

                        </div>



                        <div id="oc-team" class="owl-carousel team-carousel carousel-widget" data-margin="30" data-nav="true" data-pagi="true" data-items-xs="1" data-items-sm="2" data-items-lg="3" data-items-xl="4">



                            <div class="team">

                                <div class="team-image">

                                    <img src="/static/demos/medical/images/doctors/1.jpg" alt="Dr. John Doe" />

                                </div>

                                <div class="team-desc">

                                    <div class="team-title"><h4>Dr. John Doe</h4><span>Cardiologist</span></div>

                                </div>

                            </div>



                            <div class="team">

                                <div class="team-image">

                                    <img src="/static/demos/medical/images/doctors/2.jpg" alt="Dr. John Doe" />

                                </div>

                                <div class="team-desc">

                                    <div class="team-title"><h4>Dr. Bryan Mcguire</h4><span>Orthopedist</span></div>

                                </div>

                            </div>



                            <div class="team">

                                <div class="team-image">

                                    <img src="/static/demos/medical/images/doctors/3.jpg" alt="Dr. John Doe" />

                                </div>

                                <div class="team-desc">

                                    <div class="team-title"><h4>Dr. Mary Jane</h4><span>Neurologist</span></div>

                                </div>

                            </div>



                            <div class="team">

                                <div class="team-image">

                                    <img src="/static/demos/medical/images/doctors/4.jpg" alt="Dr. John Doe" />

                                </div>

                                <div class="team-desc">

                                    <div class="team-title"><h4>Dr. Silvia Bush</h4><span>Dentist</span></div>

                                </div>

                            </div>



                            <div class="team">

                                <div class="team-image">

                                    <img src="/static/demos/medical/images/doctors/6.jpg" alt="Dr. John Doe" />

                                </div>

                                <div class="team-desc">

                                    <div class="team-title"><h4>Dr. Hugh Baldwin</h4><span>Cardiologist</span></div>

                                </div>

                            </div>



                            <div class="team">

                                <div class="team-image">

                                    <img src="/static/demos/medical/images/doctors/7.jpg" alt="Dr. John Doe" />

                                </div>

                                <div class="team-desc">

                                    <div class="team-title"><h4>Dr. Erika Todd</h4><span>Neurologist</span></div>

                                </div>

                            </div>



                            <div class="team">

                                <div class="team-image">

                                    <img src="/static/demos/medical/images/doctors/8.jpg" alt="Dr. John Doe" />

                                </div>

                                <div class="team-desc">

                                    <div class="team-title"><h4>Dr. Randy Adams</h4><span>Dentist</span></div>

                                </div>

                            </div>



                            <div class="team">

                                <div class="team-image">

                                    <img src="/static/demos/medical/images/doctors/9.jpg" alt="Dr. John Doe" />

                                </div>

                                <div class="team-desc">

                                    <div class="team-title"><h4>Dr. Alan Freeman</h4><span>Eye Specialist</span></div>

                                </div>

                            </div>



                        </div>



                    </div>

                </div>

            </section>

        </div>


    );
}






export async function getStaticProps({ locale, previewData }) {
    const client = createClient({ previewData });
    const navigation = await client.getSingle("navigation", { lang: locale });

    return {
        props: {
            navigation,
        },
    };
}



