import { defineField, defineType } from 'sanity'

export const category = defineType({
  name: 'category', 
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Category Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
})
