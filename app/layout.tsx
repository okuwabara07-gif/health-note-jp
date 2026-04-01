import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Health Note', description: '健康・ウェルネスの情報サイト' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="ja"><body style={{margin:0,fontFamily:'sans-serif'}}>{children}</body></html>
}