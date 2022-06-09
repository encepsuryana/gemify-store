import React, { FC } from "react";
import Seo from "../../../utils/Seo";
import Banner from "../../templates/Banners";

type Props = {};

const HomePage: FC<Props> = ({}) => {
  return (
    <div className="container px-2">
      <Seo
        title="Home Page"
        description="Home page"
        canonical="https://www.gemify.id/"
        image="https://www.gemify.id/icons.png"
        robot="index, follow"
      />
      <Banner />
      <h1>Halaman depan</h1>
    </div>
  );
};

export default HomePage;
