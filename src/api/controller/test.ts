import { getClient } from '@/api/client'

import { gql } from '@apollo/client'

const query = gql`
    query {
        customQuery
    }
`

const login = gql`
    mutation {
        login(input: { identifier: "sample_customer", password: "sample_customer" }) {
            jwt
        }
    }
`

export async function test() {
    try {
        let data = await getClient().mutate({ mutation: login })
        let data2 = await getClient().query({ query })

        console.log(data, data2)
    } catch (err) {
        console.log(err)
    }
}
