import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { DefaultApolloClient } from '@vue/apollo-composable'

import Layout from './components/layout/Layout.vue';
import NoLayout from './components/layout/NoLayout.vue';


import './index.css'


const httpLink = createHttpLink({
  uri: 'http://localhost:4000',
})

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        infiniteScrollPosts: {
          // Don't cache separate results based on
          // any of this field's arguments.
          keyArgs: false,
          // Concatenate the incoming list items with
          // the existing list items.
          merge(existing, incoming, {args}) {

            console.log(existing, incoming, args)

            if(args.pageNum === 1) return incoming
             
            if (!existing) return incoming

            return {
              __typename: incoming.__typename,
              hasMore: incoming.hasMore,
              posts: [...existing.posts, ...incoming.posts]
            }

          },
          // read (existing) {
          //   console.log('read', existing)
          //   if (existing) {
          //     const hasMore = existing.hasMore
          //     return {
          //       // next: existing.next,
          //       __typename: existing.__typename,
          //       posts: Object.values(existing.posts),
          //       hasMore
          //     }
          //   }
          // }
        }
      }
    }
  }
})

const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})


createApp(App)
.component('default-layout', Layout)
.component('no-layout', NoLayout)
.provide(DefaultApolloClient, apolloClient)
.use(router)
.mount('#app')

