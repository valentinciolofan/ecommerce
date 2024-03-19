import { defineField, defineType } from 'sanity'

export const category = defineType({
  name: 'category', // Renamed to 'category' for clarity
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Category Title',
      type: 'string',
      validation: (rule) => rule.required(), // Mark title as required
    }),
    // Add other relevant fields for your category
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Category Image',
      type: 'image',
    }),
    // ... Add other fields as needed (e.g., parent category)
  ],
})
