import { useState } from "react";

import Footer from "./components/footer";
import TopHeader from "./components/header";
import CardListing from "./components/card";

function App() {
  const cardData = [
    {
      bannerImage: "./src/assets/images/banner.png",
      points: 5000,
      progress: { current: 308, total: 500 },
      gachaCounts: [1, 10, 100, 1],
    },
    {
      bannerImage: "./src/assets/images/banner.png",
      points: 10000,
      progress: { current: 150, total: 300 },
      gachaCounts: [5, 20, 50, 12],
    },
  ];

  return (
    <>
      <section className="main-section">
        <TopHeader redJewelCount={33102} whiteJewelCount={33102} />
        <CardListing cards={cardData} />
        <Footer />
      </section>
    </>
  );
}

export default App;
