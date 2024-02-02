'use client'
import React from 'react'
import { ExportOutlined } from '@ant-design/icons'
import Link from 'next/link'
import { redirect } from 'next/navigation'

import { Query } from '@/graphql/controller'

export default function page({ params }: { params: { id: string } }) {
    let { data, loading, error } = Query('GET_SOURCE', {
        id: params.id
    })

    let source = !loading
        ? {
              title: data.source.data.attributes.title,
              description: data.source.data.attributes.description
          }
        : undefined

    return (
        <div className="text-black flex flex-col items-center my-10">
            <div className="flex flex-col items-center max-w-[900px] w-[60vw] gap-y-8">
                <h1 className="text-center text-[25px] font-bold leading-relaxed">
                    {'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'.toUpperCase()}
                </h1>
                <label>{}</label>
                <a href="http://localhost:3000/fundamentai/inspect/2" target="_blank">
                    <div className="flex items-center justify-center gap-x-2 text-[14px] text-black/50 px-2 py-[2px] border-2 border-solid border-black/30 rounded-xl hover:bg-slate-100 duration-100">
                        http://localhost:3000/fundamentai/inspect/2 <ExportOutlined className="h-[14px]" />
                    </div>
                </a>
            </div>
        </div>
    )
}
