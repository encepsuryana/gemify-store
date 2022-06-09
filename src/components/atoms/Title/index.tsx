import React, { FC } from "react";
import { Link } from "react-router-dom";

type Props = {
  title: string;
};

const Title: FC<Props> = ({ title }) => {
  return (
    <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600 font-bold text-3xl leading-relaxed inline-block mr-4 whitespace-nowrap -mb-1">
      <Link to="/">{title}</Link>
    </h1>
  );
};

export default Title;
