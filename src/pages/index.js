import React from "react";

import SEO from "../components/seo";
import Header from "../components/mainpage/header";
import SambutanKetang from "../components/mainpage/sambutanketang";
import VisiMisi from "../components/mainpage/visimisi";
import Cerita from "../components/mainpage/cerita";
import MaknaLogo from "../components/mainpage/maknalogo";

const IndexPage = () => (
  <>
    <SEO title="Halaman Utama" />
    <Header />
    <SambutanKetang />
    <VisiMisi />
    <Cerita />
    <MaknaLogo />
  </>
);

export default IndexPage;
