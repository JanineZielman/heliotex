'use client'
import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "20%",
    adaptiveHeight: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: "0px",
          arrows: false,
        },
      },
    ],
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
