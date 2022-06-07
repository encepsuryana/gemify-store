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

const Menu: FC<Props> = () => {
  return (
    <div className="my-1">
      <div className="text-sm text-gray-800 font-semibold text-right">
        {menus.map((menu) => (
          <Links key={menu.id} menu={menu.name} url={menu.path} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
