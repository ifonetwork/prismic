/**
 * @typedef {import("@prismicio/client").Content.TreatmentsSlice} TreatmentsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TreatmentsSlice>} TreatmentsProps
 * @param {TreatmentsProps}
 */
const Treatments = ({ slice }) => {
  return (
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
  );
};

export default Treatments;
