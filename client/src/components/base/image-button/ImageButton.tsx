import './ImageButton.styles.scss';
import React from 'react';

interface ImageButtonProps {
  src: string;
  alt: string;
}

const ImageButton: React.FC<ImageButtonProps> = ({ src, alt }) => {
  return (
    <button className="image-button">
      <img src={src} alt={alt} />
    </button>
  );
};

export default ImageButton;
