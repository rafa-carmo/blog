import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'
import { PostTemplate } from 'templates/Post'

export default function Page() {
  return <PostTemplate />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = new Array(6).map((id) => ({
    params: { id }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}
  }
}
