import { buildConfig } from "payload/config";
import path from "path";
import People from "./collections/People";
import Tags from "./collections/Tags";
import Users from "./collections/Users";
import Cities from "./collections/Cities";
import Provinces from "./collections/Provinces";
import Mappings from "./collections/Mappings";

export default buildConfig({
  serverURL: "http://localhost:3000",
  admin: {
    user: Users.slug,
  },
  collections: [People, Tags, Users, Cities, Provinces, Mappings],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
});
