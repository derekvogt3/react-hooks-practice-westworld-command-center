import React from "react";
import "../stylesheets/Area.css";
import Host from "./Host";

function Area({ area, hosts, hostSelectedId, setHostSelectedId }) {
  const hostsToInclude = hosts.filter((host) => {
    console.log(host);
    console.log(area.name);
    if (host.area === area.name && host.active) {
      return true;
    }
    return false;
  });

  const hostObjects = hostsToInclude.map((host) => {
    return (
      <Host
        key={host.id}
        host={host}
        hostSelectedId={hostSelectedId}
        setHostSelectedId={setHostSelectedId}
      />
    );
  });

  return (
    <div className="area" id={area.name}>
      <h3 className="labels">{area.name.replace(/_/g, " ").toUpperCase()}</h3>
      <div className="host-box">{hostObjects}</div>
    </div>
  );
}

Area.propTypes = {
  hosts: function (props) {
    if (props.hosts.length > props.limit) {
      throw Error(
        `HEY!! You got too many hosts in ${props.name}. The limit for that area is ${props.limit}. You gotta fix that!`
      );
    }
  },
};

export default Area;
