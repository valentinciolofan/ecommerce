import { defineField, defineType } from 'sanity';

export const product = defineType({
  name: 'product',
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
      validation: (rule) => rule.required(), // Mark slug as required
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
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
      options: {
        layout: 'grid',
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
    defineField({
      name: 'collection',
      title: 'Collection',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'collection' }] }],
    }),
    defineField({
      name: 'color',
      title: 'Color',
      type: 'string',
      options: {
        list: [
          { title: 'Black', value: 'black' },
          { title: 'White', value: 'white' },
          { title: 'Beige', value: 'beige' },
          { title: 'Blue', value: 'blue' },
          { title: 'Grey', value: 'grey' },
          { title: 'Red', value: 'red' },
          { title: 'Green', value: 'green' },
          { title: 'Brown', value: 'brown' },
          { title: 'Yellow', value: 'yellow' },
          { title: 'Pink', value: 'pink' },
        ],
      },
    }),
    defineField({
      name: 'size',
      title: 'Size',
      type: 'string',
      options: {
        list: [
          { title: 'S', value: 's' },
          { title: 'M', value: 'm' },
          { title: 'L', value: 'l' },
          { title: 'XL', value: 'xl' },
          { title: 'XXL', value: 'xxl' },
        ],
      },
    }),
    defineField({
      name: 'material',
      title: 'Material',
      type: 'string',
      options: {
        list: [
          { title: 'Cotton', value: 'cotton' },
          { title: 'Linen', value: 'linen' },
          { title: 'Wool', value: 'wool' },
          { title: 'Silk', value: 'silk' },
          { title: 'Leather', value: 'leather' },
          { title: 'Synthetic Fabrics', value: 'synthetic' },
        ],
      },
    }),
    defineField({
      name: 'availability',
      title: 'Availability',
      type: 'boolean',
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: (rule) => rule.min(0).max(5).precision(1),
    }),
  ],
});
