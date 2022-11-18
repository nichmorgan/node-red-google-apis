import { EditorNodeProperties } from "node-red";
import { GoogleApisOptions } from "../../shared/types";

export interface GoogleApisEditorNodeProperties
  extends EditorNodeProperties,
    GoogleApisOptions {}
