import { CollectionConfig } from "payload/types";

const Cities: CollectionConfig = {
  slug: "cities",
  admin: {
    useAsTitle: "nameFa",
    defaultColumns: ["nameFa", "province"],
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
      name: "province",
      type: "relationship",
      relationTo: "provinces",
    },
  ],

  timestamps: false,
};

export default Cities;
