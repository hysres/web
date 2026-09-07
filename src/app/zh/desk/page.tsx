import Link from 'next/link';
import BHMark from '../../components/BHMark';
import TickerMark from '../../components/TickerMark';
import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
// 仅通过直链给交易台成员访问；中英文版互为镜像，两版均不索引。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台 · Hysteresis Research · 迟滞研究',
    description: '内部交易台存档。',
    path: '/zh/desk',
    lang: 'zh-Hans',
  }),
  alternates: { canonical: '/zh/desk' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh() {
  await requireViewer('/zh/desk');
  return (
    <main lang="zh-Hans">
      <div className="col">
        <div className="marginalia">§1</div>
        <div className="hero-mark">
          <BHMark width={180} height={108} strokeWidth={2.2} />
        </div>

        <div className="marginalia">desk</div>
        <h1>交易台</h1>

        <div></div>
        <p className="lede">
          按日期归档的盘口读数。数据齐就写水位，数据不齐就写 framework。
        </p>

        <div className="marginalia">§2</div>
        <p className="body-paragraph">
          每日的台面备忘<span className="em">——</span>regime、仓位结构、
          dealer map、trade book、失效条件。每一节的数字各自带时间戳；
          一项主张超出了数据能撑住的范围，就明确降级为 framework only。
          备忘失效很快，发布之后不再回改。先看上方的数据来源区，再读正文。
        </p>

        <div className="marginalia">§3</div>
        <p className="body-paragraph">
          中英双版同步发布（英文版在 <Link href="/desk">/desk</Link>）。
          仅作内部参考、非投资建议。每篇备忘自带 NFA 免责声明与审计追踪。
        </p>

        <div className="marginalia">§4</div>
        <p className="body-paragraph">
          <a href="https://bytes.space/" target="_blank" rel="noopener">
            工作台 ↗
          </a>{' '}
          <span className="em">—</span> 仍在打磨中的实时仪表盘：regime
          评分、多模型预测锦标赛、MACD 周期、每日市场剖面、MSTR
          稀释探索器。公开、只读、随时改动，不另行通知。
          <span className="em">非投资建议。</span>
        </p>

        <div className="marginalia">§5</div>
        <ul className="entry-list">
          <li>
            <time dateTime="2026-09-07">2026-09-07</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-09-07">两个离场都付了钱，两个边缘都没写</Link>
          </li>
          <li>
            <time dateTime="2026-08-31">2026-08-31</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-08-31">方法站得住，规格没写清</Link>
          </li>
          <li>
            <time dateTime="2026-08-27">2026-08-27</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-08-27">限价那个价位被交到了，但那是模型成交、不是确认成交</Link>
          </li>
          <li>
            <time dateTime="2026-08-26">2026-08-26</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-08-26">框架点着了，进场价从未被交到</Link>
          </li>
          <li>
            <time dateTime="2026-08-25">2026-08-25</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-08-25">处置规则点着了，框架未成交退役</Link>
          </li>
          <li>
            <time dateTime="2026-08-24">2026-08-24</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-08-24">结算点着一条腿，另一条差 $20.30</Link>
          </li>
          <li>
            <time dateTime="2026-08-23">2026-08-23</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-08-23">坏价格上的多头结构——周线台阶又还了回去</Link>
          </li>
          <li>
            <time dateTime="2026-08-22">2026-08-22</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-08-22">地板破位正在被抹掉、而交易台全程是平的</Link>
          </li>
          <li>
            <time dateTime="2026-08-16">2026-08-16</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-08-16">定夺者进行中 —— 周 bar 朝周期地板下方走、而日 flip 守住</Link>
          </li>
          <li>
            <time dateTime="2026-08-14">2026-08-14</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-08-14">底守 flip 第四根收盘，杠杆结构转重、盘中低插穿 flip</Link>
          </li>
          <li>
            <time dateTime="2026-08-12">2026-08-12</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-08-12">丢盖延续第二根收盘、跌破地板带；SM『净空』是数据毛刺，仓位空仓待翻转位</Link>
          </li>
          <li>
            <time dateTime="2026-08-11">2026-08-11</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-08-11">收盘丢盖、但 SM 顺破口翻净多；翻转位/地板未破</Link>
          </li>
          <li>
            <time dateTime="2026-08-10">2026-08-10</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-08-10">盖守住地板但延伸停摆、SM 翻回净空；scout 砍到平仓</Link>
          </li>
          <li>
            <time dateTime="2026-08-09">2026-08-09</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-08-09">重清守住盖第二根收但停住；持 scout、不新加</Link>
          </li>
          <li>
            <time dateTime="2026-08-08">2026-08-08</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-08-08">需求确认的盖上重夺；scout 加仓腿在框架下开火</Link>
          </li>
          <li>
            <time dateTime="2026-08-07">2026-08-07</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-08-07">scout 在盖上褪了，一触即砍地持着，SM 再空受损</Link>
          </li>
          <li>
            <time dateTime="2026-08-06">2026-08-06</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-08-06">背离往多头方向了结，scout 在贴盖的一吻上开仓</Link>
          </li>
          <li>
            <time dateTime="2026-08-05">2026-08-05</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-08-05">盘整向上突破，但每一项内部都未确认，压在盖子下</Link>
          </li>
          <li>
            <time dateTime="2026-08-04">2026-08-04</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-08-04">争夺中的收复盘在抬升的地板上，聪明钱盘面变暗</Link>
          </li>
          <li>
            <time dateTime="2026-08-03">2026-08-03</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-08-03">周收守住地板，但聪明钱在卖这场被争夺的收复</Link>
          </li>
          <li>
            <time dateTime="2026-08-02">2026-08-02</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-08-02">平盘卡在破掉的地板下方，进周线收盘的最后一天</Link>
          </li>
          <li>
            <time dateTime="2026-08-01">2026-08-01</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-08-01">盖子被拒、价格收穿地板，但聪明钱接了刀</Link>
          </li>
          <li>
            <time dateTime="2026-07-31">2026-07-31</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-07-31">聪明钱回补并重新穿回净多，把 D-EMA50 顶盖压到一美元</Link>
          </li>
          <li>
            <time dateTime="2026-07-30">2026-07-30</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-07-30">聪明钱翻净空、而定底一美元不差守住，两个本子在 $63,311 处劈开</Link>
          </li>
          <li>
            <time dateTime="2026-07-29">2026-07-29</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-07-29">定底以收盘守住、本子重新 gamma 转正、但反弹空心、聪明钱在弹里减仓 −41%</Link>
          </li>
          <li>
            <time dateTime="2026-07-28">2026-07-28</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-07-28">夺回在阴线里回落、记录性买家翻身抄底、备忘压缩到已结定底 $63,311</Link>
          </li>
          <li>
            <time dateTime="2026-07-27">2026-07-27</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-07-27">上收重夺 D-EMA50 cap、但靠空头回补 / OI 收缩、smart money 减多加空、scout 仍递延</Link>
          </li>
          <li>
            <time dateTime="2026-07-26">2026-07-26</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-07-26">第一根上收但封在 D-EMA50 下方、buyer of record 进反弹时 trim</Link>
          </li>
          <li>
            <time dateTime="2026-07-25">2026-07-25</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-07-25">cap 之下第二根阴收、OI 仍是错的那种</Link>
          </li>
          <li>
            <time dateTime="2026-07-24">2026-07-24</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-07-24">重夺的第一次 cap 真测失败、scout 退回递延</Link>
          </li>
          <li>
            <time dateTime="2026-07-23">2026-07-23</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-07-23">第二根回调、smart money 守住出价 —— funding 翻空付多、那根确认收阳还是没来</Link>
          </li>
          <li>
            <time dateTime="2026-07-22">2026-07-22</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-07-22">smart money 终于接过出价、侦察多头上膛 —— 但仍在等一根确认的收阳</Link>
          </li>
          <li>
            <time dateTime="2026-07-19">2026-07-19</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-07-19">需求终于把 OI 拉上去、但 smart money 在褪这根出价</Link>
          </li>
          <li>
            <time dateTime="2026-07-16">2026-07-16</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-07-16">地板在两根日线收盘上被重夺、但接盘的是回补的空头、不是新的现货需求</Link>
          </li>
          <li>
            <time dateTime="2026-07-14">2026-07-14</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-07-14">地板在收盘价上被交还、smart money 顺势把空头加了三倍</Link>
          </li>
          <li>
            <time dateTime="2026-07-13">2026-07-13</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-07-13">地板在收盘周线上确认、smart money 却回头加空</Link>
          </li>
          <li>
            <time dateTime="2026-07-12">2026-07-12</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-07-12">挤压燃料泄完、地板守住 —— 但没有现货需求接棒</Link>
          </li>
          <li>
            <time dateTime="2026-07-11">2026-07-11</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-07-11">空头在延伸里被回补、reclaim 走强 —— 但燃料是回补、不是现货需求</Link>
          </li>
          <li>
            <time dateTime="2026-07-10">2026-07-10</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-07-10">地板盘内被再重夺、但反弹正被 smart money 卖</Link>
          </li>
          <li>
            <time dateTime="2026-07-09">2026-07-09</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-07-09">收复在周内被交还、盘面真正转空</Link>
          </li>
          <li>
            <time dateTime="2026-07-08">2026-07-08</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-07-08">头一回回撤守住收复的地板、但读的是去杠杆</Link>
          </li>
          <li>
            <time dateTime="2026-07-07">2026-07-07</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-07-07">盘面恢复、地板在周收重夺、但第一次 live 读是短空回补 / 去杠杆</Link>
          </li>
          <li>
            <time dateTime="2026-07-05">2026-07-05</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-07-05">反弹在日收上重夺地板、本子加深净多 γ、引擎在高位翻回周期反转标两根 TD9 SELL</Link>
          </li>
          <li>
            <time dateTime="2026-07-04">2026-07-04</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-07-04">反弹一路弹到地板、两根 MA 重夺回、本子加深净多 γ、引擎在高位标两根 TD9 SELL</Link>
          </li>
          <li>
            <time dateTime="2026-07-03">2026-07-03</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-07-03">反弹延伸到第三根 session、本子加深净多 γ、引擎在高位标反转</Link>
          </li>
          <li>
            <time dateTime="2026-07-01">2026-07-01</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-07-01">反弹失败、本子翻回空 γ、flip 丢失</Link>
          </li>
          <li>
            <time dateTime="2026-06-30">2026-06-30</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-06-30">破位在周收上确认、盘面反弹进它，本子翻回净多 γ</Link>
          </li>
          <li>
            <time dateTime="2026-06-29">2026-06-29</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-06-29">200W 地板破到第五根日收、本子翻回净空 γ，周收今天结算</Link>
          </li>
          <li>
            <time dateTime="2026-06-28">2026-06-28</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-06-28">200W 地板破到第四根日收、上抬被交还，本子翻成净多 γ</Link>
          </li>
          <li>
            <time dateTime="2026-06-27">2026-06-27</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-06-27">200W 地板破到第三根日收、首根阳线上稳住，放大器结算</Link>
          </li>
          <li>
            <time dateTime="2026-06-26">2026-06-26</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-06-26">200W 地板第二根日收破、周线收破升级待定进 26JUN opex</Link>
          </li>
          <li>
            <time dateTime="2026-06-25">2026-06-25</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-06-25">200W 地板日收破、升级待定进 26JUN opex</Link>
          </li>
          <li>
            <time dateTime="2026-06-24">2026-06-24</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-06-24">周收地板遭直接攻击、本子加深空 γ 进 26JUN opex</Link>
          </li>
          <li>
            <time dateTime="2026-06-23">2026-06-23</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-06-23">周收地板守住、重夺还回去、本子重新放大空 γ 进 26JUN opex</Link>
          </li>
          <li>
            <time dateTime="2026-06-22">2026-06-22</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-06-22">未收盘周线 bar 站在地板上方、dealer 本子去放大至 flat、盘面冻结 130.6 小时</Link>
          </li>
          <li>
            <time dateTime="2026-06-20">2026-06-20</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-06-20">地板收盘两度守住、本子去放大、盘面冻结 65 小时</Link>
          </li>
          <li>
            <time dateTime="2026-06-19">2026-06-19</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-06-19">价格落到 200W 地板、盘面仍冻结</Link>
          </li>
          <li>
            <time dateTime="2026-06-18">2026-06-18</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-06-18">重夺还回去、衍生品盘口冻结</Link>
          </li>
          <li>
            <time dateTime="2026-06-16">2026-06-16</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-06-16">第五程上涨，200W 重夺确认进顶背离疲态</Link>
          </li>
          <li>
            <time dateTime="2026-06-15">2026-06-15</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-06-15">第四程上涨，顶背离走阔</Link>
          </li>
          <li>
            <time dateTime="2026-06-14">2026-06-14</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-06-14">真上涨腿进顶背离疲态</Link>
          </li>
          <li>
            <time dateTime="2026-06-13">2026-06-13</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-06-13">重夺地板上方消化</Link>
          </li>
          <li>
            <time dateTime="2026-06-12">2026-06-12</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-06-12">周内重夺，本子翻净多 γ</Link>
          </li>
          <li>
            <time dateTime="2026-06-11">2026-06-11</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-06-11">地板下点起一簇均值回归</Link>
          </li>
          <li>
            <time dateTime="2026-06-10">2026-06-10</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-06-10">200W 重夺一天就还回去、$60k 看跌墙重堆到 −47.86M</Link>
          </li>
          <li>
            <time dateTime="2026-06-09">2026-06-09</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-06-09">200W 周收重夺、dealer flip 跟着走</Link>
          </li>
          <li>
            <time dateTime="2026-06-08">2026-06-08</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-06-08">200W 周收上重夺、leg-3 触发就差一根 wick</Link>
          </li>
          <li>
            <time dateTime="2026-06-07">2026-06-07</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-06-07">周期底上反弹</Link>
          </li>
          <li>
            <time dateTime="2026-06-06">2026-06-06</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-06-06">底破在印上</Link>
          </li>
          <li>
            <time dateTime="2026-06-05">2026-06-05</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-06-05">停了但底没起</Link>
          </li>
          <li>
            <time dateTime="2026-06-04">2026-06-04</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-06-04">再下一层，TD9 五框架</Link>
          </li>
          <li>
            <time dateTime="2026-06-03">2026-06-03</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-06-03">墙穿过去，新磁下移</Link>
          </li>
          <li>
            <time dateTime="2026-06-02">2026-06-02</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-06-02">周期锚收盘破位 · 本子翻回净空 γ · scout 递延</Link>
          </li>
          <li>
            <time dateTime="2026-06-01">2026-06-01</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-06-01">锚在收盘上守住 · 杠杆单侧空头重建 · scout 离开死的 W-SMA20 重锚</Link>
          </li>
          <li>
            <time dateTime="2026-05-31">2026-05-31</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-05-31">本子翻面到净多 γ · 锚在收盘上守住 · scout 递延</Link>
          </li>
          <li>
            <time dateTime="2026-05-29">2026-05-29</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-05-29">阶梯跑满 · 放大器今天解</Link>
          </li>
          <li>
            <time dateTime="2026-05-28">2026-05-28</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-05-28">门打齐 · 目标贴位差 $0 触到</Link>
          </li>
          <li>
            <time dateTime="2026-05-27">2026-05-27</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-05-27">加多在簇顶被砍 · flip 裂开</Link>
          </li>
          <li>
            <time dateTime="2026-05-26">2026-05-26</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-05-26">加多印在簇上</Link>
          </li>
          <li>
            <time dateTime="2026-05-25">2026-05-25</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-05-25">回补印在簇上</Link>
          </li>
          <li>
            <time dateTime="2026-05-24">2026-05-24</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-05-24">钉在簇上</Link>
          </li>
          <li>
            <time dateTime="2026-05-23">2026-05-23</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-05-23">空头重新堆</Link>
          </li>
          <li>
            <time dateTime="2026-05-22">2026-05-22</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-05-22">空头底气流失</Link>
          </li>
          <li>
            <time dateTime="2026-05-21">2026-05-21</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-05-21">聪明钱卖了反弹</Link>
          </li>
          <li>
            <time dateTime="2026-05-20">2026-05-20</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-05-20">宏观下场</Link>
          </li>
          <li>
            <time dateTime="2026-05-19">2026-05-19</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-05-19">锚上盘整</Link>
          </li>
          <li>
            <time dateTime="2026-05-18">2026-05-18</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-05-18">聪明钱转空</Link>
          </li>
          <li>
            <time dateTime="2026-05-17">2026-05-17</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-05-17">第一条失效线</Link>
          </li>
          <li>
            <time dateTime="2026-05-15">2026-05-15</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-05-15">两道墙之间</Link>
          </li>
        </ul>

        <div></div>
        <p className="signature">
          盘口有话说才写，不按日历凑数。
        </p>
      </div>
    </main>
  );
}
