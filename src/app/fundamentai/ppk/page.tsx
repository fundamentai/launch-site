'use client'
import React, { useEffect, useState } from 'react'
import DiffMatchPatch, { diff_match_patch } from 'diff-match-patch'
import { Button, message } from 'antd'
import { CopyOutlined } from '@ant-design/icons'

export default function page() {
    const [messageApi, contextHolder] = message.useMessage()

    const oldText =
        "Hafize Gaye Erkan (Başkan), Osman Cevdet Akçay, Elif Haykır Hobikoğlu, Yaşar Fatih Karahan, Hatice Karahan. Para Politikası Kurulu (Kurul) politika faizi olan bir hafta vadeli repo ihale faiz oranının yüzde 40’tan yüzde 42,5 düzeyine yükseltilmesine karar vermiştir. Kasım ayında sınırlı bir artış kaydeden manşet enflasyon son Enflasyon Raporu'nda sunulan görünümle uyumlu seyretmektedir. Yurt içi talebin mevcut seviyesi, hizmet fiyatlarındaki katılık ve jeopolitik riskler enflasyon baskılarını canlı tutmaktadır. Öte yandan, yakın döneme ilişkin göstergeler, parasal sıkılaştırmanın finansal koşullara yansımasıyla yurt içi talepteki dengelenmenin devam ettiğine işaret etmektedir. Kurul, enflasyon beklentileri ve fiyatlama davranışlarında sınırlı bir iyileşmenin başladığını da değerlendirmektedir. Dış finansman koşullarındaki belirgin iyileşme, rezervlerde süregelen artış, talepteki dengelenmenin cari işlemler hesabına desteği ve Türk lirası varlıklara yurt içi ve yurt dışı talebin güçlenerek artması, döviz kuru istikrarı ve para politikasının etkinliğine güçlü katkıda bulunmaktadır. Bu çerçevede, aylık enflasyonun ana eğilimindeki düşüş sürmektedir. Kurul, dezenflasyonun tesisi için gerekli parasal sıkılık düzeyine önemli ölçüde yaklaşıldığını değerlendirerek parasal sıkılaştırma hızını yavaşlatmıştır. Kurul, parasal sıkılaştırma adımlarını en kısa zamanda tamamlamayı öngörmektedir. Fiyat istikrarının kalıcı tesisi için gerekli parasal sıkılığın ise gerektiği müddetçe sürdürüleceği değerlendirilmiştir. Kurul, mevcut mikro- ve makroihtiyati çerçeveyi, piyasa mekanizmasının işlevselliğini artıracak ve makro finansal istikrarı güçlendirecek şekilde sadeleştirmektedir. Kredi faizlerinin hedeflenen finansal sıkılık düzeyiyle uyumlu olduğu değerlendirilirken, Türk lirası mevduat payının artırılmasına yönelik düzenlemelerin, parasal sıkılaşma eşliğinde aktarım mekanizmasını güçlendirmeye ve bankacılık sisteminin fonlama kompozisyonunu iyileştirmeye devam edeceği öngörülmektedir. Kurul, faiz kararlarının yanı sıra, parasal sıkılaştırma sürecini destekleme amacıyla, kullandığı sterilizasyon araçlarının çeşitliliğini artırarak miktarsal sıkılaştırmaya devam edecektir. Kurul, politika kararlarını parasal sıkılaştırmanın birikimli ve gecikmeli etkilerini de dikkate alarak, enflasyonun ana eğilimini geriletecek ve orta vadede yüzde 5 hedefine ulaştıracak parasal ve finansal koşulları sağlayacak şekilde belirlemeye devam edecektir. Enflasyon ve enflasyonun ana eğilimine ilişkin göstergeler yakından takip edilecek ve Kurul, fiyat istikrarı temel amacı doğrultusunda elindeki tüm araçları kararlılıkla kullanmaya devam edecektir. Kurul, kararlarını öngörülebilir, veri odaklı ve şeffaf bir çerçevede almaya devam edecektir. Para Politikası Kurulu Toplantı Özeti beş iş günü içinde yayımlanacaktır."
    const newText =
        ' Hafize Gaye Erkan (Başkan), Osman Cevdet Akçay, Elif Haykır Hobikoğlu, Yaşar Fatih Karahan, Hatice Karahan, Fatma Özkul. Para Politikası Kurulu (Kurul) politika faizi olan bir hafta vadeli repo ihale faiz oranının yüzde 42,5’ten yüzde 45 düzeyine yükseltilmesine karar vermiştir. Aralık ayında manşet enflasyon son Enflasyon Raporu’nda sunulan görünümle uyumlu bir artış kaydetmiştir. Yurt içi talebin mevcut seviyesi, hizmet fiyatlarındaki katılık ve jeopolitik riskler enflasyon baskılarını canlı tutmaktadır. Öte yandan, yakın döneme ilişkin göstergeler, parasal sıkılaştırmanın finansal koşullara yansımasıyla yurt içi talepteki dengelenmenin, öngörülen dezenflasyon süreci ile tutarlı seyrettiğine işaret etmektedir. Kurul, enflasyon beklentileri ve fiyatlama davranışlarında başlayan sınırlı iyileşmenin devam ettiğini değerlendirmektedir. Dış finansman koşulları, rezervlerdeki güçlenme, cari dengedeki iyileşme ve Türk lirası varlıklara talep, döviz kuru istikrarına ve para politikasının etkinliğine katkıda bulunmaya devam etmektedir. Bu çerçevede, aylık enflasyonun ana eğilimindeki düşüş sürmüştür. Kurul, parasal sıkılaştırmanın gecikmeli etkilerini de göz önünde bulundurarak, dezenflasyonun tesisi için gerekli parasal sıkılık düzeyine ulaşıldığını ve bu düzeyin gerektiği müddetçe sürdürüleceğini değerlendirmiştir. Kurul, politika faizinin mevcut seviyesinin aylık enflasyonun ana eğiliminde belirgin bir düşüş sağlanana ve enflasyon beklentileri öngörülen tahmin aralığına yakınsayana kadar sürdürüleceğini değerlendirmiştir. Enflasyon görünümü üzerinde belirgin ve kalıcı riskler oluşması durumunda ise parasal sıkılık gözden geçirilecektir. Kurul, mevcut mikro- ve makroihtiyati çerçeveyi, piyasa mekanizmasının işlevselliğini artıracak ve makro finansal istikrarı güçlendirecek şekilde sadeleştirmektedir. Kurul, sadeleştirme süreciyle uyumlu şekilde, kredi arzında ve mevduat faizinde gözlenebilecek oynaklıklara karşın, makroihtiyati kararlarla parasal aktarım mekanizmasını destekleyecektir. Kurul, faiz kararlarının yanı sıra, parasal sıkılaştırma sürecini destekleme amacıyla, kullandığı sterilizasyon araçlarının çeşitliliğini artırarak miktarsal sıkılaştırmaya devam edecektir. Kurul, politika kararlarını parasal sıkılaştırmanın gecikmeli etkilerini de dikkate alarak, enflasyonun ana eğilimini geriletecek ve orta vadede yüzde 5 hedefine ulaştıracak parasal ve finansal koşulları sağlayacak şekilde belirlemeye devam edecektir. Enflasyon ve enflasyonun ana eğilimine ilişkin göstergeler yakından takip edilecek ve Kurul, fiyat istikrarı temel amacı doğrultusunda elindeki tüm araçları kararlılıkla kullanmaya devam edecektir. Kurul, kararlarını öngörülebilir, veri odaklı ve şeffaf bir çerçevede almaya devam edecektir. Para Politikası Kurulu Toplantı Özeti beş iş günü içinde yayımlanacaktır.'

    const dmp = new DiffMatchPatch()
    const _diff = dmp.diff_main(oldText, newText)

    console.log(dmp.diff_cleanupSemantic(_diff))
    return (
        <div className="w-full min-h-[70vh] flex flex-col items-center  py-10">
            {contextHolder}

            <div className="w-[85vw] ">
                <h1 className="w-full text-center font-bold text-[24px] mb-4">PPK KARŞILAŞTIRMASI</h1>
                <div className="flex items-center justify-between pt-8">
                    <div>
                        <h1 className="text-black/70 relative font-bold text-[20px] mb-2 w-full text-center border-solid border-b-2 border-neutral-200 pb-4">
                            Eski{' '}
                            <Button
                                className="absolute right-1 "
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
                    <div>
                        <h1 className="text-black/70 relative font-bold text-[20px] mb-2 w-full text-center border-solid border-b-2 border-neutral-200 pb-4">
                            Yeni{' '}
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
                </div>
            </div>
        </div>
    )
}
