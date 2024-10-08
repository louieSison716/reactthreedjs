import React, { useState } from "react";
// import Video from "./Video";
import GeoChart from "./GeoChart";
import data from "./GeoChart.world.geo.json";
import "./App.css";

function App() {
  const [property, setProperty] = useState("pop_est");
  return (
    <React.Fragment>
      <h2>Louie Sison D3 Practice</h2>
      <GeoChart data={data} property={property} />
      <h2>Select Action</h2>
      <select
        value={property}
        onChange={event => setProperty(event.target.value)}
        className="world-select"
      >
        <option value="pop_est">Population</option>
        <option value="name_len">Name length</option>
        <option value="gdp_md_est">GDP</option>
      </select>
      {/* <Video /> */}
    </React.Fragment>
  );
}

export default App;
