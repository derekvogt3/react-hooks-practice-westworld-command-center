import React from "react";
import { Segment, Image } from "semantic-ui-react";
import * as Images from "../services/Images";
import HostInfo from "./HostInfo";

function Details({
  hosts,
  hostSelectedId,
  setHosts,
  areas,
  setAreas,
  setLogs,
}) {
  // We'll render the logo if no host is selected. But if a host does get selected....
  // Watch the video to see how this works in the app.

  return (
    <Segment id="details" className="HQComps">
      {JSON.stringify(hostSelectedId) === "{}" ? (
        <Image size="medium" src={Images.westworldLogo} />
      ) : (
        <HostInfo
          hosts={hosts}
          hostSelectedId={hostSelectedId}
          setHosts={setHosts}
          areas={areas}
          setAreas={setAreas}
          setLogs={setLogs}
        />
      )}
    </Segment>
  );
}

export default Details;
