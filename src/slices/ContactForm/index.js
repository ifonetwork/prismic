/**
 * @typedef {import("@prismicio/client").Content.ContactFormSlice} ContactFormSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ContactFormSlice>} ContactFormProps
 * @param {ContactFormProps}
 */
const ContactForm = ({ slice }) => {
  return (
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
  );
};

export default ContactForm;
