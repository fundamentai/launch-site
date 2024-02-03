'use client'

import { PlusOutlined } from '@ant-design/icons'
import { Button, ConfigProvider, Form, Input, Popover, Tag } from 'antd'
import React, { useState } from 'react'

export default function AddTag({ relations, title, className }: { relations: string[]; title: string; className: string | null }) {
    const [data_, setData] = useState<any[]>(relations)
    const [open, setOpen] = useState(false)

    function deleteTag(id: number) {
        setData(data_.filter((tag: any) => tag.id !== id))
    }

    return (
        <div className={`w-full flex flex-col pt-4 pb-8 items-center  px-4 ${className}`}>
            <div className=" flex items-center justify-between w-full">
                <h1 className="mb-2 ml-1 font-bold">{title}</h1>
                <Popover
                    content={
                        <ConfigProvider
                            theme={{
                                components: {
                                    Form: {
                                        itemMarginBottom: 8,
                                        labelHeight: 4
                                    }
                                }
                            }}
                        >
                            <Form
                                className="mt-3"
                                onFinish={(e: any) => {
                                    setData((prevData: any[]) => [...prevData, e.name])
                                }}
                                layout="vertical"
                            >
                                <Form.Item
                                    rules={[{ required: true, message: 'Etiket eklemek için bu alan zorunludur!' }]}
                                    label="İlgili ilişki giriniz"
                                    name="name"
                                >
                                    <Input size="small" className="rounded-md border-[#d9d9d9] h-6" />
                                </Form.Item>

                                <Form.Item>
                                    <Button size="small" className="w-full h-6" htmlType="submit">
                                        Ekle
                                    </Button>
                                </Form.Item>
                            </Form>
                        </ConfigProvider>
                    }
                    title="Yeni etiket eklemek için formu doldurunuz."
                    trigger="click"
                    open={open}
                    onOpenChange={() => setOpen(!open)}
                >
                    <Button icon={<PlusOutlined />} />
                </Popover>
            </div>
            <div className="w-full">
                {data_.map((tag: any) => {
                    return (
                        <Tag
                            bordered={false}
                            color="#108ee9"
                            key={tag}
                            className="m-1"
                            closeIcon
                            onClose={() => {
                                deleteTag(tag)
                            }}
                        >
                            {tag}
                        </Tag>
                    )
                })}
            </div>
        </div>
    )
}
