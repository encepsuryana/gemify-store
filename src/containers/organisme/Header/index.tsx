import React, { FC, useState } from "react";
import Title from "../../../components/atoms/Title";
import SubTitle from "../../../components/atoms/SubTitle";
import Account from "../../../components/molecules/Account";
import { FaAlignRight, FaAlignLeft } from "react-icons/fa";

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
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);

  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-800 mb-3 rounded-b-xl">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <div className="-mt-2">
            <Title title={title} />
            <SubTitle subtitle={subtitle} />
          </div>
          <button
            className="cursor-pointer leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            {navbarOpen ? (
              <FaAlignRight className="text-yellow-600" size={24} />
            ) : (
              <FaAlignLeft className="text-yellow-600" size={24} />
            )}
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center py-2 justify-center lg:justify-end" +
            (navbarOpen ? " flex" : " hidden")
          }
        >
          <Account
            loginText={textLogin}
            registerText={textRegister}
            loginUrl={linkLogin}
            registerUrl={linkRegister}
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;
