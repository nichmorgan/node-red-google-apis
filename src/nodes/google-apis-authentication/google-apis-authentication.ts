import { google } from 'googleapis';
import { NodeInitializer } from 'node-red';
import { GoogleApisAuthenticationNode, GoogleApisAuthenticationNodeDef } from "./modules/types";

const nodeInit: NodeInitializer = (RED): void => {
  function GoogleApisAuthenticationNodeConstructor(
    this: GoogleApisAuthenticationNode,
    config: GoogleApisAuthenticationNodeDef
  ): void {
    RED.nodes.createNode(this, config);
    const { client_email: email, private_key: key } = JSON.parse(config.key);
    const scopes = config.scopes.split('\n');

    this.auth = new google.auth.JWT({
      email,
      key,
      scopes
    });
  }

  RED.nodes.registerType("google-apis-authentication", GoogleApisAuthenticationNodeConstructor);
};

export = nodeInit;
