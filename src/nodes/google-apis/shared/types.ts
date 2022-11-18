import { GoogleApisAuthenticationNode } from '../../google-apis-authentication/modules/types';

export interface GoogleApisOptions {
  // node options
  authentication: GoogleApisAuthenticationNode
  api: string
  method: string
}
