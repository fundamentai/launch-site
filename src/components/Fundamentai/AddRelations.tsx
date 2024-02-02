import { Button, Form, Input, Tag } from 'antd'
import React, { useEffect, useState } from 'react'

export default function AddRelations() {
    const [data, setData] = useState<any[]>([
        { name: 'Tag 1', id: '1' },
        { name: 'Tag 2', id: '2' },
        { name: 'Tag 3', id: '3' },
        { name: 'Tag 4', id: '4' },
        { name: 'Tag 5', id: '5' },
        { name: 'Tag 6', id: '6' }
    ])

    function deleteTag(id: number) {
        setData(data.filter((tag: any) => tag.id !== id))
    }

    useEffect(() => {
        console.log(data)
    }, [data])
    return (
        <div className="w-full flex justify-between border-b-2 border-solid border-black/10">
            <div className="w-[40%]">
                <h1 className="mb-2 ml-1 font-bold">İlgili Kelimeler</h1>
                {data.map((tag: any) => {
                    return (
                        <Tag
                            key={tag.id}
                            className="m-1"
                            closeIcon
                            onClose={() => {
                                console.log(tag.id)
                                deleteTag(tag.id)
                            }}
                        >
                            #{tag.name}
                        </Tag>
                    )
                })}
            </div>
            <div className="w-[30%]">
                <Form
                    // name="basic"
                    onFinish={(e: any) => {
                        // let _data = data.push({ name: e.name, id: `${data.length + 10}` }) as any
                        console.log(data)
                        setData((prevData: any[]) => [...prevData, { name: e.name, id: `${prevData.length + 10}` }])
                    }}
                    // onFinishFailed={onFinishFailed}
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
