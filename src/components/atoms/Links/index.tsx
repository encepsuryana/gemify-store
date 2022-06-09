import React, { FC } from "react";
import { Link } from "react-router-dom";

interface Props {
  menu: string;
  url: string;
}

const Links: FC<Props> = ({ menu, url }) => {
  return (
    <Link to={url} className="mx-2">
      {menu}
    </Link>
  );
};

export default Links;
