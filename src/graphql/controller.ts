'use client'

import config from '@/config/config'

export const dynamic = 'force-dynamic'
import { useQuery } from '@apollo/experimental-nextjs-app-support/ssr'

import GET_ALL_SOURCES from '@/graphql/sources.gql'
import GET_SOURCE from '@/graphql/source.gql'
import GET_SUMMARY from '@/graphql/get-summary.gql'
import GET_LAST_2_TCMB from '@/graphql/get-last-2-tcmb.gql'

let queries = {
    GET_ALL_SOURCES,
    GET_SOURCE,
    GET_SUMMARY,
    GET_LAST_2_TCMB
}

import ADD_SUMMARY from '@/graphql/add-summary.gql'
import { useMutation } from '@apollo/client'
let mutations = {
    ADD_SUMMARY
}

function resolve(path: string, obj: any) {
    return path.split('.').reduce(function (prev, curr) {
        return prev ? prev[curr] : null
    }, obj || self)
}

export function Query(query: string, variables: any = {}) {
    let { data, loading, error } = useQuery(resolve(query, queries), {
        variables,
        context: {
            headers: {
                Authorization: `Bearer ${config.bearer}`
            }
        }
    })

    return {
        data,
        error,
        loading
    }
}

export function Mutation(mutate: any) {
    let [mutation, { data, loading, error }] = useMutation(resolve(mutate, mutations), {
        context: {
            headers: {
                Authorization: `Bearer ${config.bearer}`
            }
        }
    })

    return { data, loading, error, mutation }
}
