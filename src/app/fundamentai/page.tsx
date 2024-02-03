'use client'

import ProductCard from '@/components/ProductCard'
import React from 'react'

import { Query } from '@/graphql/controller'
import { Skeleton } from 'antd'
import Link from 'next/link'

export default function page() {
    let { data, loading, error } = Query('GET_ALL_SOURCES')

    if (!loading) {
        data = (data.sources.data as any[]).map((element: any) => {
            return {
                id: element.id,
                name: element.attributes.title,
                publisher: !element.attributes.publisher ? element.attributes.publisher.data.attributes : null,
                description: element.attributes.content
            }
        })
    }

    return (
        <div className="w-full  flex flex-col items-center justify-start min-h-[70vh]">
            <div className="grid grid-cols-3 gap-10 my-8 ">
                {!loading &&
                    data.map((prod: any) => {
                        return <ProductCard className="h-fit border-2 border-solid border-black/10 rounded-xl max-w-[250px]  " data={prod} />
                    })}
            </div>
        </div>
    )
}
