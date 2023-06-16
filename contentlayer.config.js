import { defineDocumentType, makeSource } from "contentlayer/source-files"

const computedFields = {
  slug: {
    type: "string",
    resolve: (guide) => `/${guide._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (guide) => guide._raw.flattenedPath.split("/").slice(1).join("/"),
  },
}

const Guide = defineDocumentType(() => ({
  name: "Guide",
  filePathPattern: `guides/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
  },
  computedFields,
}))

export default makeSource({
  contentDirPath: "./src/content",
  documentTypes: [Guide],
})
