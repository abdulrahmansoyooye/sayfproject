import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/config/sanityClient";
const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}
