import React from "react";

type Props = {
  subtitle?: string;
};

export const SubTitle = (props: Props) => {
  return <p className="ml-1 mt-1 text-blue-900 text-sm">{props.subtitle}</p>;
};

export default SubTitle;
