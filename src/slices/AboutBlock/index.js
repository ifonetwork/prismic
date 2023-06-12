/**
 * @typedef {import("@prismicio/client").Content.AboutBlockSlice} AboutBlockSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AboutBlockSlice>} AboutBlockProps
 * @param {AboutBlockProps}
 */
const AboutBlock = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >


      <div class="row counters mb-0 mt-4 align-items-stretch">



        <div class="col-lg-3 col-md-6 dark text-center min-vh-40" style=
          {{
            background: "url('static/demos/medical/images/about-us/counters/1.jpg') no-repeat center center; background-size: cover;"
          }}


        >

          <div class="bg-overlay">

            <div class="bg-overlay-content dark">

              <div>

                <i class="i-plain i-xlarge mx-auto icon-medical-i-surgery"></i>

                <div class="counter counter-lined"><span data-from="100" data-to="42762" data-refresh-interval="50" data-speed="2300"></span></div>

                <h5>of Treatments Made</h5>

              </div>

            </div>

            <div class="bg-overlay-bg op-ts op-1" data-hover-animate="op-0" data-hover-animate-out="op-1" style=
              {{
                backgroundColor: "rgba(229, 57, 53, 0.8);"
              }} ></div>

          </div>

        </div>



        <div class="col-lg-3 col-md-6 dark text-center min-vh-40" style={{
          background: "url('static/demos/medical/images/about-us/counters/2.jpg') no-repeat center center; background-size: cover;"
        }}

        >

          <div class="bg-overlay">

            <div class="bg-overlay-content dark">

              <div>

                <i class="i-plain i-xlarge mx-auto icon-medical-i-respiratory"></i>

                <div class="counter counter-lined"><span data-from="3000" data-to="21500" data-refresh-interval="100" data-speed="2500"></span></div>

                <h5>Cured Patients</h5>

              </div>

            </div>

            <div class="bg-overlay-bg op-ts op-1" data-hover-animate="op-0" data-hover-animate-out="op-1" style={{

              backgroundColor: "rgba(211, 47, 47, 0.8);"
            }}
            ></div>

          </div>

        </div>



        <div class="col-lg-3 col-md-6 dark text-center min-vh-40" style={{

          background: "url(static/demos/medical/images/about-us/counters/3.jpg') no-repeat center center; background-size: cover;"
        }}

        >

          <div class="bg-overlay">

            <div class="bg-overlay-content dark">

              <div>

                <i class="i-plain i-xlarge mx-auto icon-medical-i-social-services"></i>

                <div class="counter counter-lined"><span data-from="20" data-to="408" data-refresh-interval="25" data-speed="3500"></span>K</div>

                <h5>Satisfied Customers</h5>

              </div>

            </div>

            <div class="bg-overlay-bg op-ts op-1" data-hover-animate="op-0" data-hover-animate-out="op-1" style={{
              backgroundColor: "rgba(198, 40, 40, 0.8);"
            }} ></div>

          </div>

        </div>



        <div class="col-lg-3 col-md-6 dark text-center min-vh-40" style={{
          background:"url('static/demos/medical/images/about-us/counters/4.jpg') no-repeat center center; background-size: cover;"
        }} >

          <div class="bg-overlay">

            <div class="bg-overlay-content dark">

              <div>

                <i class="i-plain i-xlarge mx-auto icon-medical-i-ambulance"></i>

                <div class="counter counter-lined"><span data-from="60" data-to="140" data-refresh-interval="20" data-speed="2700"></span></div>

                <h5>Ambulance Available</h5>

              </div>

            </div>

            <div class="bg-overlay-bg op-ts op-1" data-hover-animate="op-0" data-hover-animate-out="op-1" style={{
              backgroundColor: "rgba(183, 28, 28, 0.8);"
            }} ></div>

          </div>

        </div>



      </div>

    </section>
  );
};

export default AboutBlock;
