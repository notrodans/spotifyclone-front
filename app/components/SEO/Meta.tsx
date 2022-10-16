import Head from 'next/head'
import { FC } from 'react'

interface IMeta {
  title: string
  description: string
}

const Meta: FC<IMeta> = ({ description, title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
    </Head>
  )
}

export default Meta
