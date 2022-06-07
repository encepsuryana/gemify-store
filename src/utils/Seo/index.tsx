import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import icon from "../../assets/logo/icon.png";

type Props = {
  title?: string;
  description?: string;
  robot?: string;
  canonical?: string;
  locale?: string;
  pav_icon?: string;
  type?: string;
  site_name?: string;
  image?: string;
  twitter_username?: string;
  twitter_card?: string;
  twitter_site?: string;
  twitter_creator?: string;
};

const Seo = (props: Props) => {
  //Props
  const {
    title,
    pav_icon,
    description,
    robot,
    canonical,
    locale,
    type,
    site_name,
    image,
    twitter_username,
    twitter_card,
    twitter_site,
  } = props;

  //set default value
  const defaultProps = {
    title: "Gemify Store - Website topup Game, tercepat dan terpercaya.",
    description: "Topup game tercepat, terpercaya dan termurah.",
    robot: "index, follow",
    pav_icon: icon,
    canonical: "https://www.gemify.id/",
    locale: "id_ID",
    type: "website",
    site_name: "Gemify Store",
    image: "https://www.gemify.id/icons.png",
    twitter_username: "@gemify.id",
    twitter_card: "summary_large_image",
    twitter_site: "@gemify.id",
    twitter_creator: "@gemify.id",
  };

  //set helmetProps
  const helmetProps = {
    title: title + " | " + defaultProps.title || defaultProps.title,
    description: description || defaultProps.description,
    robot: robot || defaultProps.robot,
    pav_icon: pav_icon || defaultProps.pav_icon,
    canonical: canonical || defaultProps.canonical,
    locale: locale || defaultProps.locale,
    type: type || defaultProps.type,
    site_name: site_name || defaultProps.site_name,
    image: image || defaultProps.image,
    twitter_username: twitter_username || defaultProps.twitter_username,
    twitter_card: twitter_card || defaultProps.twitter_card,
    twitter_site: twitter_site || defaultProps.twitter_site,
    twitter_creator: twitter_username || defaultProps.twitter_creator,
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>{helmetProps.title}</title>
        <link rel="icon" href={helmetProps.pav_icon} />
        <meta name="description" content={helmetProps.description} />
        <meta name="robots" content={helmetProps.robot} />
        <link rel="canonical" href={helmetProps.canonical} />
        <meta name="locale" content={helmetProps.locale} />
        <meta name="type" content={helmetProps.type} />
        <meta name="site_name" content={helmetProps.site_name} />
        <meta name="image" content={helmetProps.image} />
        <meta name="twitter:card" content={helmetProps.twitter_card} />
        <meta name="twitter:site" content={helmetProps.twitter_site} />
        <meta name="twitter:creator" content={helmetProps.twitter_creator} />

        <meta property="og:title" content={helmetProps.title} />
        <meta property="og:description" content={helmetProps.description} />
        <meta property="og:image" content={helmetProps.image} />
        <meta property="og:url" content={helmetProps.canonical} />
        <meta property="og:type" content={helmetProps.type} />
        <meta property="og:locale" content={helmetProps.locale} />
        <meta property="og:site_name" content={helmetProps.site_name} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="twitter:title" content={helmetProps.title} />
        <meta
          property="twitter:description"
          content={helmetProps.description}
        />
        <meta property="twitter:image" content={helmetProps.image} />
        <meta property="twitter:url" content={helmetProps.canonical} />
        <meta property="twitter:card" content={helmetProps.twitter_card} />
        <meta property="twitter:site" content={helmetProps.twitter_site} />
        <meta
          property="twitter:creator"
          content={helmetProps.twitter_creator}
        />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
    </HelmetProvider>
  );
};

export default Seo;
