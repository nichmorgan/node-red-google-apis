import { NodeInitializer } from "node-red";
import { GoogleApisNode, GoogleApisNodeDef } from "./modules/types";

const nodeInit: NodeInitializer = (RED): void => {
  function GoogleApisNodeConstructor(
    this: GoogleApisNode,
    config: GoogleApisNodeDef
  ): void {
    RED.nodes.createNode(this, config);

    this.on("input", (msg, send, done) => {
      send(msg);
      done();
    });
  }

  RED.nodes.registerType("google-apis", GoogleApisNodeConstructor);
};

export = nodeInit;
