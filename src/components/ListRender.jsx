import React from "react";
import SiteList from "./siteList";

function ListRender() {
  const sites = [
    {
      id: 1,
      siteName: "github",
      desc: "version control",
    },
    {
      id: 2,
      siteName: "facebook",
      desc: "social site",
    },
    {
      id: 3,
      siteName: "twitter",
      desc: "tweet",
    },
  ];
  const siteList = sites.map((site) => <SiteList site={site}/>);
  return <div>{siteList}</div>;
}

export default ListRender;
