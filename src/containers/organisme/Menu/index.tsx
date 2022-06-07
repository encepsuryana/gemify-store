import React, { FC } from "react";
import Links from "../../../components/atoms/Links";
import { menus } from "../../../components/atoms/Links/link";

type menu = {
  id: number;
  name: string;
  path: string;
};

interface Props {
  menu?: menu;
}

const Menu: FC<Props> = (props) => {
  return (
    <div className="mb-8 my-1">
      <div className="text-sm font-semibold">
        {menus.map((menu) => (
          <Links key={menu.id} menu={menu.name} url={menu.path} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
