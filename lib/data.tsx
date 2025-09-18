import { FaClock, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import type {
  LinkName,
  SideBarLinksData,
  Contact,
  BlogData,
  ShopData,
  Review,
} from "./definition";

export const linkNames: LinkName = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "Blog", path: "/blog" },
  { name: "FAQS", path: "/faqs" },
  { name: "Contact Us", path: "/contact" },
];

export const SideBarLinks: SideBarLinksData = [
  {
    id: "categories",
    name: "Categories",
    pathData: "/shop/categories",
    links: [
      { name: "Burial Packages", path: "/shop/categories/burial" },
      { name: "Cremation Packages", path: "/shop/categories/crement" },
      { name: "Memorial Services", path: "/shop/categories/memorial" },
      { name: "Religious Ceremonies", path: "/shop/categories/religious" },
      { name: "Products", path: "/shop/categories/products" },
    ],
  },
  {
    id: "prices",
    name: "Prices",
    pathData: "/shop/prices",
    links: [
      { name: "Under $500", path: "/shop/prices/low" },
      { name: "$500 - $1500", path: "/shop/prices/medium" },
      { name: "Over $1500", path: "/shop/prices/high" },
    ],
  },
  {
    id: "location",
    name: "Location / Region",
    pathData: "/shop/location",
    links: [
      { name: "Accra", path: "/shop/location/accra" },
      { name: "Kumasi", path: "/shop/location/kumasi" },
      { name: "Takoradi", path: "/shop/location/takoradi" },
    ],
  },
  {
    id: "religion",
    name: "Religious Affiliation",
    pathData: "/shop/religion",
    links: [
      { name: "Christian", path: "/shop/religion/christian" },
      { name: "Muslim", path: "/shop/religion/muslim" },
      { name: "Traditional", path: "/shop/religion/traditional" },
      { name: "Secular / Non-religious", path: "/shop/religion/secular" },
    ],
  },
  {
    id: "package-type",
    name: "Package Type",
    pathData: "/shop/package-type",
    links: [
      { name: "Basic", path: "/shop/package-type/basic" },
      { name: "Standard", path: "/shop/package-type/standard" },
      { name: "Premium", path: "/shop/package-type/premium" },
    ],
  },
  {
    id: "vendors",
    name: "Vendors",
    pathData: "/shop/vendors",
    links: [
      { name: "Vendor A", path: "/shop/vendors/vendorA" },
      { name: "Vendor B", path: "/shop/vendors/vendorB" },
      { name: "Vendor C", path: "/shop/vendors/vendorC" },
    ],
  },
];

export const blogSideBarLinks: SideBarLinksData = [
  {
    id: "blog-categories",
    name: "",
    pathData: "/blog/categories",
    links: [
      { name: "Planning & Preparation", path: "/blog/planning-preparation" },
      { name: "Grief & Support", path: "/blog/grief-support" },
      { name: "Memorial Ideas", path: "/blog/memorial-ideas" },
      { name: "Funeral Planning", path: "/blog/funeral-planning" },
      { name: "Personal Stories", path: "/blog/personal-stories" },
      { name: "Grief & Healing", path: "/blog/grief-healing" },
      { name: "Financial Guidance", path: "/blog/financial-guidance" },
      { name: "Stories & Reflections", path: "/blog/stories-reflections" },
      { name: "Faith & Spirituality", path: "/blog/faith-spirituality" },
    ],
  },
];

export const contactInformation: Contact[] = [
  {
    label: "Email Us",
    address: "adinkrahomes@gmail.com",
    contactIcon: FaEnvelope,
  },
  {
    label: "Call Us",
    address: "+233 245 097 098",
    contactIcon: FaPhone,
  },
  {
    label: "Our Location",
    address: "adinkrahomes@gmail.com",
    contactIcon: FaMapMarkerAlt,
  },
  {
    label: "Working Hours",
    address: "Mon - Fri 9:00pm - 7:00pm \n Sat - Sun 10:00am - 5:00pm",
    contactIcon: FaClock,
  },
];

export const allBlogs: BlogData = [
  {
    id: 1,
    title: "In Loving Memory of Margaret Smith",
    content:
      "When the funeral is over and the last chairs have been folded away, there’s often a stillness that follows — one that feels both peaceful and painfully empty. In the days leading up to the ceremony, there is so much to do: plans to make, people to call, clothes to prepare, and tears to hold back. The structure of the event becomes a kind of shield — something to focus on, something to carry you. But then it ends. And reality settles in. This is the part of grief that no one prepares you for — the part that comes after. When the flowers begin to fade and the visitors return to their lives, your world still feels suspended in a before-and-after. And that’s when the real grieving begins. Not the loud, visible grief of farewells and speeches, but the quiet, lingering ache that lives in everyday moments — in silence, in memory, in the space that person once filled. Creating space for grief after the funeral ends isn’t about doing more. It’s about allowing yourself to feel without needing to fix. It’s recognizing that mourning doesn’t need permission, but it does need room in your thoughts, in your conversations, in your day. Some days, you’ll want to talk about it. Other days, you won’t. Both are valid. It’s okay if you don’t feel ready to “move on.” That phrase can feel harsh and unrealistic. Grief doesn’t demand movement; it asks for presence. It asks you to sit with it, to let it shape you, to let it remind you of what — and who — mattered. You might find yourself remembering things at random: a laugh over breakfast, the sound of their keys at the door, a phrase they always said. These moments will catch you off guard. They may hurt. But they’re also signs that love hasn’t ended — only changed its form. There’s no timetable for sorrow. No calendar to tell you when it should feel lighter. Creating space means letting grief take up room when it needs to. It means letting joy return when it’s ready. It means knowing the two can exist side by side: sorrow and laughter, longing and love, memory and presence. In time, that space you’ve given to grief won’t disappear — but it will soften. And what fills it may surprise you: not just the ache of loss, but also the quiet strength that comes from having loved deeply and survived the letting go. In time, that space you’ve given to grief won’t disappear — but it will soften. And what fills it may surprise you: not just the ache of loss, but also the quiet strength that comes from having loved deeply and survived the letting go. You don’t have to rush your healing. You don’t have to explain your tears. You only have to let them fall when they come, and trust that this, too, is part of love. Because when the funeral ends, your journey continues — and it deserves just as much compassion as the goodbye.",
    author: {
      id: 101,
      name: "Smith Family",
      relation: "Family",
    },
    tags: ["announcement", "memorial"],
    tag: "greiving",
    likes: 15,
    img: "../public/img-placeholder.svg",
    created_at: "2025-08-14T14:23:00Z",
  },
  {
    id: 2,
    title: "Tribute to James Carter",
    content:
      "When the funeral is over and the last chairs have been folded away, there’s often a stillness that follows — one that feels both peaceful and painfully empty. In the days leading up to the ceremony, there is so much to do: plans to make, people to call, clothes to prepare, and tears to hold back. The structure of the event becomes a kind of shield — something to focus on, something to carry you. But then it ends. And reality settles in. This is the part of grief that no one prepares you for — the part that comes after. When the flowers begin to fade and the visitors return to their lives, your world still feels suspended in a before-and-after. And that’s when the real grieving begins. Not the loud, visible grief of farewells and speeches, but the quiet, lingering ache that lives in everyday moments — in silence, in memory, in the space that person once filled. Creating space for grief after the funeral ends isn’t about doing more. It’s about allowing yourself to feel without needing to fix. It’s recognizing that mourning doesn’t need permission, but it does need room in your thoughts, in your conversations, in your day. Some days, you’ll want to talk about it. Other days, you won’t. Both are valid. It’s okay if you don’t feel ready to “move on.” That phrase can feel harsh and unrealistic. Grief doesn’t demand movement; it asks for presence. It asks you to sit with it, to let it shape you, to let it remind you of what — and who — mattered. You might find yourself remembering things at random: a laugh over breakfast, the sound of their keys at the door, a phrase they always said. These moments will catch you off guard. They may hurt. But they’re also signs that love hasn’t ended — only changed its form. There’s no timetable for sorrow. No calendar to tell you when it should feel lighter. Creating space means letting grief take up room when it needs to. It means letting joy return when it’s ready. It means knowing the two can exist side by side: sorrow and laughter, longing and love, memory and presence. In time, that space you’ve given to grief won’t disappear — but it will soften. And what fills it may surprise you: not just the ache of loss, but also the quiet strength that comes from having loved deeply and survived the letting go. In time, that space you’ve given to grief won’t disappear — but it will soften. And what fills it may surprise you: not just the ache of loss, but also the quiet strength that comes from having loved deeply and survived the letting go. You don’t have to rush your healing. You don’t have to explain your tears. You only have to let them fall when they come, and trust that this, too, is part of love. Because when the funeral ends, your journey continues — and it deserves just as much compassion as the goodbye.",
    author: {
      id: 102,
      name: "Friends of James",
      relation: "Friends",
    },
    tags: ["tribute", "celebration"],
    likes: 27,
    tag: "greiving",
    img: "../public/img-placeholder.svg",
    created_at: "2025-08-15T16:40:00Z",
  },
  {
    id: 3,
    title: "Condolences for the Lee Family",
    content:
      "When the funeral is over and the last chairs have been folded away, there’s often a stillness that follows — one that feels both peaceful and painfully empty. In the days leading up to the ceremony, there is so much to do: plans to make, people to call, clothes to prepare, and tears to hold back. The structure of the event becomes a kind of shield — something to focus on, something to carry you. But then it ends. And reality settles in. This is the part of grief that no one prepares you for — the part that comes after. When the flowers begin to fade and the visitors return to their lives, your world still feels suspended in a before-and-after. And that’s when the real grieving begins. Not the loud, visible grief of farewells and speeches, but the quiet, lingering ache that lives in everyday moments — in silence, in memory, in the space that person once filled. Creating space for grief after the funeral ends isn’t about doing more. It’s about allowing yourself to feel without needing to fix. It’s recognizing that mourning doesn’t need permission, but it does need room in your thoughts, in your conversations, in your day. Some days, you’ll want to talk about it. Other days, you won’t. Both are valid. It’s okay if you don’t feel ready to “move on.” That phrase can feel harsh and unrealistic. Grief doesn’t demand movement; it asks for presence. It asks you to sit with it, to let it shape you, to let it remind you of what — and who — mattered. You might find yourself remembering things at random: a laugh over breakfast, the sound of their keys at the door, a phrase they always said. These moments will catch you off guard. They may hurt. But they’re also signs that love hasn’t ended — only changed its form. There’s no timetable for sorrow. No calendar to tell you when it should feel lighter. Creating space means letting grief take up room when it needs to. It means letting joy return when it’s ready. It means knowing the two can exist side by side: sorrow and laughter, longing and love, memory and presence. In time, that space you’ve given to grief won’t disappear — but it will soften. And what fills it may surprise you: not just the ache of loss, but also the quiet strength that comes from having loved deeply and survived the letting go. In time, that space you’ve given to grief won’t disappear — but it will soften. And what fills it may surprise you: not just the ache of loss, but also the quiet strength that comes from having loved deeply and survived the letting go. You don’t have to rush your healing. You don’t have to explain your tears. You only have to let them fall when they come, and trust that this, too, is part of love. Because when the funeral ends, your journey continues — and it deserves just as much compassion as the goodbye.",
    author: {
      id: 103,
      name: "Community Church",
      relation: "Organization",
    },
    tags: ["condolence", "community"],
    likes: 9,
    tag: "greiving",
    img: "../public/img-placeholder.svg",
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
    img: "../public/img-placeholder.svg",
    created_at: "2025-08-16T18:22:00Z",
  },
  {
    id: 5,
    title: "Memorial Gathering for Robert White",
    content:
      "When the funeral is over and the last chairs have been folded away, there’s often a stillness that follows — one that feels both peaceful and painfully empty. In the days leading up to the ceremony, there is so much to do: plans to make, people to call, clothes to prepare, and tears to hold back. The structure of the event becomes a kind of shield — something to focus on, something to carry you. But then it ends. And reality settles in. This is the part of grief that no one prepares you for — the part that comes after. When the flowers begin to fade and the visitors return to their lives, your world still feels suspended in a before-and-after. And that’s when the real grieving begins. Not the loud, visible grief of farewells and speeches, but the quiet, lingering ache that lives in everyday moments — in silence, in memory, in the space that person once filled. Creating space for grief after the funeral ends isn’t about doing more. It’s about allowing yourself to feel without needing to fix. It’s recognizing that mourning doesn’t need permission, but it does need room in your thoughts, in your conversations, in your day. Some days, you’ll want to talk about it. Other days, you won’t. Both are valid. It’s okay if you don’t feel ready to “move on.” That phrase can feel harsh and unrealistic. Grief doesn’t demand movement; it asks for presence. It asks you to sit with it, to let it shape you, to let it remind you of what — and who — mattered. You might find yourself remembering things at random: a laugh over breakfast, the sound of their keys at the door, a phrase they always said. These moments will catch you off guard. They may hurt. But they’re also signs that love hasn’t ended — only changed its form. There’s no timetable for sorrow. No calendar to tell you when it should feel lighter. Creating space means letting grief take up room when it needs to. It means letting joy return when it’s ready. It means knowing the two can exist side by side: sorrow and laughter, longing and love, memory and presence. In time, that space you’ve given to grief won’t disappear — but it will soften. And what fills it may surprise you: not just the ache of loss, but also the quiet strength that comes from having loved deeply and survived the letting go. In time, that space you’ve given to grief won’t disappear — but it will soften. And what fills it may surprise you: not just the ache of loss, but also the quiet strength that comes from having loved deeply and survived the letting go. You don’t have to rush your healing. You don’t have to explain your tears. You only have to let them fall when they come, and trust that this, too, is part of love. Because when the funeral ends, your journey continues — and it deserves just as much compassion as the goodbye.",
    author: {
      id: 105,
      name: "White Family",
      relation: "Family",
    },
    tags: ["memorial", "announcement"],
    likes: 18,
    tag: "greiving",
    img: "../public/img-placeholder.svg",
    created_at: "2025-08-17T09:45:00Z",
  },
  {
    id: 6,
    title: "Condolence Message for the Garcia Family",
    content:
      "When the funeral is over and the last chairs have been folded away, there’s often a stillness that follows — one that feels both peaceful and painfully empty. In the days leading up to the ceremony, there is so much to do: plans to make, people to call, clothes to prepare, and tears to hold back. The structure of the event becomes a kind of shield — something to focus on, something to carry you. But then it ends. And reality settles in. This is the part of grief that no one prepares you for — the part that comes after. When the flowers begin to fade and the visitors return to their lives, your world still feels suspended in a before-and-after. And that’s when the real grieving begins. Not the loud, visible grief of farewells and speeches, but the quiet, lingering ache that lives in everyday moments — in silence, in memory, in the space that person once filled. Creating space for grief after the funeral ends isn’t about doing more. It’s about allowing yourself to feel without needing to fix. It’s recognizing that mourning doesn’t need permission, but it does need room in your thoughts, in your conversations, in your day. Some days, you’ll want to talk about it. Other days, you won’t. Both are valid. It’s okay if you don’t feel ready to “move on.” That phrase can feel harsh and unrealistic. Grief doesn’t demand movement; it asks for presence. It asks you to sit with it, to let it shape you, to let it remind you of what — and who — mattered. You might find yourself remembering things at random: a laugh over breakfast, the sound of their keys at the door, a phrase they always said. These moments will catch you off guard. They may hurt. But they’re also signs that love hasn’t ended — only changed its form. There’s no timetable for sorrow. No calendar to tell you when it should feel lighter. Creating space means letting grief take up room when it needs to. It means letting joy return when it’s ready. It means knowing the two can exist side by side: sorrow and laughter, longing and love, memory and presence. In time, that space you’ve given to grief won’t disappear — but it will soften. And what fills it may surprise you: not just the ache of loss, but also the quiet strength that comes from having loved deeply and survived the letting go. In time, that space you’ve given to grief won’t disappear — but it will soften. And what fills it may surprise you: not just the ache of loss, but also the quiet strength that comes from having loved deeply and survived the letting go. You don’t have to rush your healing. You don’t have to explain your tears. You only have to let them fall when they come, and trust that this, too, is part of love. Because when the funeral ends, your journey continues — and it deserves just as much compassion as the goodbye.",
    author: {
      id: 106,
      name: "Sarah Thompson",
      relation: "Friend",
    },
    tags: ["condolence"],
    likes: 11,
    tag: "greiving",
    img: "../public/img-placeholder.svg",
    created_at: "2025-08-17T13:20:00Z",
  },
  {
    id: 7,
    title: "Honoring the Life of Peter Adams",
    content:
      "When the funeral is over and the last chairs have been folded away, there’s often a stillness that follows — one that feels both peaceful and painfully empty. In the days leading up to the ceremony, there is so much to do: plans to make, people to call, clothes to prepare, and tears to hold back. The structure of the event becomes a kind of shield — something to focus on, something to carry you. But then it ends. And reality settles in. This is the part of grief that no one prepares you for — the part that comes after. When the flowers begin to fade and the visitors return to their lives, your world still feels suspended in a before-and-after. And that’s when the real grieving begins. Not the loud, visible grief of farewells and speeches, but the quiet, lingering ache that lives in everyday moments — in silence, in memory, in the space that person once filled. Creating space for grief after the funeral ends isn’t about doing more. It’s about allowing yourself to feel without needing to fix. It’s recognizing that mourning doesn’t need permission, but it does need room in your thoughts, in your conversations, in your day. Some days, you’ll want to talk about it. Other days, you won’t. Both are valid. It’s okay if you don’t feel ready to “move on.” That phrase can feel harsh and unrealistic. Grief doesn’t demand movement; it asks for presence. It asks you to sit with it, to let it shape you, to let it remind you of what — and who — mattered. You might find yourself remembering things at random: a laugh over breakfast, the sound of their keys at the door, a phrase they always said. These moments will catch you off guard. They may hurt. But they’re also signs that love hasn’t ended — only changed its form. There’s no timetable for sorrow. No calendar to tell you when it should feel lighter. Creating space means letting grief take up room when it needs to. It means letting joy return when it’s ready. It means knowing the two can exist side by side: sorrow and laughter, longing and love, memory and presence. In time, that space you’ve given to grief won’t disappear — but it will soften. And what fills it may surprise you: not just the ache of loss, but also the quiet strength that comes from having loved deeply and survived the letting go. In time, that space you’ve given to grief won’t disappear — but it will soften. And what fills it may surprise you: not just the ache of loss, but also the quiet strength that comes from having loved deeply and survived the letting go. You don’t have to rush your healing. You don’t have to explain your tears. You only have to let them fall when they come, and trust that this, too, is part of love. Because when the funeral ends, your journey continues — and it deserves just as much compassion as the goodbye.",
    author: {
      id: 107,
      name: "Adams Family",
      relation: "Family",
    },
    tags: ["memorial", "tribute"],
    likes: 31,
    tag: "greiving",
    img: "../public/img-placeholder.svg",
    created_at: "2025-08-18T08:55:00Z",
  },
  {
    id: 8,
    title: "Sympathy for the Williams Family",
    content:
      "When the funeral is over and the last chairs have been folded away, there’s often a stillness that follows — one that feels both peaceful and painfully empty. In the days leading up to the ceremony, there is so much to do: plans to make, people to call, clothes to prepare, and tears to hold back. The structure of the event becomes a kind of shield — something to focus on, something to carry you. But then it ends. And reality settles in. This is the part of grief that no one prepares you for — the part that comes after. When the flowers begin to fade and the visitors return to their lives, your world still feels suspended in a before-and-after. And that’s when the real grieving begins. Not the loud, visible grief of farewells and speeches, but the quiet, lingering ache that lives in everyday moments — in silence, in memory, in the space that person once filled. Creating space for grief after the funeral ends isn’t about doing more. It’s about allowing yourself to feel without needing to fix. It’s recognizing that mourning doesn’t need permission, but it does need room in your thoughts, in your conversations, in your day. Some days, you’ll want to talk about it. Other days, you won’t. Both are valid. It’s okay if you don’t feel ready to “move on.” That phrase can feel harsh and unrealistic. Grief doesn’t demand movement; it asks for presence. It asks you to sit with it, to let it shape you, to let it remind you of what — and who — mattered. You might find yourself remembering things at random: a laugh over breakfast, the sound of their keys at the door, a phrase they always said. These moments will catch you off guard. They may hurt. But they’re also signs that love hasn’t ended — only changed its form. There’s no timetable for sorrow. No calendar to tell you when it should feel lighter. Creating space means letting grief take up room when it needs to. It means letting joy return when it’s ready. It means knowing the two can exist side by side: sorrow and laughter, longing and love, memory and presence. In time, that space you’ve given to grief won’t disappear — but it will soften. And what fills it may surprise you: not just the ache of loss, but also the quiet strength that comes from having loved deeply and survived the letting go. In time, that space you’ve given to grief won’t disappear — but it will soften. And what fills it may surprise you: not just the ache of loss, but also the quiet strength that comes from having loved deeply and survived the letting go. You don’t have to rush your healing. You don’t have to explain your tears. You only have to let them fall when they come, and trust that this, too, is part of love. Because when the funeral ends, your journey continues — and it deserves just as much compassion as the goodbye.",
    author: {
      id: 108,
      name: "Local Community",
      relation: "Community",
    },
    tags: ["condolence", "support"],
    likes: 7,
    tag: "greiving",
    img: "../public/img-placeholder.svg",
    created_at: "2025-08-18T12:14:00Z",
  },
  {
    id: 9,
    title: "Celebrating the Memory of Helen Brown",
    content:
      "When the funeral is over and the last chairs have been folded away, there’s often a stillness that follows — one that feels both peaceful and painfully empty. In the days leading up to the ceremony, there is so much to do: plans to make, people to call, clothes to prepare, and tears to hold back. The structure of the event becomes a kind of shield — something to focus on, something to carry you. But then it ends. And reality settles in. This is the part of grief that no one prepares you for — the part that comes after. When the flowers begin to fade and the visitors return to their lives, your world still feels suspended in a before-and-after. And that’s when the real grieving begins. Not the loud, visible grief of farewells and speeches, but the quiet, lingering ache that lives in everyday moments — in silence, in memory, in the space that person once filled. Creating space for grief after the funeral ends isn’t about doing more. It’s about allowing yourself to feel without needing to fix. It’s recognizing that mourning doesn’t need permission, but it does need room in your thoughts, in your conversations, in your day. Some days, you’ll want to talk about it. Other days, you won’t. Both are valid. It’s okay if you don’t feel ready to “move on.” That phrase can feel harsh and unrealistic. Grief doesn’t demand movement; it asks for presence. It asks you to sit with it, to let it shape you, to let it remind you of what — and who — mattered. You might find yourself remembering things at random: a laugh over breakfast, the sound of their keys at the door, a phrase they always said. These moments will catch you off guard. They may hurt. But they’re also signs that love hasn’t ended — only changed its form. There’s no timetable for sorrow. No calendar to tell you when it should feel lighter. Creating space means letting grief take up room when it needs to. It means letting joy return when it’s ready. It means knowing the two can exist side by side: sorrow and laughter, longing and love, memory and presence. In time, that space you’ve given to grief won’t disappear — but it will soften. And what fills it may surprise you: not just the ache of loss, but also the quiet strength that comes from having loved deeply and survived the letting go. In time, that space you’ve given to grief won’t disappear — but it will soften. And what fills it may surprise you: not just the ache of loss, but also the quiet strength that comes from having loved deeply and survived the letting go. You don’t have to rush your healing. You don’t have to explain your tears. You only have to let them fall when they come, and trust that this, too, is part of love. Because when the funeral ends, your journey continues — and it deserves just as much compassion as the goodbye.",
    author: {
      id: 109,
      name: "Brown Family",
      relation: "Family",
    },
    tags: ["celebration", "memorial"],
    likes: 19,
    tag: "greiving",
    img: "../public/img-placeholder.svg",
    created_at: "2025-08-18T15:45:00Z",
  },
  {
    id: 10,
    title: "Tribute Wall for David Thompson",
    content:
      "When the funeral is over and the last chairs have been folded away, there’s often a stillness that follows — one that feels both peaceful and painfully empty. In the days leading up to the ceremony, there is so much to do: plans to make, people to call, clothes to prepare, and tears to hold back. The structure of the event becomes a kind of shield — something to focus on, something to carry you. But then it ends. And reality settles in. This is the part of grief that no one prepares you for — the part that comes after. When the flowers begin to fade and the visitors return to their lives, your world still feels suspended in a before-and-after. And that’s when the real grieving begins. Not the loud, visible grief of farewells and speeches, but the quiet, lingering ache that lives in everyday moments — in silence, in memory, in the space that person once filled. Creating space for grief after the funeral ends isn’t about doing more. It’s about allowing yourself to feel without needing to fix. It’s recognizing that mourning doesn’t need permission, but it does need room in your thoughts, in your conversations, in your day. Some days, you’ll want to talk about it. Other days, you won’t. Both are valid. It’s okay if you don’t feel ready to “move on.” That phrase can feel harsh and unrealistic. Grief doesn’t demand movement; it asks for presence. It asks you to sit with it, to let it shape you, to let it remind you of what — and who — mattered. You might find yourself remembering things at random: a laugh over breakfast, the sound of their keys at the door, a phrase they always said. These moments will catch you off guard. They may hurt. But they’re also signs that love hasn’t ended — only changed its form. There’s no timetable for sorrow. No calendar to tell you when it should feel lighter. Creating space means letting grief take up room when it needs to. It means letting joy return when it’s ready. It means knowing the two can exist side by side: sorrow and laughter, longing and love, memory and presence. In time, that space you’ve given to grief won’t disappear — but it will soften. And what fills it may surprise you: not just the ache of loss, but also the quiet strength that comes from having loved deeply and survived the letting go. In time, that space you’ve given to grief won’t disappear — but it will soften. And what fills it may surprise you: not just the ache of loss, but also the quiet strength that comes from having loved deeply and survived the letting go. You don’t have to rush your healing. You don’t have to explain your tears. You only have to let them fall when they come, and trust that this, too, is part of love. Because when the funeral ends, your journey continues — and it deserves just as much compassion as the goodbye.",
    author: {
      id: 110,
      name: "Thompson Family",
      relation: "Family",
    },
    tags: ["tribute", "guestbook"],
    likes: 25,
    tag: "greiving",
    img: "../public/img-placeholder.svg",
    created_at: "2025-08-18T17:30:00Z",
  },
  {
    id: 11,
    title: "Condolence Message for the Garcia Family",
    content:
      "When the funeral is over and the last chairs have been folded away, there’s often a stillness that follows — one that feels both peaceful and painfully empty. In the days leading up to the ceremony, there is so much to do: plans to make, people to call, clothes to prepare, and tears to hold back. The structure of the event becomes a kind of shield — something to focus on, something to carry you. But then it ends. And reality settles in. This is the part of grief that no one prepares you for — the part that comes after. When the flowers begin to fade and the visitors return to their lives, your world still feels suspended in a before-and-after. And that’s when the real grieving begins. Not the loud, visible grief of farewells and speeches, but the quiet, lingering ache that lives in everyday moments — in silence, in memory, in the space that person once filled. Creating space for grief after the funeral ends isn’t about doing more. It’s about allowing yourself to feel without needing to fix. It’s recognizing that mourning doesn’t need permission, but it does need room in your thoughts, in your conversations, in your day. Some days, you’ll want to talk about it. Other days, you won’t. Both are valid. It’s okay if you don’t feel ready to “move on.” That phrase can feel harsh and unrealistic. Grief doesn’t demand movement; it asks for presence. It asks you to sit with it, to let it shape you, to let it remind you of what — and who — mattered. You might find yourself remembering things at random: a laugh over breakfast, the sound of their keys at the door, a phrase they always said. These moments will catch you off guard. They may hurt. But they’re also signs that love hasn’t ended — only changed its form. There’s no timetable for sorrow. No calendar to tell you when it should feel lighter. Creating space means letting grief take up room when it needs to. It means letting joy return when it’s ready. It means knowing the two can exist side by side: sorrow and laughter, longing and love, memory and presence. In time, that space you’ve given to grief won’t disappear — but it will soften. And what fills it may surprise you: not just the ache of loss, but also the quiet strength that comes from having loved deeply and survived the letting go. In time, that space you’ve given to grief won’t disappear — but it will soften. And what fills it may surprise you: not just the ache of loss, but also the quiet strength that comes from having loved deeply and survived the letting go. You don’t have to rush your healing. You don’t have to explain your tears. You only have to let them fall when they come, and trust that this, too, is part of love. Because when the funeral ends, your journey continues — and it deserves just as much compassion as the goodbye.",
    author: {
      id: 106,
      name: "Sarah Thompson",
      relation: "Friend",
    },
    tags: ["condolence"],
    likes: 11,
    tag: "greiving",
    img: "../public/img-placeholder.svg",
    created_at: "2025-08-17T13:20:00Z",
  },
  {
    id: 12,
    title: "Honoring the Life of Peter Adams",
    content:
      "When the funeral is over and the last chairs have been folded away, there’s often a stillness that follows — one that feels both peaceful and painfully empty. In the days leading up to the ceremony, there is so much to do: plans to make, people to call, clothes to prepare, and tears to hold back. The structure of the event becomes a kind of shield — something to focus on, something to carry you. But then it ends. And reality settles in. This is the part of grief that no one prepares you for — the part that comes after. When the flowers begin to fade and the visitors return to their lives, your world still feels suspended in a before-and-after. And that’s when the real grieving begins. Not the loud, visible grief of farewells and speeches, but the quiet, lingering ache that lives in everyday moments — in silence, in memory, in the space that person once filled. Creating space for grief after the funeral ends isn’t about doing more. It’s about allowing yourself to feel without needing to fix. It’s recognizing that mourning doesn’t need permission, but it does need room in your thoughts, in your conversations, in your day. Some days, you’ll want to talk about it. Other days, you won’t. Both are valid. It’s okay if you don’t feel ready to “move on.” That phrase can feel harsh and unrealistic. Grief doesn’t demand movement; it asks for presence. It asks you to sit with it, to let it shape you, to let it remind you of what — and who — mattered. You might find yourself remembering things at random: a laugh over breakfast, the sound of their keys at the door, a phrase they always said. These moments will catch you off guard. They may hurt. But they’re also signs that love hasn’t ended — only changed its form. There’s no timetable for sorrow. No calendar to tell you when it should feel lighter. Creating space means letting grief take up room when it needs to. It means letting joy return when it’s ready. It means knowing the two can exist side by side: sorrow and laughter, longing and love, memory and presence. In time, that space you’ve given to grief won’t disappear — but it will soften. And what fills it may surprise you: not just the ache of loss, but also the quiet strength that comes from having loved deeply and survived the letting go. In time, that space you’ve given to grief won’t disappear — but it will soften. And what fills it may surprise you: not just the ache of loss, but also the quiet strength that comes from having loved deeply and survived the letting go. You don’t have to rush your healing. You don’t have to explain your tears. You only have to let them fall when they come, and trust that this, too, is part of love. Because when the funeral ends, your journey continues — and it deserves just as much compassion as the goodbye.",
    author: {
      id: 107,
      name: "Adams Family",
      relation: "Family",
    },
    tags: ["memorial", "tribute"],
    likes: 31,
    tag: "greiving",
    img: "../public/img-placeholder.svg",
    created_at: "2025-08-18T08:55:00Z",
  },
];

export const itemsInShop: ShopData = [
  {
    id: 1,
    productName: "Ashanti Kente Cloth",
    price: 120.0,
    quantity: 10,
    img: "/img-placeholder.svg",
    description:
      "Authentic hand-woven Kente cloth from the Ashanti Kingdom, perfect for special occasions.",
    images: [
      "/img-placeholder.svg",
      "/img-placeholder.svg",
      "/img-placeholder.svg",
    ],
    reviews: ["Beautiful and high quality!", "The colors are stunning."],
    categories: ["Textiles", "Clothing"],
    relatedProducts: ["Adinkra Symbol Shirt", "Royal Headwrap"],
    productDetails: ["Material: Silk and Cotton", "Origin: Ghana"],
    customization: ["Sizes: S, M, L", "Colors: Red, Blue, Green"],
  },
  {
    id: 2,
    productName: "Adinkra Symbol Shirt",
    price: 45.99,
    quantity: 25,
    img: "/img-placeholder.svg",
    description:
      "A stylish shirt featuring various Adinkra symbols, representing concepts and aphorisms.",
    images: [
      "/img-placeholder.svg",
      "/img-placeholder.svg",
      "/img-placeholder.svg",
    ],
    reviews: ["Very comfortable and meaningful.", "Great design!"],
    categories: ["Clothing"],
    relatedProducts: ["Adinkra Wall Art", "Gye Nyame Pendant"],
    productDetails: ["Material: 100% Cotton", "Care: Machine Wash"],
    customization: ["Sizes: S, M, L, XL", "Symbols: Gye Nyame, Sankofa"],
  },
  {
    id: 3,
    productName: "African Drum",
    price: 80.5,
    quantity: 5,
    img: "/img-placeholder.svg",
    description:
      "A traditional African drum, handcrafted from wood and animal hide, with a rich, resonant sound.",
    images: [
      "/img-placeholder.svg",
      "/img-placeholder.svg",
      "/img-placeholder.svg",
    ],
    reviews: ["Excellent craftsmanship.", "Love the sound!"],
    categories: ["Musical Instruments"],
    relatedProducts: ["Traditional Fan Drum", "Cultural Fan"],
    productDetails: ["Material: Wood and Animal Hide", "Size: Medium"],
    customization: ["Designs: Carved patterns", "Size: Small, Large"],
  },
  {
    id: 4,
    productName: "Traditional Beaded Necklace",
    price: 30.0,
    quantity: 15,
    img: "/img-placeholder.svg",
    description:
      "Handmade necklace with colorful beads, each with a unique cultural significance.",
    images: [
      "/img-placeholder.svg",
      "/img-placeholder.svg",
      "/img-placeholder.svg",
    ],
    reviews: ["Beautiful and elegant.", "Perfect gift!"],
    categories: ["Jewelry"],
    relatedProducts: ["Gye Nyame Pendant", "Royal Headwrap"],
    productDetails: ["Material: Glass Beads, String", "Length: 20 inches"],
    customization: ["Colors: Red, Blue, Yellow", "Length: Adjustable"],
  },
  {
    id: 5,
    productName: "Hand-Carved Stool",
    price: 150.0,
    quantity: 3,
    img: "/img-placeholder.svg",
    description:
      "An intricately hand-carved stool, a symbol of authority and heritage in many African cultures.",
    images: [
      "/img-placeholder.svg",
      "/img-placeholder.svg",
      "/img-placeholder.svg",
    ],
    reviews: ["A true work of art.", "Solid and sturdy."],
    categories: ["Home Decor", "Furniture"],
    relatedProducts: ["Ancestral Mask", "Handwoven Basket"],
    productDetails: ["Material: Mahogany Wood", 'Dimensions: 15"x15"'],
    customization: ["Designs: Various carvings", "Wood: Teak, Mahogany"],
  },
  {
    id: 6,
    productName: "Adinkra Wall Art",
    price: 70.0,
    quantity: 12,
    img: "/img-placeholder.svg",
    description:
      "A piece of wall art featuring a collection of powerful Adinkra symbols.",
    images: [
      "/img-placeholder.svg",
      "/img-placeholder.svg",
      "/img-placeholder.svg",
    ],
    reviews: ["Adds a great touch to my living room.", "Very well-made."],
    categories: ["Home Decor", "Art"],
    relatedProducts: ["Adinkra Symbol Shirt", "Hand-Carved Stool"],
    productDetails: ["Material: Canvas", 'Dimensions: 24"x36"'],
    customization: ["Sizes: Various", "Symbols: Gye Nyame, Sankofa"],
  },
  {
    id: 7,
    productName: "Fugu Shirt",
    price: 55.0,
    quantity: 20,
    img: "/img-placeholder.svg",
    description:
      "A traditional Fugu shirt, hand-sewn with vibrant colors, popular in Northern Ghana.",
    images: [
      "/img-placeholder.svg",
      "/img-placeholder.svg",
      "/img-placeholder.svg",
    ],
    reviews: ["Comfortable and stylish.", "Authentic product."],
    categories: ["Clothing"],
    relatedProducts: ["Ashanti Kente Cloth", "African Leather Sandals"],
    productDetails: ["Material: Cotton", "Origin: Ghana"],
    customization: ["Sizes: S, M, L, XL", "Colors: Red, Blue, Green"],
  },
  {
    id: 8,
    productName: "Calabash Bowl Set",
    price: 35.0,
    quantity: 18,
    img: "/img-placeholder.svg",
    description:
      "A set of bowls carved from gourds, perfect for serving or as a decorative piece.",
    images: [
      "/img-placeholder.svg",
      "/img-placeholder.svg",
      "/img-placeholder.svg",
    ],
    reviews: ["Unique and functional.", "Love the natural feel."],
    categories: ["Home Decor", "Kitchenware"],
    relatedProducts: ["Palm Wine Cup Set", "Handwoven Basket"],
    productDetails: ["Material: Calabash Gourd", "Number of pieces: 3"],
    customization: ["Designs: Carved patterns", "Size: Small, Large"],
  },
  {
    id: 9,
    productName: "Gye Nyame Pendant",
    price: 25.5,
    quantity: 40,
    img: "/img-placeholder.svg",
    description:
      "A pendant featuring the Gye Nyame symbol, meaning 'Except God', signifying the omnipotence of God.",
    images: [
      "/img-placeholder.svg",
      "/img-placeholder.svg",
      "/img-placeholder.svg",
    ],
    reviews: [
      "A beautiful piece of jewelry with deep meaning.",
      "I wear it every day.",
    ],
    categories: ["Jewelry"],
    relatedProducts: ["Traditional Beaded Necklace", "Adinkra Symbol Shirt"],
    productDetails: ["Material: Silver", "Chain Length: 18 inches"],
    customization: ["Material: Gold, Silver", "Chain Length: Adjustable"],
  },
  {
    id: 10,
    productName: "African Print Bag",
    price: 60.0,
    quantity: 8,
    img: "/img-placeholder.svg",
    description:
      "A vibrant tote bag made from authentic African wax print fabric.",
    images: [
      "/img-placeholder.svg",
      "/img-placeholder.svg",
      "/img-placeholder.svg",
    ],
    reviews: ["The colors are so vibrant!", "It's very sturdy and roomy."],
    categories: ["Accessories"],
    relatedProducts: ["Ashanti Kente Cloth", "African Leather Sandals"],
    productDetails: ["Material: 100% Cotton", 'Size: 15"x12"'],
    customization: ["Patterns: Various designs", "Size: Small, Large"],
  },
  {
    id: 11,
    productName: "Cultural Fan",
    price: 18.0,
    quantity: 50,
    img: "/img-placeholder.svg",
    description:
      "A hand-held fan woven from natural fibers, perfect for traditional events or as a decorative item.",
    images: [
      "/img-placeholder.svg",
      "/img-placeholder.svg",
      "/img-placeholder.svg",
    ],
    reviews: ["Light and well-made.", "Great for hot days."],
    categories: ["Accessories", "Home Decor"],
    relatedProducts: ["Handwoven Basket", "Calabash Bowl Set"],
    productDetails: ["Material: Woven Straw", "Size: Standard"],
    customization: ["Colors: Natural, Brown", "Designs: Geometric patterns"],
  },
  {
    id: 12,
    productName: "Handwoven Basket",
    price: 40.0,
    quantity: 22,
    img: "/img-placeholder.svg",
    description:
      "A durable basket handwoven with intricate patterns, ideal for storage or decoration.",
    images: [
      "/img-placeholder.svg",
      "/img-placeholder.svg",
      "/img-placeholder.svg",
    ],
    reviews: ["Perfect for my laundry room.", "The craftsmanship is amazing."],
    categories: ["Home Decor"],
    relatedProducts: ["Hand-Carved Stool", "Calabash Bowl Set"],
    productDetails: ["Material: Woven Grass", 'Dimensions: 18" diameter'],
    customization: ["Sizes: Small, Medium, Large", "Colors: Natural, Brown"],
  },
  {
    id: 13,
    productName: "Royal Headwrap",
    price: 28.0,
    quantity: 35,
    img: "/img-placeholder.svg",
    description:
      "A stylish headwrap made from vibrant fabric, a popular accessory for many occasions.",
    images: [
      "/img-placeholder.svg",
      "/img-placeholder.svg",
      "/img-placeholder.svg",
    ],
    reviews: ["Love the colors!", "Easy to style."],
    categories: ["Accessories"],
    relatedProducts: ["Ashanti Kente Cloth", "Fugu Shirt"],
    productDetails: ["Material: Cotton", 'Dimensions: 72"x22"'],
    customization: ["Patterns: Various designs", "Colors: Red, Blue, Green"],
  },
  {
    id: 14,
    productName: "Ancestral Mask",
    price: 95.0,
    quantity: 7,
    img: "/img-placeholder.svg",
    description:
      "A hand-carved mask, traditionally used in ceremonies and now a powerful piece of art.",
    images: [
      "/img-placeholder.svg",
      "/img-placeholder.svg",
      "/img-placeholder.svg",
    ],
    reviews: ["Stunning piece of art.", "The carving is so detailed."],
    categories: ["Home Decor", "Art"],
    relatedProducts: ["Hand-Carved Stool", "Symbolic Walking Stick"],
    productDetails: ["Material: Wood", 'Dimensions: 18"x10"'],
    customization: ["Styles: Various tribal designs", "Wood: Teak, Mahogany"],
  },
  {
    id: 15,
    productName: "Palm Wine Cup Set",
    price: 22.0,
    quantity: 13,
    img: "/img-placeholder.svg",
    description:
      "A set of cups carved from calabash gourds, ideal for serving traditional drinks like palm wine.",
    images: [
      "/img-placeholder.svg",
      "/img-placeholder.svg",
      "/img-placeholder.svg",
    ],
    reviews: ["Unique and perfect for my collection.", "Great craftsmanship."],
    categories: ["Kitchenware"],
    relatedProducts: ["Calabash Bowl Set", "Handwoven Basket"],
    productDetails: ["Material: Calabash Gourd", "Number of pieces: 4"],
    customization: ["Designs: Carved patterns", "Size: Standard"],
  },
  {
    id: 16,
    productName: "Symbolic Walking Stick",
    price: 85.0,
    quantity: 4,
    img: "/img-placeholder.svg",
    description:
      "A hand-carved walking stick, often used by elders as a symbol of wisdom and authority.",
    images: [
      "/img-placeholder.svg",
      "/img-placeholder.svg",
      "/img-placeholder.svg",
    ],
    reviews: ["A beautiful piece of history.", "Sturdy and well-balanced."],
    categories: ["Accessories"],
    relatedProducts: ["Hand-Carved Stool", "Ancestral Mask"],
    productDetails: ["Material: Wood", "Length: 4 feet"],
    customization: ["Carvings: Various symbols", "Length: Adjustable"],
  },
  {
    id: 17,
    productName: "African Leather Sandals",
    price: 50.0,
    quantity: 16,
    img: "/img-placeholder.svg",
    description:
      "Comfortable and durable sandals made from authentic African leather, with traditional beading.",
    images: [
      "/img-placeholder.svg",
      "/img-placeholder.svg",
      "/img-placeholder.svg",
    ],
    reviews: ["Very comfortable to wear.", "The beading is gorgeous."],
    categories: ["Footwear"],
    relatedProducts: ["Fugu Shirt", "African Print Bag"],
    productDetails: ["Material: Leather", "Sizes: US 6-12"],
    customization: ["Colors: Brown, Black", "Sizes: Various"],
  },
  {
    id: 18,
    productName: "Traditional Fan Drum",
    price: 110.0,
    quantity: 6,
    img: "/img-placeholder.svg",
    description:
      "A unique musical instrument combining a fan with a drum, used in traditional performances.",
    images: [
      "/img-placeholder.svg",
      "/img-placeholder.svg",
      "/img-placeholder.svg",
    ],
    reviews: ["A fascinating instrument.", "Great sound and look."],
    categories: ["Musical Instruments"],
    relatedProducts: ["African Drum", "Cultural Fan"],
    productDetails: ["Material: Wood and Animal Hide", "Size: Medium"],
    customization: ["Designs: Carved patterns", "Size: Small, Large"],
  },
];

export const testimonials = [
  {
    id: 1,
    quote:
      "This service transformed our workflow! The team is incredibly responsive and the results speak for themselves. Highly recommend for any business looking to innovate.",
    author: "Jane Doe",
    title: "CEO, Tech Solutions Inc.",
    image: "https://placehold.co/120x120/A78BFA/ffffff?text=JD",
  },
  {
    id: 2,
    quote:
      "An absolute game-changer. The intuitive design and powerful features have made our daily tasks much more efficient. We couldn't be happier with the outcome.",
    author: "John Smith",
    title: "Marketing Director, Creative Minds",
    image: "https://placehold.co/120x120/38B2AC/ffffff?text=JS",
  },
  {
    id: 3,
    quote:
      "From concept to execution, the journey was seamless. Their expertise and dedication are evident in every detail. Truly a professional and impactful experience.",
    author: "Emily White",
    title: "Founder, Global Innovations",
    image: "https://placehold.co/120x120/FBBF24/ffffff?text=EW",
  },
  {
    id: 4,
    quote:
      "Outstanding support and an excellent product. It has significantly boosted our productivity and client satisfaction. A must-have for modern businesses.",
    author: "Michael Brown",
    title: "Operations Manager, Future Forward",
    image: "https://placehold.co/120x120/60A5FA/ffffff?text=MB",
  },
  {
    id: 5,
    quote:
      "The best decision we made! Their innovative approach and dedication to quality are truly remarkable. Our business has seen significant growth.",
    author: "Sarah Johnson",
    title: "Product Manager, Innovate Corp.",
    image: "https://placehold.co/120x120/EF4444/ffffff?text=SJ",
  },
  {
    id: 6,
    quote:
      "Exceptional service from start to finish. They truly understand client needs and deliver beyond expectations. A highly reliable partner.",
    author: "David Lee",
    title: "Director of Sales, Growth Hub",
    image: "https://placehold.co/120x120/8B5CF6/ffffff?text=DL",
  },
];

export const reviews: Review[] = [
  {
    id: 1,
    by: [
      {
        name: "Alex T.",
        rating: 5,
        date: "2024-07-28",
      },
    ],
    review: [
      {
        title: "Absolutely love it!",
        comment:
          "The product quality is top-notch and it looks even better in person. Exceeded all my expectations.",
      },
    ],
  },
  {
    id: 2,
    by: [
      {
        name: "Maria S.",
        rating: 4,
        date: "2024-07-25",
      },
    ],
    review: [
      {
        title: "Great value for the price.",
        comment:
          "A very solid product for what I paid. The delivery was quick, and the packaging was excellent.",
      },
    ],
  },
  {
    id: 3,
    by: [
      {
        name: "Chris B.",
        rating: 5,
        date: "2024-07-20",
      },
    ],
    review: [
      {
        title: "Perfect gift!",
        comment:
          "I bought this as a gift, and the recipient was thrilled. The personalization was done beautifully.",
      },
    ],
  },
  {
    id: 4,
    by: [
      {
        name: "Sarah J.",
        rating: 3,
        date: "2024-07-18",
      },
    ],
    review: [
      {
        title: "Decent, but not perfect.",
        comment:
          "It's a good product, but the finish had a minor scratch. Still usable, but a bit disappointing.",
      },
    ],
  },
  {
    id: 5,
    by: [
      {
        name: "David M.",
        rating: 5,
        date: "2024-07-15",
      },
    ],
    review: [
      {
        title: "Exactly as described.",
        comment:
          "The item matches the description perfectly. No surprises, which is exactly what I wanted.",
      },
    ],
  },
  {
    id: 6,
    by: [
      {
        name: "Lisa G.",
        rating: 4,
        date: "2024-07-12",
      },
    ],
    review: [
      {
        title: "Good, but could be better.",
        comment:
          "The product is functional and works well. However, the instructions were a bit confusing.",
      },
    ],
  },
  {
    id: 7,
    by: [
      {
        name: "Mark C.",
        rating: 5,
        date: "2024-07-10",
      },
    ],
    review: [
      {
        title: "Super fast shipping.",
        comment:
          "I was impressed with how quickly my order arrived. The product itself is also fantastic.",
      },
    ],
  },
  {
    id: 8,
    by: [
      {
        name: "Emily H.",
        rating: 2,
        date: "2024-07-08",
      },
    ],
    review: [
      {
        title: "Disappointed.",
        comment:
          "The product broke after only a few uses. I expected better durability for the price.",
      },
    ],
  },
  {
    id: 9,
    by: [
      {
        name: "Paul D.",
        rating: 4,
        date: "2024-07-05",
      },
    ],
    review: [
      {
        title: "Happy with the purchase.",
        comment:
          "It's a solid item. The functionality is great, and it feels high-quality.",
      },
    ],
  },
  {
    id: 10,
    by: [
      {
        name: "Jessica L.",
        rating: 5,
        date: "2024-07-01",
      },
    ],
    review: [
      {
        title: "Exceeded my expectations!",
        comment:
          "I'm so glad I bought this. The design is beautiful and the performance is flawless.",
      },
    ],
  },
];
