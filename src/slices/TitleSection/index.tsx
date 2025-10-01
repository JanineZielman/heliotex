import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import styles from "./index.module.scss";

/**
 * Props for `TitleSection`.
 */
export type TitleSectionProps = SliceComponentProps<Content.TitleSectionSlice>;

/**
 * Component for "TitleSection" Slices.
 */
const TitleSection: FC<TitleSectionProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.title}
    >
      <PrismicRichText field={slice.primary.title} />
    </section>
  );
};

export default TitleSection;
