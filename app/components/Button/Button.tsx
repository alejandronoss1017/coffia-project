'use client';

type Props = {
  text: string;
};

function Button({ text }: Props) {
  return (
    <button
      type="button"
      className="px-6 py-3 text-base font-bold text-black bg-secundario-3 border
       rounded-md shadow-sm hover:outline-non hover:shadow-lg hover:bg-secundario-2"
    >
      {text}
    </button>
  );
}

export default Button;
