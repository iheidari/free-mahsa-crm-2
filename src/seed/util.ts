import payload from "payload";
import { Where } from "payload/dist/types";
import { City, Mapping, Province } from "../payload-types";

export const exist = async (collection: string, where: Where) => {
  const existingMapping = await payload.find({
    collection,
    where,
  });
  return existingMapping.totalDocs !== 0;
};

export const create = async <T = Mapping | City | Province>(
  collection: string,
  where: Where,
  data: Record<string, unknown>
) => {
  const isExist = await exist(collection, where);
  if (!isExist) {
    return payload.create({
      collection,
      data,
    });
  }
  return Promise.resolve(undefined);
};
