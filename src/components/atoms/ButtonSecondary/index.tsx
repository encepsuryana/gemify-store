import React from "react";
import { Link } from "react-router-dom";

type Props = {
  textButton: string;
  link_to: string;
};

const ButtonSecondary = (props: Props) => {
  return (
    <Link to={props.link_to}>
      <button className="mx-1 border border-yellow-500 text-yellow-500 py-1 px-5 rounded-full text-sm font-bold pb-1.5 hover:bg-gradient-to-r from-yellow-500 to-yellow-600  hover:text-gray-800">
        {props.textButton}
      </button>
    </Link>
  );
};

export default ButtonSecondary;
