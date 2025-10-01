import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import styles from "./index.module.scss";

/**
 * Props for `ImagesSection`.
 */
export type ImagesSectionProps =
  SliceComponentProps<Content.ImagesSectionSlice>;

/**
 * Component for "ImagesSection" Slices.
 */
const ImagesSection: FC<ImagesSectionProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.images}
    >
      <div className={styles.flex}>
        <PrismicNextImage className={styles.image1} field={slice.primary.image_1} />
        <PrismicNextImage className={styles.image2} field={slice.primary.image_2} />
      </div>
      <PrismicRichText field={slice.primary.caption} />
    </section>
  );
};

export default ImagesSection;
