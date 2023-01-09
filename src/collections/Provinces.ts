import { CollectionConfig } from "payload/types";

const Provinces: CollectionConfig = {
  slug: "provinces",
  admin: {
    useAsTitle: "nameFa",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "nameFa",
      type: "text",
    },
    {
      name: "nameEn",
      type: "text",
    },
    {
      name: "code",
      type: "text",
    },
  ],
  timestamps: false,
};

export default Provinces;
