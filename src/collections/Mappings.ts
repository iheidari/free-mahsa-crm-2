import { CollectionConfig } from "payload/types";

const Mappings: CollectionConfig = {
  slug: "mappings",
  admin: {
    useAsTitle: "original",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "original",
      type: "text",
    },
    {
      name: "correct",
      type: "text",
    },
  ],
  timestamps: false,
};

export default Mappings;
