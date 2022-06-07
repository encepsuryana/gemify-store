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
  textButton2nd?: string;
};

export const Header = (props: Props) => {
  return (
    <div className="py-2 bg-slate-100 mb-8 flex justify-between items-center">
      <div className="flex-none">
        <Title title={props.title} />
        <SubTitle subtitle={props.subtitle} />
      </div>
      <div className="flex-1 text-right">
        <ButtonPrimary textButton={props.textButton} />
        <ButtonSecondary textButton={props.textButton2nd} />
      </div>
    </div>
  );
};

export default Header;
