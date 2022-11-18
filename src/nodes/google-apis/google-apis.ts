import { NodeInitializer } from "node-red";
import { GoogleApisNode, GoogleApisNodeDef } from "./modules/types";
import { google } from "googleapis";

const decodeAPI = (api: string) => {
  const [name, version] = api.split(":", 2);
  return {
    name,
    version
  };
};



const nodeInit: NodeInitializer = (RED): void => {
  function GoogleApisNodeConstructor(
    this: GoogleApisNode,
    config: GoogleApisNodeDef
  ): void {
    RED.nodes.createNode(this, config);

    this.on("input", (msg, send, done) => {
      this.status({ fill: "blue", shape: "dot", "text": "pending" });

      const auth = config.authentication.auth;
      const { name, version } = decodeAPI(config.api);

      const api = google[name].prototype({ version, auth });

      auth.authorize((err, _) => {
        if (err) {
          this.status({ fill: "red", shape: "dot", text: "error" });
          this.error(err, msg);
          return;
        }

        const props = config.method.split(".");
        let method = api;
        props.forEach((val) => { method = method[val]; });
        const s = method.bind(api);
        s(msg.payload, { responseType: "arraybuffer" }, (err: unknown, res: { data: WithImplicitCoercion<ArrayBuffer | SharedArrayBuffer>; }) => {
          if (err) {
            this.status({ fill: "red", shape: "dot", text: "error" });
            this.error(err, msg);
            return;
          }

          this.status({ fill: "yellow", shape: "dot", text: "success" });
          msg.payload = Buffer.from(res.data);
          this.send(msg);
        });

      });

      send(msg);
      done();
    });
  }

  RED.nodes.registerType("google-apis", GoogleApisNodeConstructor);
};

export = nodeInit;
