import React from 'react';

interface ImgProps {
  src: string;
  alt: string;
  styleName?: string;
}

const Img: React.FC<ImgProps> = ({ src, alt, styleName }) => (
  <img
    src={src}
    alt={alt}
    className={styleName}
  />
);

export default Img;
