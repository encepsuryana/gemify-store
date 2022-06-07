import React, { FC } from "react";
import Links from "../../../components/atoms/Links";
import { menus } from "../../../components/atoms/Links/link";

interface Props {
  title: string;
}

const Menu: FC<Props> = (props) => {
  return (
    <div className="mb-8 my-1">
      <div className="text-sm font-semibold">
        {menus.map((menu: any) => (
          <Links key={menu.id} menu={menu.name} url={menu.path} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
