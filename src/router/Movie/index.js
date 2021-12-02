export default {
  path: '/movie',
  component: () => import('@/views/Movie'),
  redirect: '/movie/nowplaying',
  children: [
    {
      path: 'city',
      component: () => import('@/components/City')
    },
    {
      name: 'nowplay',
      path: 'nowplaying',
      component: () => import('@/components/Nowplaying')
    },
    {
      path: 'comingsoon',
      component: () => import('@/components/Comingsoon')
    },
    {
      path: 'search',
      component: () => import('@/components/Search'),
      children: [
        {
          name: 'searchDefault',
          path: 'default',
          component: () => import('@/components/SearchDefault')
        },
        {
          name: 'searchResult',
          path: 'type',
          component: () => import('@/components/SearchResult')
        }
      ],
      redirect: '/movie/search/default'
    }
  ]
}
