'use client'

import ProductCard from '@/components/ProductCard'
import React from 'react'

import { Query } from '@/graphql/controller'
import { Button, Checkbox, ConfigProvider, DatePicker, Input, Layout, Menu, Select } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { SearchOutlined } from '@ant-design/icons'
import trTR from 'antd/locale/tr_TR'
import dayjs from 'dayjs'

export default function page() {
    dayjs.locale('tr-TR')
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

    const options = [
        { label: 'Apple', value: 'Apple' },
        { label: 'Pear', value: 'Pear' }
    ]

    const _options = []

    for (let i = 10; i < 36; i++) {
        options.push({
            label: i.toString(36) + i,
            value: i.toString(36) + i
        })
    }

    function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: any, type?: 'group'): any {
        return {
            key,
            icon,
            children,
            label,
            type
        } as any
    }

    const items = [getItem('Finans Haberleri', '1', <SearchOutlined />), getItem('Günlük Haberler', '2', <SearchOutlined />)]

    return (
        <div className="w-full  flex flex-col items-center justify-start min-h-[70vh]">
            <ConfigProvider
                locale={trTR}
                theme={{
                    components: {
                        Layout: {
                            siderBg: '#f8fafc'
                        },
                        Menu: {
                            itemBg: 'trasparent'
                        }
                    },
                    token: {
                        colorBorder: '#d9d9d9'
                    }
                }}
            >
                <Layout className="w-full min-h-screen">
                    <Layout>
                        <Sider width={'25%'}>
                            <div className="w-full h-full  py-5 flex flex-col gap-y-3">
                                <div className="flex flex-col items-center w-full px-4 gap-y-4">
                                    <div className="flex justify-center gap-x-2 w-full">
                                        <Input placeholder="Ara..." className="rounded-lg border-[#d9d9d9] w-full" />
                                        <Button size="large" className="h-full w-full " icon={<SearchOutlined />} />
                                    </div>
                                    <DatePicker size="large" className="w-full" />
                                </div>
                                <h1 className="font-bold text-[18px] pt-4 px-4">Kategoriler</h1>
                                <Menu
                                    className="border-none"
                                    defaultSelectedKeys={['1']}
                                    defaultOpenKeys={['sub1']}
                                    mode="inline"
                                    inlineCollapsed={true}
                                    items={items}
                                />
                            </div>
                        </Sider>
                        <div className="w-full flex flex-col items-center">
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
            </ConfigProvider>
        </div>
    )
}
