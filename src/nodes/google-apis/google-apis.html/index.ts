import { EditorRED } from "node-red";
import { GoogleApisEditorNodeProperties } from "./modules/types";

declare const RED: EditorRED;

RED.nodes.registerType<GoogleApisEditorNodeProperties>("google-apis", {
  category: "function",
  color: "#1a73e8",
  defaults: {
    name: {
      value: ""
    },
    authentication: {
      value: "",
      required: true,
      type: "google-apis-authentication"
    },
    api: {
      value: "",
      type: ""
    },
    method: {
      value: "",
      type: ""
    }
  },
  inputs: 1,
  outputs: 1,
  icon: "google-apis.svg",
  paletteLabel: "google apis",
  label: function () {
    if (this.name) return this.name;
    else if (this.api) return this.method ? `${this.api} - ${this.method}` : this.api;
    else return "google apis";
  },
  oneditprepare() {
    const selectAPI = $("#node-input-api");
    const selectMethod = $("#node-input-method");
    const scopesInfo = $("#node-scopes-info");

    selectAPI.on("change", () => {
      debugger;
      scopesInfo.empty();
      selectMethod.children().not("#node-input-dynamic-method").remove();
      const api = selectAPI.val();

      if (api) {
        $.getJSON("google-apis/" + api + "/info", (data) => {
          debugger;
          selectMethod.children().last().after(data.methods.map((d: string) => {
            return $("<option></option>").attr("value", d).attr("selected", String(this.method === d)).text(d).wrap("<p/>").parent().html();
          }).join(""));
          if (data.methods.indexOf(this.method) < 0) {
            $("#node-input-dynamic-method").attr("selected", "true");
          };
          $.each(data.scopes, (i, v) => {
            scopesInfo.append($("<li></li>").text(v));
          });
        });
      } else {
        $("#node-input-dynamic-method").attr("selected", "true");
      }
      selectMethod.on("change", false);
    });

    $.getJSON("google-apis/list", (data) => {
      debugger;
      selectAPI.children().last().after(data.map((d: string) => {
        return $("<option></option>").attr("value", d).attr("selected", String(this.api === d)).text(d).wrap("<p/>").parent().html();
      }).join(""));
      if (data.indexOf(this.api) < 0) {
        $("#node-input-dynamic-api").attr("selected", "true");
      }
      selectAPI.on("change", false);
    });

  },
});
