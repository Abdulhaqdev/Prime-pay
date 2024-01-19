import React from "react";
import { style } from "../util/style";
import { clients } from "../util/constants";
import ClientCard from "./CleintCard";
// import CleintCard from "./CleintCard";

function Clients() {
  return (
    <div id="clients" className={`${style.flexcenter} my-4`}>
      <div className={`${style.flexcenter} flex-wrap w-full`}>
        {clients.map((client) => {
          return <ClientCard key={client.id} logo={client.logo} />;
        })}
      </div>
    </div>
  );
}

export default Clients;
