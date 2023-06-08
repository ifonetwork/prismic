/**
 * @typedef {import("@prismicio/client").Content.NumbersSlice} NumbersSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<NumbersSlice>} NumbersProps
 * @param {NumbersProps}
 */
const Numbers = ({ slice }) => {
  return (
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
  );
};

export default Numbers;
