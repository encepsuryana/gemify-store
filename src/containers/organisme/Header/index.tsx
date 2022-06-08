import React, { FC } from "react";
import Title from "../../../components/atoms/Title";
import SubTitle from "../../../components/atoms/SubTitle";
import Account from "../../../components/molecules/Account";

interface Props {
  title: string;
  subtitle?: string;
  login?: boolean;
  textLogin: string;
  textRegister: string;
  linkLogin: string;
  linkRegister: string;
}

const Header: FC<Props> = ({
  title,
  subtitle,
  login,
  textLogin,
  textRegister,
  linkLogin,
  linkRegister,
}) => {
  return (
    <div className="py-2 px-4 -mx-4 pb-4 bg-gray-800 flex justify-between items-center rounded-b-xl">
      <div className="flex-none">
        <Title title={title} />
        <SubTitle subtitle={subtitle} />
      </div>
      <div className="flex-1 items-center justify-center">
        <Account
          loginText={textLogin}
          loginUrl={linkLogin}
          registerText={textRegister}
          registerUrl={linkRegister}
        />
      </div>
    </div>
  );
};

export default Header;
