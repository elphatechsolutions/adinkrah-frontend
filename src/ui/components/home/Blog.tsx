import type { BlogType } from "../../../../lib/definition"
import { formatFullDate } from "../../../../lib/utils";

const Blog = ({ blog, size }: { blog: BlogType, size?: string }) => {
    const { title, created_at, tag } = blog
    const date = formatFullDate(created_at)
    return (
        <div className={`${size} flex flex-col gap-2 grow h-auto p-5`}>
            <img src={"/img-placeholder.svg"} alt={title} loading="lazy" className="rounded" />
            <div className="flex items-center mt-5">
                <span className="bg-black text-white p-0.5 rounded mr-10">{tag}</span>
                <span>{date}</span>
            </div>
            <h2 className="font-semibold text-2xl">{title}</h2>
        </div>
    )
}

export default Blog