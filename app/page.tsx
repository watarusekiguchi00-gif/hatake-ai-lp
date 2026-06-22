'use client'
import Image from 'next/image'

export default function LP() {
  return (
    <div className="min-h-screen bg-hatake-cream text-[#1A2E22]" style={{ fontFamily: "'Hiragino Sans','Yu Gothic',sans-serif" }}>
      <div className="mx-auto max-w-[430px]">

        {/* 1. Hero */}
        <section className="relative text-center overflow-hidden bg-hatake-cream">
          {/* 写真・吹き出し・見出し・スマホUIモックまで一体で作られた元画像をそのまま使用 */}
          <div className="relative w-full" style={{ aspectRatio: '941 / 1250' }}>
            <Image
              src="/hero-composite.png"
              alt="その判断、本当にあってるかな？ 今日やること 今日はやらないこと 写真を撮るだけ 家庭菜園のAI農業顧問。AIがあなたの畑を見て、毎日の判断をサポートします。"
              fill
              priority
              className="object-cover object-top"
            />
          </div>

          <div className="bg-hatake-green px-6 pt-7 pb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-[#FFD96B] text-sm">🌾</span>
              <span className="text-[15px] font-black text-white">面倒な入力は不要！</span>
              <span className="text-[#FFD96B] text-sm">🌾</span>
            </div>
            <a href="https://hatake-ai.vercel.app/" className="w-full bg-gradient-to-r from-[#FCE556] to-[#FE5007] text-white rounded-2xl py-[16px] text-[17px] font-black shadow-[0_8px_20px_rgba(0,0,0,0.2)] flex items-center justify-center gap-2">
              無料で試してみる <span>›</span>
            </a>
            <div className="flex justify-center gap-3.5 mt-4 text-[11px] text-[#CDE5D8] flex-wrap">
              <span>写真を撮るだけ</span><span>今日やることが分かる</span><span>記録が残る</span>
            </div>
          </div>
        </section>

        {/* 2. Pain Section */}
        <section className="bg-white">
          <div className="relative w-full" style={{ aspectRatio: '1080 / 1592' }}>
            <Image
              src="/pain-composite.png"
              alt="こんな迷いありませんか？ 今、水やりしていいの？葉がしおれてきた…水不足？あげすぎ？ この枝、取っていいの？これって脇芽？取るべき？残すべき？ 今、収穫していいの？まだ早い？遅い？ベストなタイミングは？ 肥料あげていいの？足りない？多すぎ？今あげるべき？ 家庭菜園の失敗は、知識不足ではありません。「今日やるべきか」が分からないだけです。"
              fill
              className="object-cover object-top"
            />
          </div>
          <div className="px-6 pb-11">
            <div className="bg-hatake-green rounded-[18px] px-5 py-6 text-center -mt-1">
              <p className="text-white text-sm font-bold mb-4">その迷いを、AIが解決します。</p>
              <a href="https://hatake-ai.vercel.app/" className="w-full bg-gradient-to-r from-[#FCE556] to-[#FE5007] text-white rounded-2xl py-[15px] text-[15px] font-black block">
                無料で試してみる
              </a>
            </div>
          </div>
        </section>

        {/* 3. Flow Section */}
        <section className="bg-hatake-cream">
          <div className="relative w-full" style={{ aspectRatio: '862 / 1824' }}>
            <Image
              src="/flow-composite.png"
              alt="迷わない！今日やることがすぐ分かる。AIがあなたの畑を観察し、最適なアドバイスを提案します。1 写真を撮る 2 AIが見る 3 今日やることが一目で分かる：わき芽をかきとる、支柱に誘引する、追肥をする（液肥） 4 記録が残る。例えばトマトの場合、今日のアドバイス。もう迷わない！感覚や経験に頼らず、AIが「今日の最適解」を教えてくれます。家庭菜園を、もっと楽しく、もっと失敗しない毎日に。"
              fill
              className="object-cover object-top"
            />
          </div>
        </section>

        {/* 4. Step1 */}
        <section className="bg-white">
          <div className="relative w-full" style={{ aspectRatio: '853 / 1844' }}>
            <Image
              src="/step1-composite.png"
              alt="STEP1 写真を撮るだけ。面倒な入力は不要。スマホで写真を撮るだけ：名前やメモはあとでOK！野菜と品種を選ぶだけ：トマト・ナス・キュウリなど最初に選ぶだけでOK。畑でも片手で使える：かんたん操作でどこでもサッと記録"
              fill
              className="object-cover object-top"
            />
          </div>
        </section>

        {/* 5. Step2 */}
        <section className="bg-hatake-cream">
          <div className="relative w-full" style={{ aspectRatio: '863 / 1823' }}>
            <Image
              src="/step2-composite.png"
              alt="STEP2 AIが写真を分析。AIが畑の状態をくわしく観察します。葉の状態、茎の状態、花の状態、実の状態、病害虫リスクをチェック。AIが数十の項目を同時に分析！経験や勘に頼らず、データに基づいた的確なアドバイスをお届けします。"
              fill
              className="object-cover object-top"
            />
          </div>
        </section>

        {/* 6. Step3 */}
        <section className="bg-white">
          <div className="relative w-full" style={{ aspectRatio: '853 / 1844' }}>
            <Image
              src="/step3-composite.png"
              alt="STEP3 AIが今日のアクションを提案。写真と生育状況をもとに、今日やることをお知らせします。今日やること（おすすめ）：わき芽をかく、支柱に誘引する、液肥を与える。今の状態が一目でわかる、今日やることがすぐわかる。日々の管理がもっと楽しく、もっとラクに！"
              fill
              className="object-cover object-top"
            />
          </div>
        </section>

        {/* 7. Step4 */}
        <section className="bg-hatake-cream">
          <div className="relative w-full" style={{ aspectRatio: '864 / 1821' }}>
            <Image
              src="/step4-composite.png"
              alt="STEP4 わたしの畑日誌。毎日の記録が、あなただけの栽培記録になります。成長の記録が残る、作業を記録して振り返れる、来年の栽培に活かせる。毎日の記録が、来年の栽培に活かせる。"
              fill
              className="object-cover object-top"
            />
          </div>
        </section>

        {/* 8. Final CTA */}
        <section className="bg-hatake-cream relative">
          <div className="relative w-full" style={{ aspectRatio: '862 / 1825' }}>
            <Image
              src="/final-cta-composite.png"
              alt="AIと一緒に、もっと上手に育てよう。hatake.ai 家庭菜園の悩みを、AIと記録で解決！1 写真を撮るだけ、2 今日のアクションがすぐわかる、3 記録が残る。記録が積み上がるほど、あなたの畑がもっと豊かに。まずは無料でお試しください。無料で今日のアクションを確認する。登録30秒、クレカ不要、いつでも解約OK"
              fill
              className="object-cover object-top"
            />
            <a
              href="https://hatake-ai.vercel.app/"
              aria-label="無料で今日のアクションを確認する"
              className="absolute"
              style={{ left: '4%', width: '92%', top: '70%', height: '16%' }}
            />
          </div>
        </section>

      </div>
    </div>
  )
}
