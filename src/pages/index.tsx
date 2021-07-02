import React from "react";

import { Map, Stats } from "components/css";

const Home: React.FC = () => {
  return (
    <div id="map">
      <Map />
      <Stats />
    </div>
  );
};

export default Home;
