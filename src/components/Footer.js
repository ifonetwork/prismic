import * as prismic from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";

import { Bounded } from "./Bounded";

export function Footer({ navigation, settings }) {
  return (
    <footer id="footer" class="bg-contrast-100" style={{
      borderTop: "2px solid rgba(var(--cnvs-contrast-rgb),0.06)"
  }} >

      <div class="container" style={{
          borderBottom: "1px solid rgba(var(--cnvs-contrast-rgb),0.06)"
      }} >




          <div class="footer-widgets-wrap">



              <div class="row gutter-50 col-mb-50">

                  <div class="col-md-8">



                      <div class="widget">

                          <div class="widget-subscribe-form-result"></div>

                          <form id="widget-subscribe-form" action="include/subscribe.php" method="post" class="mb-0 row">

                              <div class="col-lg-9">

                                  <input type="email" id="widget-subscribe-form-email" name="widget-subscribe-form-email" class="form-control required email" placeholder="Enter your Email to Subscribe to our Newsletter" />

                              </div>

                              <div class="col-lg-3">

                                  <button class="button button-rounded m-0 text-center w-100" type="submit">Subscribe</button>

                              </div>

                          </form>



                          <div class="line line-sm"></div>



                          <div class="row col-mb-30">

                              <div class="col-lg-3 col-6 widget_links">

                                  <ul>

                                      <li><a href="#">Home</a></li>

                                      <li><a href="#">About</a></li>

                                      <li><a href="#">FAQs</a></li>

                                      <li><a href="#">Support</a></li>

                                      <li><a href="#">Contact</a></li>

                                  </ul>

                              </div>



                              <div class="col-lg-3 col-6 widget_links">

                                  <ul>

                                      <li><a href="#">Shop</a></li>

                                      <li><a href="#">Portfolio</a></li>

                                      <li><a href="#">Blog</a></li>

                                      <li><a href="#">Events</a></li>

                                      <li><a href="#">Forums</a></li>

                                  </ul>

                              </div>



                              <div class="col-lg-3 col-6 widget_links">

                                  <ul>

                                      <li><a href="#">Corporate</a></li>

                                      <li><a href="#">Agency</a></li>

                                      <li><a href="#">eCommerce</a></li>

                                      <li><a href="#">Personal</a></li>

                                      <li><a href="#">One Page</a></li>

                                  </ul>

                              </div>



                              <div class="col-lg-3 col-6 widget_links">

                                  <ul>

                                      <li><a href="#">Restaurant</a></li>

                                      <li><a href="#">Wedding</a></li>

                                      <li><a href="#">App Showcase</a></li>

                                      <li><a href="#">Magazine</a></li>

                                      <li><a href="#">Landing Page</a></li>

                                  </ul>

                              </div>

                          </div>

                      </div>



                  </div>



                  <div class="col-md-4">



                      <div class="widget">



                          <div class="row col-mb-30">

                              <div class="col-lg-12">

                                  <div class="footer-big-contacts">

                                      <span>Call Us:</span>

                                      (1) 22 55412474

                                  </div>

                              </div>



                              <div class="col-lg-12">

                                  <div class="footer-big-contacts">

                                      <span>Send an Email:</span>

                                      info@canvas.com

                                  </div>

                              </div>

                          </div>



                      </div>



                      <div class="widget subscribe-widget">



                          <div class="row col-mb-30">

                              <div class="col-sm-6 col-md-12 col-lg-6">

                                  <a href="#" class="social-icon bg-contrast-200 h-bg-facebook mb-0 me-3">

                                      <i class="fa-brands fa-facebook-f"></i>

                                      <i class="fa-brands fa-facebook-f"></i>

                                  </a>

                                  <a href="#"><small class="d-block"><strong>Like us</strong><br />on Facebook</small></a>

                              </div>

                              <div class="col-sm-6 col-md-12 col-lg-6">

                                  <a href="#" class="social-icon bg-contrast-200 h-bg-rss mb-0 me-3">

                                      <i class="fa-solid fa-rss"></i>

                                      <i class="fa-solid fa-rss"></i>

                                  </a>

                                  <a href="#"><small class="d-block"><strong>Subscribe</strong><br />to RSS Feeds</small></a>

                              </div>

                          </div>



                      </div>



                  </div>

              </div>



          </div>

      </div>


      <div id="copyrights" class="bg-transparent">

          <div class="container">



              <div class="row col-mb-30">

                  <div class="col-md-6 text-center text-md-start">

                      Copyrights &copy; 2023 All Rights Reserved by Canvas Inc.<br />

                      <div class="copyright-links"><a href="#">Terms of Use</a> / <a href="#">Privacy Policy</a></div>

                  </div>



                  <div class="col-md-6 text-center text-md-end">

                      <div class="copyrights-menu copyright-links">

                          <a href="#">Home</a>/<a href="#">About Us</a>/<a href="#">Team</a>/<a href="#">Clients</a>/<a href="#">FAQs</a>/<a href="#">Contact</a>

                      </div>

                  </div>

              </div>



          </div>

      </div>

  </footer>
  );
}
