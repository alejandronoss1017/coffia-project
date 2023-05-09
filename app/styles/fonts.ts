import {
  Inter,
  Lora,
  Source_Sans_Pro,
  Oswald,
  Merriweather
} from 'next/font/google';

// define your variable fonts
const inter = Inter({ subsets: ['latin'] });
const lora = Lora({ subsets: ['latin'] });
const oswald = Oswald({ subsets: ['latin'] });
const merriweather = Merriweather({ weight: '400', subsets: ['latin'] });

// define 2 weights of a non-variable font
const sourceCodePro400 = Source_Sans_Pro({ weight: '400', subsets: ['latin'] });
const sourceCodePro700 = Source_Sans_Pro({ weight: '700', subsets: ['latin'] });

export {
  inter,
  lora,
  oswald,
  merriweather,
  sourceCodePro400,
  sourceCodePro700
};
