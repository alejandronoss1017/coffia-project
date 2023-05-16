'use client';

import Style from './Button.module.css';

type Props = {
  text: string;
  onClick?: () => void;
};

function Button({ text, onClick }: Props) {
  return (
    <button
      type="button"
      className={Style['ButtonComponent']}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
