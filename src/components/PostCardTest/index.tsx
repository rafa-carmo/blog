import Link from 'next/link'
import React from 'react'

interface ImageProps {
  url: string
  alt: string
}

export interface PostCardProps {
  background: ImageProps
  category?: string
  title: string
  description: string
  slug: string
}

function PostCardTest({
  title,
  background,
  category,
  description,
  slug
}: PostCardProps) {
  return (
    <div className="p-4 w-full ">
      <div className="h-full border-2 dark:border-gray-200/25 border-opacity-60 rounded shadow-md dark:shadow-white/25 dark:bg-zinc-200/5 relative">
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={background.url}
          alt={background.alt}
        />
        <div className="absolute z-20 top-2 -left-3">
          <h2 className="w-full h-full z-20 tracking-widest relative text-xs title-font font-medium pl-3 py-2 pr-1 text-zinc-600 dark:text-gray-100/75 bg-zinc-200 dark:bg-zinc-700 rounded-tl-lg rounded-r-md after:bg-zinc-900 after:absolute after:left-0  after:-bottom-1 after:w-2 after:rounded-bl-full after:h-1 after:z-0 after:content-[' '] ">
            {category}
          </h2>
        </div>
        <div className="p-6">
          <Link href={`${category}/${slug}`}>
            <a>
              <h3 className="title-font text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">
                {title}
              </h3>
            </a>
          </Link>
          <p className="leading-relaxed mb-3 dark:text-gray-100">
            {description}
          </p>
          <div className="flex items-center flex-wrap relative z-10">
            <Link href={`${category}/${slug}`}>
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </Link>
            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200 dark:border-zinc-200/25">
              <svg
                className="w-4 h-4 mr-1"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              1.2K
            </span>
            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
              <svg
                className="w-4 h-4 mr-1"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
              6
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostCardTest
