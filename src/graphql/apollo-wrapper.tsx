'use client'

import config from '@/config/config'

import { ApolloClient, ApolloLink, HttpLink } from '@apollo/client'
import { ApolloNextAppProvider, NextSSRInMemoryCache, NextSSRApolloClient, SSRMultipartLink } from '@apollo/experimental-nextjs-app-support/ssr'

function makeClient() {
    const httpLink = new HttpLink({
        // https://studio.apollographql.com/public/spacex-l4uc6p/
        uri: config.gql
    })

    return new NextSSRApolloClient({
        cache: new NextSSRInMemoryCache(),
        link:
            typeof window === 'undefined'
                ? ApolloLink.from([
                      new SSRMultipartLink({
                          stripDefer: true
                      }),
                      httpLink
                  ])
                : httpLink
    })
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
    return <ApolloNextAppProvider makeClient={makeClient}>{children}</ApolloNextAppProvider>
}
