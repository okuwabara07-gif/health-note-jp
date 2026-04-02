import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/posts'

export const metadata: Metadata = {
  title: '健康ノート',
  description: '健康・医療情報メディア',
  keywords: '健康ノート,健康・医療情報メディア',
  openGraph: {
    title: '健康ノート',
    description: '健康・医療情報メディア',
    type: 'website',
    locale: 'ja_JP',
    siteName: '健康ノート',
  },
  twitter: {
    card: 'summary_large_image',
    title: '健康ノート',
    description: '健康・医療情報メディア',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-SVQXY5C3PW"></script>
      <script dangerouslySetInnerHTML={{__html:`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-SVQXY5C3PW');`}} />
      <body>{children}</body>
    </html>
  )
}
