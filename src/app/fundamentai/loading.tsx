import { LoadingOutlined } from '@ant-design/icons'
import { Skeleton } from 'antd'
export default function Loading() {
    return (
        <div className="w-full flex flex-col items-center">
            <div className="grid grid-cols-3 gap-10 my-8">
                <Skeleton active className="border-2 border-solid border-black/10 p-4 my-4 rounded-xl w-[250px] h-full" />
                <Skeleton active className="border-2 border-solid border-black/10 p-4 my-4 rounded-xl w-[250px] h-full" />
                <Skeleton active className="border-2 border-solid border-black/10 p-4 my-4 rounded-xl w-[250px] h-full" />
                <Skeleton active className="border-2 border-solid border-black/10 p-4 my-4 rounded-xl w-[250px] h-full" />
                <Skeleton active className="border-2 border-solid border-black/10 p-4 my-4 rounded-xl w-[250px] h-full" />
                <Skeleton active className="border-2 border-solid border-black/10 p-4 my-4 rounded-xl w-[250px] h-full" />
                <Skeleton active className="border-2 border-solid border-black/10 p-4 my-4 rounded-xl w-[250px] h-full" />
            </div>
        </div>
    )
}
