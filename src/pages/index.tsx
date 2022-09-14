import { GetStaticProps } from 'next'
import { Home } from 'templates/Home'
import mock from 'templates/Home/mock'

interface HomeProps {
  HomeProps: typeof mock
}

export default function index({ HomeProps }: HomeProps) {
  return <Home {...HomeProps} />
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      HomeProps: { ...mock }
    }
  }
}
