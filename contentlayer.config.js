import { defineDocumentType, makeSource } from "contentlayer/source-files";
// import rehypeAutolinkHeadings from "rehype-autolink-headings"
// import rehypePrettyCode from "rehype-pretty-code"
// import rehypeSlug from "rehype-slug"
// import remarkGfm from "remark-gfm"

/** @type {import('contentlayer/source-files').ComputedFields} */
// const computedFields = {
//   slug: {
//     type: "string",
//     resolve: (doc) => `/${doc._raw.flattenedPath}`,
//   },
//   slugAsParams: {
//     type: "string",
//     resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
//   },
// };

export const Projects = defineDocumentType(() => ({
  name: "Projects",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    date: {
      type: "date",
    },
    draft: {
      type: "boolean",
    },
    title: {
      type: "string",
    },
    description: {
      type: "string",
    },
    author: {
        type: "string",
      },
    tags: {
      type: "list",
      of: { type: "string" },
    },
    categories: {
      type: "list",
      of: { type: "string" },
    },
    image: {
      type: "string",
    },
    imgset: {
      type: "list",
      of: { type: "string" },
    },
  },
  computedFields:{
    slug: { type: 'string', resolve: (project) => `/projects/${project._raw.flattenedPath}` },
  },
}));

export default makeSource({
  contentDirPath: "projects",
  documentTypes: [Projects],
  //   mdx: {
  //     remarkPlugins: [remarkGfm],
  //   },
});
