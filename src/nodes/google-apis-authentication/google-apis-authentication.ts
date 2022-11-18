import { NodeInitializer } from "node-red";
import { GoogleApisAuthenticationNode, GoogleApisAuthenticationNodeDef } from "./modules/types";

const nodeInit: NodeInitializer = (RED): void => {
  function GoogleApisAuthenticationNodeConstructor(
    this: GoogleApisAuthenticationNode,
    config: GoogleApisAuthenticationNodeDef
  ): void {
    RED.nodes.createNode(this, config);
  }

  RED.nodes.registerType("google-apis-authentication", GoogleApisAuthenticationNodeConstructor);
};

export = nodeInit;
