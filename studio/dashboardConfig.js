export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e26e6bc642597a1dafe322a',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-hod6f6ey',
                  apiId: 'ddaed1f3-615d-4f9e-86ec-27f43c62e775'
                },
                {
                  buildHookId: '5e26e6bc3bf5ce0187c4c3e5',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-c2n5htsb',
                  apiId: '70d15ee0-5eaa-4675-bd9e-a27c60c20272'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nomasghar/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-c2n5htsb.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
