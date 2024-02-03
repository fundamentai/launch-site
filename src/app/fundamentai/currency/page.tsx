'use client'
import { Button, message } from 'antd'
import { CopyOutlined } from '@ant-design/icons'
import React, { useState } from 'react'

export default function page() {
    const [messageApi, contextHolder] = message.useMessage()

    const veri = [
        'Avro/dolar paritesi yüzde 0,1 artışla 1,0890 seviyelerinde',
        'Dolar/yen paritesi yüzde 0,2 düşüşle 148 seviyelerinde',
        'Dolar/Hindistan Rupisi paritesi önceki kapanışının hemen altında 83,2 seviyelerinde',
        'Dolar/Güney Afrika Randı paritesi yüzde 0,1 değer kaybıyla 19,0260 seviyelerinde',
        'Dolar/İsviçre Frangı paritesi önceki kapanışının hemen üzerinde 0,8650 seviyelerinde',
        'Dolar/Güney Kore Wonu paritesi yüzde 0,1 azalışla 1.343,50 seviyelerinde',
        'Dolar/Rus Rublesi paritesi yüzde 0,8 aartışla 88,640 seviyelerinde',
        'Dolar endeksi yüzde 0,2 değer kaybıyla 103,3 seviyelerinde',
        'Döviz sepeti yüzde 0,2 artışla 31,5430 seviyelerinde',
        'Sterlin/TL paritesi yüzde 0,2 primle 38,2190 seviyelerinde',
        'Avro/TL önceki önceki kapanışının hemen üzerinde 32,8310 seviyelerinde',
        'Dolar/TL yatay bir seyirle 30,1440 seviyelerinde',
        'Brent petrolün varili yüzde 0,1 düşüşle 77,7 dolardan işlem görüyor',
        'Bakırın libresi yüzde 0,1 değer kaybıyla 3,720 dolardan işlem görüyor',
        'Gümüşün onsu önceki kapanışının hemen üzerinde 22,570 dolardan işlem görüyor',
        'Altının onsu yatay seyirle 2.006,70 dolardan işlem görüyor',
        "Güney Kore'de Kospi endeksi önceki kapanışının hemen üzerinde 2.440 seviyelerinde",
        "Çin'de Şanghay bileşik endeksi yüzde 1,7 azalışla 2.786 seviyelerinde",
        "Japonya'da Nikkei 225 endeksi yüzde 0,1 değer kaybıyla 35.450 seviyelerinde"
    ]
    return (
        <div className="w-full min-h-[70vh] flex flex-col items-center  py-10">
            {contextHolder}
            <table>
                <thead>
                    <tr>
                        <th className="text-[20px] font-bold bg-black/10 border-2 border-solid border-[#d9d9d9]  px-4 py-3">Günlük Kur Oranları</th>
                    </tr>
                </thead>
                <tbody>
                    {veri.map((ver: any) => {
                        return (
                            <tr>
                                <td className="border-2 border-solid border-[#d9d9d9]  px-4 py-3">
                                    <div className="flex items-center justify-between gap-x-4">
                                        {ver}{' '}
                                        <Button
                                            className=""
                                            onClick={() => {
                                                navigator.clipboard.writeText(ver)
                                                messageApi.open({ type: 'success', content: 'Başarıyla kopyalandı.' })
                                            }}
                                            icon={<CopyOutlined />}
                                        />
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
