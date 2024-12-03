import "server-only";

import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";

export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});

if (!writeClient.config()) {
  throw new Error("Write token not found.");
}
