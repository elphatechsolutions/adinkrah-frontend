// import { useState, useEffect } from "react";
import type { BlogType } from "../../../../lib/definition";
import Blog from "../home/Blog";

const AllBlogs = () => {
  // const [allBlogs, setAllBlogs] = useState<BlogData>([])
  const allBlogs = [
    {
      id: 1,
      title: "In Loving Memory of Margaret Smith",
      content:
        "We are deeply saddened to announce the passing of Margaret Smith, a beloved mother and grandmother. A memorial service will be held at Grace Church on August 20th, 2025, at 2:00 PM.",
      author: {
        id: 101,
        name: "Smith Family",
        relation: "Family",
      },
      tags: ["announcement", "memorial"],
      tag: "greiving",
      likes: 15,
      img: "/img-placeholder1.webp",
      created_at: "2025-08-14T14:23:00Z",
    },
    {
      id: 2,
      title: "Tribute to James Carter",
      content:
        "James lived a life full of love and generosity. His memory will live on through the many lives he touched. A celebration of life will take place on August 25th, 2025.",
      author: {
        id: 102,
        name: "Friends of James",
        relation: "Friends",
      },
      tags: ["tribute", "celebration"],
      likes: 27,
      tag: "greiving",
      img: "/img-placeholder1.webp",
      created_at: "2025-08-15T16:40:00Z",
    },
    {
      id: 3,
      title: "Condolences for the Lee Family",
      content:
        "Our thoughts and prayers are with the Lee family as they mourn the loss of their beloved father, Daniel Lee.",
      author: {
        id: 103,
        name: "Community Church",
        relation: "Organization",
      },
      tags: ["condolence", "community"],
      likes: 9,
      tag: "greiving",
      img: "/img-placeholder1.webp",
      created_at: "2025-08-16T10:05:00Z",
    },
    {
      id: 4,
      title: "Celebrating the Life of Mary Johnson",
      content:
        "Mary was a kind soul who dedicated her life to helping others. A celebration of her life will be held at Riverside Hall on August 30th.",
      author: {
        id: 104,
        name: "Johnson Family",
        relation: "Family",
      },
      tags: ["announcement", "celebration"],
      likes: 22,
      tag: "greiving",
      img: "/img-placeholder1.webp",
      created_at: "2025-08-16T18:22:00Z",
    },
    {
      id: 5,
      title: "Memorial Gathering for Robert White",
      content:
        "Friends and family are invited to join us in remembering Robert at a gathering on September 2nd at Oakwood Cemetery.",
      author: {
        id: 105,
        name: "White Family",
        relation: "Family",
      },
      tags: ["memorial", "announcement"],
      likes: 18,
      tag: "greiving",
      img: "/img-placeholder1.webp",
      created_at: "2025-08-17T09:45:00Z",
    },
    {
      id: 6,
      title: "Condolence Message for the Garcia Family",
      content:
        "We extend our deepest condolences to the Garcia family during this difficult time. May their memories bring comfort and peace.",
      author: {
        id: 106,
        name: "Sarah Thompson",
        relation: "Friend",
      },
      tags: ["condolence"],
      likes: 11,
      tag: "greiving",
      img: "/img-placeholder1.webp",
      created_at: "2025-08-17T13:20:00Z",
    },
    {
      id: 7,
      title: "Honoring the Life of Peter Adams",
      content:
        "Peter Adams will be remembered for his dedication to the community and his warm spirit. A memorial service will be held on September 5th.",
      author: {
        id: 107,
        name: "Adams Family",
        relation: "Family",
      },
      tags: ["memorial", "tribute"],
      likes: 31,
      tag: "greiving",
      img: "/img-placeholder1.webp",
      created_at: "2025-08-18T08:55:00Z",
    },
    {
      id: 8,
      title: "Sympathy for the Williams Family",
      content:
        "We are keeping the Williams family in our thoughts after the passing of their beloved mother, Grace Williams.",
      author: {
        id: 108,
        name: "Local Community",
        relation: "Community",
      },
      tags: ["condolence", "support"],
      likes: 7,
      tag: "greiving",
      img: "/img-placeholder1.webp",
      created_at: "2025-08-18T12:14:00Z",
    },
    {
      id: 9,
      title: "Celebrating the Memory of Helen Brown",
      content:
        "Helen will always be remembered for her laughter and kindness. A celebration of life service will be held on September 10th.",
      author: {
        id: 109,
        name: "Brown Family",
        relation: "Family",
      },
      tags: ["celebration", "memorial"],
      likes: 19,
      tag: "greiving",
      img: "/img-placeholder1.webp",
      created_at: "2025-08-18T15:45:00Z",
    },
    {
      id: 10,
      title: "Tribute Wall for David Thompson",
      content:
        "Friends are invited to share memories and tributes in honor of David Thompson, whose presence will be deeply missed.",
      author: {
        id: 110,
        name: "Thompson Family",
        relation: "Family",
      },
      tags: ["tribute", "guestbook"],
      likes: 25,
      tag: "greiving",
      img: "/img-placeholder1.webp",
      created_at: "2025-08-18T17:30:00Z",
    },
  ];

  //   useEffect(() => {
  //     const fetchBlog = async () => {
  //       const blog = await fetch("/api/blog");
  //       const data: BlogData = await blog.json();
  //       setAllBlogs(data);
  //     };
  //     fetchBlog();
  //   }, []);

  return (
    <div className="flex flex-row w-full flex-wrap">
      {allBlogs.map((blog: BlogType) => (
        <Blog blog={blog} size="w-[50%]" />
      ))}
    </div>
  );
};

export default AllBlogs;
