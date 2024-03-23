import { defineField, defineType } from 'sanity'

export const product = defineType({
  name: 'product', // Renamed to 'product' for clarity
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Product Title',
      type: 'string',
      validation: (rule) => rule.required(), // Mark title as required
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (rule) => rule.required(), // Mark description as required
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (rule) => rule.required(), // Mark price as required
    }),
    defineField({
      name: 'image',
      title: 'Main Image',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{
        type: 'image',
        options: {
          hotspot: true,
        }
      }],
      options: {
        layout: 'grid'
      },
    }),
    defineField({
      name: 'stock',
      title: 'Stock Level',
      type: 'number',
      validation: (rule) => rule.min(0), 
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'category' }] }],
    }),
  ],
})
