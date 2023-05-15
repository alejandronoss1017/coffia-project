import Image from 'next/image';

import { BreakCardProps } from '@/app/types/BreakCardProps';

function BreakCard({
  imagePath,
  alt,
  width,
  height,
  description,
  title
}: BreakCardProps) {
  return (
    <section className="bg-yellow border-2 m-6 flex flex-col-reverse items-center lg:text-lg lg:items-start lg:justify-center lg:flex-row">
      <div>
        {imagePath && (
          <div className="my-8 border-2 border-gray-900 rounded-xl overflow-hidden">
            <Image
              sizes="(min-width: 1024px) 50vw, 100vw"
              alt={alt || 'Background image'}
              src={imagePath}
              width={width}
              height={height}
              className="max-w-max h-full object-fill"
            />
          </div>
        )}
      </div>
      <div className="lg:w-1/2">
        <div className="p-4 text-center">
          <h1 className="sm:pb-4 lg:font-bold">{title}</h1>
          <p className="sm:max-w-none sm:text-2xl md:text-3xl lg:p-6">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}

export default BreakCard;
