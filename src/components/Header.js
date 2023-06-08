import * as prismic from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";

import { Bounded } from "./Bounded";

export function Header({ navigation, settings }) {
  return (
    <header id="header" data-menu-padding="28" data-sticky-menu-padding="8">

      <div id="header-wrap">

        <div class="container">

          <div class="header-row">



            <div id="logo">

              <a href="/">

                <img class="logo-default" srcset="/static/demos/medical/images/logo-medical.png, /static/demos/medical/images/logo-medical@2x.png 2x" src="/static/demos/medical/images/logo-medical@2x.png" alt="Canvas Logo" />

              </a>

            </div>




            <div class="primary-menu-trigger">

              <button class="cnvs-hamburger" type="button" title="Open Mobile Menu">

                <span class="cnvs-hamburger-box"><span class="cnvs-hamburger-inner"></span></span>

              </button>

            </div>



            <nav class="primary-menu style-3 menu-spacing-margin">
              <ul class="menu-container">
                {navigation.data?.links.map((item) => (
                  <li class="menu-item current" key={prismic.asText(item.label)}>



                    <a href={item.link.url} className="menu-link">
                      {/* <PrismicNextLink field={item.link} className="menu-link"> */}
                        <div>{prismic.asText(item.label)}</div>
                        {/* </PrismicNextLink> */}
                    </a>

                  </li>
                ))}


              </ul>



            </nav>



          </div>

        </div>

      </div>

      <div class="header-wrap-clone"></div>

    </header >
  );
}
