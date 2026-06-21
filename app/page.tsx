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
            <button className="w-full bg-gradient-to-br from-[#FFD23F] to-[#F5A623] text-hatake-green rounded-2xl py-[16px] text-[17px] font-black shadow-[0_8px_20px_rgba(0,0,0,0.2)] flex items-center justify-center gap-2">
              無料で試してみる <span>›</span>
            </button>
            <div className="flex justify-center gap-3.5 mt-4 text-[11px] text-[#CDE5D8] flex-wrap">
              <span>写真を撮るだけ</span><span>今日やることが分かる</span><span>記録が残る</span>
            </div>
          </div>
        </section>

        {/* 2. Pain Section */}
        <section className="px-6 py-11 bg-white">
          <h2 className="text-[22px] font-black text-center mb-7">こんな迷いありませんか？</h2>
          <div className="flex flex-col gap-3 mb-7">
            {[
              { icon: '💧', bg: '#E6F1FB', q: '今、水やりしていいの？', sub: '葉がしおれてきた…水不足？あげすぎ？' },
              { icon: '🌿', bg: '#EAF3DE', q: 'この枝、取っていいの？', sub: 'これって脇芽？取るべき？残すべき？' },
              { icon: '🍅', bg: '#FFF1E0', q: '今、収穫していいの？', sub: 'まだ早い？遅い？ベストなタイミングは？' },
              { icon: '🧪', bg: '#FBEAF0', q: '肥料あげていいの？', sub: '足りない？多すぎ？今あげるべき？' },
            ].map((p, i) => (
              <div key={i} className="border-[1.5px] border-[#E3DCC8] rounded-2xl p-4 flex items-center gap-3.5">
                <div className="w-[38px] h-[38px] rounded-full flex items-center justify-center text-[17px] flex-shrink-0" style={{ background: p.bg }}>{p.icon}</div>
                <div>
                  <div className="font-extrabold text-[15px]">{p.q}</div>
                  <div className="text-xs text-[#6B7C72] mt-0.5">{p.sub}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-hatake-green rounded-[18px] px-5 py-6 text-center">
            <p className="text-[#CDE5D8] text-[13px] mb-1.5">家庭菜園の失敗は、知識不足ではありません。</p>
            <p className="text-white text-lg font-black mb-3.5 leading-snug">
              「今日やるべきか」が<br />分からないだけです。
            </p>
            <p className="text-white text-sm font-bold mb-4">その迷いを、AIが解決します。</p>
            <button className="w-full bg-gradient-to-br from-[#FFD23F] to-[#F5A623] text-hatake-green rounded-2xl py-[15px] text-[15px] font-black">
              無料で試してみる
            </button>
          </div>
        </section>

        {/* 3. Flow Section（コンパクト） */}
        <section className="px-6 py-11 bg-hatake-cream">
          <h2 className="text-[22px] font-black text-center mb-1.5 leading-snug">
            迷わない！<br />今日やることがすぐ分かる
          </h2>
          <div className="flex justify-between mt-7">
            {['写真を撮る', 'AIが見る', '一目で分かる', '記録が残る'].map((label, i) => (
              <div key={i} className="text-center flex-1">
                <div className="w-[46px] h-[46px] rounded-full bg-hatake-green text-white flex items-center justify-center font-black text-base mx-auto mb-2">{i + 1}</div>
                <div className="text-xs font-bold px-1">{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Step1 */}
        <section className="px-6 py-11 bg-white">
          <h2 className="text-[22px] font-black text-center mb-1.5">写真を撮るだけ</h2>
          <p className="text-center text-sm text-[#6B7C72] mb-6">面倒な入力は不要</p>
          <div className="bg-hatake-green rounded-[24px] p-5 mb-6">
            <div className="bg-white rounded-2xl overflow-hidden">
              <div className="bg-[#1A2E22] h-[200px] flex items-center justify-center relative">
                <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-white/70 rounded-tl" />
                <div className="absolute top-3 right-3 w-6 h-6 border-r-2 border-t-2 border-white/70 rounded-tr" />
                <div className="absolute bottom-3 left-3 w-6 h-6 border-l-2 border-b-2 border-white/70 rounded-bl" />
                <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-white/70 rounded-br" />
                <div className="w-14 h-14 rounded-full border-[3px] border-white" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {[
              ['スマホで写真を撮るだけ', '名前やメモはあとでOK！まずは写真を撮るだけ'],
              ['野菜と品種を選ぶだけ', 'トマト・ナス・キュウリなど最初に選ぶだけでOK'],
              ['畑でも片手で使える', 'かんたん操作でどこでもサッと記録'],
            ].map(([t, s], i) => (
              <div key={i} className="flex items-start gap-3 pb-4 border-b border-[#E3DCC8] last:border-0 last:pb-0">
                <div className="w-9 h-9 rounded-full bg-[#EAF3DE] flex items-center justify-center flex-shrink-0 text-hatake-green font-black">{i + 1}</div>
                <div>
                  <div className="font-extrabold text-[15px]">{t}</div>
                  <div className="text-xs text-[#6B7C72] mt-0.5 leading-relaxed">{s}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Step2 */}
        <section className="px-6 py-11 bg-hatake-cream">
          <h2 className="text-[22px] font-black text-center mb-1.5">AIが写真を分析</h2>
          <p className="text-center text-sm text-[#6B7C72] mb-7">AIが畑の状態をくわしく観察します</p>
          <div className="grid grid-cols-2 gap-3">
            {[
              ['葉の状態', '🍃'], ['茎の状態', '🌱'], ['花の状態', '🌼'], ['実の状態', '🍅'],
            ].map(([t, icon], i) => (
              <div key={i} className="bg-white border border-[#E3DCC8] rounded-2xl p-4 text-center">
                <div className="text-2xl mb-2">{icon}</div>
                <div className="font-bold text-[13px]">{t}</div>
              </div>
            ))}
          </div>
          <div className="bg-white border border-[#E3DCC8] rounded-2xl p-4 text-center mt-3">
            <div className="text-2xl mb-2">🐛</div>
            <div className="font-bold text-[13px]">病害虫リスク</div>
          </div>
        </section>

        {/* 6. Step3 */}
        <section className="px-6 py-11 bg-white">
          <h2 className="text-[22px] font-black text-center mb-1.5">AIが今日のアクションを提案</h2>
          <p className="text-center text-sm text-[#6B7C72] mb-7">写真と生育状況をもとに、今日やることをお知らせします</p>

          <div className="border border-[#E3DCC8] rounded-[20px] overflow-hidden mb-6">
            <div className="bg-hatake-green px-4 py-3 text-white text-[13px] font-bold">今日のアクション</div>
            <div className="p-4">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">🙂</span>
                <span className="font-black text-[15px] text-hatake-green">順調です！</span>
              </div>
              <div className="text-xs font-bold text-[#6B7C72] mb-2">今日やること</div>
              <div className="flex flex-col gap-2">
                {['わき芽をかく', '支柱に誘引する', '液肥を与える'].map((t, i) => (
                  <div key={i} className="flex items-center gap-2 bg-[#EAF3DE] rounded-xl px-3 py-2.5">
                    <span className="text-hatake-green font-black text-sm">✓</span>
                    <span className="text-[13px] font-bold">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 mb-6">
            <div className="flex items-start gap-3">
              <span className="text-hatake-green text-lg flex-shrink-0">◎</span>
              <div>
                <div className="font-extrabold text-sm">今の状態が一目でわかる</div>
                <div className="text-xs text-[#6B7C72] mt-0.5">生育ステージや健康状態をわかりやすく表示</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-hatake-green text-lg flex-shrink-0">🌱</span>
              <div>
                <div className="font-extrabold text-sm">今日やることがすぐわかる</div>
                <div className="text-xs text-[#6B7C72] mt-0.5">優先度の高い作業だけをシンプルに提案</div>
              </div>
            </div>
          </div>

          <p className="text-center font-black text-[15px] text-hatake-green">
            日々の管理がもっと楽しく、もっとラクに！
          </p>
        </section>

        {/* 7. Step4 */}
        <section className="px-6 py-11 bg-hatake-cream">
          <h2 className="text-[22px] font-black text-center mb-1.5">わたしの畑日誌</h2>
          <p className="text-center text-sm text-[#6B7C72] mb-7">毎日の記録が、あなただけの栽培記録になります。</p>

          <div className="bg-white border border-[#E3DCC8] rounded-[20px] p-4 mb-6">
            <div className="flex justify-between items-baseline mb-2">
              <span className="text-xs font-bold text-[#6B7C72]">生育グラフ</span>
              <span className="text-xs text-hatake-green font-bold">30日</span>
            </div>
            <svg viewBox="0 0 300 90" className="w-full h-[80px]">
              <polyline points="0,75 60,65 120,48 180,35 240,18 300,8" fill="none" stroke="#0B5D35" strokeWidth="2.5" />
              <polyline points="0,80 60,72 120,60 180,50 240,40 300,32" fill="none" stroke="#B4B2A9" strokeWidth="2" strokeDasharray="4 3" />
            </svg>
            <div className="border-t border-[#E3DCC8] mt-3 pt-3 flex flex-col gap-2">
              {[
                ['今すぐ大きな鉢へ植え替えを', '健康度65'],
                ['支柱を立てる', '健康度60'],
              ].map(([t, s], i) => (
                <div key={i} className="flex justify-between items-center text-[12px]">
                  <span className="font-bold">{t}</span>
                  <span className="text-[#6B7C72]">{s}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 mb-6">
            {[
              ['成長の記録が残る', '写真や健康度を記録。毎日の変化がひと目でわかります。'],
              ['作業を記録して振り返れる', 'いつ・何をしたかを記録。次の判断や管理に活かせます。'],
              ['来年の栽培に活かせる', '今年の経験を残して、次の栽培をもっと上手に。'],
            ].map(([t, s], i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#EAF3DE] flex items-center justify-center flex-shrink-0 text-hatake-green font-black text-sm">{i + 1}</div>
                <div>
                  <div className="font-extrabold text-sm">{t}</div>
                  <div className="text-xs text-[#6B7C72] mt-0.5 leading-relaxed">{s}</div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center font-black text-[15px] text-hatake-green">
            毎日の記録が、来年の栽培に活かせる。
          </p>
        </section>

        {/* 8. Final CTA */}
        <section className="px-6 py-12 bg-hatake-green text-white">
          <h2 className="text-[24px] font-black text-center mb-1.5">hatake.aiをはじめよう！</h2>
          <p className="text-center text-[13px] text-[#CDE5D8] mb-7">家庭菜園の悩みを、AIと記録で解決！</p>

          <div className="bg-white rounded-[20px] p-4 mb-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg">🙂</span>
              <span className="font-black text-sm text-hatake-green">今日のアクション</span>
            </div>
            <div className="flex flex-col gap-2">
              {['今すぐ大きな鉢へ植え替えを', '支柱を立てる', '植え替え後に水やり'].map((t, i) => (
                <div key={i} className="flex items-center gap-2 bg-[#F3F8F0] rounded-xl px-3 py-2 text-[#1A2E22]">
                  <span className="text-hatake-green font-black text-xs">✓</span>
                  <span className="text-xs font-bold">{t}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 mb-8">
            {[
              ['写真を撮るだけ'],
              ['今日のやることがわかる'],
              ['わたしの畑日誌になる'],
            ].map(([t], i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white text-hatake-green flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                <div className="font-bold text-sm">{t}</div>
              </div>
            ))}
          </div>

          <p className="text-center font-bold text-sm mb-6 leading-relaxed">
            記録が積み上がるほど、<br />あなたの畑がもっと豊かに。
          </p>

          <button className="w-[90%] mx-auto block bg-gradient-to-br from-[#FFD23F] to-[#F5A623] text-hatake-green rounded-2xl py-5 text-[18px] font-black shadow-[0_8px_24px_rgba(0,0,0,0.25)]">
            無料で試してみる
          </button>
          <p className="text-center text-xs text-[#CDE5D8] mt-4">登録は簡単30秒・クレジットカード不要</p>
        </section>

      </div>
    </div>
  )
}
