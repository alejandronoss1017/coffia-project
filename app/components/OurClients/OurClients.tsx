import Image from 'next/image';
import { ClientsProps } from '@/app/types/Client';

import styles from './OurClients.module.css';

function OurClients({ clients }: ClientsProps) {
  return (
    <div className={styles['our-clients']}>
      <h1>Nuestros Clientes</h1>
      <div className={styles['client-logos']}>
        {clients.map((client, index) => (
          <a href={client.website} target="_blank">
            <Image
              key={index}
              src={client.logo}
              width={150}
              height={150}
              alt={client.logoAlt}
              className={styles['client-logo']}
            />
          </a>
        ))}
      </div>
    </div>
  );
}

export default OurClients;
