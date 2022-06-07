import React, { FC } from "react";
import { Link } from "react-router-dom";

type Props = {
  menu: string;
  url: string;
};

const Links: FC<Props> = (props) => {
  const { menu, url } = props;

  return (
    <Link to={url} className="mx-2">
      {menu}
    </Link>
  );
};

export default Links;
