import Vue from 'vue'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'

Vue.use({
    install(Vue) {
        Vue.prototype.$api = createHttpLink({
            uri: 'http://localhost:4000/'
        })
    }
})