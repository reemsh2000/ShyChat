import React from 'react';

interface ImgProps {
  src: string;
  alt: string;
  styleName?: React.CSSProperties;
}

const Img: React.FC<ImgProps> = ({ src, alt, styleName }) => (
  <img
    src={src}
    alt={alt}
    style={styleName}
  />
);

export default Img;
