import React from "react";
import "./title.sass";

type Props = {
  title: string;
};

export const Title = (props: Props) => {
  return <h1 className="text-blue-900 font-bold text-3xl">{props.title}</h1>;
};

export default Title;
