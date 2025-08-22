import { useState, useEffect } from "react"
import type { BlogData, BlogType } from "../../../../lib/definition"
import Blog from "../home/Blog"

const AllBlogs = () => {
    const [allBlogs, setAllBlogs] = useState<BlogData>([])

    useEffect(() => {
        const fetchBlog = async () => {
            const blog = await fetch("/api/blog")
            const data: BlogData = await blog.json()
            setAllBlogs(data)
        }
        fetchBlog()
    }, [])

    return (
        <div className="flex flex-row w-full flex-wrap">
            {allBlogs.map((blog: BlogType) => (<Blog blog={blog} size="w-[50%]" />))}
        </div>
    )
}

export default AllBlogs