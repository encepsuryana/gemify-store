import React, { FC } from "react";

type Props = {
  subtitle?: string;
};

const SubTitle: FC<Props> = ({ subtitle }) => {
  return (
    <p className="ml-1 mb-1 text-yellow-600 text-sm leading-relaxed mr-4 whitespace-nowrap">
      {subtitle}
    </p>
  );
};

export default SubTitle;
