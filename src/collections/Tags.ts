import { CollectionConfig } from "payload/types";

const Tags: CollectionConfig = {
  slug: "tags",
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
  ],
  timestamps: false,
};

export default Tags;
