import Image from 'next/image';
import { SectionProps } from '@/app/types/SectionProps';

function Section({
  title,
  description,
  imagePath,
  alt,
  width,
  height
}: SectionProps) {
  return (
    <section className=" m-6 flex flex-col items-center lg:text-lg lg:items-start  lg:justify-center lg:flex-row">
      <div className="p-4 sm:px-8 sm:w-1/2">
        <h1 className="font-bold">
          {/* <h1 className="md:font-bold text-gray-900 lg:text-center sm:text-sm sm:text-left md:text-4xl"> */}

          {title}
        </h1>

        <article className="mt-6 sm:text-left text-justify">
          <p className="max-w-sm mx-auto sm:max-w-none sm:text-2xl lg:text-3xl ">
            {description}
          </p>
        </article>
      </div>
      <div className="ml-24 lg:my-8 hidden sm:block sm:w-1/2 md:w-1/3 md:h-1/3 md:mx-8 md:my-8">
        <div className="border-2 border-gray-900 rounded-xl overflow-hidden">
          <Image
            sizes="(min-width: 1024px) 50vw, 100vw"
            src={imagePath}
            width={width}
            height={height}
            alt={alt}
            className="object-fit w-full h-full"
          />
        </div>
      </div>
      <div className="flex justify-center py-6 sm:hidden">
        <Image
          sizes="(min-width: 1024px) 50vw, 100vw"
          src={imagePath}
          width={width}
          height={height}
          alt={alt}
          className="border-2 border-gray-900 rounded-xl"
        />
      </div>
    </section>
  );
}

export default Section;
