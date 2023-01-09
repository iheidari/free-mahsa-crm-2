import { CollectionConfig } from "payload/types";

const Person: CollectionConfig = {
  slug: "people",
  admin: {
    defaultColumns: ["nameFa", "city", "tags", "status"],
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
      name: "city",
      type: "relationship",
      relationTo: "cities",
    },
    {
      name: "birthDate",
      type: "date",
    },
    {
      name: "arrestedDate",
      type: "date",
    },
    {
      name: "killedDate",
      type: "date",
    },
    {
      name: "tags",
      type: "relationship",
      relationTo: "tags",
      hasMany: true,
    },
    {
      name: "descriptionFa",
      type: "richText",
    },
    {
      name: "descriptionEn",
      type: "richText",
    },
    {
      name: "status",
      type: "select",
      options: [
        {
          value: "draft",
          label: "Draft",
        },
        {
          value: "published",
          label: "Published",
        },
      ],
      defaultValue: "draft",
      admin: {
        position: "sidebar",
      },
    },
  ],
};

export default Person;
