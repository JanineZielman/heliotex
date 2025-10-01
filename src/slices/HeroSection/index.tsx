import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import styles from "./index.module.scss";


const HeroSection: FC<SliceComponentProps<Content.HeroSectionSlice>> = ({ slice }) => {
  const video = slice.primary.video;

  return (
    <section className={styles.video}>
      {video && "url" in video && (
        <video loop muted autoPlay>
          <source src={video.url} type="video/mp4" />
        </video>
      )}
      <PrismicRichText field={slice.primary.title} />
    </section>
  );
};

export default HeroSection;
