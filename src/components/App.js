import React from "react";
import { useState, useEffect } from "react";
import { Segment } from "semantic-ui-react";
import "../stylesheets/App.css";
import Headquarters from "./Headquarters";
import WestworldMap from "./WestworldMap";
import { Log } from "../services/Log";

function App() {
  const [hosts, setHosts] = useState([]);
  const [areas, setAreas] = useState([]);
  const [hostSelectedId, setHostSelectedId] = useState({});
  const [logs, setLogs] = useState(dummyLogs());

  function dummyLogs() {
    // This is just to show you how this should work. But where should the log data actually get stored?
    // And where should we be creating logs in the first place?
    // Use the Log Service class (located in: 'src/services/Log') we've created anywhere you like.
    // Just remember to import it

    let logs = [];

    logs.unshift(Log.warn("This is an example of a warn log"));
    logs.unshift(Log.notify("This is an example of a notify log"));
    logs.unshift(Log.error("This is an example of an error log"));

    return logs;
  }

  useEffect(() => {
    fetch("http://localhost:3001/hosts")
      .then((res) => res.json())
      .then((data) => setHosts(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001/areas")
      .then((res) => res.json())
      .then((data) => setAreas(data));
  }, []);

  return (
    <Segment id="app">
      <WestworldMap
        hosts={hosts}
        areas={areas}
        hostSelectedId={hostSelectedId}
        setHostSelectedId={setHostSelectedId}
        setLogs={setLogs}
      />
      <Headquarters
        areas={areas}
        setAreas={setAreas}
        hosts={hosts}
        setHosts={setHosts}
        hostSelectedId={hostSelectedId}
        setHostSelectedId={setHostSelectedId}
        logs={logs}
        setLogs={setLogs}
      />
    </Segment>
  );
}

export default App;
