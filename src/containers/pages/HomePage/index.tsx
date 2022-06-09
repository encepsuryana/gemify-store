import React, { FC } from "react";
import Seo from "../../../utils/Seo";

type Props = {};

const HomePage: FC<Props> = ({}) => {
  return (
    <div>
      <Seo
        title="Home Page"
        description="Home page"
        canonical="https://www.gemify.id/"
        image="https://www.gemify.id/icons.png"
        robot="index, follow"
      />
      <h1>Halaman depan</h1>
    </div>
  );
};

export default HomePage;
