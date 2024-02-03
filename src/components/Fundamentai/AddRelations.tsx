'use client'

import { Button, Form, Input, Tag } from 'antd'
import React, { useEffect, useState } from 'react'

export default function AddRelations({ relations }: { relations: string[] }) {
    const [data_, setData] = useState<any[]>(relations)

    function deleteTag(id: number) {
        setData(data_.filter((tag: any) => tag.id !== id))
    }

    useEffect(() => {}, [data_])
    return (
        <div className="w-full flex justify-between border-b-2 border-solid border-black/10">
            <div className="w-[60%]">
                <h1 className="mb-2 ml-1 font-bold">Haberin İlişkileri</h1>
                {data_.map((tag: any) => {
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
                    // name="basic"
                    onFinish={(e: any) => {
                        setData((prevData: any[]) => [...prevData, e.name])
                    }}
                    // onFinishFailed={onFinishFailed}
                    layout="vertical"
                >
                    <Form.Item label="İlgili ilişki giriniz" name="name">
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
