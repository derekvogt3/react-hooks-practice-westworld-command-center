import React from "react";
import { Card } from "semantic-ui-react";
import Host from "./Host";

function HostList({ hosts, hostSelectedId, setHostSelectedId }) {
  const hostToInclude = hosts.filter((host) => {
    return !host.active;
  });

  const hostCards = hostToInclude.map((host) => {
    return (
      <Host
        key={host.id}
        host={host}
        hostSelectedId={hostSelectedId}
        setHostSelectedId={setHostSelectedId}
      />
    );
  });

  return <Card.Group itemsPerRow={6}>{hostCards}</Card.Group>;
}

export default HostList;
