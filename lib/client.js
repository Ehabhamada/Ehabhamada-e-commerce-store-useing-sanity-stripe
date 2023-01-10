import sanityclient from "@sanity/client";
import imageurlbuilder from "@sanity/image-url";

export const client = sanityclient({
  projectId: "fwaave35",
  dataset: "production",
  ApiVersion: "2023-1-7",
  useCdn: "true",
  token: process.env.Next_public_Sanity_token,
});

const builder = imageurlbuilder(client);
export const urlfor = (source) => builder.image(source);
