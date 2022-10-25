import React from "react";

import { sectors } from "../data/sectors.js";

function SectorCards() {
  return (
    <div className="sectors-container">
      {sectors &&
        sectors.map((sector) => {
          return (
            <div className="sector-card" key={sector.id}>
              <div>
                <h2>{sector.title}</h2>
                <p>{sector.body}</p>
              </div>
              <div>
                <h3>{sector.subtitle}</h3>
                <ul>
                  {sector.list.map((listItem, i) => {
                    return <li key={i}>{listItem}</li>;
                  })}
                </ul>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default SectorCards;
