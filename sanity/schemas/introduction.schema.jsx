export const introduction = {
  name: "introduction",
  title: "Introduction",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      require,
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "string",
      require,
      validation: (Rule) => Rule.required(),
    },
    {
      name: "link",
      title: "Link",
      type: "string",
      require,
      validation: (Rule) => Rule.required(),
    },
    {
      name: "poster",
      title: "Poster",
      type: "image",
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    },
  ],
};
