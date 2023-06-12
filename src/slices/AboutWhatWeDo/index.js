/**
 * @typedef {import("@prismicio/client").Content.AboutWhatWeDoSlice} AboutWhatWeDoSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AboutWhatWeDoSlice>} AboutWhatWeDoProps
 * @param {AboutWhatWeDoProps}
 */
const AboutWhatWeDo = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >




      <div class="section mt-0" style={{
        background:"#FFF url('static/demos/medical/images/about-us/1.jpg') right center no-repeat / cover;"
      }}
       >



        <div class="d-block d-md-block d-lg-none" style={{
          backgroundColor:"rgba(238,238,238,0.9); position: absolute; top: 0;left: 0; z-index: 1;width: 100%; height: 100%;"
        }} ></div>



        <div class="container">



          <div class="row justify-content-between">

            <div class="col-lg-6" data-lightbox="gallery">

              <div class="heading-block border-bottom-0 mb-4">

                <h3 class="text-transform-none ls-0">What We do Actually</h3>

              </div>

              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur necessitatibus placeat numquam enim adipisci nostrum facilis distinctio modi, cupiditate laborum ea eius repellendus? Obcaecati saepe numquam pariatur aliquid, aspernatur necessitatibus dolores harum quos eum esse, laudantium odit alias, iste dolorem!</p>

              <div class="feature-box fbox-plain fbox-sm mb-4">

                <div class="fbox-icon mt-2" data-animate="fadeIn">

                  <a href="#"><i class="icon-medical-i-womens-health"></i></a>

                </div>

                <div class="fbox-content">

                  <p class="mt-0">Powerful Layout with Responsive functionality that can be adapted to any screen size. Resize browser to view.</p>

                </div>

              </div>



              <div class="feature-box fbox-plain fbox-sm mb-4">

                <div class="fbox-icon mt-2" data-animate="fadeIn">

                  <a href="#"><i class="icon-medical-i-ultrasound"></i></a>

                </div>

                <div class="fbox-content">

                  <p class="mt-0">Powerful Layout with Responsive functionality that can be adapted to any screen size. Resize browser to view.</p>

                </div>

              </div>



              <div class="feature-box fbox-plain fbox-sm mb-4">

                <div class="fbox-icon mt-2" data-animate="fadeIn">

                  <a href="#"><i class="icon-medical-i-cath-lab"></i></a>

                </div>

                <div class="fbox-content">

                  <p class="mt-0">Powerful Layout with Responsive functionality that can be adapted to any screen size. Resize browser to view.</p>

                </div>

              </div>

            </div>

            <div class="col-lg-5">

              <div class="opening-table">

                <div class="heading-block mb-4 border-bottom-0">

                  <h4>Opening Hours</h4>

                  <span>Lorem ipsum dolor sit amet, consecte adipisicing elit molestiae non.</span>

                </div>

                <div class="time-table-wrap">

                  <div class="row time-table">

                    <h5 class="col-lg-5">Monday</h5>

                    <span class="col-lg-7">8:00am - 11:00pm</span>

                  </div>

                  <div class="row time-table">

                    <h5 class="col-lg-5">Tuesday</h5>

                    <span class="col-lg-7">8:00am - 11:00pm</span>

                  </div>

                  <div class="row time-table">

                    <h5 class="col-lg-5">Wednesday</h5>

                    <span class="col-lg-7">8:00am - 11:00pm</span>

                  </div>

                  <div class="row time-table">

                    <h5 class="col-lg-5">Thursday</h5>

                    <span class="col-lg-7">8:00am - 11:00pm</span>

                  </div>

                  <div class="row time-table">

                    <h5 class="col-lg-5">Friday</h5>

                    <span class="col-lg-7">8:00am - 11:00pm</span>

                  </div>

                  <div class="row time-table">

                    <h5 class="col-lg-5">Saturday</h5>

                    <span class="col-lg-7">8:00am - 1:30pm</span>

                  </div>

                  <div class="row time-table">

                    <h5 class="col-lg-5">Sunday</h5>

                    <span class="col-lg-7 color fw-semibold">Closed</span>

                  </div>

                </div>

              </div>

            </div>

          </div>



        </div>



      </div>
    </section>
  );
};

export default AboutWhatWeDo;
