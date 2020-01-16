export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e20843837ccdfb8103529e6',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-fyypp15k',
                  apiId: '99215a75-7b1d-4e6f-8ffd-f9d33c245679'
                },
                {
                  buildHookId: '5e20843937ccdfe6cf3529d9',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-6oxr9orx',
                  apiId: '931ef807-bf34-4527-b922-e6a053be738f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/toon12/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-6oxr9orx.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
