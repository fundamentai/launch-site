'use client'
import React, { useEffect, useState } from 'react'
import DiffMatchPatch, { diff_match_patch } from 'diff-match-patch'
import { Button, message } from 'antd'
import { CopyOutlined } from '@ant-design/icons'

import { Query } from '@/graphql/controller'

export default function page() {
    const [messageApi, contextHolder] = message.useMessage()

    let { data, loading, error } = Query('GET_LAST_2_TCMB')

    let [oldText, newText] = !loading ? data.getFixedTcmb.map((element: any) => element.content) : ['', '']

    const dmp = new DiffMatchPatch()
    const _diff = dmp.diff_main(oldText, newText)

    console.log(dmp.diff_cleanupSemantic(_diff))
    return (
        <div className="w-full min-h-[70vh] flex flex-col items-center  py-10">
            {contextHolder}

            <div className="w-[88vw] ">
                <h1 className="w-full text-center font-bold text-[24px] mb-4">PARA POLİTİKASI KURULU KARŞILAŞTIRMASI</h1>
                <div className="flex items-center justify-between pt-8">
                    <div className="border-2 border-solid border-green-500 p-4 rounded-xl">
                        <h1 className="text-black/70 relative font-bold text-[20px] mb-2 w-full text-center border-solid border-b-2 border-neutral-200 pb-4">
                            Yeni
                            <Button
                                className="absolute right-1 "
                                onClick={() => {
                                    navigator.clipboard.writeText(newText)
                                    messageApi.open({ type: 'success', content: 'Başarıyla kopyalandı.' })
                                }}
                                icon={<CopyOutlined />}
                            />
                        </h1>
                        <p className="text-justify w-[40vw]">
                            {_diff.map((dif: any, index: number) => {
                                if (dif[0] === 0 || dif[0] === 1) {
                                    return (
                                        <>
                                            <span
                                                key={index}
                                                className={`${
                                                    dif[0] === -1
                                                        ? 'text-red-600 line-through'
                                                        : dif[0] === 0
                                                        ? 'text-black'
                                                        : 'text-green-600 font-bold'
                                                }`}
                                            >
                                                {dif[1]}
                                            </span>
                                        </>
                                    )
                                }
                            })}
                        </p>
                    </div>
                    <div className="border-2 border-dashed border-red-500 p-4 rounded-xl">
                        <h1 className="text-black/70 relative font-bold text-[20px] mb-2 w-full text-center border-solid border-b-2 border-neutral-200 pb-4">
                            Eski{' '}
                            <Button
                                className="absolute left-1 "
                                onClick={() => {
                                    navigator.clipboard.writeText(oldText)
                                    messageApi.open({ type: 'success', content: 'Başarıyla kopyalandı.' })
                                }}
                                icon={<CopyOutlined />}
                            />
                        </h1>
                        <p className="text-justify w-[40vw]">
                            {_diff.map((dif: any, index: number) => {
                                if (dif[0] === 0 || dif[0] === -1) {
                                    return (
                                        <>
                                            <span
                                                key={index}
                                                className={`${
                                                    dif[0] === -1 ? 'text-red-600 font-bold' : dif[0] === 0 ? 'text-black' : 'text-green-600'
                                                }`}
                                            >
                                                {dif[1]}
                                            </span>
                                        </>
                                    )
                                }
                            })}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
