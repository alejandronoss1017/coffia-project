import Image from 'next/image';

import { BreakCardProps } from '@/app/types/BreakCardProps';

function BreakCard({
  imagePath,
  alt,
  width,
  height,
  description,
  title,
  direction
}: BreakCardProps) {
  return (
    <section className="bg-yellow w-screen border-y-2 md:w-11/12 md:border-2 md:rounded-lg md:p-5">
      <article
        className={imagePath ? 'md:grid md:grid-cols-2' : 'flex flex-col'}
      >
        <div className={direction == 'left' ? 'order-1' : ''}>
          <div className="flex flex-col items-center">
            <h2 className="text-center font-semibold py-5 text-3xl">{title}</h2>
            <p className="text-justify px-5 md:max-w-xl md:text-xl lg:text-2xl">
              {description}
            </p>
          </div>
        </div>
        <div>
          {imagePath && (
            <figure className="py-5 px-2">
              <Image
                alt={alt || 'Background image'}
                src={imagePath}
                width={width}
                height={height}
                loading="lazy"
                className="border-2 border-black rounded-lg"
              />
            </figure>
          )}
        </div>
      </article>
    </section>
  );
}

export default BreakCard;
