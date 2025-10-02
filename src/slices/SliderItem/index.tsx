"use client";
import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import styles from "./index.module.scss";

export type SliderItemProps = SliceComponentProps<Content.SliderItemSlice>;

const SliderItem: FC<SliderItemProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.slider}
    >
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        spaceBetween={20}
        centeredSlides={true}         // enables "peek"
        slidesOffsetBefore={0}
        slidesOffsetAfter={0}
        breakpoints={{
          // Mobile (< 900px): full width
          0: {
            slidesPerView: 1,
            centeredSlides: false,    // disable peek
            spaceBetween: 0,
          },
          // Desktop (>= 900px): enable peek
          900: {
            slidesPerView: 2,
            centeredSlides: true,     // keep slide centered
            spaceBetween: 20,         // spacing between slides
          },
        }}
        navigation={false}
        pagination={{ clickable: true }}
      >
        {slice.primary.images.map((item, idx) => (
          <SwiperSlide key={idx} className={styles.slide}>
            <PrismicNextImage field={item.image} />
            {item.caption && <PrismicRichText field={item.caption} />}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SliderItem;
