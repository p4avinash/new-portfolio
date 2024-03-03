import { nanoid } from "nanoid"
import { FaHtml5, FaJs, FaReact } from "react-icons/fa"
import netflix_banner from "./assets/images/netflix_project_banner.png"
import comfy_store_banner from "./assets/images/comfy_store_banner.png"
import youtube_banner from "./assets/images/youtube_banner.png"
import unsplash_images_banner from "./assets/images/unsplash_images_banner.png"

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
    img: netflix_banner,
    url: "https://p4avinash-netflix.netlify.app/",
    github: "https://github.com/p4avinash/netflix",
    title: "Netflix",
    text: "This is a React app, which is a clone of Netflix. It supports multi-languages (English, Hindi & Spanish). It'll show the info. about movies. Plus there's a suggestion section, which uses Open AI to suggest movies as per your mood.",
  },
  {
    id: nanoid(),
    img: comfy_store_banner,
    url: "https://p4avinash-comfy-store.netlify.app/",
    github: "https://github.com/p4avinash/comfy-store",
    title: "Comfy Store",
    text: "This is a React app, which is similar to shopping site. This app has user authentication, Cart feature, Protected Routes, filters to search the items quickly, checkout page, dark theme.",
  },
  {
    id: nanoid(),
    img: youtube_banner,
    url: "https://p4avinash-youtube.netlify.app/",
    github: "https://github.com/p4avinash/youtube",
    title: "Youtube",
    text: "This is a React app, which is a clone of Youtube. It uses Youtube's API to fetch data and display. User can search for different videos in this app. Debouncing and memoization is implemented for the search to reduce API calls",
  },
  {
    id: nanoid(),
    img: unsplash_images_banner,
    url: "https://p4avinash-unsplash-images.netlify.app/",
    github: "https://github.com/p4avinash/unsplash-images",
    title: "Unsplash Images",
    text: "This is a React app, which uses unsplash images API to fetch images. We can use the search bar to search the images as per our choice. React query is implemented in the app, to cache the search results for a limited amount of time to reduce API calls.",
  },
]
