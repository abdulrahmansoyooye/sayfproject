import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "v9lr91yp",
  dataset: "podcasts",
  apiVersion: "2022-03-07",
  useCdn: false,
});
