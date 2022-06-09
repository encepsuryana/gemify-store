import React, { FC } from "react";
import { Link } from "react-router-dom";

interface Props {
  textButton: string;
  link_to: string;
}

const ButtonPrimary: FC<Props> = ({ link_to, textButton }) => {
  return (
    <Link to={link_to}>
      <button className="mx-1 bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-800 py-1 px-5 rounded-full text-sm font-bold pb-1.5">
        {textButton}
      </button>
    </Link>
  );
};

export default ButtonPrimary;
