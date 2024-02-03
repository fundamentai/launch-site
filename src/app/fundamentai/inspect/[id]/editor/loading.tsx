import { LoadingOutlined } from '@ant-design/icons'
import { Skeleton } from 'antd'
export default function Loading() {
    return (
        <div className="w-full flex flex-col items-center gap-10">
            <Skeleton active className="p-4 my-4 rounded-xl w-[60vw] h-full" />
            <Skeleton active className="p-4 my-4 rounded-xl w-[60vw] h-full" />
            <Skeleton active className="p-4 my-4 rounded-xl w-[60vw] h-full" />
            <Skeleton active className="p-4 my-4 rounded-xl w-[60vw] h-full" />
            <Skeleton active className="p-4 my-4 rounded-xl w-[60vw] h-full" />
            <Skeleton active className="p-4 my-4 rounded-xl w-[60vw] h-full" />
            <Skeleton active className="p-4 my-4 rounded-xl w-[60vw] h-full" />
            <Skeleton active className="p-4 my-4 rounded-xl w-[60vw] h-full" />
            <Skeleton active className="p-4 my-4 rounded-xl w-[60vw] h-full" />
            <Skeleton active className="p-4 my-4 rounded-xl w-[60vw] h-full" />
        </div>
    )
}
