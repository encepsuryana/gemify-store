import React from "react";

type Props = {
  textButton: string;
};

export const ButtonPrimary = (props: Props) => {
  return (
    <button className="mx-1 bg-orange-500 text-white py-1 px-5 rounded-full text-sm font-bold pb-1.5 hover:bg-orange-600">
      {props.textButton}
    </button>
  );
};

export default ButtonPrimary;
