import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import styles from "./index.module.scss";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `ImageSection`.
 */
export type ImageSectionProps = SliceComponentProps<Content.ImageSectionSlice>;

/**
 * Component for "ImageSection" Slices.
 */
const ImageSection: FC<ImageSectionProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`${styles.image} ${slice.primary.full_width && styles.fullwidth}`}
    >
      <PrismicNextImage field={slice.primary.image}/>
      <PrismicRichText field={slice.primary.caption} />
    </section>
  );
};

export default ImageSection;
