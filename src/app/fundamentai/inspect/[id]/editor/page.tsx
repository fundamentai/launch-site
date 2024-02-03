'use client'
import { Button, ConfigProvider, Layout, Tag } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { Content } from 'antd/es/layout/layout'
import React, { useEffect, useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { Query } from '@/graphql/controller'

import AddRelations from '@/components/Fundamentai/AddRelations'
import AddKeyWords from '@/components/Fundamentai/AddKeyWords'
import bard from '@/images/Bard.svg'
import bardWhite from '@/images/BardWhite.svg'
import Image from 'next/image'

export default function page({ params }: { params: { id: string } }) {
    let { data, loading, error } = Query('GET_SOURCE', {
        id: params.id
    })
    const [tag, setTag] = useState<any[]>([
        { name: 'Tag 1', id: '1' },
        { name: 'Tag 2', id: '2' },
        { name: 'Tag 3', id: '3' },
        { name: 'Tag 4', id: '4' },
        { name: 'Tag 5', id: '5' },
        { name: 'Tag 1', id: '1' },
        { name: 'Tag 2', id: '2' },
        { name: 'Tag 3', id: '3' },
        { name: 'Tag 4', id: '4' },
        { name: 'Tag 5', id: '5' },
        { name: 'Tag 6', id: '6' }
    ])

    let source = !loading
        ? {
              title: data.source.data.attributes.title,
              description: data.source.data.attributes.content,
              link: data.source.data.attributes.source,
              summary: data.source.data.attributes.summary
          }
        : undefined
    console.log('params', params)

    console.log(source)

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

                <Sider
                    width={'30vw'}
                    className="border-solid border-l-2 overflow-x-hidden overflow-y-auto border-neutral-200 py-4 px-2"
                    trigger={null}
                    collapsible
                >
                    <div>
                        {!loading && source?.summary && (
                            <div>
                                <div className="flex items-center justify-start px-2 pt-2 pl-4 gap-x-3">
                                    <h1 className="font-bold text-[18px]">FundamentAI özetliyor</h1>
                                    <Image className="w-6 h-6" alt="" src={bard} />
                                </div>
                                <div className="w-full py-4 px-4  border-solid border-b-2 border-neutral-200">
                                    <p className="text-justify overflow-y-auto">{source?.summary.summary}</p>
                                </div>
                            </div>
                        )}
                        {!loading && source?.summary.keywords && (
                            <div className="w-full px-4 py-4 border-b-2 border-dashed border-neutral-200">
                                <h1 className="font-bold mb-1 ml-2">Anahtar Kelimeler</h1>
                                {source?.summary.keywords.map((_tag: any, index: number) => {
                                    return (
                                        <Tag key={index} className="m-1">
                                            #{_tag}
                                        </Tag>
                                    )
                                })}
                            </div>
                        )}
                        {!loading && source?.summary.relations && (
                            <div className="w-full px-4 py-4 ">
                                <h1 className="font-bold mb-1 ml-2">Haberin İlişkileri</h1>
                                {source?.summary.relations.map((_tag: any, index: number) => {
                                    return (
                                        <Tag key={index} className="m-1">
                                            #{_tag}
                                        </Tag>
                                    )
                                })}
                            </div>
                        )}

                        <div className="w-full p-4">
                            <Button
                                size="large"
                                className="flex items-center w-full text-white font-bold bg-gradient-to-r from-[#7C7DCF]  to-[#4592DB] justify-center gap-4"
                            >
                                Yeniden yazdır
                                <Image className="w-4 h-4" alt="" src={bardWhite} />
                            </Button>
                        </div>
                    </div>
                </Sider>
            </Layout>
        </ConfigProvider>
    )
}
