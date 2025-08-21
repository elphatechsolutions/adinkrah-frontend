import { useState } from "react";
import { blogSideBarLinks } from "../../../../lib/utils";
import FilterLinks from "../shop/FilterLinks";
import AllBlogs from "./AllBlogs";
import Heading from "../home/Heading";

const Blogs = () => {
    const [search, setSearch] = useState("");

    return (
        <div className="flex gap-x-10">
            <aside className="w-80 p-5">
                <form
                    className="w-full flex justify-between border-b border-black mb-4"
                    onSubmit={e => e.preventDefault()}
                >
                    <input
                        type="text"
                        placeholder="search blog filters"
                        className="outline-0 border-none w-full"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                    <button type="submit">&#128269;</button>
                </form>
                <FilterLinks links={blogSideBarLinks} search={search} />
            </aside>
            <div className="w-full">
                <Heading heading="All Blogs" position="text-center" />
                <div className="flex flex-row grow">
                    <AllBlogs />
                </div>
            </div>
        </div>
    );
}

export default Blogs