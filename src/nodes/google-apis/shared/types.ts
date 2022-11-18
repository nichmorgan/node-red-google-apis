import { GoogleApisAuthenticationOptions } from "../../google-apis-authentication/shared/types";

export interface GoogleApisOptions {
  // node options
  authentication: GoogleApisAuthenticationOptions
  api: unknown
  method: unknown
}
