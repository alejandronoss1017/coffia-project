import { CardProps } from '@/app/types/CardProps';
import Image from 'next/image';
import Facebook from '@/app/styles/icons/Facebook';
import LinkedIn from '@/app/styles/icons/LinkedIn';
import Twitter from '@/app/styles/icons/Twitter';
import Instagram from '@/app/styles/icons/Instagram';

import './Card.module.css';

function Card({
  title,
  description,
  imagePath,
  alt,
  height,
  width
}: CardProps) {
  return (
    <div className="border-2 m-4 shadow-md transform transition-all hover:shadow-xl hover:scale-105">
      <div className=" p-4">
        <div className="relative rounded-full overflow-hidden w-40 h-40 md:w-40 md:h-40 mx-auto">
          <Image
            src={imagePath}
            alt={alt}
            fill={true}
            className=" object-cover object-scale-dow h-24 w-40 "
          />
        </div>
      </div>
      <h2 className="text-center">{title}</h2>
      <p className="text-center">{description}</p>

      <hr />
      <div className="flex flex-row items-center justify-between  py-2 px-12">
        <a href="#">
          <Twitter width="24" height="24" fill="#000000" />
        </a>
        <a href="#">
          <Instagram width="24" height="24" fill="#000000" />
        </a>
        <a href="#">
          <Facebook width="24" height="24" fill="#000000" />
        </a>
        <a href="#">
          <LinkedIn
            width="24"
            height="24"
            backgroundFill="#000000"
            contentFill="#FFFFFF"
          />
        </a>
      </div>
    </div>
  );
}

export default Card;
