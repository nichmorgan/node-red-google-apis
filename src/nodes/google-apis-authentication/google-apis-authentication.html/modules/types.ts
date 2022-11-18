import { EditorNodeProperties } from "node-red";
import { GoogleApisAuthenticationOptions } from "../../shared/types";

export interface GoogleApisAuthenticationEditorNodeProperties
  extends EditorNodeProperties,
  GoogleApisAuthenticationOptions { }
