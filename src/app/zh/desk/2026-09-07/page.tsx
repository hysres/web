import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
// 描述故意中性化——任何后续外部分享（Slack/邮件链接预览）显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-09-07 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-09-07',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-09-07' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260907() {
  await requireViewer('/zh/desk/2026-09-07');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · 交易台备忘 · 2026-09-07 · v2</span>
          <span>内部 · 仅供讨论 · 已过 codex 敌对式审计</span>
        </header>

        <div className="dn-body">

          <div className="dn-head">
            <div className="dn-mark" aria-hidden="true">
              <svg width="80" height="48" viewBox="0 0 100 60">
                <path
                  d="M 10 54 C 30 54, 38 53, 58 30 C 70 13, 78 7, 90 6 C 70 6, 62 7, 42 30 C 30 47, 22 53, 10 54 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="dn-lockup">
              <div className="dn-name">Hysteresis Research</div>
              <div className="dn-name-cn">迟 滞 研 究</div>
            </div>
            <div className="dn-stamp">
              BTC · spot
              <span className="dn-big">$80,334</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+0.56%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-09-07 00:05Z · 滚动源在读取前先归档到
              /opt/desk-note/snapshots/2026-09-07-0005/ · 本篇是<b>周报</b>
              （周一节奏）、锚在刚收的 W-SUN 2026-09-06 周线收盘上
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘面（spot / perp / OI / SM / funding）</td>
                  <td className="dn-v-cell">live_db.json · 行 <code>t = &ldquo;09-07 08:05&rdquo;</code> = 2026-09-07 00:05Z</td>
                  <td className="dn-flag">
                    最新 · 1 分钟 · <b><code>t</code> 字段是北京时（UTC+8）、不是 UTC</b>
                    —— 00:05Z 这个锚是 <code>08:05</code> 那一行、永远不是
                    <code> 00:05</code> 那一行 · 读取时文件 tail 在
                    <code> 09-07 08:06</code>（00:06Z）、比锚多一分钟 · 7d 窗口
                    10,084 原始行 → 去掉 3 个重复标签后
                    <b>10,081 个唯一时戳 = 10,080 个间隔</b> · 无缺口
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">
                    mtf_div_latest.html · 扫描头 2026-09-07 08:01 北京时 = 00:01Z
                  </td>
                  <td className="dn-flag">
                    读的是归档副本 · 比锚早 4 分钟 · 头部印的是北京时 ·
                    文件自己的现货 $80,240 对 live $80,333.99（−$93.99）、它自己的
                    24h 高低 $80,536 / $79,125 是 09-06 <b>日历日</b>交易所 bar、
                    不是滚动 24h
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-09-07 00:00 UTC · 964 合约</td>
                  <td className="dn-flag">
                    读的是归档副本 · 比锚早 5 分钟 · Deribit 指数 $80,791.43 对
                    live 现货 $80,333.99 = <b>指数比盘面贵 +$457.44 / +0.5694%</b>、
                    所以每一个距离都按两个参照印 · 合约计 <b>964</b> 对 08-31 面板的
                    1,026 · <b>这一个文件里存在三个不同的 aggregate、三个全印出来</b>：
                    标题 tile +286.6M、50-strike profile +292.850527M、脚合的 12 期限条
                    +296.19M
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">精确 net GEX（耐久钉）</td>
                  <td className="dn-v-cell">
                    gex_summary.json · <code>ts 2026-09-07 00:00</code> · net_gex
                    296,197,441.55340207
                  </td>
                  <td className="dn-flag">
                    在滚动路径下一次整点覆写之前<b>逐字节相同</b>拷进日期归档 · sha256
                    <code> 04f3377f…6a3e2b50</code> · <b>脚合的期限条并不能精确复现它</b>：
                    十二个各自四舍到 0.01M 的期限行加起来是 <b>$296.190000M</b>、
                    而 JSON 的精确总额是 <b>$296,197,441.55</b>、差 <b>$7,441.55</b>、
                    精确总额自己四舍是 <b>$296.20M</b> 而不是 $296.19M。本篇所有由期限条
                    推出来的数都在四舍行口径上、并各处标明
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 生成于 2026-09-07T00:00+00:00
                  </td>
                  <td className="dn-flag">
                    读的是归档副本 · 比锚早 5 分钟 · 7d 1h bar · 22 资产 ·
                    <b>场所是 Hyperliquid 永续、不是现货也不是 CME</b> —— 生产脚本用
                    Hyperliquid 的 BTC 永续加 <code>xyz</code> 股指 / 金属永续搭这张面板、
                    <b><code>NQ</code> 是别名 <code>xyz:XYZ100</code></b>、一条 24/7
                    的股指永续 oracle、不是载入的 CME NQ 序列（SP500、NVDA、GOLD 等同理）·
                    <b>窗口里那两个周末日是<em>有</em>印子的</b>：NQ、SP500、NVDA 各有 48 个
                    非空周末观测、价格在动，因为标的现货市场关着而永续照跑 ·
                    <b>166 行是 22 个回报列全部齐全的 complete-case 计数；下面引用的
                    BTC/NQ 与 BTC/GOLD 相关性各自用的是 168 对观测</b> ·
                    文件自己的 BTC 7d 变动是小时端点 +3.04%、对 live 盘面分钟端点的
                    +3.27% —— 用到哪个就写哪个
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z-score 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 渲染 2026-09-06 22:17Z</td>
                  <td className="dn-flag">
                    读的是归档副本 · <b>渲染滞后 1h48m</b> —— 这张面板在 00:00Z
                    没有重烤 · NFCI 标陈旧 9d、WTI 陈旧 5d、所有月度 Tier-3 行陈旧 67d、
                    JGB 陈旧 97d
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日 / 周 MA 矩阵 + RV</td>
                  <td className="dn-v-cell">
                    btcusdt_1m_*.parquet（8 个文件、2019-09-08 → 2026-09-07 00:05Z）
                  </td>
                  <td className="dn-flag">
                    矩阵<b>只用收完的 bar</b> 算 —— 日线到 2026-09-06 收 $80,301.10、
                    周线 W-SUN 到 2026-09-06 收 $80,301.10 · 09-07 那根在跑的日线
                    bar 排除在外 · <b>偏移按 live 现货 $80,333.99 重算</b> ·
                    parquet 末根 00:05Z 收 $80,383.70 ·
                    <b>parquet 的分钟索引比 live 行标签落后一分钟</b>
                    （parquet 00:05 = live_db <code>08:06</code>），所以本篇每一个 1h
                    收盘时刻都带 ±1 分钟、敏感主张两个口径都重算过
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W 周期地板监视</td>
                  <td className="dn-v-cell">
                    weekly_200sma.json <b>不存在</b> → 只能用 parquet 重算
                  </td>
                  <td className="dn-flag">
                    读取时这台服务器上没有这个 watch JSON · 200W 的读数由 parquet
                    周线序列重算、并明确标为 fallback ·
                    <code> ma200w_trap_watch_state.json</code> 存在但<b>陈旧一周</b>
                    （<code>last_completed_week 2026-08-30</code>、重算于
                    2026-08-31T00:11Z）—— 它没有为 09-06 这一周重跑过，08-31 那篇
                    已经把它作为交叉核对撤回，本篇维持撤回
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">JGB 10Y</td>
                  <td className="dn-v-cell">FRED 月度 · IRLTLT01JPM156N · 2.67%</td>
                  <td className="dn-flag">陈旧 · 月度 · 陈旧 97d · 不作依据</td>
                </tr>
                <tr>
                  <td className="dn-s">
                    委托流水、报单 ID、挂单 / 撤单标记、成交均价、部分成交记录、
                    账户归属、成交回报
                  </td>
                  <td className="dn-v-cell">未载入 —— 本谱系从来没有载入过</td>
                  <td className="dn-flag">
                    <b>第 V 节里每一个 R 都是建模 / 纸面</b>、按指令价 $78,500 算 ·
                    盘面穿过写下来的价位只证明<b>可成交性</b>、不证明委托存在、路由、
                    状态、数量或归属
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">
                    NTT pivot、max-pain、strike-level IV、BTC/NQ 比率
                  </td>
                  <td className="dn-v-cell">本次未载入</td>
                  <td className="dn-flag">
                    <code>btc_ntt_analysis.html</code> 是 JS 渲染、抽不出来 ·
                    相关主张明确为 framework only
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="dn-meta">
            <div>
              <span className="dn-k">funding · 8h 年化</span>
              <span className="dn-v">+2.89%</span>
              <span className="dn-src">live · raw 0.002641 × 1095 = +2.8919% · 24h 均值 +4.3694%<b>（1,441 行的采样行均值；1,440 间隔均值是 +4.3696%）</b>、区间 +0.7577% / +9.0535% · <b>24h 窗口内零封顶行、零负值行</b> · 距上一根封顶行 2026-09-03 20:16Z <b>4,549 分钟（75h49m）</b>、从第一根顶下行 20:17Z 起算是 <b>4,548 个流逝的顶下分钟</b> —— 两个口径不同、两个都印</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h · 7d 占用</span>
              <span className="dn-v bull">+4.05% → +2.89%（−1.16pt）</span>
              <span className="dn-src">24h 前 raw 0.003703 × 1095 = +4.0548% · <b>7d 封顶占用 1,026 / 10,080 间隔 = 10.18%</b>、从 08-31 那篇的 45.6% 掉下来 · 7d 均值 +6.4891%<b>（10,081 个唯一行的采样行均值；10,080 间隔均值是 +6.4890%）</b>、最高 +10.9500%（封顶）、最低 −0.5431% · 一段 <b>73 采样 / 72 流逝分钟的负值段</b> 09-05 07:50Z → 09:02Z、是本周唯一一次穿零翻符号</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h / 距峰</span>
              <span className="dn-v bull">−0.69%（−728.8 BTC）· 距 09-04 峰 −7.21%</span>
              <span className="dn-src">live · 现在 105,552.657 · 24h 前 106,281.442 · 7d 前 106,412.164（一周 −859.5 BTC / −0.81%）· <b>峰 113,758.833 @ 2026-09-04 03:42Z</b> → −8,206.2 BTC / −7.21%：一周之内建满再冲掉，不是安静的漂移</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) 多/空</span>
              <span className="dn-v">51.46 / 48.54</span>
              <span className="dn-src">live_db <code>mkt_long_pct</code> · 7d 区间 <b>43.42% @09-04 02:36Z</b>（OI 峰前 1h06m）到 <b>57.44% @09-02 12:27Z</b>（7d 现货低点后 1h35m）· 一段 <b>14.02pt</b> 的周内摆幅、两个极值落在本周价格低点与 OI 峰<em>附近</em>但都不在其上 —— <b>只是有日期的时序、没有 retail 盈亏、没有 cohort 归属、没有入场分布载入，所以不对任何 cohort 结果下判断</b></span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bull">+30,321.9（净多）</span>
              <span className="dn-src">live · long_btc 37,091.5 − short_btc 6,769.6 · long_traders 4,845 / short_traders 1,370 · long_pct 80.39 / short_pct 14.08</span>
            </div>
            <div>
              <span className="dn-k">SM Δ · 24h 与对 08-31 备忘</span>
              <span className="dn-v">+1,542.3（24h）· +3,758.0（7d）</span>
              <span className="dn-src"><b>切口比例 = |Δ| / prior_net</b>：24h 1,542.2859 / 28,779.652 = <b>5.36%</b> · 7d 3,757.998 / 26,563.940 = <b>14.15%</b> · <b>不可采信</b> —— 两个名册跳变分钟供了 24h Δ 的 86.39%（见第 I 节）</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v bear">42.5% / 46.20% —— 隐含比已实现<em>便宜</em> 3.70pt</span>
              <span className="dn-src">GEX 链上中位数、跨 <b>964 合约 · 不是可交易价差</b> · RV = 日对数收益 σ × √365、收盘到 2026-09-06 = 46.1976% · IV − RV = <b>−3.6976pt</b>、对齐口径下 08-31 是 −0.1772pt —— <b>两次都在便宜一侧、这是折价走阔、不是变号</b> · IV 只发布到 0.1%、所以带 <b>±5 个波动率基点</b>（两张四舍卡片相减时 ±10）</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v bull">对现货 +17.40% · 对 Deribit 指数 +18.06%</span>
              <span className="dn-src">flip $68,430.18 · 对 live 现货 $80,333.99 → 在上方 +17.3956%（<b>要跌 14.8179%</b> 才够到）· 对 GEX 文件自己的 Deribit 指数 $80,791.43 → +18.0640%（要跌 15.3002%；文件把它四舍成 +18.1%）· <b>两个参照都是正的、跟正文同号</b> · 脚合 aggregate <b>+296.19M</b>（四舍行口径）</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                08-31 那篇写下来的框架，在那篇的锚之后九小时五十五分触发、
                当场成交、按印子口径被穿过止损 $1,028.10 而止损在它自己写明的
                口径上从未触发，然后在 09-03 的八十三分钟里被它自己写下来的
                两个价位一起了结
              </span>
              。触发规则是连续两根收完的交易所 1h 收盘 ≥{' '}
              <span className="dn-tag">$78,431</span>；标 08:00 那根收{' '}
              <span className="dn-tag">$78,439.10</span>、标 09:00 那根收{' '}
              <span className="dn-tag">$78,486.60</span>，所以触发落在{' '}
              <span className="dn-tag bull">2026-08-31 10:00Z</span>。约 $78,500
              的入场在那一刻就已经可成交 —— 10:00Z 那根分钟 bar 开在 $78,486.60
              —— 所以没有什么好追的。盘面先往错的方向走：MAE{' '}
              <span className="dn-tag bear">$76,151.90 @09-02 10:51Z</span> =
              −1.7789R gross、<span className="dn-tag bear">896 根分钟 bar 落在
              $77,180 止损或其下</span>，而中间没有一根日收在它下面（09-01
              $77,400.10、09-02 $77,300.00）。然后它付钱了：$79,600 的减半在{' '}
              <span className="dn-tag bull">09-03 14:28Z</span> 成交、$81,000
              的固定尾仓在 <span className="dn-tag bull">09-03 15:51Z</span>、
              同一个 session，所以 $78,500 的日收移动止损根本没轮到上场。建模结果{' '}
              <span className="dn-tag bull">+1.3636R gross / 0.2R 规模下 +0.2727R</span>
              ，而这个数是<span className="dn-em">在一个被采纳的到期条款读法之下</span>
              成立的、不是唯一读法。那条条款写的是指令
              <b>「持有至 2026-09-01 00:00Z 日收、然后失效」</b>
              ，它<b>从来没说到期是否触及一个已经成交的仓位</b>。本篇采纳
              <b>只针对未成交指令</b>的读法。反过来读成硬性时间离场，收完的
              08-31 日收 $78,549.60 给出的是{' '}
              <span className="dn-tag">+0.0376R gross / 0.2R 下 +0.0075R</span>
              —— 一个活着的文本替代读法，不是说真的发生过时间离场。尾仓条款真正
              关掉的是 08-31 那篇抱怨的<em>离场</em>歧义：那个关于一笔付了钱的
              交易到底赚了多少的 3.18× 区间没了，取而代之的是往上游挪了一条条款的
              一个更窄的歧义。完全没关掉的是本周真正暴露出来的东西：
              <b>按印子口径的 MAE 比名义 R 高出 77.89%</b>。R 是日收口径止损上的
              $1,320；按印子口径的回撤走到 $2,348.10。规则是靠它的口径活下来的、
              不是靠它的几何，而为这个被付过一次钱不构成证据。{' '}
              <span className="dn-signal">本子回到 FLAT。</span>周围：W-SUN 周线收在{' '}
              <span className="dn-tag bull">$80,301.10</span>、+$2,666.50 / +3.435%、
              也是 200W 周期地板上方连续第三根收盘；现货{' '}
              <span className="dn-tag">$80,333.99</span> 落在{' '}
              <span className="dn-tag">W-SMA50 $80,335.54 下方 $1.55</span>
              —— 巧合就当巧合写；建模的 dealer γ 代理从{' '}
              <span className="dn-tag bear">+184.30M → +296.19M 脚合、增加
              +111.89M</span>、是 83 张归档面板里第二深的<em>水位</em>；跨资产那张
              22 资产面板从{' '}
              <span className="dn-tag">IDIOSYNCRATIC 0.204 → NORMAL 0.286</span>
              重新分类 —— 那是全市场的 mean-|r| 标签、不是 BTC 的 beta 估计 ——
              同时 BTC 自己的样本相关性走强（GOLD +0.357 → +0.572、NQ +0.405 →
              +0.502），而 BTC 对 NQ 的 7d 领先从 08-31 的 0.20pt <b>走阔</b>
              到今天的 2.25pt。
            </p>

            <p>
              BTC live 印 <span className="dn-tag">$80,333.99</span>、24h{' '}
              <span className="dn-tag bull">+0.56%</span>、一周{' '}
              <span className="dn-tag bull">+3.27%</span>，落在 24h 现货区间{' '}
              <span className="dn-tag">$79,404.69 / $80,531.77</span> 的{' '}
              <span className="dn-tag">82.45%</span> 位置（低点 @09-06 15:02Z、
              高点 @09-06 23:47Z）。这个数背后的周线 bar 比印子看上去宽得多：
              W-SUN 2026-09-06 走的是{' '}
              <span className="dn-tag">O $77,634.60 · H $82,282.80 · L $76,151.90 ·
              C $80,301.10</span> —— 一段 <span className="dn-tag">8.05%</span>
              的高到低横越，最后收成 +3.435%。这是连续第二周收盘把大部分区间藏起来，
              也正是这张台子按结算发周报、而不是按盘面发日报的理由。里面发生了三件事、
              下面全部带日期：09-02 冲到{' '}
              <span className="dn-tag bear">$76,151.90</span> 的那一下、09-03
              直上 <span className="dn-tag bull">$82,282.80</span>、以及 09-04
              把持仓从峰上打掉 <span className="dn-tag">−8,206.2 BTC</span> 的那次
              解杠杆。
            </p>

            <h2 className="dn-sec">
              仓位{' '}
              <span className="dn-roman">I</span> · 一个建满再冲掉的周 —— OI 峰
              113,758.8 后吐回 7.21%，retail 拥挤度在 7d 低点后 1h35m 见顶、
              在 OI 峰前 1h06m 见底（<b>只有日期时序、没有盈亏 / cohort / 入场数据</b>），
              SM 盘面连续第二篇已核对备忘<b>不可采信</b>、两分钟集中度 86.39%
            </h2>

            <p>
              <span className="dn-signal">
                持仓比价格更能讲清这一周。
              </span>{' '}
              OI 在窗口开头是 <span className="dn-tag">106,412.164</span>、峰在{' '}
              <span className="dn-tag bear">113,758.833 @2026-09-04 03:42Z</span>、
              现在 <span className="dn-tag">105,552.657</span> —— 七天净{' '}
              <span className="dn-tag">−859.5 BTC / −0.81%</span>，而这个净数
              把 <span className="dn-tag bear">+7,346.7 BTC 的建仓和 −8,206.2 BTC
              / −7.21% 的冲掉</span>一起藏了。峰印在 7d 现货高点 $82,076.59
              @09-03 21:35Z（live 盘面口径；交易所 bar 是 21:34Z 的 $82,282.80
              —— 两个口径都印，它们差 $206.21 和一分钟）之后{' '}
              <span className="dn-tag">6h07m</span>，这是杠杆追高的常见形状：
              最后那批仓位是在高点<em>之后</em>加的、不是加在高点上。24h 窗口上
              OI 仍在渗 <span className="dn-tag">−728.8 BTC / −0.69%</span>、
              而价格涨 +0.56%。<b>这条 feed 看不到 gross 开仓、gross 平仓和账户级
              换手</b>，所以这跟轮动一致、而这条 feed 也排除不掉清算。下面那段
              flow 拆解比它看上去要窄，用之前先重新贴标签。
            </p>

            <p>
              <b>在读任何一个 flow 数之前，先纠两个标签。</b>第一，这张台子一直
              挂在「spot」标签下的那条序列是 <code>cb_cvd</code>、
              它<b>不是测出来的现货成交量序列</b>：生产脚本抓的是 Coinbase
              的一个<em>价格</em>、然后按价格变动方向加减{' '}
              <code>max(|premium|, 0.5)</code>。里面没有成交笔量、没有主动方、
              没有成交量。它是一条 <b>Coinbase 价格 / 溢价代理</b>、单位是代理单位、
              从这里开始就这么叫，<b>任何关于现货买盘的结论都不能架在它上面</b>。
              第二，窗口统计用了两套不同的样本集、现在两套都点名：<b>间隔和</b>
              不含开头那个采样、<b>采样行和</b>含。能跟累加器端点差直接比的是间隔和、
              所以间隔和排在前面。
            </p>

            <p>
              24h 窗口里没有累加器重置：期货 CVD 是{' '}
              <span className="dn-tag bear">−355.1</span>、间隔口径的{' '}
              <code>taker_net</code> 和是{' '}
              <span className="dn-tag bear">−355.13</span>（采样行形式是 −346.33）；
              Coinbase 价格 / 溢价代理走了{' '}
              <span className="dn-tag bull">+1,359.1</span> 个代理单位、大单净是
              采样行口径的 <span className="dn-tag bull">+396.07</span>。
              4h 是同一个形状（代理 +336.1、期货 CVD −39.4、间隔 taker −39.41 /
              采样行 −56.36）、1h 也是（代理 +116.4、期货 CVD −222.7、间隔 taker{' '}
              <b>−222.70</b> / 采样行 −263.42、大单净间隔 −112.56 / 采样行
              −123.35），1h 上期货侧是最响的卖方、1h 的价格涨幅已经薄到{' '}
              <span className="dn-tag">+0.142%</span>。价格涨、OI 降、期货 taker
              为负，这跟轮动一致；溢价代理能加上去的是一个价格 / 溢价的签名、
              不是现货买盘的证据。
            </p>

            <p>
              <b>整周的 flow 主张撤回。</b>7d 窗口里有<b>三次累加器重置</b>、
              落在重复的北京时标签上 —— 09-01 06:38Z、09-03 06:30Z、09-03 06:34Z ——
              期货 CVD 在那里跳{' '}
              <span className="dn-tag">−3,902.2 → +40.0</span> 和{' '}
              <span className="dn-tag">−1,433.3 → +10.1</span>、<code>cb_cvd</code>{' '}
              同时重置。拿整周端点相减因此是在<em>不同的累加器基底之间</em>做差，
              早先草稿里那两个 <b>+6,107.0 代理 / +5,577.6 期货</b> 的周数
              <b>不成立</b>、不作为 flow 发布。改成按首次出现、间隔口径重建的
              采样 <code>taker_net</code> 和，这一周是{' '}
              <span className="dn-tag">+30.99</span> —— 保留重复采样则是{' '}
              <b>+68.88</b> —— 对着采样行端点形式的 +74.11。即便是 +30.99 也只是
              <b>对采样到的分钟求和、不是完整的交易所 flow</b>：这条 feed 的采集
              覆盖度没有被验证过。关于这一周，诚实的说法是这一份切片给不出方向。
            </p>

            <p>
              <span className="dn-signal">
                retail 拥挤度把它 7d 的两个极值放在了离本周低点和 OI 峰几个小时的
                地方 —— 这是有日期的时序巧合，除此之外不多claim一句。
              </span>{' '}
              <code>mkt_long_pct</code> 见顶在{' '}
              <span className="dn-tag bear">57.44% @2026-09-02 12:27Z</span>、
              在 7d 现货低点 $76,350.01 @10:52Z 之后一小时三十五分；见底在{' '}
              <span className="dn-tag">43.42% @2026-09-04 02:36Z</span>、
              在 OI 峰之前一小时零六分、高点之后 5h01m。现在读{' '}
              <span className="dn-tag">51.46 / 48.54</span>、对 08-31 锚上的
              51.95% —— 所以在这张台子真正拿来比的两个端点上，retail 在一个
              +3.27% 的周里是<em>持平到略微松</em>，而那 14.02pt 的周内摆幅才是
              真正的观测。这条 feed 里没有 retail 盈亏、没有 cohort 归属、
              没有入场分布，所以它不能、也没有 claim retail 被踩在错的一边 ——
              只能说拥挤极值落在了它们落的地方。
            </p>

            <p>
              <span className="dn-signal">
                SM 盘面连续第二篇已核对备忘不可采信，机制跟这张台子从 08-23
                就在标的那一个是同一个。
              </span>{' '}
              名义 24h Δnet 是{' '}
              <span className="dn-tag">+1,542.2859</span>（28,779.652 →
              30,321.938）、切口比例{' '}
              <span className="dn-tag">|Δ| / prior_net = 1,542.2859 / 28,779.652 =
              5.36%</span>。但它是被两分钟扛起来的。在{' '}
              <span className="dn-tag bear">2026-09-06 06:26Z</span> 净值单分钟跳{' '}
              <span className="dn-tag">+2,660.49</span>、<code>long_traders</code>{' '}
              4,763 → 5,077、<code>short_traders</code> 1,343 → 1,426；十五分钟后的{' '}
              <span className="dn-tag bear">06:41Z</span> 跳{' '}
              <span className="dn-tag">−1,328.12</span>、<code>long_traders</code>{' '}
              5,090 → 4,938、<code>short_traders</code> 1,418 → 1,320。这两个是
              <b>整个 24h 窗口里仅有的两次 ≥100 交易者的名册移动</b>、带符号和是{' '}
              <span className="dn-tag bear">+1,332.3759 = 24h Δnet 的 86.39%</span>、
              剩下 1,438 个分钟到分钟的步进净得{' '}
              <span className="dn-tag">+209.9101</span>、按 28,779.652 的基数是
              +0.73%。两分钟都落在这张台子从 08-23 就在标的同一个 06:2x–07:0x
              带里；本轮没有载入先前不连续点的段长台账，所以除此之外不数任何数。
              <b>上游成因未载入、也不给机制命名</b> —— 它跟名册重采样或 feed
              宇宙变更一致，而这一份切片分不开它和真实 flow。也没有值得引用的
              无步进窗口：<span className="dn-tag">24h 窗口里最长的名册不变段是
              九分钟</span>。残差只当算术写、不当归属写：把那两个跳变去掉之后，
              <b>剩下的采样净仓变动加起来是{' '}
              <span className="dn-tag">+209.9101 BTC</span>、仍然不足以采信为
              flow</b>
              —— 去掉仅有的两次 ≥100 交易者的移动，并不能去掉底下更小的成分变化，
              而最长九分钟的名册不变段意味着根本没有一个窗口里名册是已知固定的。
              任何架在 <code>net_btc</code> 上的闸仍然不成立、下面一个都不用。
            </p>

            <h2 className="dn-sec">
              结构{' '}
              <span className="dn-roman">II</span> · 周结算清掉了 08-31 那篇点名的
              每一道盖子，现货被钉在 W-SMA50 下方 $1.55，唯一还没上车的框架是周线
              Ichimoku
            </h2>

            <p>
              <span className="dn-signal">
                定义 08-31 那个框架的那道盖子没了，这句话值得直说，因为下面那笔
                交易已经不靠它了。
              </span>{' '}
              W-EMA100 在 08-31 是 $78,430.85、整条触发规则就是对着它写的。它现在
              在 <span className="dn-tag">$78,467.89</span>、被清掉{' '}
              <span className="dn-tag bull">$1,866.10 / +2.38%</span>。D-EMA400{' '}
              <span className="dn-tag">$78,273.78（+2.63%）</span>和 W-SMA150{' '}
              <span className="dn-tag">$78,118.32（+2.84%）</span>—— 这张台子从
              08-24 就在对着交易的那道三层盖子的另外两个成员 —— 也一并清掉。
              完整矩阵、只用收完的 bar 算（日线到 2026-09-06 收 $80,301.10、
              周线 W-SUN 到同一根收盘）、每一个偏移都对 live 现货{' '}
              <span className="dn-tag">$80,333.99</span> 重算：
            </p>

            <div className="dn-lvls">
              <div><span className="dn-lvl-k">日 SMA · 20 / 50 / 100 / 150 / 200</span><span className="dn-lvl-v bull">$77,230.43 <b>+4.02%</b> · $69,412.55 +15.73% · $66,491.34 +20.82% · $70,056.96 +14.67% · $69,755.23 +15.17%</span></div>
              <div><span className="dn-lvl-k">日 EMA · 20 / 50 / 100 / 150 / 200</span><span className="dn-lvl-v bull">$76,462.53 <b>+5.06%</b> · $71,740.73 +11.98% · $70,050.00 +14.68% · $70,931.93 +13.26% · $72,645.42 +10.58%</span></div>
              <div><span className="dn-lvl-k">周 SMA · 20 / 50 / 100 / 150 / 200</span><span className="dn-lvl-v">$70,182.88 +14.46% · <b>$80,335.54 −0.0019%（现货在下方 $1.55）</b> · <b>$89,137.00 −9.88%（唯一一条实质在现货上方的 MA）</b> · $78,118.32 +2.84% · $64,851.72 +23.87%</span></div>
              <div><span className="dn-lvl-k">周 EMA · 20 / 50 / 100 / 150 / 200</span><span className="dn-lvl-v bull">$71,057.83 +13.05% · $77,382.68 +3.81% · $78,467.89 <b>+2.38%</b> · $74,018.51 +8.53% · $68,814.88 +16.74%</span></div>
              <div><span className="dn-lvl-k">矩阵外参照 · D-EMA400</span><span className="dn-lvl-v bull">$78,273.78 · +2.63% · 已清掉、08-24 时还是盖子</span></div>
              <div><span className="dn-lvl-k">矩阵计分</span><span className="dn-lvl-v"><b>20 条里 18 条在现货下方</b>、从 08-31 的 17-of-20 上来 · 上方那两条是 <b>W-SMA50 差 $1.55</b> 和 <b>W-SMA100 差 $8,803.01</b> · 在其中一条只差 $1.55 的情况下把这个叫「18-of-20」是算术、不是结构，下面的框架不靠这个计数</span></div>
            </div>

            <p>
              <span className="dn-signal">
                现货在 W-SMA50 下方 $1.55。这是巧合、也按巧合报。
              </span>{' '}
              W-SMA50 重算到 <span className="dn-tag">$80,335.54</span>、对 live
              现货 <span className="dn-tag">$80,333.99</span> —— 偏移{' '}
              <span className="dn-tag">−0.0019%</span>。没有任何盘中观测把价格行为
              系在这个位上，这个位自己一周之内走了 $697.66（今天读 $80,335.54、
              对这张台子 08-31 为同一条序列引用的 $81,033.20），一条七天能走这么远
              的均线不是墙。写它，只因为它是矩阵里最近的那条 MA，也因为
              <b>缺陷 (d) —— 目标价挂在一条会动的 MA 上 —— 上周正是靠拒绝把价位
              挂在 MA 上才关掉的</b>。第 VI 节的框架挂的是固定数字和 γ 行权价、
              就是这个理由。
            </p>

            <p>
              <span className="dn-signal">200W 周期地板拿到了第三根周收。</span>{' '}
              watch JSON 在服务器上不存在，所以这是一次
              <b>纯 parquet 重算、并且就这么标</b>：W-SMA200 =
              <span className="dn-tag"> $64,851.72</span>、周收 $80,301.10、比值{' '}
              <span className="dn-tag">1.238226</span>、距离按收盘{' '}
              <span className="dn-tag bull">+23.82%</span>、按 live 现货{' '}
              <span className="dn-tag bull">+23.87%</span>。{' '}
              <span className="dn-tag bull">上方连续三根周收</span>
              （08-23 比值 1.2093、08-30 1.2026、09-06 1.2382），在 08-16 那根
              以 0.9828 破下去之后。分位按审计史要求的每一个口径发布，并且把
              样本归属就地写明，因为这正是这张台子一周前栽过的地方：文件里有
              <b>167 个已收盘周比值、含当前这一个</b>、不是 167 个先前的。其中{' '}
              <span className="dn-tag">44 个严格更低 = 全样本的 26.35%</span>；
              只算先前的严格名次是{' '}
              <span className="dn-tag">44 / 166 = 26.51%</span>；插入名次
              —— 当前观测只数一次、不数两次 —— 是{' '}
              <span className="dn-tag">45 / 167 = 26.95 分位</span>。文件里 167
              根周收有十根落在 200W 之下（5.99%）—— 这块地板是真的很少丢，
              而这张台子刚在三周之内看它丢掉又夺回。陈旧的{' '}
              <code>ma200w_trap_watch_state.json</code> 仍然读{' '}
              <code>last_completed_week 2026-08-30</code>、不使用。
            </p>

            <p>
              <span className="dn-signal">
                MTF 图是 9 多 / 0 空 / 1 中，而那一个中性恰好是周报最在意的那个框架。
              </span>{' '}
              00:01Z 那次扫描读{' '}
              <span className="dn-tag bull">10 个周期里 9 多 / 0 空 / 1 中</span>
              （聚合口径）；按每框架 bias 列逐行加则是{' '}
              <span className="dn-tag">3 偏多 / 6 警示 / 1 震荡</span> ——
              <b>两个口径下空头都是零，两个口径一起印是因为它们不一样</b>。
              唯一一个非多的框架是 <span className="dn-tag bear">1w</span>：
              价格<b>在周线云下方第 32 根 bar</b>、云底阻力投在 $85.9k、
              周线 DIF 仍在零下，能拿出来的只有七根 bar 前一个水下金叉。这跟矩阵里
              W-SMA100 $89,137.00 传的是同一个消息。比它快的一切都是建设性的、
              而且越来越拉伸：RSI(14) 读{' '}
              <span className="dn-tag">3d 70.2 · 1d 67.6 · 30m 65.8 · 15m 63.7</span>、
              3d 在 Sell 7 计数上、1d 已重置到{' '}
              <span className="dn-tag bull">Buy 1</span> —— 08-25 那篇标为已印出的
              1d TD9 SELL 已经清掉。对着这个，扫描自己抬出警告：{' '}
              <span className="dn-tag bear">高级别顶背离聚集 (12h/1d)</span> ——
              12h 和 1d 两个框架上的常规顶背离，1d MACD 柱在{' '}
              <span className="dn-tag bear">−186</span>、12h 在{' '}
              <span className="dn-tag bear">−151</span>，而价格在创更高的高。
              三个看空背离（15m / 12h / 1d）对两个看多（15m / 8h），外加{' '}
              <span className="dn-tag">9 个框架里 5 个在 JT&lt;0 的反转区</span>。
              诚实的读法是：趋势框架是多的，动量框架在它们底下正在翻，而周线框架
              什么都还没确认。
            </p>

            <h2 className="dn-sec">
              Dealer 图{' '}
              <span className="dn-roman">III</span> · 建模的 γ 代理从 +184.30M →
              +296.19M 脚合、增加 +111.89M —— 83 张归档面板里第二深的<em>水位</em>
              —— 现货下方的地板修好了，12 个期限没有一个是负的
            </h2>

            <p>
              <span className="dn-signal">
                这是档案里 8 月 / 9 月第二大的正向端点变动，而这个区间有七天长、
                里面什么都没归档。
              </span>{' '}
              脚合 12 期限条的 aggregate 是{' '}
              <span className="dn-tag bear">+296.19M</span>、对 08-31 面板的{' '}
              <span className="dn-tag">+184.30M</span> —— 增加{' '}
              <span className="dn-tag bear">+111.89M</span>。序数之前先说范围：
              <b>09-01 到 09-06 没有备忘、也没有归档面板</b>，所以这是跨七天缺口的
              端点差、不是一个 session 的步进、也不是速率 —— 而这个七天缺口
              救不了一个被档案推翻的最高级。<b>08-20 的 +125.21M 更大、而且就在
              同样这两个月里</b>，所以今天在 8 月 / 9 月的正向步进里排第二。
              对着档案里全部 82 个面板到面板的区间，它排{' '}
              <span className="dn-tag">按绝对值第 5、在正向步进里第 3</span>、
              落在 07-15（+150.84M）和 08-20（+125.21M）之后，那两个都是一天的区间。
              按水位而不是变化，+296.19M 是{' '}
              <span className="dn-tag bear">83 张归档面板里第二深</span>、
              只落在 2026-07-22 的 +313.63M 之后、在 08-27 的 +287.89M 和 07-23 的
              +283.46M 之前。<b>无论按水位还是按变化它都不是谱系最大值</b>、
              也不作此 claim。
            </p>

            <p>
              <b>在把这里面任何东西读成仓位之前，先说清楚这个 aggregate 是什么。</b>
              GEX 序列是一条<b>模型代理</b>、不是观测到的 dealer 库存：生产脚本算的是
              <b>看涨持仓量 × gamma 减去看跌持仓量 × gamma</b>、按约定给看涨正号、
              看跌负号。它不识别这些合约由谁持有、不观测任何一笔对冲成交、
              也不能确立 dealer 就在被假设的那一侧。本篇里凡是写「夹持」或
              「dealer 图」的地方，读作<em>在写明符号约定下的建模 dealer γ 代理</em>。
              下面每一个关于抑制的推论都以那个假设成立为条件。
            </p>

            <p>
              文件里三个 aggregate 全部印出来，因为它们不一致、而且这个不一致是结构性的、
              不是四舍造成的：标题 tile{' '}
              <span className="dn-tag">+286.6M</span>、50-strike profile{' '}
              <span className="dn-tag">+292.850527M</span>、脚合 12 期限条{' '}
              <span className="dn-tag">+296.19M</span>。脚合条比 profile{' '}
              <span className="dn-tag">高 +3.339473M</span>、比标题{' '}
              <span className="dn-tag">高 +9.59M</span> —— 不等距，而且两个差都在
              四舍条口径上。全篇采纳的是脚合那个数，因为它是三个里离{' '}
              <code>gex_summary.json</code> 的{' '}
              <span className="dn-tag">net_gex 296,197,441.55340207</span> 最近的
              —— 但<b>它并不精确复现它</b>：把十二个各自四舍到 0.01M 的期限行加起来是{' '}
              <b>$296.190000M</b>、对着精确总额 <b>$296,197,441.55</b>、差{' '}
              <b>$7,441.55</b>，而精确总额自己四舍是 <b>$296.20M</b>。字节钉是干净的、
              也是分开的一件事：那个文件已经逐字节相同拷进日期归档（sha256{' '}
              <code>04f3377f…6a3e2b50</code>），所以整点覆写滚动路径时这个数仍然钉住。
              合约覆盖是 <span className="dn-tag">964</span> 对 08-31 的 1,026、
              所以 −62 的合约下降和 +111.89M 的增加同时发生。<b>这排除不掉覆盖度造成的
              人造效应，任何说它能排除的推论都撤回</b>：因为在上面那个构造里看跌带负号，
              <em>删掉</em>负 GEX 合约会在计数下降的同时把 net GEX 抬高。下面那 46 个
              共同<b>行权价</b>是行权价层面的交集、不是配对到合约的宇宙 ——
              一个行权价内部的期限成分、持仓量和 gamma 都会动。<b>成分、期限滚动和
              估值效应在这里未解决，要解决需要一次这一份切片没有的、配对到合约的分解。</b>
            </p>

            <div className="dn-lvls">
              <div><span className="dn-lvl-k">顶部 γ 墙 · 全部为正</span><span className="dn-lvl-v">$82,000 <b>+55.38M</b>（最大、在现货上方 $1,666.01）· $85,000 +39.52M · $80,000 <b>+38.66M</b>（在现货下方 $333.99）· $84,000 +31.02M · $90,000 +27.47M · $81,000 +16.47M · $86,000 +13.54M · $88,000 +12.85M · $100,000 +11.86M · $78,000 +10.69M</span></div>
              <div><span className="dn-lvl-k">最大的负墙</span><span className="dn-lvl-v">$77,000 <b>−5.83M</b>、在现货下方 $3,333.99 · 08-31 时同一个行权价是 −10.63M、且只在盘下 $792.01 —— 墙减半、价格从它走开 $2,541.98</span></div>
              <div><span className="dn-lvl-k">现货下方的地板 · 08-31 的翻转已修复</span><span className="dn-lvl-v bull">$80,333.99 下方的 25 个行权价现在加总 <b>+41.53M</b>、对 08-31 那本翻转过来的盘下书 · $77,500 −6.18M → −0.49M · $77,000 −10.63M → −5.83M · $75,000 −8.11M → −3.61M · 仍有 16 个负行权价、但它们总共只有 −18.33M</span></div>
              <div><span className="dn-lvl-k">现货上方</span><span className="dn-lvl-v">现货之上（含）的 25 个行权价加总 <b>+251.32M</b> —— profile 总量的 85.8% 压在头顶，单点最大的集中是 $82,000 那堵墙</span></div>
              <div><span className="dn-lvl-k">行权价迁移 · 对 08-31 的 46 个共同行权价</span><span className="dn-lvl-v"><b>36 个变重、10 个变轻</b>、共同行权价和 +185.17M → +289.62M（+104.45M）· 加得最多的是 $84,000 +14.23M、$85,000 +12.73M、$90,000 +10.80M、$82,000 +8.78M、$81,000 +7.99M · 有四个行权价是 profile 新进的（$83,500、$102,000、$104,000、$105,000）、三个掉出去（$59,000、$60,000、$74,500），所以「整张 profile 都变重了」这句话被限定在这 46 个共同行权价上、不作普遍主张</span></div>
              <div><span className="dn-lvl-k">期限条 · 12 个期限、无一为负</span><span className="dn-lvl-v">7SEP26（0.3 DTE）+2.62M · 8SEP26 +5.91M · 9SEP26 +0.95M · 10SEP26 +0.09M · 11SEP26 +34.25M · 18SEP26 +14.35M · <b>25SEP26 +157.83M = 条的 53.29%</b> · 30OCT26 +26.41M · 27NOV26 +3.04M · 25DEC26 +40.52M · 26MAR27 +7.67M · 25JUN27 +2.55M · 08-31 时前两个期限是 −12.28M 和 −4.53M；今天<b>每一个期限都是正的</b>，这才是对变化更干净的说法</span></div>
            </div>

            <p>
              实际形状是一条走廊，而哪一部分算证据值得说准。现货落在{' '}
              <span className="dn-tag">$80,000 台阶上方 $333.99</span>、
              <span className="dn-tag">$82,000 墙下方 $1,666.01</span>，
              底下 +38.66M、头顶 +55.38M、中间夹着一个深度为正的代理 aggregate。
              <b>如果</b> dealer 真的持有那些多 γ、<b>并且</b>他们按 delta 中性去对冲，
              那么机械后果就是已实现波动被压住、结构性预期是被夹住而不是延续。
              这两个条件在这里都没有被观测到 —— 代理假设了符号、也不识别持有人 ——
              所以夹持是一个<b>有条件的预期、不是构造上的保证</b>。在这个识别缺口之上，
              <b>本周任何一个转折点上都没有载入盘中 GEX 观测</b>，所以两端的日面板
              支持这些位置作为磁铁、不能证明 09-03 高点或 09-02 低点上的因果。
              0-γ flip 也抬得很凶，$66,152.87 → {' '}
              <span className="dn-tag">$68,430.18</span>，这对下面的空头 case 有影响、
              而且方向跟夹持相反。
            </p>

            <h2 className="dn-sec">
              宏观{' '}
              <span className="dn-roman">IV</span> · episodic 旗 2 → 6、五新一带，
              22 资产面板从 IDIOSYNCRATIC 0.204 重新分类到 NORMAL 0.286，
              而 BTC 自己的样本相关性是在一个本来就为正的基底上走强
            </h2>

            <p>
              <span className="dn-signal">
                宏观面板是几周以来第一次热闹，而且它不指向同一边。
              </span>{' '}
              2026-09-06 22:17Z 那次渲染（滞后 1h48m；这张面板在 00:00Z 没有重烤）
              抬起 <span className="dn-tag">六个 |z| &gt; 1.5 的 episodic 旗</span>、
              对 08-31 的两个。<b>五个是新的</b>：美 10Y 名义{' '}
              <span className="dn-tag bear">+1.62</span> 在 4.77%（当日 −2.0bp、
              regime z +2.11、EXTREME RISK-OFF）、USD/JPY{' '}
              <span className="dn-tag">−1.63</span> 在 156.23、美日 10Y 利差{' '}
              <span className="dn-tag">+1.62</span> 在 2.10%、USD/CNY{' '}
              <span className="dn-tag">−2.14</span> 在 6.7013、WTI{' '}
              <span className="dn-tag bear">+1.69</span> 在 $91.5 —— 最后这个被面板
              自己标 <b>陈旧 5d</b>，这一点重要，因为原油是唯一一个带着明显宏观故事的
              （7d 跨资产窗口里 CL +9.20%、Brent +8.36%）。<b>一个是带过来且在缓解的</b>：
              Fed 净流动性{' '}
              <span className="dn-tag bear">−2.47 → −2.10</span> 在 $5.769T、
              仍在抽、仍是 RISK-OFF。<b>一个退出</b>：HY 信用利差{' '}
              <span className="dn-tag bull">−1.77 → −1.05</span> 在 2.65%、
              不再 episodic、按它 252D 的 regime z −1.28 仍是 RISK-ON。
              芝加哥联储 NFCI 读{' '}
              <span className="dn-tag">−0.558、regime z −1.38、RISK-ON</span>
              —— 水位和 z 分是两个不同的列、两个都印 —— 而来源把它标为
              <b>陈旧 9d</b>。JGB 10Y 在 2.67%、带着全板最高的 regime z +2.42、
              而且是 <b>FRED 月度、陈旧 97d —— 不作依据</b>。净结果是美元对两个
              亚洲货币都软、不是一边一个：<b>USD/JPY 代理在 7d 跨资产窗口里跌 2.46%</b>
              （160.1 → 156.1，这是报价下跌；以美元计的日元反向回报约为 +2.52%、
              两者不是同一个数），而 <b>USD/CNY 也在跌</b>、6.7208 → 6.7013、
              对上一张面板约 −0.29%，当前面板上的日内变动是 −0.02。原油在飙、
              长端坐在极值上、流动性还在抽。这些单独没有一个是 BTC 信号、
              本篇也不把任何一个当成信号。
            </p>

            <p>
              <span className="dn-signal">
                面板重新分类的是整个市场，而 BTC 自己的相关性是从一个一周前就已经
                为正的基底上抬起来的。
              </span>{' '}
              22 个资产在 7d 小时 bar 上的非对角 |r| 均值从{' '}
              <span className="dn-tag">0.204（IDIOSYNCRATIC）→ 0.286（NORMAL）</span>。
              那是一个<b>跨面板里每一对算出来的全市场分类 —— 它不是 BTC 的 beta
              估计</b>，而这个区分要紧，因为 BTC 自己的相关性在 08-31 时并不接近零。
              排序现在由金属和宽基股指领头 —— <span className="dn-tag">GOLD +0.572</span>、
              SILVER +0.558、PALL +0.540、PLAT +0.522、{' '}
              <span className="dn-tag">SP500 +0.517</span>、{' '}
              <span className="dn-tag">NQ +0.502</span> —— 对 08-31，那时的头名是
              TSLA +0.450、而 <b>NQ 已经是 +0.405、GOLD 已经是 +0.357</b>
              （META +0.001 是那张板的底部、不是它的中位）。所以正确的说法是
              <b>在已有的正相关之上、样本共动更强了</b>，外加一个全局 regime
              标签的变化。<b>本轮没有载入任何 beta 回归、不确定区间或显著性检验</b>，
              这里也没有任何东西显示 BTC 获得了它先前没有的宏观 beta；那个主张撤回。
              相对表现这条线的方向跟早先草稿相反：BTC{' '}
              <span className="dn-tag bull">+3.04%</span> 对 NQ{' '}
              <span className="dn-tag">+0.79%</span>（按文件自己的小时端点）是一个{' '}
              <span className="dn-tag">2.25pt</span> 的领先，而正确的对照是
              <b>08-31 那篇的 0.20pt</b>（BTC −0.21% 对 NQ −0.41%），所以领先是
              <b>走阔了 2.05pt</b>、不是坍塌。{' '}
              <span className="dn-tag">26.09pt</span> 那个数属于 <b>08-24</b> 那篇、
              在这里只带着那个日期引用。三条注意事项跟着走、没有一条是装饰：
              这些序列是 <b>Hyperliquid 永续</b> —— NQ 是别名{' '}
              <code>xyz:XYZ100</code>、一条 24/7 的股指永续、不是载入的 CME 合约
              —— 所以<b>窗口里那两个周末日是有印子的</b>（NQ、SP500、NVDA 各 48 个
              非空周末观测），尽管标的现货市场关着；面板的 <b>166 行是 22 个回报列
              全齐的 complete-case 计数</b>，而上面引用的 BTC/NQ 与 BTC/GOLD
              相关性各自架在 <b>168 对观测</b>上；相关性在这里只是共动
              —— 它确立的是 BTC 和黄金一起动过，不是谁驱动了谁。
            </p>

            <h2 className="dn-sec">
              交易本{' '}
              <span className="dn-roman">V</span> · 08-31 那笔夺回并守住的多头
              触发、成交、并在两个写下来的价位上了结 —— <b>在被采纳的
              「只针对未成交指令」到期读法下 +1.3636R gross</b> —— 而止损被穿过
              $1,028.10 却没有触发
            </h2>

            <p>
              <span className="dn-signal">
                本节里的一切都是建模 / 纸面。本谱系从来没有载入过委托流水、报单 ID、
                挂单 / 撤单标记、部分成交记录、成交均价、账户归属或成交回报。
              </span>{' '}
              盘面穿过一个写下来的价位只证明可成交性、不证明委托存在、路由、状态、
              数量或归属。下面每一个 R 都是按<b>指令价</b> $78,500 算的，
              因为不存在成交均价。
            </p>

            <p>
              <span className="dn-signal">
                在交易卡之前还有一条披露，因为它会改动那个头条数字。
              </span>{' '}
              08-31 的指令带着一条到期条款 —— 指令
              <b>「持有至 2026-09-01 00:00Z 日收、然后失效」</b> ——
              而那句话<b>从来没说到期是否触及一个已经成交的仓位</b>。它是沉默、
              不是明确，本篇也不回头去改写它。本篇<b>采纳只针对未成交指令的读法</b>：
              那个截止管的是触发和入场，触发落在窗口内 14h00m 处，成交后的仓位
              随后跑到它自己写下来的离场。<b>另一个读法是活的、写出来而不是埋起来</b>：
              如果那个截止是对已成交仓位的硬性时间离场，收完的 08-31 日收{' '}
              <b>$78,549.60</b> 给出 <b>+$49.60 = +0.0376R gross / 0.2R 规模下
              +0.0075R</b>。这是一个文本上的替代读法、不是说时间离场真的发生过。
              下面的一切都<b>以被采纳的读法为条件</b>、也不为它 claim 唯一性。
            </p>

            <div className="dn-trade">
              <span className="dn-side long">多 · 夺回并守住 · <b>建模 / 纸面 · 已触发、已成交、已了结并平仓</b> · 0.2R · 未对账 · 两个写下来的离场都成交 · 本子回到 FLAT</span>
              <div className="dn-trade-name">
                夺回并守住的多头 —— 在 08-31 锚之后 9h55m 触发、在触发处成交、
                在它写明的日收口径上扛过一次 $1,028.10 的印子破位，然后在 09-03
                的 83 分钟里由 $79,600 减半和 $81,000 固定尾仓平掉，结果
                <b>+1.3636R gross / 0.2R 规模下 +0.2727R，在被采纳的
                「只针对未成交指令」到期读法下</b>
              </div>
              <div className="dn-thesis">
                08-31 那篇写这个框架，专门是为了关掉缺陷 (c) —— 入场和目标之间
                没有指令 —— 和缺陷 (d) —— 目标价挂在会动的 MA 上。尾仓条款点了一个
                固定的 $81,000、一个固定的 $79,600 减半、以及一条明确写明口径的
                $78,500 日收移动止损，全部写在接近之前，盘面在其中两个数上把仓位了结。
                上周同一张台子对一笔交易产出了跨度 3.18× 的三个读法，全都是关于
                <em>离场是什么意思</em>；那个特定的区间没了。取而代之的更窄、但不是零：
                <b>到期条款对已成交仓位是沉默的</b>，所以下面的结果以被采纳的
                「只针对未成交指令」读法为条件，而 +0.0376R 的时间离场替代读法
                在文本上没有被驳倒。本周另外暴露出来的东西是新的、也不是一场胜利：
                <b>止损写在日收口径上，而盘面在 896 根分钟 bar 上交易在它下方
                $1,028.10 处</b>。规则活下来是因为它被写在哪个口径上、不是因为那个
                位置放得好。08-31 那篇<b>确实</b>提前披露过止损坐在近期印子低点上方、
                那些路径会穿过它、能不能活下来取决于收盘口径 —— 那个警告给过、
                这里也记这个功。它没有、也不可能有的，是一个<em>量化</em>的压力数字：
                先前没有任何一篇备忘给「按市价计的损失能超过名义 R 多远」放上一个数，
                而这次具体的 $1,028.10 超调事前谁也预测不了。
              </div>
              <div className="dn-lvls">
                <div>
                  <span className="dn-lvl-k">触发（规则满足 · 口径稳健）</span>
                  <span className="dn-lvl-v bull">规则：<b>连续两根收完的交易所 1h 收盘 ≥ $78,431</b>、只看收盘、不看影线 · 标 08:00 那根收 <b>$78,439.10</b>（超出 $8.10）、标 09:00 那根收 <b>$78,486.60</b>（$55.60），所以触发落在 <b>2026-08-31 10:00Z</b>、<b>在那篇 00:05Z 锚之后 9h55m</b> · <b>按数据来源披露的 ±1 分钟标签口径重跑，同样这两根收 $78,482.80 和 $78,492.40、触发仍落在同一个 10:00Z</b> —— 缺陷 (b) 的价格口径歧义碰不到这次裁定</span>
                </div>
                <div>
                  <span className="dn-lvl-k">入场（触发瞬间即可成交）</span>
                  <span className="dn-lvl-v">指令 <b>约 $78,500、0.2R、不追</b> · 2026-08-31 10:00Z 那根分钟 bar 开在 $78,486.60、高点 $78,496.80 —— <b>触发时就已经在限价下方</b>，所以不需要追、也不 claim 追过 · 窗口内有 3,655 根分钟 bar 交易在 $78,500 或其下</span>
                </div>
                <div>
                  <span className="dn-lvl-k">止损（在它写明的口径上从未触发 · 被穿过 $1,028.10）</span>
                  <span className="dn-lvl-v bear"><b>日收 &lt; $77,180</b> · <b>从未触发</b>：合格的收盘是 09-01 $77,400.10（高出 $220.10）和 09-02 $77,300.00（高出 $120.00）· <b>按印子口径被穿过</b>：<b>896 根分钟 bar 在 $77,180 或其下</b>、第一根在 09-01 18:01Z、最深 <b>$76,151.90 @09-02 10:51Z = 在下方 $1,028.10</b></span>
                </div>
                <div>
                  <span className="dn-lvl-k">减半 · 一半在 $79,600（08-31 写下、在接近之前）</span>
                  <span className="dn-lvl-v bull">首次触及 <b>2026-09-03 14:28Z</b>、bar 高 $79,645.00 · 触发后 3d 4h28m · 这一半 <b>+$1,100.00 = +0.8333R</b></span>
                </div>
                <div>
                  <span className="dn-lvl-k">尾仓 · $81,000 固定（不是 MA —— 缺陷 (d) 按设计关掉）</span>
                  <span className="dn-lvl-v bull">首次触及 <b>2026-09-03 15:51Z</b>、bar 高 $81,037.00 · 减半后 1h23m · 这一半 <b>+$2,500.00 = +1.8939R</b> · <b>$78,500 的日收移动止损根本没轮到上场</b>，因为两次离场之间没有落进任何一根日收 —— 它们在同一个 session 里了结</span>
                </div>
                <div>
                  <span className="dn-lvl-k">建模结果 · 以被采纳的到期读法为条件</span>
                  <span className="dn-lvl-v bull">R = $78,500 − $77,180 = <b>$1,320</b> · 一半 +0.8333R 加一半 +1.8939R = <b>+1.3636R gross</b> · 按指令的 0.2R 规模 <b>+0.2727R</b> · <b>这是被采纳的读法、不是唯一的读法</b>：它成立的前提是 08-31 的到期条款只让<em>未成交指令</em>失效。读成对已成交仓位的硬性时间离场，收完的 08-31 日收 $78,549.60 给出的是 <b>+0.0376R gross / 0.2R 下 +0.0075R</b>。先前的文本在两者之间是沉默的，本篇不改写它</span>
                </div>
                <div>
                  <span className="dn-lvl-k">excursion（背景、不是盈亏）· 其中一个是离场之后的</span>
                  <span className="dn-lvl-v">两半都在 <b>09-03 15:51Z</b> 建模离场。窗口高点 <b>$82,282.80 @09-03 21:34Z</b> 印在<b>那次离场之后 5h43m</b>，所以它是<b>离场后的反事实上行、不是这笔交易的 MFE、也不是回吐</b>：如果仓位一直拿着，在那个印子上会是 +$3,782.80 / +2.8658R，而 $1,282.80 / 0.9718R 的差额是放弃掉的反事实上行、不是从一个开着的仓位上交出去的东西 · <b>按印子口径的 MAE</b> <b>$76,151.90 @09-02 10:51Z</b> = −$2,348.10 = <b>−1.7789R gross</b>，这是一个 excursion 度量、不是已实现回报、也不是止损出场回报</span>
                </div>
                <div>
                  <span className="dn-lvl-k">新发现 · 声明的风险对已实现的 excursion</span>
                  <span className="dn-lvl-v bear">R 是 <b>$1,320</b>。按印子口径的不利 excursion 是 <b>$2,348.10</b>、<b>比名义 R 高出 77.89%</b>（等价于 1.78× R；R 覆盖它的 56.2%）。按日收口径止损定规模的仓位，因此扛的按市价计回撤远超规模算术所隐含的。08-31 那篇<b>确实</b>警告过止损坐在近期印子低点上方、会按印子口径被穿过；缺的是一条<b>量化的压力定规模规则</b>、给超调放上一个数。是那个缺口 —— 而不是「没有警告」—— 被记成下面的新开缺陷</span>
                </div>
                <div>
                  <span className="dn-lvl-k">处置条款（从未启用）</span>
                  <span className="dn-lvl-v">「一根 $81,000 上方的日收、在没有触发的情况下让它未成交退休」—— 09-03 收 $81,230.70，但框架已在 08-31 触发、两半都在当天 15:51Z 之前离场，所以条件印出来时这条条款已经没有意义 · 「持有至 2026-09-01 00:00Z 日收、然后失效」—— 触发落在那个窗口内 14h00m 处，而<b>这条条款没说一个已经成交的仓位会怎样</b>；本篇采纳只针对未成交指令的读法，替代读法已在上面标价</span>
                </div>
                <div>
                  <span className="dn-lvl-k">不要</span>
                  <span className="dn-lvl-v">不要把活下来的止损读成被验证过的位置 —— 它靠的是口径、不是几何 · 不要按<b>离场之后</b>的 +2.8658R 反事实峰值去定下一笔的规模，仓位从来没拿到那里 · 不要把 −1.7789R 读成止损出场结果：在 $78,500 到 $77,180 的理想触价成交假设下，止损回报是<b>−1R</b>（未计成本），真实滑点未知，因为不存在任何成交记录 · 不要把一次了结当成这套规格方法可以泛化的证据；它是一个框架上的一次观测，而且它的头条数字取决于读法</span>
                </div>
              </div>
            </div>

            <p>
              <span className="dn-signal">
                台账 · 擦肩 / 处置记录 · 第七个事件加入，也是第一个同时是成交
                又是平仓的事件。
              </span>{' '}
              08-31 那篇把这本台账收在{' '}
              <span className="dn-tag">6 事件 / 3 擦肩 / 1 处置 / 1 建模成交 /
              1 建模平仓</span>。今天追加第 7 行、上面的一行都不动 —— 第 1 到 6 行
              是有日期的历史、不重新分类，这正是这本台账存在的纪律。
            </p>

            <div className="dn-lvls">
              <div><span className="dn-lvl-k">第 1 行 · 2026-08-23（擦肩 #1）</span><span className="dn-lvl-v">回撤多头第二腿 —— 最低的交易所 1h 收盘 $76,020.30、在 $76,000 带顶上方 $20.30</span></div>
              <div><span className="dn-lvl-k">第 2 行 · 2026-08-24（擦肩 #2）</span><span className="dn-lvl-v">回撤多头第一目标 $80,000 —— 24h 高 $79,991.00、差 $9.00，而这个框架从来没触发过</span></div>
              <div><span className="dn-lvl-k">第 3 行 · 2026-08-25（处置）</span><span className="dn-lvl-v">回撤多头按预先承诺的处置规则未成交退休 —— 不存在成交价，所以不算 R</span></div>
              <div><span className="dn-lvl-k">第 4 行 · 2026-08-26（擦肩 #3 · 不变）</span><span className="dn-lvl-v">retest-hold 多头已触发、到那篇的锚为止未成交 —— 触发后低点 $78,351.00 对约 $78,200 的限价 = $151.00。永久保留它的擦肩分类</span></div>
              <div><span className="dn-lvl-k">第 5 行 · 2026-08-27（建模成交 #1）</span><span className="dn-lvl-v">第 4 行的框架了结 —— 约 $78,200 的限价在 08-26 12:30Z 成交并向下扫了 $600.00，记为对一条交易台指令的建模 / 纸面成交</span></div>
              <div><span className="dn-lvl-k">第 6 行 · 2026-08-31（建模平仓 #1）</span><span className="dn-lvl-v">第 5 行的仓位在它自己写下来的价位上了结、被采纳读法下建模 +1.6814R gross、最保守读法下 +0.5285R —— 交易台自己文本的三个可辩护读法之间跨度 3.18×</span></div>
              <div><span className="dn-lvl-k">第 7 行 · 2026-09-07（新 · 建模成交 #2 且建模平仓 #2 —— 一个事件、两个标签）</span><span className="dn-lvl-v bull">08-31 那笔夺回并守住的多头在 08-31 10:00Z 触发、在触发处成交，并在 $79,600 @09-03 14:28Z 和 $81,000 @09-03 15:51Z 平掉，<b>在被采纳的「只针对未成交指令」到期读法下 +1.3636R gross / 0.2R 下 +0.2727R</b>；同一条到期条款的另一个「硬性时间离场」读法，按收完的 08-31 日收 $78,549.60 给出 <b>+0.0376R gross / 0.2R 下 +0.0075R</b>。第 6 行的离场歧义关掉了；<b>一个到期条款的歧义顶上了它的位置</b>，不 claim 唯一性。止损在它写明的日收口径上从未触发，尽管有一次 896 根 bar、$1,028.10 的印子破位。<b>未对账 —— 从来没有载入过任何 broker feed</b></span></div>
              <div><span className="dn-lvl-k">计数</span><span className="dn-lvl-v"><b>7 个事件</b> · 标签：3 擦肩、1 处置、2 建模成交、2 建模平仓。<b>标签加起来是 8、事件是 7，这是设计</b>：第 7 行是一个同时带着成交和平仓的单一事件，两个计数分开发布、不去把它们凑平</span></div>
              <div><span className="dn-lvl-k">带过来、不变</span><span className="dn-lvl-v">08-19 那个 scout 仍是<b>到期未成交</b>。它的 10.03R gross / 声明的 0.2R 规模下约 2.01R 是<b>反事实的机会成本 —— 一个从未入场的想法上放弃掉的 excursion、不是赚到的盈亏</b>，跟 2026-08-25 那篇在处置这个框架时的记法完全一致。不再重打</span></div>
            </div>

            <p>
              <b>公开记分的设计缺陷。</b>{' '}
              <b>(a) 仍开着</b> —— 只要 SM feed 还在产出名册不连续，
              <code>net_btc</code> 闸就不成立；<b>今天再确认</b>、两分钟集中度 86.39%、
              连续第二篇已核对备忘，24h 窗口里最长的名册不变段是九分钟。{' '}
              <b>(b) 仍开着，而且本周是承重的</b> —— 止损的日收口径，是 +1.3636R
              的平仓和一次止损出场之间的差别，而后者在理想触价成交假设下回报是
              <b>−1R</b>（未计成本）；−1.7789R 是按印子口径的 MAE、是 excursion 度量、
              不是那个止损出场回报。触发也只是因为在这里按两个口径都重跑过，
              才扛过了 ±1 分钟的 bar 标签歧义。活下来不等于被规定好。{' '}
              <b>(c) 已关闭</b> —— 入场和目标之间没有指令：尾仓条款写在接近之前、
              把那个三向的离场区间去掉了。{' '}
              <b>(d) 已关闭</b> —— 目标价挂在会动的 MA 上：尾仓离场是固定的 $81,000、
              而且就是它了结了这笔交易。{' '}
              <b>(e) 结构性开着</b> —— 执行状态不能从价格路径数据断言；全篇照此办理，
              而且从来没有载入过委托流水。{' '}
              <b>(f) 维持退休</b> —— 434 分钟的 funding 去拥挤闸：在一次去重过的
              14 天重算上，按先前声明的「第一根顶下到最后一根顶下、
              <b>流逝分钟 = 行数 − 1</b>」口径，它在已结束的观测上是
              <b>0-for-8</b>（<b>434 / 2,095 / 437 / 626 / 471 / 977 / 750 /
              3,389</b> 流逝分钟、全部重新钉住；早先草稿的每一个时长都长了两分钟、
              因为它们跨进了两侧的封顶采样，这里全部更正）。第九段还开着、
              从第一根顶下行 09-03 20:17Z 起算是 <b>4,548 个流逝的顶下分钟</b>，
              这跟 tile 里那个从 20:16Z 最后一根封顶行起算的
              <b>4,549 分钟</b>是不同的度量。当观测记录、不作为闸复活。{' '}
              <b>(g) 新</b> —— <b>没有量化的压力定规模规则</b>：R 是 $1,320、
              而按印子口径的不利 excursion 走到 $2,348.10、<b>比名义 R 高出
              77.89%</b>。08-31 那篇确实警告过止损坐在近期印子低点上方、会按印子
              被穿过；缺的是给那个警告配上一个数。下面的框架在定规模时把两个风险数
              一起发布、而不是只发日收口径那个。
            </p>

            <h2 className="dn-sec">
              决策条件{' '}
              <span className="dn-roman">VI</span> · 干净平仓之后本子 FLAT ·
              一个新框架<b>已定义、未触发</b>，第一腿是<b>只向前</b>的、
              所以没法回头套 · chase-short 第八篇已核对备忘继续按兵不动、
              两条腿这次是<b>劈开</b>、不是一起改善
            </h2>

            <p>
              本子 <b>FLAT</b>，是因为框架在它自己写下来的价位上平掉了，
              不是因为这张台子选择站到一边。摆在它面前的东西是真的两面、
              也就这么说。<b>支持：</b>周线结算 +3.435%、拿到 200W 周期地板上方
              连续第三根收盘；08-31 那篇对着写的每一道盖子（W-EMA100、D-EMA400、
              W-SMA150）都清掉了；矩阵 18-of-20；现货下方的 γ 地板从翻转修回
              +41.53M；funding 距最后一根封顶行 4,549 分钟（4,548 个流逝的顶下分钟）、
              7d 占用从 45.6% 降到 10.18%；1d TD9 SELL 已重置到 Buy 1；
              链上中位数隐含相对滚动 RV 的<em>折价</em>从 0.18pt 走阔到 3.70pt
              —— 两次读数都在便宜一侧，所以这是既有折价走阔、不是变号。{' '}
              <b>反对：</b>建模的 dealer γ 代理从 +184.30M → +296.19M、
              增加 +111.89M、到 83 张归档面板里第二深的<em>水位</em>，
              这在<em>如果</em>代理背后的符号约定对应真实 dealer 仓位的前提下
              指向夹持、并反对突破；顶背离在 12h 和 1d 上聚集、扫描自己抬出了
              高级别警告；1w 框架仍在周线云下方第 32 根 bar、W-SMA100 还有
              $8,803.01 压在头顶；OI 距峰 −7.21%、1h 的 flow 现在是期货被卖、
              taker 为负；宏观板从两个 episodic 旗走到六个，同时 22 资产面板
              重新分类到 NORMAL、BTC 自己对黄金和股指的相关性在一个本来就为正的
              基底上走强 —— 所以一个 BTC 专属的论点现在坐在一个共动更强的盘面里，
              这是一句样本相关性的话、不是一个测出来的 beta。
            </p>

            <p>
              <span className="dn-signal">
                一个新框架已定义、未触发，它的第一腿是刻意只向前的。
              </span>{' '}
              <b>多、台阶回测。</b><b>第一腿 —— 必须发生在 2026-09-07 00:05Z
              锚之后：</b>一根交易所分钟印子{' '}
              <b>≤ $79,600</b>、在 $80,000 那个 +38.66M 的 γ 台阶下方。
              <b>$79,600 和 $79,500 是选出来的框架价位、不是载入的结构</b>：
              这一份切片里没有载入任何成交量分布或 NTT 节点序列（数据来源里 NTT
              仍是 framework only），所以任何听起来像有数据来源的「节点」描述
              都撤回。可见的 GEX profile 确实带着一个 $79,500 的行权价、
              值 −0.546662M；那是一个行权价的值，这个框架里任何地方都不断言节点或
              节点边界。<b>锚之前的印子不算，而且这个排除是点名的、不是暗示的</b>：
              09-06 标 14:00 那根 bar 的低点{' '}
              <span className="dn-tag">$79,125.30</span> 在交易所 bar 口径上
              本来就会满足这一腿，而最后两根收完的 1h 收盘（$80,005.40 和
              $80,301.10）本来也会满足第二腿 —— <b>所以一个向后看的版本在这个锚上
              已经触发了，而这恰恰是 08-31 那篇存在的意义所要阻止的回头套</b>。
              <b>第二腿：</b>在第一腿之后出现的连续两根收完的交易所 1h 收盘{' '}
              <b>≥ $80,000</b>、只看收盘、不看影线、交易所 bar 口径，
              数据来源里披露的 ±1 分钟标签口径同样适用。
              <b>入场约 $80,100、0.2R、不追。</b>{' '}
              <b>止损：日收 &lt; $78,900</b>、日收口径风险 <b>$1,200</b>。
            </p>

            <p>
              <b>止损并不坐在近期印子低点下方，而且按缺陷 (g)，定规模时两个风险数
              一起发布、不是只发好看的那个。</b>{' '}
              $78,900 在{' '}
              <span className="dn-tag bear">09-04 低点 $78,618.10 上方 $281.90</span>
              ，所以那条路径按印子口径会穿过它；09-04 收 $79,616.10，
              所以这个位置只在它写明的日收口径上活下来。最近一次可比的、
              低于写下来的止损的印子 excursion 是上周的{' '}
              <span className="dn-tag bear">$1,028.10</span>，放到这个结构上会把
              按市价计的风险推到{' '}
              <span className="dn-tag bear">约 $2,230 ≈ 声明 R 的 1.86×</span>
              而止损不触发。<b>这个数是在交易之前说的、不是之后。</b>{' '}
              <b>尾仓条款、现在写下：</b>一半在 <b>$81,300</b>{' '}
              （<b>+1.0000R</b>），尾仓在 <b>$82,000 固定</b>离场 ——
              最大的那堵 γ 墙、+55.38M、是一个固定数字而不是 MA（<b>+1.5833R</b>）
              —— 减半之后的移动止损是 <b>$80,000、日收口径</b>，
              口径明确写出来，这样触价对收盘就没法事后裁定。尾仓 R/R
              ≈<b>1.5833:1</b>；完全了结时这个框架回{' '}
              <b>+1.2917R gross / 0.2R 规模下 +0.2583R</b> ——
              这是在选定价位上的算术、不是证据。<b>持续时间 —— 按状态规定，
              因为上周那条条款没有：</b>到 <b>2026-09-14 00:00Z 周结算</b>时，
              (i) 若框架<b>未触发</b>，失效、未成交退休；(ii) 若<b>已触发但未成交</b>，
              触发和挂着的入场一起失效、未成交退休；(iii) 若<b>已成交</b>，
              <b>这个截止不触及已开的仓位</b> —— 仓位继续按它自己的止损、减半、
              尾仓和移动规则跑，直到其中一条把它了结。三个状态全部事前点名，
              这样就不需要任何事后读法，而这正是 08-31 那条条款留下的那个缺口。{' '}
              <b>处置、预先承诺：</b>一根 $78,900 下方的日收让它退休，
              一根 $82,000 上方的日收在没有触发的情况下让它未成交退休。{' '}
              <b>它在这个锚上未触发</b> —— 第一腿要求从现货 $80,333.99 跌{' '}
              <span className="dn-tag">$733.99 / −0.91%</span>、
              而这件事在锚之后没有发生过，锚之后根本没有任何印子存在。
            </p>

            <p>
              <span className="dn-signal">
                chase-short 第八篇已核对备忘继续按兵不动，而这一次两条腿是劈开的、
                不是一起改善。
              </span>{' '}
              本仓库记录的有日期序列是{' '}
              <span className="dn-tag">08-23 第一次两腿改善、08-26 第二次、
              08-27 两腿反向、08-31 第三次</span>；今天是{' '}
              <b>第二次反向观测、不是第一次</b>，也不为它 claim 任何最高级。
              <b>价格腿</b>是有记录这一段里改善幅度最小的一次：现在按 live 现货
              口径跌 <span className="dn-tag">14.8179%</span> 够到 flip
              $68,430.18、对 08-31 的 14.96% —— 改善{' '}
              <span className="dn-tag">0.1421 个百分点</span>、
              对着先前的 3.14pt、1.36pt 和 0.62pt。按 GEX 文件自己的 Deribit
              指数，同一个距离是 <span className="dn-tag">15.3002%</span>，
              两个参照都印，因为它们差 0.48pt。<b>γ 腿凶狠地走到了交易的反面</b>：
              脚合 aggregate 从{' '}
              <span className="dn-tag bear">+184.30M → +296.19M</span>、
              增加 +111.89M、到 83 张归档面板里第二深的<em>水位</em>。
              一个空头需要那个 aggregate 转负或塌向零；它反着走了一亿多。
              它维持<b>按兵不动</b>，理由是算术不是信念：跌 14.82% 仍然是很长的路、
              +296.19M 仍然是一个深度为正的建模代理，而衡量这两条腿的区间里
              有六个没归档的 session。
            </p>

            <p>
              下周该有的读法是{' '}
              <em>这套规格在离场那一端管用，在两个边缘上词不够用</em>。
              08-31 写下来的框架准时触发、没有追、被扛着在水下 $1,028.10 穿过一个
              从未触发的止损，然后在两个事前写好的数上平掉 —— 这是这张台子两周来
              一直想造出来的结果。它没有做到两件事。它没有说自己的到期截止是否触及
              一个已经成交的仓位，所以头条的 +1.3636R 是一个被采纳的读法、
              旁边站着一个 +0.0376R 的替代。它<em>确实</em>警告过止损坐在近期印子
              低点上方、会按印子被穿过，但它从来没给超调放上一个数，
              所以定规模时没有任何东西把 $2,348.10 对着 $1,320 的 R 量化出来。
              把规格的两个边缘补完；中间那一段已经在管用了。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计留痕 · v2 · <b>已过 codex 敌对式审计</b> ·{' '}
              <code>audits/2026-09-07-desk-note.md</code> —— v1 判定
              BLOCK-CRITICAL，3 条 CRITICAL + 11 条 MAJOR + 10 条 MINOR + 0 条 NIT
            </span>
            二十四条发现全部落到<b>整份英文页正文</b>上，不只落在被点到的行 ——
            Stage B 的 <code>file:line</code> 引用当成<b>某条不变式被打破的例子、
            不是穷举</b>。每一条都把错误主张的字符串模式与它的语义变体在全文
            grep 过修前修后；下面的计数就是那些 grep，
            <b>每一条都在陈旧形式命中数为 0 时解决</b>。
            <b>审计留痕块本身不计入</b>，因为它必须引用每一个已退休的字符串
            才能记录搜过什么；正文是它上方的一切、直到第 VI 节最后一段。
            故意保留的残留在末尾点名。
            <br /><br />
            <div className="dn-lvls">
              <div><span className="dn-lvl-k">DN-001 · CRITICAL · 导语把 GEX 的变化量当成了先前的水位</span><span className="dn-lvl-v">模式：<code>deepened +111.89M to</code> / <code>DEEPENED +111.89M to</code>（忽略大小写）· 修前 <b>3</b> 处站点 —— 导语、第 III 节副标、第 VI 节反对清单，三处都把变化量读成了基准 · 修后 <b>0</b> · 每一处现在都印 <b>+184.30M → +296.19M、增加 +111.89M</b>，与第 III 节正文和第 VI 节 chase-short 一致 · <b>已解决</b></span></div>
              <div><span className="dn-lvl-k">DN-002 · CRITICAL · 8 月 / 9 月的最高级是假的、且被正文自己推翻</span><span className="dn-lvl-v">模式：<code>largest single-interval</code>、<code>August or September</code> · 修前 <b>2</b> 处（第 III 节同一句信号句）· 修后 <b>0</b> · 改写成<b>档案里 8 月 / 9 月第二大的正向端点变动</b>，就地点名 08-20 的 +125.21M 是同样这两个月里更大的那一个，七天缺口的披露保留、并明确写它救不了这个最高级。另外独立验过的全档案名次（绝对值第 5、正向第 3）不动 · <b>已解决</b></span></div>
              <div><span className="dn-lvl-k">DN-003 · CRITICAL · BTC 对 NQ 的领先是走阔的，草稿用错日期的基准说它坍塌</span><span className="dn-lvl-v">模式：<code>26.09pt in the 08-31</code>、<code>lead collapsing</code>、<code>has collapsed with it</code> · 修前导语与第 IV 节共 <b>3</b> 处 · 修后 <b>0</b> · 对照改回 <b>08-31 那篇的 0.20pt</b>（BTC −0.21% 对 NQ −0.41%），今天的 2.25pt 是<b>走阔 2.05pt</b>，两处的周对周叙事都重写；26.09pt 只在明确标注 <b>08-24</b> 的前提下保留 · <b>已解决</b></span></div>
              <div><span className="dn-lvl-k">DN-004 · MAJOR · retail 归因跟同一段自己的证据边界冲突</span><span className="dn-lvl-v">模式：<code>wrong side</code>、<code>maximally long</code>、<code>minimally long</code>、<code>most long at the low</code>、<code>least long</code> · 修前 3 处站点共 <b>5</b> 处 —— 第 I 节信号句、第 I 节副标、retail tile · 修后 <b>0</b> · 三处现在只带有日期的拥挤观测，而「没有盈亏 / 没有 cohort / 没有入场分布」这条限制在副标和 tile 里都复述、不只在正文里 · <b>已解决</b></span></div>
              <div><span className="dn-lvl-k">DN-005 · MAJOR · 「spot CVD」不是测出来的现货成交量</span><span className="dn-lvl-v">模式：<code>spot CVD</code>、<code>in spot only</code>、<code>bought in spot</code> · 修前 <b>4</b> 处 · 修后 <b>0</b> · 序列改名为 <b>Coinbase 价格 / 溢价代理</b>、构造就地印出（<code>cb_cvd</code> 取一个 Coinbase 价格、按方向施加 <code>max(|premium|, 0.5)</code>；没有成交笔量、主动方或成交量进入它），所有确定性的现货买盘主张撤回 · <b>已解决</b></span></div>
              <div><span className="dn-lvl-k">DN-006 · MAJOR · 整周 CVD 相减跨过了累加器重置</span><span className="dn-lvl-v">断言模式：<code>strongly positive</code>、<code>both CVDs</code> · 修前 <b>2</b> 处 · 修后 <b>0</b> · 整周 flow 主张<b>撤回</b>，三次重置就地写上日期（09-01 06:38Z、09-03 06:30Z、09-03 06:34Z，并给出 −3,902.2 → +40.0 与 −1,433.3 → +10.1 两个跳变），整周改述为首次出现、间隔口径的采样 <code>taker_net</code> 和 <b>+30.99</b>（保留重复则 +68.88），并标为对采样分钟求和、不是完整的交易所 flow · <b>已解决</b></span></div>
              <div><span className="dn-lvl-k">DN-007 · MAJOR · 跨资产的场所 / 合约 provenance 缺失，周末注意事项还写反了</span><span className="dn-lvl-v">模式：<code>no equity prints</code> · 修前 <b>2</b> 处（数据来源行、第 IV 节）· 修后 <b>0</b> · 两处现在都披露 <b>Hyperliquid 永续</b>和 <code>NQ = xyz:XYZ100</code> 别名，写明那两个周末日<b>是</b>有印子的（NQ、SP500、NVDA 各 48 个非空周末观测）而现货市场关着，并把 <b>166 行的全资产 complete-case</b> 与所引 BTC/NQ、BTC/GOLD 各自的 <b>168 对观测</b>分开 · <b>已解决</b></span></div>
              <div><span className="dn-lvl-k">DN-008 · MAJOR · 全市场的相关性分类被抬成 BTC 新获宏观 beta 的证明</span><span className="dn-lvl-v">模式：<code>re-coupled</code>、<code>stopped trading on its own</code>、<code>beta it did not have</code>、<code>beta it did not carry</code> · 修前 <b>5</b> 处 —— 导语、第 IV 节副标、第 IV 节信号句、第 IV 节收尾句、第 VI 节反对清单 · 修后 <b>0</b> · 0.204 → 0.286 现在写成 <b>22 资产的 mean-|r| 分类、不是 BTC 的 beta 估计</b>；08-31 的基底印成 <b>NQ +0.405 / GOLD +0.357</b>，所以正确的说法是在已有正相关之上样本共动更强；并写明没有载入任何 beta 回归、不确定区间或显著性检验 · <b>已解决</b></span></div>
              <div><span className="dn-lvl-k">DN-009 · MAJOR · 「只有一个可辩护读法」不成立 —— 到期条款对已成交仓位是沉默的</span><span className="dn-lvl-v">模式：<code>exactly one</code>、<code>ONE reading</code>、<code>one reading</code>、<code>no ambiguity</code>、<code>and no other</code> · 修前 9 处站点共 <b>10</b> 处 —— 导语、第 V 节副标、交易论点、结果行、台账第 7 行、缺陷 (c)、第 VI 节收尾段、签名 · 修后 <b>0</b> · +1.3636R 现在标为<b>以被采纳的「只针对未成交指令」到期读法为条件</b>，竞争读法按收完的 08-31 日收 $78,549.60 标价为 <b>+0.0376R gross / 0.2R 下 +0.0075R</b>，先前的指令<b>不</b>被回头改写，而新框架的到期条款现在事前把三个状态（未触发 / 已触发未成交 / 已成交）全部规定清楚 · <b>已解决</b></span></div>
              <div><span className="dn-lvl-k">DN-010 · MAJOR · 合约变少不能排除覆盖度推高签名 net GEX</span><span className="dn-lvl-v">模式：<code>coverage moved the wrong way</code> · 修前 <b>1</b> 处 · 修后 <b>0</b> · 该推论撤回，换成击败它的机制 —— 看跌带负号，所以删掉负 GEX 合约会在计数下降的同时抬高 net GEX —— 并明确写出 46 个共同<b>行权价</b>是行权价交集、不是配对到合约的宇宙，成分 / 期限滚动 / 估值效应<b>未解决</b>，要解决需要一次配对到合约的分解 · <b>已解决</b></span></div>
              <div><span className="dn-lvl-k">DN-011 · MAJOR · GEX 代理被当成观测到的 dealer 本子、抑制波动被当成构造保证</span><span className="dn-lvl-v">模式：<code>by construction</code>、<code>dealer book</code>、<code>dampens realized</code> · 修前 <b>3</b> 处 · 修后 <b>0</b> · 第 III 节新增一段发布符号约定（<b>看涨持仓量 × gamma 减看跌持仓量 × gamma</b>、符号是假设的、持有人不识别、不观测任何对冲成交），副标和每一处「夹持」用法都限定为<b>建模的 dealer γ 代理</b>，夹持改述为以 dealer 仓位与对冲假设为条件、而不是构造上的保证 · <b>已解决</b></span></div>
              <div><span className="dn-lvl-k">DN-012 · MAJOR · 离场后的高点被误标为交易 MFE、MAE 被误标为止损出场结果</span><span className="dn-lvl-v">模式：<code>MFE &lt;b&gt;$82,282.80</code>、<code>gave back $1,282.80</code>、<code>1.7789R stop-out</code>、<code>unclaimed</code> · 修前 excursion 行、不要行、缺陷 (b) 共 <b>4</b> 处 · 修后 <b>0</b> · $82,282.80 @21:34Z 的高点改标为<b>离场后的反事实上行、在 15:51Z 建模离场之后 5h43m</b>，$1,282.80 是放弃掉的反事实上行而不是回吐，−1.7789R 严格保留为<b>按印子口径的 MAE</b>，止损出场回报写成<b>理想触价成交假设下的 −1R</b>、滑点未知 · <b>已解决</b></span></div>
              <div><span className="dn-lvl-k">DN-013 · MAJOR · 「风险披露没起作用」抹掉了一次先前的明确警告</span><span className="dn-lvl-v">模式：<code>risk disclosure did not</code>、<code>specification told the desk</code>、<code>tell anyone at sizing</code> · 修前交易卡、缺陷清单、第 VI 节收尾段共 <b>3</b> 处 · 修后 <b>0</b> · 三处现在都为 08-31 那篇记功：它披露过止损坐在近期印子低点上方、会按印子被穿过；真正的缺口定位在<b>缺少量化的压力定规模规则</b>；签名同步改写，也不再因为没能预测那次具体的 $1,028.10 超调而怪罪任何一篇 · <b>已解决</b></span></div>
              <div><span className="dn-lvl-k">DN-014 · MAJOR · 减掉两个名册跳变不能把残差认证成 smart money 买盘</span><span className="dn-lvl-v">模式：<code>smart money added</code>、<code>+210 BTC</code> · 修前 <b>2</b> 处 · 修后 <b>0</b> · 改述为<b>「剩下的采样净仓变动加起来是 +209.9101 BTC、仍然不足以采信为 flow」</b>，并就地写出理由（去掉仅有的两次 ≥100 交易者的移动，不动底下更小的成分变化；最长名册不变段只有九分钟），对 <code>net_btc</code> 闸的否定保留 · <b>已解决</b></span></div>
              <div><span className="dn-lvl-k">DN-015 · MINOR · 四舍过的期限条并不能「精确到分」复现那个耐久钉</span><span className="dn-lvl-v">模式：<code>to the cent</code> · 修前 <b>2</b> 处（数据来源行、第 III 节）· 修后 <b>0</b> · 两处现在都把<b>十二个各自四舍到 0.01M 的行加总 $296.190000M</b> 与精确的 <b>$296,197,441.55</b> 分开，印出 <b>$7,441.55</b> 的差，并写明精确总额四舍是 <b>$296.20M</b>。由条推出的差额一律保持在四舍行口径上并标明。逐字节 sha256 钉不受影响、单独陈述 · <b>已解决</b></span></div>
              <div><span className="dn-lvl-k">DN-016 · MINOR · 每一段已结束的顶下段都多算了两分钟</span><span className="dn-lvl-v">模式：<code>ninth open at 4,549</code>、<code>436 / 2,097</code>、<code>2,097</code>、<code>3,391</code> · 修前 <b>5</b> 处 · 修后 <b>0</b> · 缺陷 (f) 现在按先前声明的「第一根顶下到最后一根顶下、<b>流逝分钟 = 行数 − 1</b>」口径印 <b>434 / 2,095 / 437 / 626 / 471 / 977 / 750 / 3,389</b>，并把开着的第九段 <b>4,548 个流逝顶下分钟</b>与<b>距最后一根封顶行 4,549 分钟</b>分开 —— 这个区分现在 funding tile 和第 VI 节里也带着。在 ≥434 分钟的闸上，<b>已结束观测 0-for-8 仍然成立</b> · <b>已解决</b></span></div>
              <div><span className="dn-lvl-k">DN-017 · MINOR · 窗口统计把含端点的行和间隔混着用、口径没点名</span><span className="dn-lvl-v">模式：<code>24h mean +4.3694%, range</code>、<code>taker net −346.33</code>（未标注形式）· 修前 <b>2</b> 处，外加整段未标注的 flow 段 · 修后 <b>0</b> · 两个 funding tile 都点名采样行均值、并在旁边印出间隔均值（+4.3696% / +6.4890%），flow 部分在使用前先定义两套样本集、并以<b>间隔和</b>领头 —— 24h −355.13、4h −39.41、1h −222.70、1h 大单 −112.56 —— 采样行形式并列印出。10,080 间隔的封顶分母不变 · <b>已解决</b></span></div>
              <div><span className="dn-lvl-k">DN-018 · MINOR · 200W 插入名次把当前观测数了两次</span><span className="dn-lvl-v">模式：<code>45 / 168</code>、<code>26.79th</code>、<code>167 historical</code> · 修前 <b>3</b> 处 · 修后 <b>0</b> · 插入名次更正为 <b>45 / 167 = 26.95 分位</b>，并就地写明样本归属 —— 文件里是 <b>167 个含当前的已收盘比值</b>、不是 167 个先前的 —— 两个严格口径都发布：全样本 <b>44/167 = 26.35%</b>、只算先前 <b>44/166 = 26.51%</b>。这跟 08-31 审计更正过的是同一个错误，正文里就这么写 · <b>已解决</b></span></div>
              <div><span className="dn-lvl-k">DN-019 · MINOR · R 与 excursion 的「低估幅度」用错了分母</span><span className="dn-lvl-v">模式：<code>by 78%</code>、<code>understated the realized</code> · 修前 <b>2</b> 处（导语、缺陷 (g) 标题）· 修后 <b>0</b> · 每一处现在都写<b>按印子口径的 MAE 比名义 R 高出 77.89%</b>；需要覆盖方向时交易卡加上 <b>R 覆盖它的 56.2%</b>，1.78× 作为比值保留 · <b>已解决</b></span></div>
              <div><span className="dn-lvl-k">DN-020 · MINOR · NFCI 的 z 分被当成指数水位印</span><span className="dn-lvl-v">模式：<code>NFCI is RISK-ON at</code> · 修前 <b>1</b> 处 · 修后 <b>0</b> · 改述为 <b>NFCI −0.558、regime z −1.38、RISK-ON</b>，并明确写出水位和 z 分是两个不同的列，来源的 <b>陈旧 9d</b> 标记保留 · <b>已解决</b></span></div>
              <div><span className="dn-lvl-k">DN-021 · MINOR · 汇率那句把 USD/CNY 的方向说反、并把报价回报和反向货币回报混为一谈</span><span className="dn-lvl-v">模式：<code>dollar-CNY firms</code>、<code>yen strengthening 2.46</code> · 修前 <b>2</b> 处 · 修后 <b>0</b> · 改写成<b>USD/JPY 代理在 7d 窗口里跌 2.46%（160.1 → 156.1）—— 那是报价下跌，以美元计的日元反向回报约 +2.52%、两者被点名为不同的数 —— 同时 USD/CNY 也在跌、6.7208 → 6.7013 ≈ −0.29%</b>，并印出当前面板 −0.02 的日内变动 · <b>已解决</b></span></div>
              <div><span className="dn-lvl-k">DN-022 · MINOR · 「现在便宜而不是贵」暗示了一个没发生的变号</span><span className="dn-lvl-v">模式：<code>rather than rich</code> · 修前 <b>1</b> 处 · 修后 <b>0</b> · 改述为<b>链上中位数相对滚动 RV 的折价从 0.18pt 走阔到 3.70pt</b>，两次观测都明确在便宜一侧，非可交易、混合期限的链上中位数限定保留 · <b>已解决</b></span></div>
              <div><span className="dn-lvl-k">DN-023 · MINOR · $79,500 那个「节点」没有可指认的数据来源</span><span className="dn-lvl-v">模式：<code>$79,500 node</code>、<code>top of the $79,500</code> · 修前 <b>1</b> 处 · 修后 <b>0</b> · $79,600 与 $79,500 改标为<b>选出来的框架价位</b>，听起来像有来源的节点描述撤回，数据来源里 NTT 仍是 framework only 的范围就地引用，可见的 <b>$79,500 行权价 −0.546662M</b> 点名为一个行权价的值、不断言任何节点边界 · <b>已解决</b></span></div>
              <div><span className="dn-lvl-k">DN-024 · MINOR · 到期未成交的 scout 带着一个没标注的 R 数</span><span className="dn-lvl-v">模式：<code>EXPIRED UNFILLED at 10.03R</code> · 修前 <b>1</b> 处 · 修后 <b>0</b> · 台账那一行现在写<b>反事实的机会成本 —— 一个从未入场的想法上放弃掉的 excursion、不是赚到的盈亏</b>，并带上最早这么记的 2026-08-25 日期引用 · <b>已解决</b></span></div>
              <div><span className="dn-lvl-k">故意保留的残留，点名以保证 grep 记录诚实</span><span className="dn-lvl-v">有六个字符串是故意留在正文里的，都不再承载修前的含义。(1) <code>wrong-footed</code> ×1，落在第 I 节那句<em>拒绝</em>该主张的话里（DN-004 的修法要求保留这条限制）。(2) <code>6,107.0</code> 与 (3) <code>5,577.6</code> 各 ×1，落在第 I 节那句标它们<b>不成立</b>、不作为 flow 发布的话里。(4) <code>74.11</code> ×1，作为被点名的采样行端点形式、与 +30.99 的间隔和并列、正当保留。(5) <code>macro beta</code> ×1，落在第 IV 节那句写明这里没有任何东西显示 BTC 获得它的话里。(6) <code>26.09pt</code> 在第 IV 节 ×1、<code>3.18×</code> ×3，两者现在都明确带日期 —— 26.09pt 归 <b>08-24</b> 那篇，3.18× 归台账第 6 行 / 08-31 那个被本周尾仓条款关掉的离场区间。这六个的断言形式 grep 全部为 <b>0</b>，逐条列在上面</span></div>
            </div>
            <br />
            <b>没修、因为这一份切片里根本查不到，并公开带走：</b>审计那六条 open
            issue 原样成立 —— 执行是否存在、状态如何仍未核实，从来没有载入过委托
            流水；整周 flow 不可采信、现在就按这个发布；上一周的 200W watch-state
            主张没有钉住，读数是一次公开标注的 parquet fallback；没有 09-01 – 09-06
            的日期 GEX 面板，所以期间的 γ 路径未被观测；build 检查只是
            <b>TypeScript proxy</b> —— 本服务器跑 Node 18.19.1、而装好的 Next 16.2.6
            CLI 要求 20.9.0+，所以两个阶段都没有做过生产 build 或运行时 gate 演练。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘是为 Hysteresis Research 内部讨论准备的交易台人造物、
            <em>非投资建议、非招揽、非要约</em>、不针对任何接收人的具体情况
            个性化。数字反映单一原子快照（2026-09-07 00:05Z）、provenance 在
            数据来源条带中按节披露；宏观 Tier-1 面板渲染 2026-09-06 22:17Z
            （比快照早 1h48m）、部分输入明确陈旧、缺失或待定并已标注。
            交易本里所有数字都是<em>建模 / 纸面</em>且未对账 ——
            本谱系从来没有载入过委托流水或成交回报。水位、规模与条件是交易台
            流程的示例、不是长期推荐。过去的相关性、γ 与仓位模式不绑定未来盘面。
            衍生品有全损风险、加杠杆下损失可超过保证金。
            <em>自己做功课。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                规则准时触发、没追、在水下一千块也没被打掉，然后在我们提前写好的
                两个数上平掉。我们始终没说清到期对一个已经拿着的仓位算什么，
                也警告过止损却从没给它标过价。下一笔之前，两件都说出声。
              </div>
              <div className="dn-sign-name">交易台 · BTC 衍生品</div>
            </div>
            <div className="dn-sign-stamp" aria-hidden="true">
              <svg width="36" height="22" viewBox="0 0 100 60">
                <path
                  d="M 10 54 C 30 54, 38 53, 58 30 C 70 13, 78 7, 90 6 C 70 6, 62 7, 42 30 C 30 47, 22 53, 10 54 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

        </div>

        <footer className="dn-foot">
          <span>Hysteresis Research · 迟滞研究 · HK</span>
          <span>
            v2 · 2026-09-07 00:05Z 快照 · 归档
            /opt/desk-note/snapshots/2026-09-07-0005/ · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · gex_summary.json ·
            macro_dashboard.html · cross_asset_correlation_summary.md ·
            btcusdt_1m_*.parquet · FRED · Yahoo · Deribit
          </span>
        </footer>
      </article>
    </main>
  );
}
