'use client'

import ProductCard from '@/components/ProductCard'
import React from 'react'

import { Query } from '@/graphql/controller'
import { Layout } from 'antd'
import Header from '@/components/Header/Header'
import Sider from 'antd/es/layout/Sider'
import { Content } from 'next/font/google'

export default function page() {
    let { data, loading, error } = Query('GET_ALL_SOURCES')

    if (!loading) {
        data = (data.sources.data as any[]).map((element: any) => {
            return {
                id: element.id,
                name: element.attributes.title,
                publisher: !element.attributes.publisher ? element.attributes.publisher.data.attributes : null,
                description: element.attributes.content,
                createdAt: element.attributes.createdAt
            }
        })
    }

    console.log(data)

    return (
        <div className="w-full  flex flex-col items-center justify-start min-h-[70vh]">
            <Layout className="w-full min-h-screen">
                <Layout>
                    <Sider width={'25%'}>right sidebar</Sider>
                    <div className="w-full flex flex-col items-center">
                        <div>Header</div>
                        {/* <Content weight={'700'}>main content</Content> */}
                        <div className="grid grid-cols-3 gap-10 my-8 ">
                            {!loading &&
                                data.map((prod: any) => {
                                    return (
                                        <ProductCard
                                            className="h-fit border-2 backdrop-blur-sm bg-slate-200 border-solid border-black/10 rounded-lg max-w-[250px]  "
                                            data={prod}
                                        />
                                    )
                                })}
                        </div>
                    </div>
                </Layout>
            </Layout>
        </div>
    )
}
