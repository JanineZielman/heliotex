'use client'
import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import Slider from "react-slick";
import styles from "./index.module.scss";

/**
 * Props for `SliderItem`.
 */
export type SliderItemProps = SliceComponentProps<Content.SliderItemSlice>;

/**
 * Component for "SliderItem" Slices.
 */
const SliderItem: FC<SliderItemProps> = ({ slice }) => {
  const settings = {
    infinite: false,
    slidesToShow: 1, // show 1 full slide
    slidesToScroll: 1,
    centerMode: true, // peek next slide
    centerPadding: "20%", // adjust peek width
    arrows: true,
    responsive: [
    {
      breakpoint: 900,
      settings: {
        centerPadding: "0%", // adjust peek width
      }
    }
  ]
  };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.slider}
    >
      <Slider {...settings}>
        {slice.primary.images.map((item, idx) => (
          <div key={idx} className={styles.slide}>
            <PrismicNextImage field={item.image} />
            {item.caption && <PrismicRichText field={item.caption} />}
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default SliderItem;
