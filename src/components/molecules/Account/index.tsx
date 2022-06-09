import React, { FC } from "react";
import ButtonPrimary from "../../atoms/ButtonPrimary";
import ButtonSecondary from "../../atoms/ButtonSecondary";

interface Props {
  loginText: string;
  loginUrl: string;
  registerText: string;
  registerUrl: string;
  isLogin?: boolean;
  user?: string;
}

const Account: FC<Props> = ({
  loginText,
  loginUrl,
  registerText,
  registerUrl,
  isLogin,
  user,
}) => {
  return (
    <div>
      <ButtonPrimary textButton={loginText} link_to={loginUrl} />
      <ButtonSecondary textButton={registerText} link_to={registerUrl} />
    </div>
  );
};

export default Account;
