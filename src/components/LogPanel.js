import React from "react";
import { useState } from "react";
import { Segment, Button } from "semantic-ui-react";
import { Log } from "../services/Log";

function LogPanel({ hosts, setHosts, logs, setLogs }) {
  const [isActivationButton, setIsActivationButton] = useState(true);

  function toggleActivation() {
    let newHosts = [];
    for (let host of hosts) {
      let newHost = host;
      newHost.active = isActivationButton;
      newHosts.push(newHost);
    }
    setLogs([
      Log.warn(
        isActivationButton ? "Activating all hosts!" : "Deactivating all hosts!"
      ),
      ...logs,
    ]);
    setIsActivationButton((activation) => !activation);
    setHosts(newHosts);
  }

  return (
    <Segment className="HQComps" id="logPanel">
      <pre>
        {logs.map((log, i) => (
          <p key={i} className={log.type}>
            {log.msg}
          </p>
        ))}
      </pre>

      {/* Button below is the Activate All/Decommisssion All button */}
      {/* This isn't always going to be the same color...*/}
      {/* Should the button always read "ACTIVATE ALL"? When should it read "DECOMMISSION ALL"? */}
      <Button
        fluid
        color={isActivationButton ? "blue" : "red"}
        content={isActivationButton ? "ACTIVATE ALL" : "DECOMMISSION ALL"}
        onClick={toggleActivation}
      />
    </Segment>
  );
}

export default LogPanel;
