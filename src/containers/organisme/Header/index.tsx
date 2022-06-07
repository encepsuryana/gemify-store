import React from "react";
import Title from "../../../components/atoms/Title";
import SubTitle from "../../../components/atoms/SubTitle";
import ButtonPrimary from "../../../components/atoms/ButtonPrimary";
import ButtonSecondary from "../../../components/atoms/ButtonSecondary";

type Props = {
  title: string;
  subtitle?: string;
  login?: boolean;
  textButton: string;
  textButton2nd: string;
  link_login: string;
  link_register: string;
};

export const Header = (props: Props) => {
  return (
    <div className="py-2 px-4 -mx-4 pb-4 bg-gray-800 flex justify-between items-center rounded-b-xl">
      <div className="flex-none">
        <Title title={props.title} />
        <SubTitle subtitle={props.subtitle} />
      </div>
      <div className="flex-1 text-right">
        <ButtonPrimary
          textButton={props.textButton}
          link_to={props.link_login}
        />
        <ButtonSecondary
          textButton={props.textButton2nd}
          link_to={props.link_register}
        />
      </div>
    </div>
  );
};

export default Header;
