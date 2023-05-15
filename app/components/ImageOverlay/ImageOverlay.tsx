import React from 'react';
import { ImageOverlayProps } from '@/app/types/ImageOverlayProps';

import styles from './ImageOverlay.module.css';

const ImageOverlay: React.FC<ImageOverlayProps> = ({
  imageUrl,
  title,
  description
}) => {
  return (
    <div className={styles['background-image-container']}>
      <div
        className={styles['background-image']}
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className={styles['overlay']}>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageOverlay;
