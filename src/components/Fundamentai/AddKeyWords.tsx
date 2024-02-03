'use client'

import { Button, Form, Input, Tag } from 'antd'
import React, { useEffect, useState } from 'react'

export default function AddKeyWords({ keywords }: { keywords: string[] }) {
    const [data, setData] = useState<any[]>(keywords)

    function deleteTag(id: number) {
        setData(data.filter((tag: any) => tag !== id))
    }

    useEffect(() => {}, [data])
    return (
        <div className="w-full flex justify-between">
            <div className="w-[60%]">
                <h1 className="mb-2 ml-1 font-bold">Haberin Anahtar Kelimeleri</h1>
                {data.map((tag: any) => {
                    return (
                        <Tag
                            key={tag}
                            className="m-1"
                            closeIcon
                            onClose={() => {
                                deleteTag(tag)
                            }}
                        >
                            #{tag}
                        </Tag>
                    )
                })}
            </div>
            <div className="w-[30%]">
                <Form
                    onFinish={(e: any) => {
                        setData((prevData: any[]) => [...prevData, e.name])
                    }}
                    layout="vertical"
                >
                    <Form.Item label="Anahtar kelime giriniz" name="name">
                        <Input className="rounded-xl" />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button htmlType="submit">Ekle</Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}
