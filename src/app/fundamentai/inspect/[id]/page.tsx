'use client'
import React from 'react'
import { ExportOutlined } from '@ant-design/icons'
import Link from 'next/link'
import { redirect } from 'next/navigation'

import { Query } from '@/graphql/controller'
import AddKeyWords from '@/components/Fundamentai/AddKeyWords'
import AddRelations from '@/components/Fundamentai/AddRelations'

export default function page({ params }: { params: { id: string } }) {
    let { data, loading, error } = Query('GET_SOURCE', {
        id: params.id
    })

    let source = !loading
        ? {
              title: data.source.data.attributes.title,
              description: data.source.data.attributes.content,
              link: data.source.data.attributes.source
          }
        : undefined

    console.log(source)

    return (
        <div className="text-black flex flex-col items-center my-10">
            <div className="flex flex-col items-center max-w-[900px] w-[60vw] gap-y-8">
                <h1 className="text-center text-[25px] font-bold leading-relaxed">{source?.title.toUpperCase()}</h1>
                <label>{source?.description}</label>
                <a href="http://localhost:3000/fundamentai/inspect/2" target="_blank">
                    <div className="flex items-center justify-center gap-x-2 text-[14px] text-black/50 px-2 py-[2px] border-2 border-solid border-black/30 rounded-xl hover:bg-slate-100 duration-100">
                        http://localhost:3000/fundamentai/inspect/2 <ExportOutlined className="h-[14px]" />
                    </div>
                </a>
                <div className="my-4 flex flex-col gap-y-4 w-full">
                    <AddRelations />
                    <AddKeyWords />
                </div>
            </div>
        </div>
    )
}
