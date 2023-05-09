import Link from 'next/link';
import Image from 'next/image';

import s from './Header.module.css';

function Header() {
  return (
    <header className="border-b-2">
      <nav className={s.root}>
        <a href="#skip" className="sr-only focus:not-sr-only"></a>
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex justify-between align-center flex-row py-4 md:py-6 relative">
            <div className="flex flex-1 items-center">
              <Link href="/" className={s.logo} aria-label="Logo">
                <Image
                  src="/coffIAWhite.svg"
                  alt="coffIA logo"
                  width={100}
                  height={100}
                  className="logo"
                />
              </Link>
              <h1>CoffIA</h1>
              <nav className="space-x-2 ml-10 hidden lg:block">
                <Link href="/about" className={s.link}>
                  Acerca de nosotros
                </Link>
                <Link href="/" className={s.link}>
                  Tienda
                </Link>
                <Link href="/" className={s.link}>
                  blog
                </Link>
                <Link href="/" className={s.link}>
                  Trabaja con nosotros
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
