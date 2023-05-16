import { IconsProps } from '@/app/types/IconsProps';

const BurgerMenu = ({ width, height, fill }: IconsProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={fill}
    >
      <path
        d="M4 18L20 18"
        stroke="#000000"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M4 12L20 12"
        stroke="#000000"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M4 6L20 6"
        stroke="#000000"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default BurgerMenu;
