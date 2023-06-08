/**
 * @typedef {import("@prismicio/client").Content.SpecialistsSlice} SpecialistsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SpecialistsSlice>} SpecialistsProps
 * @param {SpecialistsProps}
 */
const Specialists = ({ slice }) => {
  return (
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
  );
};

export default Specialists;
