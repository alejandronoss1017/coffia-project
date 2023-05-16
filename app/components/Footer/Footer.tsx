import Link from 'next/link';
import Image from 'next/image';

import GitHub from '@/app/styles/icons/GitHub';
import Instagram from '@/app/styles/icons/Instagram';

export default function Footer() {
  return (
    <footer className=" mx-auto px-6 bg-gray">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-zinc-600 py-12 text-white transition-colors duration-150 bg-zinc-900">
        <div className="col-span-1 lg:col-span-2">
          <Link
            href="/"
            className="flex flex-initial items-center font-bold md:mr-24"
          >
            <span className="rounded-full border border-zinc-700 mr-2">
              <Image
                src="/coffIAWhite.svg"
                width={128}
                height={77}
                alt="CoffIA logo"
                className="logo"
              />
            </span>
            <span>
              <h2>CoffIA</h2>
            </span>
          </Link>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <ul className="flex flex-initial flex-col md:flex-1">
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/"
                className="text-white hover:text-zinc-200 transition ease-in-out duration-150"
              >
                Home
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/about"
                className="text-white hover:text-zinc-200 transition ease-in-out duration-150"
              >
                Acerca de nosotros
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/shop"
                className="text-white hover:text-zinc-200 transition ease-in-out duration-150"
              >
                Tienda
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/ia"
                className="text-white hover:text-zinc-200 transition ease-in-out duration-150"
              >
                Preguntale a nuestra IA
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/"
                className="text-white hover:text-zinc-200 transition ease-in-out duration-150"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <ul className="flex flex-initial flex-col md:flex-1">
            <li className="py-3 md:py-0 md:pb-4">
              <p className="text-white font-bold hover:text-zinc-200 transition ease-in-out duration-150">
                LEGAL
              </p>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/"
                className="text-white hover:text-zinc-200 transition ease-in-out duration-150"
              >
                Privacy Policy
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/"
                className="text-white hover:text-zinc-200 transition ease-in-out duration-150"
              >
                Terms of Use
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-1 lg:col-span-6 flex items-start lg:justify-end text-white">
          <div className="flex space-x-6 items-center h-10">
            {/* Put the link to the project repository */}
            <a aria-label="Github Repository" href="https://github.com/">
              <GitHub width="40" height="40" fill="#FFFFFF" />
            </a>
            <a aria-label="Instagram account" href="https://instagram.com/">
              <Instagram width="40" height="40" fill="#FFFFFF" />
            </a>
          </div>
        </div>
      </div>
      <div className="py-12 flex flex-col md:flex-row justify-between items-center space-y-4 bg-zinc-900">
        <div>
          <span>&copy; 2023 CoffIA, Inc. All rights reserved.</span>
        </div>
        <div className="flex items-center">
          <span className="text-white">Hecho con &#10084; por</span>
          <a
            className="ml-5"
            href="https://vercel.com"
            aria-label="Vercel.com Link"
          >
            <Image
              src="/javeriana.svg"
              width={40}
              height={40}
              alt="CoffIA logo"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
