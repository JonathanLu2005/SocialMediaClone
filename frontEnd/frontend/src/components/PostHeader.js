import React from "react";
import Pfp from "./Pfp";
export default function PostHeader({ name, pfp }) {
  return (
    <div className="flexRow">
      <div style={{ flex: 1 }}>
        <Pfp pfp={pfp} width="30px"></Pfp>
      </div>
      <div style={{ flex: 25 }}>
        <p>{name}</p>
      </div>
    </div>
  );
}
