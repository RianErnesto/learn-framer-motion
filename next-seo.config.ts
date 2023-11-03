import { DefaultSeoProps } from 'next-seo'

const config: DefaultSeoProps = {
  title: 'Learn Framer Motion',
  description: 'Descrição do Site',
  openGraph: {
    type: 'website',
    siteName: 'Learn Framer Motion',
    url: 'http://localhost:3000',
  },
}

export default config
