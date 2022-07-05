import React from "react";
import { Grid } from "semantic-ui-react";
import Details from "./Details";
import "../stylesheets/Headquarters.css";
import ColdStorage from "./ColdStorage";
import LogPanel from "./LogPanel";

function Headquarters({
  hosts,
  hostSelectedId,
  setHostSelectedId,
  setHosts,
  areas,
  setAreas,
  logs,
  setLogs,
}) {
  return (
    <Grid celled="internally">
      <Grid.Column width={8}>
        <ColdStorage
          hosts={hosts}
          hostSelectedId={hostSelectedId}
          setHostSelectedId={setHostSelectedId}
        />
      </Grid.Column>
      <Grid.Column width={5}>
        <Details
          hosts={hosts}
          hostSelectedId={hostSelectedId}
          setHosts={setHosts}
          areas={areas}
          setAreas={setAreas}
          setLogs={setLogs}
        />
      </Grid.Column>
      <Grid.Column width={3}>
        <LogPanel
          hosts={hosts}
          setHosts={setHosts}
          logs={logs}
          setLogs={setLogs}
        />
      </Grid.Column>
    </Grid>
  );
}

export default Headquarters;
