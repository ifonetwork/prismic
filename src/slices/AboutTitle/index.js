/**
 * @typedef {import("@prismicio/client").Content.AboutTitleSlice} AboutTitleSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AboutTitleSlice>} AboutTitleProps
 * @param {AboutTitleProps}
 */
const AboutTitle = ({ slice }) => {
  return (
		<section class="page-title dark dark page-title-center p-0">

			<div class="fslider" data-arrows="false" data-pagi="false" data-animation="fade" data-hover="false">

				<div class="flexslider">



					<div class="slider-wrap">

						<div class="slide"><img src="static/demos/medical/images/about-us/page-title/1.jpg" alt="Page Title Image"/></div>

						<div class="slide"><img src="static/demos/medical/images/about-us/page-title/2.jpg" alt="Page Title Image"/></div>

						<div class="slide"><img src="static/demos/medical/images/about-us/page-title/3.jpg" alt="Page Title Image"/></div>

						<div class="slide"><img src="static/demos/medical/images/about-us/page-title/4.jpg" alt="Page Title Image"/></div>

					</div>



					<div class="vertical-middle vertical-middle-overlay">

						<div class="container">

							<div class="page-title-row">



								<div class="page-title-content">

									<h1>About Us</h1>

									<span>A Short Page Title Tagline</span>

								</div>



								<nav aria-label="breadcrumb">

									<ol class="breadcrumb">

										<li class="breadcrumb-item"><a href="#">Home</a></li>

										<li class="breadcrumb-item active" aria-current="page">About-us</li>

									</ol>

								</nav>



							</div>

						</div>

					</div>

				</div>

			</div>

		</section> 
  );
};

export default AboutTitle;
