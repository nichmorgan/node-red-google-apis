import { Node, NodeDef } from "node-red";
import { GoogleApisOptions } from "../shared/types";

export interface GoogleApisNodeDef extends NodeDef, GoogleApisOptions {}

// export interface GoogleApisNode extends Node {}
export type GoogleApisNode = Node;
