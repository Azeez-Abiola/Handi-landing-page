import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'The URL for this post, e.g. /blog/your-slug',
      options: { source: 'title', maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'For Customers', value: 'For Customers' },
          { title: 'For Professionals', value: 'For Professionals' },
          { title: 'Home Maintenance', value: 'Home Maintenance' },
          { title: 'Lagos Living', value: 'Lagos Living' },
        ],
        layout: 'radio',
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Subheading / Summary',
      type: 'text',
      rows: 3,
      description: 'Short summary shown on the blog cards.',
    }),
    defineField({ name: 'author', title: 'Author', type: 'string' }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'readTime',
      title: 'Read time',
      type: 'string',
      description: 'e.g. "6 min read"',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'featured',
      title: 'Featured (Latest Post)',
      type: 'boolean',
      description: 'Show this post in the big "Latest Post" slot at the top of the blog.',
      initialValue: false,
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }],
    }),
  ],
  orderings: [
    { title: 'Published (newest first)', name: 'pubDesc', by: [{ field: 'publishedAt', direction: 'desc' }] },
  ],
  preview: {
    select: { title: 'title', subtitle: 'category', media: 'coverImage' },
  },
})
