import './globals.css'

export const metadata = {
  title: 'hatake.ai | 家庭菜園のAI農業顧問',
  description: '写真を撮るだけで、今日やることが分かる。家庭菜園のAI農業顧問 hatake.ai',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
