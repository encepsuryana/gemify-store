import React from "react";

type Props = {
  subtitle?: string;
};

const SubTitle = (props: Props) => {
  return <p className="ml-1 mt-1 text-yellow-600 text-sm">{props.subtitle}</p>;
};

export default SubTitle;
