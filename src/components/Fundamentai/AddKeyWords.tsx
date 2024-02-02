import { Button, Form, Input, Tag } from 'antd'
import React, { useEffect } from 'react'

export default function AddKeyWords() {
    const data: any = [
        { name: 'Tag 1', id: 1 },
        { name: 'Tag 2', id: 2 },
        { name: 'Tag 3', id: 3 },
        { name: 'Tag 4', id: 4 },
        { name: 'Tag 5', id: 5 },
        { name: 'Tag 6', id: 6 }
    ]

    function deleteWithId(_id: number) {
        data.splice(data.indexOf(_id), 1)
    }

    useEffect(() => {
        console.log(data)
    }, [data])
    return (
        <div className="w-full flex justify-between">
            <div className="w-[40%]">
                {data.map((tag: any, index: number) => {
                    return (
                        <Tag
                            className="m-1"
                            closeIcon
                            onClose={() => {
                                deleteWithId(index)
                            }}
                        >
                            #{tag.name}
                        </Tag>
                    )
                })}
            </div>
            <div className="w-[30%]">
                <Form
                    name="basic"
                    // onFinish={onFinish}
                    // onFinishFailed={onFinishFailed}
                    layout="vertical"
                >
                    <Form.Item label="Anahtar kelime giriniz" name="password">
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
