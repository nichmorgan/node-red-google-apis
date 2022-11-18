import { Node, NodeDef } from 'node-red';
import { GoogleApisAuthenticationOptions } from "../shared/types";
import { Auth } from 'googleapis';

export interface GoogleApisAuthenticationNodeDef extends NodeDef, GoogleApisAuthenticationOptions { }

export interface GoogleApisAuthenticationNode extends Node {
    auth: Auth.JWT;
}
// export type GoogleApisAuthenticationNode = Node;
