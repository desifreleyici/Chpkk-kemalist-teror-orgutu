export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '5ed4f0ad58c0521487c15f93',
                  title: 'Sanity Studio',
                  name: 'Chpkk-kemalist-teror-orgutu-studio',
                  apiId: 'f789cd27-5aa9-4459-8e6b-e78e62319fe2'
                },
                {
                  buildHookId: '5ed4f0ad87e8c720463a83fd',
                  title: 'Blog Website',
                  name: 'Chpkk-kemalist-teror-orgutu',
                  apiId: '1d9bfec9-03f6-448b-8c3c-c4d6620741df'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/desifreleyici/Chpkk-kemalist-teror-orgutu',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://Chpkk-kemalist-teror-orgutu.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
