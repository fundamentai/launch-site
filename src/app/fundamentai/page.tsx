'use client'

import ProductCard from '@/components/ProductCard'
import React from 'react'

import { Query } from '@/graphql/controller'
import { Button, Checkbox, ConfigProvider, DatePicker, Input, Layout, Menu, Select } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { SearchOutlined } from '@ant-design/icons'
import trTR from 'antd/locale/tr_TR'
import dayjs from 'dayjs'

import config from '@/config/config'

export default function page() {
    dayjs.locale('tr-TR')
    let { data, loading, error } = Query('GET_ALL_SOURCES')

    if (!loading) {
        data = (data.sources.data as any[]).map((element: any) => {
            return {
                id: element.id,
                name: element.attributes.title,
                publisher: element.attributes.publisher.data.attributes,
                description: element.attributes.content,
                createdAt: element.attributes.createdAt,
                thumbnail: element.attributes.thumbnail.data.attributes.url
            }
        })
    }

    console.log(data)

    const options = [
        { label: 'Apple', value: 'Apple' },
        { label: 'Pear', value: 'Pear' }
    ]

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

    const items = [
        getItem(
            'Finans Haberleri',
            '1',
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
                />
            </svg>
        ),
        getItem(
            'Enerji Haberleri',
            '2',
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
            </svg>
        ),
        getItem(
            'Günlük Haberler',
            '3',
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
                />
            </svg>
        )
    ]

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
                                        <Input placeholder="Haber ara" className="rounded-lg border-[#d9d9d9] w-full" />
                                        <Button size="large" className="h-full w-full " icon={<SearchOutlined className="text-blue-700" />} />
                                    </div>
                                    <DatePicker placeholder="Tarihe göre ara" size="large" className="w-full" />
                                </div>
                                <h1 className="font-bold text-[18px] pt-4 px-4">Kategoriler</h1>
                                <Menu
                                    className="border-none"
                                    // defaultSelectedKeys={['1']}
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
                                                className="h-fit border-2 backdrop-blur-sm bg-slate-200 border-solid border-black/10 rounded-lg max-w-[275px]  "
                                                data={{
                                                    // image: config.img_url + prod.publisher.logo.data.attributes.url,
                                                    image: config.img_url + prod.thumbnail,
                                                    ...prod
                                                }}
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
