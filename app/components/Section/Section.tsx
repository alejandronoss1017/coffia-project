import Image from 'next/image';
import { SectionProps } from '@/app/types/SectionProps';
import Loader from '../loader/Loader';

function Section({
  title,
  description,
  imagePath,
  alt,
  width,
  height
}: SectionProps) {
  return (
    <section className=" pt-5 pb-5 md:w-11/12">
      <article className="flex flex-col items-center md:grid md:grid-cols-2">
        <div className="flex flex-col items-center md:pb-0">
          <h2 className="text-center font-semibold pb-5 text-4xl">{title}</h2>
          <p className="text-justify pl-5 pr-5 md:max-w-xl md:text-xl lg:text-2xl">
            {description}
          </p>
        </div>
        <figure className="md:flex md:justify-center py-5 px-2">
          <Image
            src={imagePath}
            alt={alt}
            width={width}
            height={height}
            loading="lazy"
            className="border-2 border-black rounded-lg"
          />
        </figure>
      </article>
    </section>
  );
}

export default Section;
