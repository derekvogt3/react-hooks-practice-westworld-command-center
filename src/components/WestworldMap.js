import React from "react";
import { Segment } from "semantic-ui-react";
import Area from "./Area";

function WestworldMap({ areas, hosts, hostSelectedId, setHostSelectedId }) {
  const areasToInclude = areas.map((area) => {
    return (
      <Area
        key={area.id}
        area={area}
        hosts={hosts}
        hostSelectedId={hostSelectedId}
        setHostSelectedId={setHostSelectedId}
      />
    );
  });

  return <Segment id="map">{areasToInclude}</Segment>;
}

export default WestworldMap;
