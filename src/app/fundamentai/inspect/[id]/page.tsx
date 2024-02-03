'use client'
import React from 'react'
import { ExportOutlined } from '@ant-design/icons'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import bard from '@/images/Bard.svg'
import bardWhite from '@/images/BardWhite.svg'
import { Query } from '@/graphql/controller'
import AddKeyWords from '@/components/Fundamentai/AddKeyWords'
import AddRelations from '@/components/Fundamentai/AddRelations'
import Image from 'next/image'
import { Button } from 'antd'

export default function page({ params }: { params: { id: string } }) {
    let { data, loading, error } = Query('GET_SOURCE', {
        id: params.id
    }) as any

    let source = !loading
        ? {
              title: data.source.data.attributes.title,
              description: data.source.data.attributes.content,
              link: data.source.data.attributes.source,
              summary: data.source.data.attributes.summary
          }
        : undefined


    return (
        <div className="text-black flex flex-col items-center my-10">
            <div className="flex flex-col items-center max-w-[900px] w-[60vw] gap-y-8">
                <h1 className="text-center text-[25px] font-bold leading-relaxed">{source?.title.toUpperCase()}</h1>
                <label className="text-justify">{source?.description}</label>
                <a href={source?.link} target="_blank">
                    <h1 className="flex  items-center justify-center gap-x-2 text-[14px] text-black/50 px-2 py-[2px] border-2 border-solid border-black/30 rounded-xl hover:bg-slate-100 duration-100">
                        {source?.link.length > 90 ? source?.link.slice(0, 90) + '...' : source?.link} <ExportOutlined className="h-[14px]" />
                    </h1>
                </a>
                {!loading && source?.summary && (
                    <div className="w-full border-2 border-dashed border-black/10 rounded-xl py-4">
                        <div className="flex items-center justify-start px-2 pt-2 pb-1 pl-4 gap-x-3">
                            <h1 className="font-bold">Özetlenmiş Metin</h1>
                            <Image className="w-6 h-6" alt="" src={bard} />
                        </div>
                        <div className="w-full pb-2 pt-1 px-4 text-justify">{source?.summary.summary}</div>
                    </div>
                )}
                <div className="my-4 flex flex-col gap-y-4 w-full">
                    {!loading && source?.summary && <AddRelations relations={source?.summary.relations} />}
                    {!loading && source?.summary && <AddKeyWords keywords={source?.summary.keywords} />}
                </div>
                <div className="flex   items-center justify-center rounded-lg my-10">
                    <Link href={`/fundamentai/inspect/${params.id}/editor`}>
                        <Button
                            onClick={() => redirect(`/fundamentai/inspect/${params.id}/editor`)}
                            size="large"
                            className="flex items-center scale-125 text-white font-bold bg-gradient-to-r from-[#7C7DCF]  to-[#4592DB] justify-center gap-4"
                        >
                            Fikir ver
                            <Image className="w-4 h-4" alt="" src={bardWhite} />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
