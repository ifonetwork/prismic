/**
 * @typedef {import("@prismicio/client").Content.UserCardSlice} UserCardSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<UserCardSlice>} UserCardProps
 * @param {UserCardProps}
 */

import * as prismic from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";

const UserCard = ({ slice }) => {


  const image = slice.primary.avatar;


  // console.log(slice.primary.avatar)
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div>

        {slice.primary.name}


      </div>


      <div className="bg-gray-100">

        {prismic.isFilled.image(image) && (
          <div className="bg-gray-100">
            <PrismicNextImage
              field={image}
              sizes="100vw"
              className="w-full"
            />
          </div>
        )}
      </div>

    </section>
  );
};

export default UserCard;
