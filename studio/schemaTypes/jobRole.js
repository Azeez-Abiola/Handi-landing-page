import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'jobRole',
  title: 'Job Role',
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
      description: 'The URL for this role, e.g. /careers/your-slug',
      options: { source: 'title', maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'department',
      title: 'Department',
      type: 'string',
      description: 'e.g. Design, Development, Marketing, Operations',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      initialValue: 'Lagos, Nigeria',
    }),
    defineField({
      name: 'workMode',
      title: 'Work mode',
      type: 'string',
      options: {
        list: ['Remote', 'Hybrid', 'On-site'],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'employmentType',
      title: 'Employment type',
      type: 'string',
      options: {
        list: ['Full Time', 'Part Time', 'Contract', 'Freelance'],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'about',
      title: 'About the role',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'responsibilities',
      title: "What you'll do",
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'requirements',
      title: "What we're looking for",
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'isOpen',
      title: 'Open',
      type: 'boolean',
      description: 'Uncheck to hide this role from the careers page.',
      initialValue: true,
    }),
    defineField({
      name: 'order',
      title: 'Sort order',
      type: 'number',
      description: 'Lower numbers appear first.',
    }),
  ],
  orderings: [
    { title: 'Sort order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'title', subtitle: 'department' },
  },
})
