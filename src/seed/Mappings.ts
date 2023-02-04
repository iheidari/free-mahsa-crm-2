import { Mapping } from "../payload-types";
import CityMappings from "./fixtures/city-mapping";
import DetailMappings from "./fixtures/details-mapping";
import NameMappings from "./fixtures/name-mapping";
import { create } from "./util";

const createMappings = async () => {
  const mappingPromises: Promise<Mapping | undefined>[] = [];
  for (const key in CityMappings) {
    const promise = create<Mapping>(
      "mappings",
      { original: { equals: key } },
      { original: key, correct: CityMappings[key] }
    );
    mappingPromises.push(promise);
  }
  for (const key in DetailMappings) {
    const promise = create<Mapping>(
      "mappings",
      { original: { equals: key } },
      { original: key, correct: DetailMappings[key] }
    );
    mappingPromises.push(promise);
  }
  for (const key in NameMappings) {
    const promise = create<Mapping>(
      "mappings",
      { original: { equals: key } },
      { original: key, correct: NameMappings[key] }
    );
    mappingPromises.push(promise);
  }
  console.log(
    "🚀 ~ file: Mappings.ts:34 ~ createMappings ~ mappingPromises",
    mappingPromises.length
  );
  return Promise.all(mappingPromises);
};

export default createMappings;
