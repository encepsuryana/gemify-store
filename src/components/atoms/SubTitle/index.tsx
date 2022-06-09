import React, { FC } from "react";

type Props = {
  subtitle?: string;
};

const SubTitle: FC<Props> = ({ subtitle }) => {
  return <p className="ml-1 mt-1 text-yellow-600 text-sm">{subtitle}</p>;
};

export default SubTitle;
