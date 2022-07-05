import React from "react";
import { Card } from "semantic-ui-react";
import "../stylesheets/Host.css";

function Host({ host, hostSelectedId, setHostSelectedId }) {
  /* NOTE: The className "host selected" renders a different style than simply "host". */

  return (
    <Card
      className={host.id === hostSelectedId ? "host selected" : "host"}
      onClick={() => setHostSelectedId(host.id)}
      image={host.imageUrl}
      raised
      link
    />
  );
}

export default Host;
