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

const cache = new InMemoryCache()

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

