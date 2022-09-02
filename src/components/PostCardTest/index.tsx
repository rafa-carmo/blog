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
}

function PostCardTest({
  title,
  background,
  category,
  description
}: PostCardProps) {
  return (
    <div className="p-4 w-full ">
      <div className="h-full border-2 dark:border-gray-200/25 border-opacity-60 rounded overflow-hidden shadow-md dark:shadow-white/25 dark:bg-zinc-200/5">
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={background.url}
          alt={background.alt}
        />
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 dark:text-gray-100/75 mb-1">
            {category}
          </h2>
          <h3 className="title-font text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">
            {title}
          </h3>
          <p className="leading-relaxed mb-3 dark:text-gray-100">
            {description}
          </p>
          <div className="flex items-center flex-wrap ">
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
