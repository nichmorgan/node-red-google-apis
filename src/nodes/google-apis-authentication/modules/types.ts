import { Node, NodeDef } from "node-red";
import { GoogleApisAuthenticationOptions } from "../shared/types";

export interface GoogleApisAuthenticationNodeDef extends NodeDef, GoogleApisAuthenticationOptions {}

// export interface GoogleApisAuthenticationNode extends Node {}
export type GoogleApisAuthenticationNode = Node;
