import payload from "payload";
import createMappings from "./Mappings";
import createProvincesCities from "./ProvincesCities";

require("dotenv").config();

const { PAYLOAD_SECRET, MONGO_URL } = process.env;

if (!PAYLOAD_SECRET || !MONGO_URL) {
  throw "PAYLOAD_SECRET or MONGO_URL environment variables missed";
}

const createAll = async () => {
  await payload.init({
    secret: PAYLOAD_SECRET,
    mongoURL: MONGO_URL,
    local: true,
  });

  console.log("createAll");
  await createProvincesCities();
  await createMappings();
  console.log("Seed completed!");
  process.exit(0);
};

createAll();
