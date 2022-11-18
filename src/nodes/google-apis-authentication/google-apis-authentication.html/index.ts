import { EditorRED } from "node-red";
import { GoogleApisAuthenticationEditorNodeProperties } from "./modules/types";

declare const RED: EditorRED;

RED.nodes.registerType<GoogleApisAuthenticationEditorNodeProperties>("google-apis-authentication", {
  category: "config",
  defaults: {
    name: {
      value: 'Google APIs Authentication',
      required: true
    },
    key: {
      value: '{}',
      required: true
    },
    scopes: {
      value: '',
      required: true
    }
  },
  label: function () {
    return this.name || "Google APIs Authentication";
  },
});
