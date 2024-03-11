import { nanoid } from "nanoid"
import { FaHtml5, FaJs, FaReact } from "react-icons/fa"

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
]

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className='h-16 w-16 text-emerald-500' />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
]

export const projects = [
  {
    id: nanoid(),
    img: "https://d33wubrfki0l68.cloudfront.net/65e2d852459a380008f6bbde/screenshot_2024-03-02-07-43-29-0000.webp",
    url: "https://p4avinash-movie-recommendation.netlify.app/",
    github: "https://github.com/p4avinash/netflix",
    title: "Netflix",
    text: "This is a React app, which is a clone of Netflix. It supports multi-languages (English, Hindi & Spanish). It'll show the info. about movies. Plus there's a suggestion section, which uses Open AI to suggest movies as per your mood.",
  },
  {
    id: nanoid(),
    img: "https://d33wubrfki0l68.cloudfront.net/65210642306fd30008c1bb1f/screenshot_2023-10-07-07-19-14-0000.png",
    url: "https://p4avinash-comfy-store.netlify.app/",
    github: "https://github.com/p4avinash/comfy-store",
    title: "Comfy Store",
    text: "This is a React app, which is similar to shopping site. This app has user authentication, Cart feature, Protected Routes, filters to search the items quickly, checkout page, dark theme.",
  },
  {
    id: nanoid(),
    img: "https://d33wubrfki0l68.cloudfront.net/65db23213f139c00081f6bf5/screenshot_2024-02-25-11-24-23-0000.webp",
    url: "https://p4avinash-youtube.netlify.app/",
    github: "https://github.com/p4avinash/youtube",
    title: "Youtube",
    text: "This is a React app, which is a clone of Youtube. It uses Youtube's API to fetch data and display. User can search for different videos in this app. Debouncing and memoization is implemented for the search to reduce API calls",
  },
  {
    id: nanoid(),
    img: "https://d33wubrfki0l68.cloudfront.net/650fe9de6b39eb0008c1a177/screenshot_2023-09-24-07-49-10-0000.png",
    url: "https://p4avinash-unsplash-images.netlify.app/",
    github: "https://github.com/p4avinash/unsplash-images",
    title: "Unsplash Images",
    text: "This is a React app, which uses unsplash images API to fetch images. We can use the search bar to search the images as per our choice. React query is implemented in the app, to cache the search results for a limited amount of time to reduce API calls.",
  },
  {
    id: nanoid(),
    img: "https://d33wubrfki0l68.cloudfront.net/651511dedecf990008a9b669/screenshot_2023-09-28-05-41-04-0000.png",
    url: "https://p4avinash-mix-master.netlify.app/",
    github: "https://github.com/p4avinash/mix-master",
    title: "Mix-Master",
    text: "This is a React app, which provides info. about cocktails and how to make them.",
  },
]
