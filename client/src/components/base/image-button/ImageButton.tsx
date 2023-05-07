import React from 'react';
import './ImageButton.styles.scss';

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
