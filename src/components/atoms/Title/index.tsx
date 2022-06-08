import React from "react";
import { Link } from "react-router-dom";

type Props = {
  title: string;
};

const Title = (props: Props) => {
  return (
    <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600 font-bold text-3xl">
      <Link to="/">{props.title}</Link>
    </h1>
  );
};

export default Title;
