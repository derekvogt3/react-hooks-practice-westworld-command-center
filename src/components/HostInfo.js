import React, { useState } from "react";
import {
  Radio,
  Icon,
  Card,
  Grid,
  Image,
  Dropdown,
  Divider,
} from "semantic-ui-react";
import "../stylesheets/HostInfo.css";
import { Log } from "../services/Log";

// logs.unshift(Log.warn("This is an example of a warn log"));
// logs.unshift(Log.notify("This is an example of a notify log"));
// logs.unshift(Log.error("This is an example of an error log"));

function HostInfo({ hosts, hostSelectedId, setHosts, areas, setLogs }) {
  let currentHost = hosts.find((host) => host.id === hostSelectedId);
  // This state is just to show how the dropdown component works.
  // Options have to be formatted in this way (array of objects with keys of: key, text, value)
  // Value has to match the value in the object to render the right text.

  // IMPORTANT: But whether it should be stateful or not is entirely up to you. Change this component however you like.
  const [options] = useState(getAreasInfo());

  function getAreasInfo() {
    let areaOptions = [];

    for (let area of areas) {
      let areaOption = {
        key: area.id,
        text: area.name.replace(/_/g, " ").toUpperCase(),
        value: area.name,
      };

      areaOptions.push(areaOption);
    }
    return areaOptions;
  }

  function handleOptionChange(e, { value }) {
    let newHosts = [];

    let capacityCounter = 0;

    for (let host of hosts) {
      if (value === host.area) {
        capacityCounter = capacityCounter + 1;
      }
    }

    if (capacityCounter === areas.find((area) => area.name === value).limit) {
      setLogs((logs) => [
        Log.error(
          "Too Many Hosts. Cannot Add " + currentHost.firstName + " to " + value
        ),
        ...logs,
      ]);

      return;
    }

    for (let host of hosts) {
      if (host.id === currentHost.id) {
        currentHost.area = value;
        newHosts.push(currentHost);
      } else {
        newHosts.push(host);
      }
    }
    setHosts(newHosts);
    setLogs((logs) => [
      Log.notify(currentHost.firstName + " set in area " + currentHost.area),
      ...logs,
    ]);

    // the 'value' attribute is given via Semantic's Dropdown component.
    // Put a debugger or console.log in here and see what the "value" variable is when you pass in different options.
    // See the Semantic docs for more info: https://react.semantic-ui.com/modules/dropdown/#usage-controlled
  }

  function handleRadioChange() {
    let newHosts = [];
    for (let host of hosts) {
      if (host.id === currentHost.id) {
        currentHost.active = !currentHost.active;
        newHosts.push(currentHost);
      } else {
        newHosts.push(host);
      }
    }
    setHosts(newHosts);
    setLogs((logs) => [
      Log.notify(
        currentHost.active
          ? "Activated " + currentHost.firstName
          : "Decommissioned " + currentHost.firstName
      ),
      ...logs,
    ]);
  }

  return (
    <Grid>
      <Grid.Column width={6}>
        <Image
          src={currentHost.imageUrl}
          floated="left"
          size="small"
          className="hostImg"
        />
      </Grid.Column>
      <Grid.Column width={10}>
        <Card>
          <Card.Content>
            <Card.Header>
              {currentHost.firstName} |{" "}
              {currentHost.gender === "Male" ? (
                <Icon name="man" />
              ) : (
                <Icon name="woman" />
              )}
            </Card.Header>
            <Card.Meta>
              {/* Sometimes the label should take "Decommissioned". How are we going to conditionally render that? */}
              {/* Checked takes a boolean and determines what position the switch is in. Should it always be true? */}
              <Radio
                onChange={handleRadioChange}
                label={currentHost.active ? "Active" : "Decommissioned"}
                checked={currentHost.active}
                slider
              />
            </Card.Meta>
            <Divider />
            Current Area:
            <Dropdown
              onChange={handleOptionChange}
              value={currentHost.area}
              options={options}
              selection
            />
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>
  );
}

export default HostInfo;
