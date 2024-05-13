import { defineField, defineType } from 'sanity';


export const collection = {
    name: 'collection',
    title: 'Collection',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Collection Title',
            type: 'string',
            validation: (rule) => rule.required(),
          }),
          defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 96,
            },
            validation: (rule) => rule.required(), 
          }),
    ]

}