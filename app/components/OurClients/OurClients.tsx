import React from 'react';
import Image from 'next/image';
import { OurClientsProps } from '@/app/types/OurClientsProps';

import styles from './OurClients.module.css';

const OurClients: React.FC<OurClientsProps> = ({ images }) => {
  return (
    <div className={styles['our-clients']}>
      <h1>Nuestros Clientes</h1>
      <div className={styles['client-logos']}>
        {images.map((logo, index) => (
          <Image
            key={index}
            src={logo}
            width={150}
            height={150}
            alt={`Cliente ${index + 1}`}
            className={styles['client-logo']}
          />
        ))}
      </div>
    </div>
  );
};

export default OurClients;
