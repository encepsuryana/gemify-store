import React from "react";

type Props = {
  textButton?: string;
};

export const ButtonSecondary = (props: Props) => {
  return (
    <button className="mx-1 border border-orange-500 text-orange-500 py-1 px-5 rounded-full text-sm font-bold pb-1.5 hover:bg-orange-500 hover:text-white">
      {props.textButton}
    </button>
  );
};

export default ButtonSecondary;
