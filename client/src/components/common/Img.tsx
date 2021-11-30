import React from "react";

interface ImgProps {
  src: string;
  alt: string;
  styleName?: React.CSSProperties;
}

export const Img: React.FC<ImgProps> = ({ src, alt, styleName }) => {
  return <img src={src} alt={alt} style={styleName} />;
};
