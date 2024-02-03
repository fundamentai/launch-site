'use client'
import { ConfigProvider, Layout } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { Content } from 'antd/es/layout/layout'
import React, { useEffect } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { Query } from '@/graphql/controller'

import AddRelations from '@/components/Fundamentai/AddRelations'
import AddKeyWords from '@/components/Fundamentai/AddKeyWords'
import bard from '@/images/Bard.svg'

import Image from 'next/image'

export default function page({ params }: { params: { id: string } }) {
    let { data, loading, error } = Query('GET_SOURCE', {
        id: params.id
    })

    let source = !loading
        ? {
              title: data.source.data.attributes.title,
              description: data.source.data.attributes.content,
              link: data.source.data.attributes.source,
              summary: data.source.data.attributes.summary
          }
        : undefined
    console.log('params', params)

    return (
        <ConfigProvider
            theme={{
                components: {
                    Layout: {
                        siderBg: '#f8fafc'
                    }
                }
            }}
        >
            <Layout className="overflow-y-hidden h-[70vh]">
                <Layout className="bg-white">
                    <Content className=" py-6  p-10  overflow-y-auto">
                        <h1 className="w-full text-center font-bold text-[25px] mb-4">{source?.title.toUpperCase()}</h1>
                        <CKEditor editor={ClassicEditor} data="<p>Haber metni yazabilirsiniz...</p>" />
                    </Content>
                </Layout>

                <Sider width={'30vw'} className="border-solid border-l-2 border-neutral-200 py-4" trigger={null} collapsible>
                    <div>
                        <h1 className="w-full text-center font-bold text-[18px]">FundamentAI özeti</h1>
                        <div className="w-full mb-2 pt-1 px-4 text-justify line-clamp-5 border-solid border-b-2 border-neutral-200"></div>

                        {!loading && (
                            <div className="w-full border-2 border-dashed border-black/10 rounded-xl py-4">
                                <div className="flex items-center justify-start px-2 pt-2 pb-1 pl-4 gap-x-3">
                                    <h1 className="font-bold">Özetlenmiş Metin</h1>
                                    <Image className="w-6 h-6" alt="" src={bard} />
                                </div>
                                <div className="w-full pb-2 pt-1 px-4 text-justify">{source?.summary.summary}</div>
                            </div>
                        )}
                        <div className="my-4 flex flex-col gap-y-4 w-full">
                            {!loading && <AddRelations relations={source?.summary.relations} />}
                            {!loading && <AddKeyWords keywords={source?.summary.keywords} />}
                        </div>
                    </div>
                </Sider>
            </Layout>
        </ConfigProvider>
    )
}
