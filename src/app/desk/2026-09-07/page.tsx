import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-09-07 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-09-07',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-09-07' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260907() {
  await requireViewer('/desk/2026-09-07');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · DESK NOTE · 2026-09-07 · v2</span>
          <span>internal · for discussion · post codex hostile audit</span>
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

          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-09-07 00:05Z · rolling sources archived
              to /opt/desk-note/snapshots/2026-09-07-0005/ before reading · WEEKLY note
              (Monday cadence), anchored to the just-settled W-SUN 2026-09-06 weekly close
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">live_db.json · row <code>t = &ldquo;09-07 08:05&rdquo;</code> = 2026-09-07 00:05Z</td>
                  <td className="dn-flag">
                    fresh · 1-min · <b>the <code>t</code> field is BJ (UTC+8), not UTC</b> —
                    the 00:05Z anchor is the <code>08:05</code> row, never the <code>00:05</code>
                    row · file tail at read time <code>09-07 08:06</code> (00:06Z), one minute
                    past the anchor · 7d window 10,084 raw rows → <b>10,081 unique timestamps
                    = 10,080 intervals</b> after de-duplicating 3 repeated stamps · zero gaps
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">
                    mtf_div_latest.html · scan header 2026-09-07 08:01 Beijing = 00:01Z
                  </td>
                  <td className="dn-flag">
                    archived copy read · 4 min before the anchor · header prints Beijing time ·
                    file&rsquo;s own spot $80,240 vs live $80,333.99 (−$93.99) and its own 24h
                    H/L $80,536 / $79,125 is the 09-06 calendar-day exchange bar, not the
                    rolling 24h
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-09-07 00:00 UTC · 964 instruments</td>
                  <td className="dn-flag">
                    archived copy read · 5 min before the anchor · Deribit index $80,791.43 vs
                    live spot $80,333.99 = <b>index +$457.44 / +0.5694% rich to the tape</b>,
                    so every distance is published on both references · instrument count
                    <b> 964</b> vs 1,026 on the 08-31 panel · <b>three different aggregates
                    exist in this one file and all three are printed</b>: headline tile
                    +286.6M, 50-strike profile +292.850527M, footed 12-expiry strip +296.19M
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">exact net GEX (durable pin)</td>
                  <td className="dn-v-cell">
                    gex_summary.json · <code>ts 2026-09-07 00:00</code> · net_gex
                    296,197,441.55340207
                  </td>
                  <td className="dn-flag">
                    copied <b>byte-identical</b> into the dated archive before the rolling
                    path&rsquo;s next hourly overwrite · sha256
                    <code> 04f3377f…6a3e2b50</code> · <b>the footed strip does NOT reproduce
                    this exactly</b>: the twelve displayed expiry rows, each independently
                    rounded to 0.01M, sum to <b>$296.190000M</b>, while the exact JSON total
                    is <b>$296,197,441.55</b> — a gap of <b>$7,441.55</b> — and rounding the
                    exact total gives <b>$296.20M</b>, not $296.19M. Every strip-derived
                    figure in this note is on the rounded-row basis and is labelled as such
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · generated 2026-09-07T00:00+00:00
                  </td>
                  <td className="dn-flag">
                    archived copy read · 5 min before the anchor · 7d 1h bars · 22 assets ·
                    <b>venue is Hyperliquid perps, not cash and not CME</b> — the producer
                    builds the panel from the Hyperliquid BTC perp plus <code>xyz</code>
                    equity/metal perps, and <b><code>NQ</code> is the alias
                    <code> xyz:XYZ100</code></b>, a 24/7 equity-index perp oracle, not a
                    loaded CME NQ series (same for SP500, NVDA, GOLD and the rest) ·
                    <b> the two weekend days in the window DO carry prints</b>: 48 non-null
                    weekend observations each for NQ, SP500 and NVDA at changing prices,
                    because the perp trades while the underlying cash market is closed ·
                    <b>166 rows is the complete-case count across all 22 return columns; the
                    BTC/NQ and BTC/GOLD correlations quoted below each use 168 pairwise
                    observations</b> · the file&rsquo;s own BTC 7d change is +3.04% on hourly
                    endpoints against the live tape&rsquo;s +3.27% on minute endpoints — both
                    are stated where used
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · render 2026-09-06 22:17Z</td>
                  <td className="dn-flag">
                    archived copy read · <b>1h48m render lag</b> — this panel did not
                    re-bake at 00:00Z · NFCI flagged stale 9d, WTI stale 5d, all monthly
                    Tier-3 rows stale 67d, JGB stale 97d
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix + RV</td>
                  <td className="dn-v-cell">
                    btcusdt_1m_*.parquet (8 files, 2019-09-08 → 2026-09-07 00:05Z)
                  </td>
                  <td className="dn-flag">
                    matrix computed on <b>completed bars only</b> — daily through 2026-09-06
                    close $80,301.10, weekly W-SUN through 2026-09-06 close $80,301.10 · the
                    in-progress 09-07 daily bar is excluded · <b>offsets recomputed vs live
                    spot $80,333.99</b> · parquet last bar 00:05Z close $80,383.70 ·
                    <b> the parquet minute index runs one minute behind the live-tape row
                    label</b> (parquet 00:05 = live_db <code>08:06</code>), so every 1h
                    bar-settle time in this note carries ±1 minute and the sensitive claims
                    are recomputed under both conventions
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W cycle-floor watch</td>
                  <td className="dn-v-cell">
                    weekly_200sma.json <b>ABSENT</b> → parquet-only recomputation
                  </td>
                  <td className="dn-flag">
                    the watch JSON does not exist on this server at read time · the 200W read
                    is recomputed from the parquet weekly series and disclosed as a fallback ·
                    <code> ma200w_trap_watch_state.json</code> exists but is <b>one week
                    stale</b> (<code>last_completed_week 2026-08-30</code>, recomputed
                    2026-08-31T00:11Z) — it has not been re-run for the 09-06 week, and the
                    08-31 note already withdrew it as a cross-check; it stays withdrawn
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">JGB 10Y</td>
                  <td className="dn-v-cell">FRED monthly · IRLTLT01JPM156N · 2.67%</td>
                  <td className="dn-flag">stale · monthly · stale 97d · do not lean</td>
                </tr>
                <tr>
                  <td className="dn-s">
                    order blotter, submission ID, working/cancelled flag, average price,
                    partial-fill record, account attribution, execution feed
                  </td>
                  <td className="dn-v-cell">NOT LOADED — none has ever been loaded in this lineage</td>
                  <td className="dn-flag">
                    <b>every R figure in §V is MODELED / PAPER</b>, computed off the
                    instructed $78,500 · the tape trading through written price levels proves
                    marketability and proves nothing about order existence, routing, status,
                    quantity or ownership
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">
                    NTT pivots, max-pain, strike-level IV, BTC/NQ ratio
                  </td>
                  <td className="dn-v-cell">NOT LOADED in this cut</td>
                  <td className="dn-flag">
                    <code>btc_ntt_analysis.html</code> is JS-rendered and not extractable ·
                    claims explicitly framework-only
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="dn-meta">
            <div>
              <span className="dn-k">funding · 8h ann.</span>
              <span className="dn-v">+2.89%</span>
              <span className="dn-src">live · raw 0.002641 × 1095 = +2.8919% · 24h mean +4.3694% <b>(sampled-row mean over 1,441 rows; the 1,440-interval mean is +4.3696%)</b>, range +0.7577% / +9.0535% · <b>zero capped and zero negative rows in the 24h window</b> · <b>4,549 minutes (75h49m) since the last capped row</b> 2026-09-03 20:16Z, which is <b>4,548 elapsed below-cap minutes</b> from the first below-cap row 20:17Z — two different conventions, both printed</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h · 7d occupancy</span>
              <span className="dn-v bull">+4.05% → +2.89% (−1.16pt)</span>
              <span className="dn-src">24h-ago raw 0.003703 × 1095 = +4.0548% · <b>7d cap occupancy 1,026 / 10,080 intervals = 10.18%</b>, down from 45.6% on the 08-31 note · 7d mean +6.4891% <b>(sampled-row mean over 10,081 unique rows; the 10,080-interval mean is +6.4890%)</b>, max +10.9500% (cap), min −0.5431% · a <b>73-sample / 72-elapsed-minute negative episode</b> 09-05 07:50Z → 09:02Z, the only sign-flip through zero of the week</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h / from peak</span>
              <span className="dn-v bull">−0.69% (−728.8 BTC) · −7.21% from the 09-04 peak</span>
              <span className="dn-src">live · 105,552.657 now · 106,281.442 24h ago · 106,412.164 7d ago (−859.5 BTC / −0.81% on the week) · <b>peak 113,758.833 @ 2026-09-04 03:42Z</b> → −8,206.2 BTC / −7.21%: a full build-and-flush inside the week, not a quiet drift</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v">51.46 / 48.54</span>
              <span className="dn-src">live_db <code>mkt_long_pct</code> · 7d range <b>43.42% @09-04 02:36Z</b> (1h06m before the OI peak) to <b>57.44% @09-02 12:27Z</b> (1h35m after the 7d spot low) · a <b>14.02pt</b> intraweek swing whose two extremes landed near, but not at, the week&rsquo;s price low and OI peak — <b>dated timing only; no retail P&amp;L, cohort attribution or entry distribution is loaded, so no cohort outcome is claimed</b></span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bull">+30,321.9 (net LONG)</span>
              <span className="dn-src">live · long_btc 37,091.5 − short_btc 6,769.6 · long_traders 4,845 / short_traders 1,370 · long_pct 80.39 / short_pct 14.08</span>
            </div>
            <div>
              <span className="dn-k">SM Δ · 24h and vs the 08-31 note</span>
              <span className="dn-v">+1,542.3 (24h) · +3,758.0 (7d)</span>
              <span className="dn-src"><b>cut fraction = |Δ| / prior_net</b>: 24h 1,542.2859 / 28,779.652 = <b>5.36%</b> · 7d 3,757.998 / 26,563.940 = <b>14.15%</b> · <b>NOT CERTIFIABLE</b> — two roster-jump minutes supply 86.39% of the 24h Δ (see §I)</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v bear">42.5% / 46.20% — implied CHEAP by 3.70pt</span>
              <span className="dn-src">GEX chain-median across <b>964 instruments · not a tradable spread</b> · RV = daily log-return σ × √365 on closes through 2026-09-06 = 46.1976% · IV − RV = <b>−3.6976pt</b> vs −0.1772pt on the aligned 08-31 as-of · IV is published to 0.1% so this carries <b>±5 volatility bp</b> (±10 when differencing two rounded cards)</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bull">+17.40% vs spot · +18.06% vs Deribit idx</span>
              <span className="dn-src">flip $68,430.18 · vs live spot $80,333.99 → +17.3956% above (a <b>14.8179% decline</b> reaches it) · vs the GEX file&rsquo;s own Deribit index $80,791.43 → +18.0640% (a 15.3002% decline; the file rounds this to +18.1%) · <b>both references positive, same sign as the cluster prose</b> · footed aggregate <b>+296.19M</b></span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                The framework the 08-31 note wrote armed nine hours and fifty-five minutes
                after that note&rsquo;s anchor, filled immediately, was traded $1,028.10
                through its stop on a print basis without the stop ever firing on the basis it
                was written on, and then resolved on both of its own written levels inside
                eighty-three minutes on 09-03
              </span>. The arming rule was two consecutive settled exchange 1h closes ≥{' '}
              <span className="dn-tag">$78,431</span>; the 08:00-labelled bar closed{' '}
              <span className="dn-tag">$78,439.10</span> and the 09:00-labelled bar closed{' '}
              <span className="dn-tag">$78,486.60</span>, so the arm struck at{' '}
              <span className="dn-tag bull">2026-08-31 10:00Z</span>. The ≈$78,500 entry was
              already marketable at that instant — the 10:00Z minute bar opened $78,486.60 —
              so there was nothing to chase. The tape then went the wrong way first: MAE{' '}
              <span className="dn-tag bear">$76,151.90 @09-02 10:51Z</span> = −1.7789R gross,
              with <span className="dn-tag bear">896 minute bars at or under the $77,180
              stop</span> and none of the intervening daily closes below it (09-01 $77,400.10,
              09-02 $77,300.00). Then it paid: the $79,600 partial traded{' '}
              <span className="dn-tag bull">09-03 14:28Z</span> and the $81,000 fixed
              remainder <span className="dn-tag bull">09-03 15:51Z</span>, same session, so
              the $78,500 1d-close trail never came into play. Modeled result{' '}
              <span className="dn-tag bull">+1.3636R gross / +0.2727R at 0.2R sizing</span>,
              and that number is <span className="dn-em">conditional on an adopted reading of
              the 08-31 duration clause</span>, not unique. That clause said the instruction
              was &ldquo;held until the 2026-09-01 00:00Z daily close and then lapses&rdquo;
              and never said whether expiry reaches an <em>already-filled</em> position. This
              note adopts the <b>pending-instruction-only</b> reading. Read the other way, as
              a hard time exit, the settled 08-31 close $78,549.60 gives{' '}
              <span className="dn-tag">+0.0376R gross / +0.0075R at 0.2R</span> instead — a
              live textual alternative, not an event that occurred. What the remainder clause
              genuinely did close is the <em>exit</em> ambiguity the 08-31 note complained
              about: that 3.18× spread over what a paid trade had earned is gone, replaced by
              a narrower ambiguity one clause upstream. What is not closed at all is the thing
              the week actually exposed: <b>the print-basis MAE exceeded nominal R by
              77.89%</b>. R was $1,320 on a close-basis stop; the print-basis drawdown reached
              $2,348.10. The rule survived by its basis, not by its geometry, and being paid
              once for that is not evidence.{' '}
              <span className="dn-signal">The book returns to FLAT.</span> Around it: the
              W-SUN weekly closed <span className="dn-tag bull">$80,301.10</span>, +$2,666.50
              / +3.435% and a third consecutive close above the 200W cycle floor; spot{' '}
              <span className="dn-tag">$80,333.99</span> sits{' '}
              <span className="dn-tag">$1.55 below W-SMA50 $80,335.54</span> — a coincidence
              stated as a coincidence; the modeled dealer-gamma proxy went{' '}
              <span className="dn-tag bear">+184.30M → +296.19M footed, an increase of
              +111.89M</span>, the second-deepest level of 83 archived panels; and the
              22-asset cross-asset panel reclassified{' '}
              <span className="dn-tag">IDIOSYNCRATIC 0.204 → NORMAL 0.286</span> — a
              market-wide mean-|r| regime label, not a BTC beta estimate — while BTC&rsquo;s
              own sample correlations strengthened (GOLD +0.357 → +0.572, NQ +0.405 → +0.502)
              and the BTC-over-NQ 7d lead <b>widened</b> from 0.20pt on 08-31 to 2.25pt today.
            </p>

            <p>
              BTC prints <span className="dn-tag">$80,333.99</span> live,{' '}
              <span className="dn-tag bull">+0.56%</span> on 24h and{' '}
              <span className="dn-tag bull">+3.27%</span> on the week, at{' '}
              <span className="dn-tag">82.45%</span> of a 24h spot range of{' '}
              <span className="dn-tag">$79,404.69 / $80,531.77</span> (low @09-06 15:02Z, high
              @09-06 23:47Z). The weekly bar behind that number is far wider than the print
              suggests: W-SUN 2026-09-06 ran{' '}
              <span className="dn-tag">O $77,634.60 · H $82,282.80 · L $76,151.90 · C
              $80,301.10</span> — an <span className="dn-tag">8.05%</span> high-to-low
              traverse resolving into a +3.435% close. That is the second consecutive week
              where the settled close hides most of the range, and it is the reason this desk
              publishes weekly against the settle rather than daily against the tape. Three
              things happened inside it and all three are dated below: the 09-02 flush to{' '}
              <span className="dn-tag bear">$76,151.90</span>, the 09-03 vertical to{' '}
              <span className="dn-tag bull">$82,282.80</span>, and the 09-04 unwind that took
              open interest down <span className="dn-tag">−8,206.2 BTC</span> from its peak.
            </p>

            <h2 className="dn-sec">
              Positioning{' '}
              <span className="dn-roman">I</span> · a build-and-flush week — OI peaked
              113,758.8 and gave back 7.21%, retail crowding topped 1h35m after the 7d low and
              bottomed 1h06m before the OI peak (dated timing only — <b>no P&amp;L, cohort or
              entry data is loaded</b>), and the SM tape is <b>NOT CERTIFIABLE</b> for a
              second checked note at 86.39% two-minute concentration
            </h2>

            <p>
              <span className="dn-signal">
                Open interest tells the week better than price does.
              </span>{' '}
              OI opened the window at <span className="dn-tag">106,412.164</span>, peaked at{' '}
              <span className="dn-tag bear">113,758.833 @2026-09-04 03:42Z</span> and sits at{' '}
              <span className="dn-tag">105,552.657</span> — a net{' '}
              <span className="dn-tag">−859.5 BTC / −0.81%</span> across seven days that
              conceals a <span className="dn-tag bear">+7,346.7 BTC build and an −8,206.2 BTC
              / −7.21% flush</span>. The peak printed{' '}
              <span className="dn-tag">6h07m after</span> the 7d spot high $82,076.59 @09-03
              21:35Z on the live tape ($82,282.80 on the exchange bar at 21:34Z — both bases
              printed, they differ by $206.21 and one minute), which is the ordinary shape of
              a late leverage chase: the last positions were added after the high, not into
              it. On the 24h window OI is still bleeding{' '}
              <span className="dn-tag">−728.8 BTC / −0.69%</span> while price rose +0.56%.{' '}
              <b>Gross opens, gross closes and account-level turnover are not observable in
              this feed</b>, so this is consistent with rotation and this feed cannot exclude
              liquidation. The flow decomposition below is narrower than it looks and is
              re-labelled before it is used.
            </p>

            <p>
              <b>Two labelling corrections before any flow number is read.</b> First, the
              series this desk has been publishing under a &ldquo;spot&rdquo; label is{' '}
              <code>cb_cvd</code>, and it is <b>not a measured spot volume series</b>: the
              producer fetches a Coinbase <em>price</em>, then adds or subtracts{' '}
              <code>max(|premium|, 0.5)</code> according to the direction of the price change.
              No trade size, no aggressor side and no traded volume enters it. It is a{' '}
              <b>Coinbase price/premium proxy</b> in proxy units, it is named that way from
              here on, and <b>no claim about spot buying can be built on it</b>. Second, the
              window statistics use two different sample sets and both are now named: an{' '}
              <b>interval sum</b> excludes the opening sample, a <b>sampled-row sum</b>
              {' '}includes it. Interval sums are the ones comparable with accumulator
              endpoint deltas, so they lead.
            </p>

            <p>
              On the 24h window — which contains no accumulator reset — futures CVD is{' '}
              <span className="dn-tag bear">−355.1</span> and the interval{' '}
              <code>taker_net</code> sum is <span className="dn-tag bear">−355.13</span> (the
              sampled-row form is −346.33); the Coinbase price/premium proxy moved{' '}
              <span className="dn-tag bull">+1,359.1</span> proxy units and big-print net is{' '}
              <span className="dn-tag bull">+396.07</span> on the sampled-row basis. The same
              shape holds at 4h (proxy +336.1, futures CVD −39.4, interval taker −39.41 /
              sampled-row −56.36) and at 1h (proxy +116.4, futures CVD −222.7, interval taker{' '}
              <b>−222.70</b> / sampled-row −263.42, big net interval −112.56 / sampled-row
              −123.35), where the futures side is the loudest seller and the 1h price gain has
              thinned to <span className="dn-tag">+0.142%</span>. Price up, OI down and futures
              taker-negative is consistent with rotation; what the premium proxy adds is a
              price/premium signature, not evidence of spot buying.
            </p>

            <p>
              <b>The weekly flow claim is withdrawn.</b> The 7d window contains{' '}
              <b>three accumulator resets</b> at duplicate BJ stamps — 09-01 06:38Z, 09-03
              06:30Z and 09-03 06:34Z — where futures CVD jumps{' '}
              <span className="dn-tag">−3,902.2 → +40.0</span> and{' '}
              <span className="dn-tag">−1,433.3 → +10.1</span> with <code>cb_cvd</code>{' '}
              resetting concurrently. Subtracting the week&rsquo;s endpoints therefore
              differences <em>different accumulator bases</em>, and the previously drafted{' '}
              <b>+6,107.0 proxy / +5,577.6 futures</b> weekly figures are <b>not valid</b> and
              are not published as flow. Reconstructed instead as a first-occurrence,
              interval-window sum of sampled <code>taker_net</code>, the week is{' '}
              <span className="dn-tag">+30.99</span> — <b>+68.88</b> if the duplicate samples
              are retained — against a sampled-row endpoint form of +74.11. Even the +30.99 is
              a <b>sum over sampled minutes, not complete exchange flow</b>: collection
              coverage is not validated in this feed. The honest statement about the week is
              that this cut cannot certify a direction for it.
            </p>

            <p>
              <span className="dn-signal">
                Retail crowding put its two 7d extremes within hours of the week&rsquo;s low
                and of the OI peak — a dated coincidence of timing, and nothing more is
                claimed from it.
              </span>{' '}
              <code>mkt_long_pct</code> peaked at{' '}
              <span className="dn-tag bear">57.44% @2026-09-02 12:27Z</span>, one hour and
              thirty-five minutes after the 7d spot low $76,350.01 @10:52Z, and troughed at{' '}
              <span className="dn-tag">43.42% @2026-09-04 02:36Z</span>, one hour and six
              minutes before the OI peak and 5h01m after the high. It now reads{' '}
              <span className="dn-tag">51.46 / 48.54</span>, against 51.95% at the 08-31
              anchor — so on the two endpoints the desk actually compares, retail is{' '}
              <em>flat to marginally de-crowded</em> across a +3.27% week, and the 14.02pt
              intraweek swing is the real observation. These are dated coincidences of timing.
              This feed carries no retail P&amp;L, no cohort attribution and no entry
              distribution, so it cannot and does not claim that retail was wrong-footed —
              only that the crowding extremes landed where they landed.
            </p>

            <p>
              <span className="dn-signal">
                The SM tape is NOT CERTIFIABLE, for the second consecutive checked note, and
                the mechanism is the same one this desk has flagged since 08-23.
              </span>{' '}
              Nominal 24h Δnet is{' '}
              <span className="dn-tag">+1,542.2859</span> (28,779.652 → 30,321.938), giving a
              cut fraction of{' '}
              <span className="dn-tag">|Δ| / prior_net = 1,542.2859 / 28,779.652 =
              5.36%</span>. But two minutes carry it. At{' '}
              <span className="dn-tag bear">2026-09-06 06:26Z</span> net stepped{' '}
              <span className="dn-tag">+2,660.49</span> in a single minute with{' '}
              <code>long_traders</code> 4,763 → 5,077 and <code>short_traders</code> 1,343 →
              1,426; fifteen minutes later at{' '}
              <span className="dn-tag bear">06:41Z</span> it stepped{' '}
              <span className="dn-tag">−1,328.12</span> with <code>long_traders</code> 5,090 →
              4,938 and <code>short_traders</code> 1,418 → 1,320. Those are the{' '}
              <b>only two roster moves of ≥100 traders in the whole 24h window</b>, their
              signed sum is <span className="dn-tag bear">+1,332.3759 = 86.39% of the 24h
              Δnet</span>, and the remaining 1,438 minute-to-minute steps net{' '}
              <span className="dn-tag">+209.9101</span>, or +0.73% on the 28,779.652 base.
              Both minutes fall inside the same 06:2x–07:0x band this desk has been flagging
              since 08-23; no run-length ledger of prior discontinuities is loaded, so no
              count is claimed beyond that. <b>The upstream cause is NOT LOADED and no
              mechanism is named</b> — it is consistent with a recurrent roster re-sample or
              feed-universe change and this cut cannot distinguish those from real flow. There
              is no step-free window worth quoting either: the{' '}
              <span className="dn-tag">longest constant-roster run in the 24h window is nine
              minutes</span>. The residual is stated as arithmetic and not as attribution:
              with those two jumps removed, <b>the remaining sampled net-position changes sum
              to <span className="dn-tag">+209.9101 BTC</span>, still uncertified as flow</b>
              {' '}— removing the only two roster moves of ≥100 traders does not remove the
              smaller composition changes underneath, and a nine-minute maximum constant-roster
              run means there is no window in which the roster is known to be fixed. Any gate
              built on <code>net_btc</code> remains unsound and none is used below.
            </p>

            <h2 className="dn-sec">
              Structure{' '}
              <span className="dn-roman">II</span> · the weekly settle cleared every lid the
              08-31 note named, spot is pinned $1.55 under W-SMA50, and the one frame still
              not on board is the weekly Ichimoku
            </h2>

            <p>
              <span className="dn-signal">
                The lid that defined the 08-31 framework is gone, and it is worth saying that
                plainly because the trade below no longer keys off it.
              </span>{' '}
              W-EMA100 was $78,430.85 on 08-31 and the entire arming rule was written against
              it. It now sits <span className="dn-tag">$78,467.89</span>, cleared by{' '}
              <span className="dn-tag bull">$1,866.10 / +2.38%</span>. D-EMA400{' '}
              <span className="dn-tag">$78,273.78 (+2.63%)</span> and W-SMA150{' '}
              <span className="dn-tag">$78,118.32 (+2.84%)</span> — the other two members of
              the three-deep lid this desk has been trading against since 08-24 — are cleared
              as well. The full matrix, computed on completed bars only (daily through the
              2026-09-06 close $80,301.10, weekly W-SUN through the same close) with every
              offset recomputed against live spot <span className="dn-tag">$80,333.99</span>:
            </p>

            <div className="dn-lvls">
              <div><span className="dn-lvl-k">Daily SMA · 20 / 50 / 100 / 150 / 200</span><span className="dn-lvl-v bull">$77,230.43 <b>+4.02%</b> · $69,412.55 +15.73% · $66,491.34 +20.82% · $70,056.96 +14.67% · $69,755.23 +15.17%</span></div>
              <div><span className="dn-lvl-k">Daily EMA · 20 / 50 / 100 / 150 / 200</span><span className="dn-lvl-v bull">$76,462.53 <b>+5.06%</b> · $71,740.73 +11.98% · $70,050.00 +14.68% · $70,931.93 +13.26% · $72,645.42 +10.58%</span></div>
              <div><span className="dn-lvl-k">Weekly SMA · 20 / 50 / 100 / 150 / 200</span><span className="dn-lvl-v">$70,182.88 +14.46% · <b>$80,335.54 −0.0019% (spot $1.55 BELOW)</b> · <b>$89,137.00 −9.88% (the only MA meaningfully above spot)</b> · $78,118.32 +2.84% · $64,851.72 +23.87%</span></div>
              <div><span className="dn-lvl-k">Weekly EMA · 20 / 50 / 100 / 150 / 200</span><span className="dn-lvl-v bull">$71,057.83 +13.05% · $77,382.68 +3.81% · $78,467.89 <b>+2.38%</b> · $74,018.51 +8.53% · $68,814.88 +16.74%</span></div>
              <div><span className="dn-lvl-k">off-matrix reference · D-EMA400</span><span className="dn-lvl-v bull">$78,273.78 · +2.63% · cleared, was a lid on 08-24</span></div>
              <div><span className="dn-lvl-k">matrix score</span><span className="dn-lvl-v"><b>18 of 20 below spot</b>, up from 17-of-20 on 08-31 · the two above are <b>W-SMA50 by $1.55</b> and <b>W-SMA100 by $8,803.01</b> · calling this &ldquo;18-of-20&rdquo; while one of the two is $1.55 away is arithmetic, not structure, and the framework below does not lean on the count</span></div>
            </div>

            <p>
              <span className="dn-signal">
                Spot is $1.55 below W-SMA50. That is a coincidence and it is reported as one.
              </span>{' '}
              W-SMA50 recomputes to <span className="dn-tag">$80,335.54</span> against live
              spot <span className="dn-tag">$80,333.99</span> — an offset of{' '}
              <span className="dn-tag">−0.0019%</span>. No intraday observation ties price
              action to this level, the level itself moved $697.66 in a week (it reads
              $80,335.54 today against the $81,033.20 this desk quoted for the same series on
              08-31), and a moving average that walks that far in seven
              days is not a wall. It is noted because it is the single closest MA in the
              matrix and because <b>defect (d) — a target quoted as a moving MA — was closed
              last week specifically by refusing to key a level off one</b>. The framework in
              §VI keys off fixed numbers and gamma strikes for exactly that reason.
            </p>

            <p>
              <span className="dn-signal">The 200W cycle floor took a third weekly close.</span>{' '}
              The watch JSON is absent from the server, so this is a{' '}
              <b>parquet-only recomputation and is labelled as one</b>: W-SMA200 =
              <span className="dn-tag"> $64,851.72</span>, weekly close $80,301.10, ratio{' '}
              <span className="dn-tag">1.238226</span>, distance{' '}
              <span className="dn-tag bull">+23.82%</span> on the close and{' '}
              <span className="dn-tag bull">+23.87%</span> on live spot.{' '}
              <span className="dn-tag bull">Three consecutive weekly closes above</span>{' '}
              (08-23 ratio 1.2093, 08-30 1.2026, 09-06 1.2382) after the 08-16 close broke
              below at 0.9828. The percentile is published on every convention the audit
              history requires, with the sample membership named because this is exactly where
              this desk slipped a week ago: the file holds <b>167 settled weekly ratios
              including the current one</b>, not 167 prior ones. Of those,{' '}
              <span className="dn-tag">44 are strictly below = 26.35% of the whole
              sample</span>; the prior-only strict rank is{' '}
              <span className="dn-tag">44 / 166 = 26.51%</span>; and the insertion rank, with
              the current observation counted once rather than twice, is{' '}
              <span className="dn-tag">45 / 167 = 26.95th</span>. Ten of 167 weekly closes in
              the file sit below the 200W (5.99%) — the floor is genuinely rare to lose and
              the desk has now watched it lost and reclaimed inside three weeks. The stale{' '}
              <code>ma200w_trap_watch_state.json</code> still reads{' '}
              <code>last_completed_week 2026-08-30</code> and is not used.
            </p>

            <p>
              <span className="dn-signal">
                The MTF map is 9 long / 0 short / 1 neutral and the one neutral is the frame
                that matters most for a weekly note.
              </span>{' '}
              The 00:01Z scan reads{' '}
              <span className="dn-tag bull">9 多 / 0 空 / 1 中 across 10 timeframes</span> on
              the aggregate convention; row-summed by the per-frame bias column it is{' '}
              <span className="dn-tag">3 偏多 / 6 警示 / 1 震荡</span> — <b>zero shorts on
              either convention, and the two conventions are printed together because they
              differ</b>. The single non-long frame is the{' '}
              <span className="dn-tag bear">1w</span>: price is{' '}
              <b>below the weekly Ichimoku cloud for a 32nd bar</b> with cloud-bottom
              resistance projected at $85.9k, weekly DIF still below zero, and only a
              below-water golden cross seven bars back to show for it. That is the same
              message W-SMA100 $89,137.00 sends from the matrix. Everything faster is
              constructive and increasingly stretched: RSI(14) reads{' '}
              <span className="dn-tag">3d 70.2 · 1d 67.6 · 30m 65.8 · 15m 63.7</span>, the 3d
              frame is on a Sell 7 count and the 1d has reset to{' '}
              <span className="dn-tag bull">Buy 1</span> — the 1d TD9 SELL the 08-25 note
              flagged as printed has cleared. Against that, the scan raises its own explicit warning:{' '}
              <span className="dn-tag bear">高级别顶背离聚集 (12h/1d)</span> — bearish regular
              divergence on both the 12h and 1d frames, with 1d MACD histogram at{' '}
              <span className="dn-tag bear">−186</span> and 12h at{' '}
              <span className="dn-tag bear">−151</span> while price makes higher highs. Three
              bearish divergences (15m / 12h / 1d) against two bullish (15m / 8h), and{' '}
              <span className="dn-tag">5 of 9 frames in the JT&lt;0 reversal regime</span>.
              The honest read is that the trend frames are long, the momentum frames are
              rolling over underneath them, and the weekly frame has not confirmed anything
              yet.
            </p>

            <h2 className="dn-sec">
              Dealer map{' '}
              <span className="dn-roman">III</span> · the modeled gamma proxy went +184.30M →
              +296.19M footed, an increase of +111.89M — second-deepest <em>level</em> of 83
              archived panels — the sub-spot floor repaired, and every one of the 12 expiries
              is positive
            </h2>

            <p>
              <span className="dn-signal">
                This is the second-largest archived August/September positive endpoint change,
                and the interval is seven days long with nothing archived inside it.
              </span>{' '}
              Footed across the 12-expiry strip the aggregate is{' '}
              <span className="dn-tag bear">+296.19M</span> against{' '}
              <span className="dn-tag">+184.30M</span> on the 08-31 panel — an increase of{' '}
              <span className="dn-tag bear">+111.89M</span>. Scope, stated before the ordinal:{' '}
              <b>09-01 through 09-06 produced no note and no archived panel</b>, so this is an
              endpoint difference across a seven-day gap, not a session step and not a rate —
              and the seven-day gap does not rescue a superlative the archive refutes.{' '}
              <b>08-20&rsquo;s +125.21M is larger and it is inside the same two months</b>, so
              today is second among August/September positive steps. Against all 82
              panel-to-panel intervals in the archive it ranks{' '}
              <span className="dn-tag">5th by absolute size and 3rd among positive steps</span>,
              behind 07-15 (+150.84M) and 08-20 (+125.21M), both of which were one-day
              intervals. On level rather than change, +296.19M is the{' '}
              <span className="dn-tag bear">second-deepest of all 83 archived panels</span>,
              behind only 2026-07-22&rsquo;s +313.63M and ahead of 08-27&rsquo;s +287.89M and
              07-23&rsquo;s +283.46M. <b>It is NOT a lineage maximum on either level or
              change</b> and is not claimed as one.
            </p>

            <p>
              <b>What the aggregate is, before any of it is read as positioning.</b> The GEX
              series is a <b>model proxy</b>, not an observed dealer inventory: the producer
              computes{' '}
              <b>call open interest × gamma minus put open interest × gamma</b>, assigning a
              positive sign to calls and a negative sign to puts by convention. It does not
              identify who holds those contracts, does not observe a single hedge trade, and
              does not establish that dealers are on the assumed side. Where this note says
              &ldquo;clamp&rdquo; or &ldquo;dealer map&rdquo;, read <em>modeled dealer-gamma
              proxy under the stated sign convention</em>. Every containment inference below is
              conditional on that assumption holding.
            </p>

            <p>
              All three aggregates in the file are printed because they disagree and the
              disagreement is structural, not a rounding artifact: headline tile{' '}
              <span className="dn-tag">+286.6M</span>, 50-strike profile{' '}
              <span className="dn-tag">+292.850527M</span>, footed 12-expiry strip{' '}
              <span className="dn-tag">+296.19M</span>. The footed strip is{' '}
              <span className="dn-tag">+3.339473M above the profile</span> and{' '}
              <span className="dn-tag">+9.59M above the headline</span> — not equidistant, and
              both differences are on the rounded-strip basis. The footed number is the one
              adopted throughout, because it is the closest of the three to{' '}
              <code>gex_summary.json</code>&rsquo;s{' '}
              <span className="dn-tag">net_gex 296,197,441.55340207</span> — but{' '}
              <b>it does not reproduce it exactly</b>: summing the twelve independently
              0.01M-rounded expiry rows gives <b>$296.190000M</b> against an exact total of{' '}
              <b>$296,197,441.55</b>, a gap of <b>$7,441.55</b>, and the exact total itself
              rounds to <b>$296.20M</b>. The byte pin is clean and separate: that file has been
              copied byte-identical into the dated archive (sha256{' '}
              <code>04f3377f…6a3e2b50</code>) so the number stays pinned when the rolling path
              is overwritten on the hour. Instrument coverage is{' '}
              <span className="dn-tag">964</span> against 1,026 on 08-31, so a −62 instrument
              decline coincides with the +111.89M increase. <b>That does not rule a
              coverage-driven artifact out, and any inference that it does is withdrawn</b>:
              because puts carry a negative sign in the
              construction above, <em>dropping</em> negative-GEX instruments raises net GEX
              while the count falls. The 46 common <b>strikes</b> below are a strike-level
              intersection, not a matched-instrument universe — constituent expiries, open
              interest and gamma all move within a strike. <b>Composition, expiry-roll and
              valuation effects are unresolved here and would need a matched-instrument
              decomposition this cut does not have.</b>
            </p>

            <div className="dn-lvls">
              <div><span className="dn-lvl-k">top gamma walls · all positive</span><span className="dn-lvl-v">$82,000 <b>+55.38M</b> (largest, $1,666.01 above spot) · $85,000 +39.52M · $80,000 <b>+38.66M</b> ($333.99 below spot) · $84,000 +31.02M · $90,000 +27.47M · $81,000 +16.47M · $86,000 +13.54M · $88,000 +12.85M · $100,000 +11.86M · $78,000 +10.69M</span></div>
              <div><span className="dn-lvl-k">largest negative wall</span><span className="dn-lvl-v">$77,000 <b>−5.83M</b>, $3,333.99 below spot · on 08-31 the same strike was −10.63M and sat $792.01 under the market — the wall halved and price walked $2,541.98 away from it</span></div>
              <div><span className="dn-lvl-k">sub-spot floor · the 08-31 inversion REPAIRED</span><span className="dn-lvl-v bull">the 25 strikes below $80,333.99 now sum <b>+41.53M</b>, against an inverted sub-spot book on 08-31 · $77,500 −6.18M → −0.49M · $77,000 −10.63M → −5.83M · $75,000 −8.11M → −3.61M · 16 negative strikes remain but they sum only −18.33M in total</span></div>
              <div><span className="dn-lvl-k">above-spot</span><span className="dn-lvl-v">the 25 strikes at or above spot sum <b>+251.32M</b> — 85.8% of the profile total sits overhead, and the single largest concentration is the $82,000 wall</span></div>
              <div><span className="dn-lvl-k">strike migration · 46 common strikes vs 08-31</span><span className="dn-lvl-v"><b>36 heavier, 10 lighter</b>, common-strike sum +185.17M → +289.62M (+104.45M) · largest adds $84,000 +14.23M, $85,000 +12.73M, $90,000 +10.80M, $82,000 +8.78M, $81,000 +7.99M · four strikes are new to the profile ($83,500, $102,000, $104,000, $105,000) and three dropped out ($59,000, $60,000, $74,500), so &ldquo;the whole profile got heavier&rdquo; is scoped to the 46 common strikes and not claimed universally</span></div>
              <div><span className="dn-lvl-k">expiry strip · 12 expiries, none negative</span><span className="dn-lvl-v">7SEP26 (0.3 DTE) +2.62M · 8SEP26 +5.91M · 9SEP26 +0.95M · 10SEP26 +0.09M · 11SEP26 +34.25M · 18SEP26 +14.35M · <b>25SEP26 +157.83M = 53.29% of the strip</b> · 30OCT26 +26.41M · 27NOV26 +3.04M · 25DEC26 +40.52M · 26MAR27 +7.67M · 25JUN27 +2.55M · on 08-31 the front two expiries were −12.28M and −4.53M; today <b>every expiry is positive</b>, which is the cleaner statement of what changed</span></div>
            </div>

            <p>
              The practical shape is a corridor, and it is worth being precise about which
              part of it is evidence. Spot sits <span className="dn-tag">$333.99 above the
              $80,000 shelf</span> and <span className="dn-tag">$1,666.01 below the $82,000
              wall</span>, with +38.66M underneath and +55.38M overhead and a deeply positive
              proxy aggregate between them. <b>If</b> dealers are in fact long that gamma and{' '}
              <b>if</b> they hedge it delta-neutrally, the mechanical consequence is dampened
              realized volatility and the structural expectation is containment rather than
              continuation. Neither condition is observed here — the proxy assumes the signs
              and identifies no holder — so containment is a <b>conditional expectation, not a
              construction guarantee</b>. On top of that identification gap, <b>no intraday GEX
              observation is loaded at any of this week&rsquo;s turning points</b>, so the
              bracketing daily panels support these levels as magnets and do not prove
              causality at the 09-03 high or the 09-02 low.
              The 0-gamma flip has also risen hard, $66,152.87 → {' '}
              <span className="dn-tag">$68,430.18</span>, which matters for the short case
              below and matters in the opposite direction from the clamp.
            </p>

            <h2 className="dn-sec">
              Macro{' '}
              <span className="dn-roman">IV</span> · episodic flags went 2 → 6 with five new
              and one carried, and the 22-asset panel reclassified IDIOSYNCRATIC 0.204 →
              NORMAL 0.286 while BTC&rsquo;s own sample correlations strengthened from an
              already-positive base
            </h2>

            <p>
              <span className="dn-signal">
                The macro panel is busy for the first time in weeks, and it is not pointing one
                way.
              </span>{' '}
              The 2026-09-06 22:17Z render (a 1h48m lag; this panel did not re-bake at 00:00Z)
              raises <span className="dn-tag">six episodic flags at |z| &gt; 1.5</span> against
              two on 08-31. <b>Five are new</b>: US 10Y nominal{' '}
              <span className="dn-tag bear">+1.62</span> at 4.77% (−2.0bp on the day, regime z
              +2.11, EXTREME RISK-OFF), USD/JPY{' '}
              <span className="dn-tag">−1.63</span> at 156.23, the US-JP 10Y spread{' '}
              <span className="dn-tag">+1.62</span> at 2.10%, USD/CNY{' '}
              <span className="dn-tag">−2.14</span> at 6.7013, and WTI{' '}
              <span className="dn-tag bear">+1.69</span> at $91.5 — the last flagged{' '}
              <b>stale 5d</b> by the panel itself, which matters because crude is the one
              carrying an obvious macro story (CL +9.20% and Brent +8.36% over the 7d
              cross-asset window). <b>One is carried and easing</b>: Fed net liquidity{' '}
              <span className="dn-tag bear">−2.47 → −2.10</span> at $5.769T, still draining,
              still RISK-OFF. <b>One exited</b>: HY credit spread{' '}
              <span className="dn-tag bull">−1.77 → −1.05</span> at 2.65%, no longer episodic
              and still RISK-ON on its 252D regime z of −1.28. Chicago Fed NFCI reads{' '}
              <span className="dn-tag">−0.558, regime z −1.38, RISK-ON</span> — the level and
              the z-score are different columns and both are printed — and the source flags it{' '}
              <b>stale 9d</b>. JGB 10Y at 2.67% carries the highest regime z
              on the board at +2.42 and is <b>FRED monthly, stale 97d — do not lean</b>. The
              net is dollar-softness against both Asian crosses, not one of each: the{' '}
              <b>USD/JPY proxy fell 2.46%</b> across the 7d cross-asset window (160.1 → 156.1,
              which is a quote decline; the reciprocal yen-in-dollars return is approximately
              +2.52% and the two are not the same number), and <b>USD/CNY also declined</b>,
              6.7208 → 6.7013 or about −0.29% against the prior panel, with a −0.02 daily delta
              on the current one. Crude spikes, the long end sits at an extreme, and liquidity
              is still draining. None of that is a BTC signal on its own and none is treated as
              one.
            </p>

            <p>
              <span className="dn-signal">
                The panel reclassified the whole market, and BTC&rsquo;s own correlations rose
                from a base that was already positive a week ago.
              </span>{' '}
              Mean off-diagonal |r| across all 22 assets on 7d hourly bars went{' '}
              <span className="dn-tag">0.204 (IDIOSYNCRATIC) → 0.286 (NORMAL)</span>. That is a{' '}
              <b>market-wide classification computed across every pair in the panel — it is not
              a BTC beta estimate</b>, and the distinction matters because BTC&rsquo;s own
              correlations were not near zero on 08-31. The ranking is now led by metals and
              broad equity — <span className="dn-tag">GOLD +0.572</span>, SILVER
              +0.558, PALL +0.540, PLAT +0.522,{' '}
              <span className="dn-tag">SP500 +0.517</span>,{' '}
              <span className="dn-tag">NQ +0.502</span> — against 08-31, where the top read was
              TSLA +0.450 with <b>NQ already +0.405 and GOLD already +0.357</b> (META +0.001
              was the bottom of that board, not its centre). So the correct statement is{' '}
              <b>stronger sample co-movement on top of existing positive correlation</b>, plus a
              global regime label change. <b>No beta regression, uncertainty interval or
              significance test is loaded</b>, and nothing here shows BTC acquiring macro beta
              it previously lacked; that claim is withdrawn. The relative-performance line moves
              the other way from the earlier draft: BTC{' '}
              <span className="dn-tag bull">+3.04%</span> against NQ{' '}
              <span className="dn-tag">+0.79%</span> on the file&rsquo;s own hourly endpoints
              is a lead of <span className="dn-tag">2.25pt</span>, and the correctly dated
              comparison is the <b>08-31 note&rsquo;s 0.20pt</b> (BTC −0.21% vs NQ −0.41%), so
              the lead <b>widened by 2.05pt</b> rather than collapsing. The{' '}
              <span className="dn-tag">26.09pt</span> figure belongs to the <b>08-24</b> note
              and is quoted here only with that date attached. Three caveats travel with all of
              it and none is decorative: the series are <b>Hyperliquid perps</b> — NQ is the
              alias <code>xyz:XYZ100</code>, a 24/7 equity-index perp, not a loaded CME
              contract — so <b>the two weekend days in the window do carry prints</b> (48
              non-null weekend observations each for NQ, SP500 and NVDA) even though the
              underlying cash markets were shut; the panel&rsquo;s <b>166 rows are the
              complete-case count across all 22 return columns</b>, while the BTC/NQ and
              BTC/GOLD correlations quoted above each rest on <b>168 pairwise observations</b>;
              and correlation here is co-movement only — it establishes that BTC and gold moved
              together, not that either drove the other.
            </p>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V</span> · the 08-31 reclaim-and-hold long ARMED,
              FILLED and RESOLVED on both written levels — <b>+1.3636R gross on the adopted
              pending-instruction-only expiry reading</b> — and the stop was traded $1,028.10
              through without firing
            </h2>

            <p>
              <span className="dn-signal">
                Everything in this section is MODELED / PAPER. No blotter, submission ID,
                working/cancelled flag, partial-fill record, average price, account
                attribution or execution feed has ever been loaded in this lineage.
              </span>{' '}
              The tape trading through a written price level proves marketability and proves
              nothing about order existence, routing, status, quantity or ownership. Every R
              figure below is computed off the <b>instructed</b> $78,500, because no average
              price exists.
            </p>

            <p>
              <span className="dn-signal">
                One more disclosure before the card, because it changes the headline number.
              </span>{' '}
              The 08-31 instruction carried a duration clause — the instruction is{' '}
              <b>&ldquo;held until the 2026-09-01 00:00Z daily close and then lapses&rdquo;</b>
              {' '}— and that wording <b>never says whether expiry reaches a position that has
              already filled</b>. It is silent, not explicit, and this note does not
              retroactively rewrite it. This note <b>adopts the pending-instruction-only
              reading</b>: the deadline governed arming and entry, the arm struck 14h00m inside
              the window, and the filled position then ran to its own written exits.{' '}
              <b>The competing reading is live and is stated rather than buried</b>: if the
              deadline is instead a hard time exit on the filled position, the settled 08-31
              daily close <b>$78,549.60</b> gives <b>+$49.60 = +0.0376R gross / +0.0075R at
              0.2R sizing</b>. That is a textual alternative, not a claim that a time exit
              occurred. Everything below is <b>conditional on the adopted reading</b>, and no
              uniqueness is claimed for it.
            </p>

            <div className="dn-trade">
              <span className="dn-side long">long · reclaim-and-hold · <b>MODELED / PAPER · ARMED, FILLED, RESOLVED AND CLOSED</b> · 0.2R · unreconciled · both written exits traded · book returns to FLAT</span>
              <div className="dn-trade-name">
                Reclaim-and-hold long — armed 9h55m after the 08-31 anchor, filled at the arm,
                survived an $1,028.10 print-basis stop breach on its written 1d-close basis,
                and closed on the $79,600 partial and the $81,000 fixed remainder inside 83
                minutes on 09-03 for <b>+1.3636R gross / +0.2727R at 0.2R sizing on the
                adopted pending-instruction-only expiry reading</b>
              </div>
              <div className="dn-thesis">
                The 08-31 note wrote this framework specifically to close defect (c) — no
                instruction between entry and target — and defect (d) — a target quoted as a
                moving MA. Both are closed by the outcome, not merely by the intention: the
                remainder clause named a fixed $81,000, a fixed $79,600 partial and an
                explicitly basis-named $78,500 1d-close trail, all written before the
                approach, and the tape resolved the position on two of those three numbers.
                Last week the same desk produced three readings of one trade spanning 3.18×,
                all of them about <em>what the exits meant</em>; that particular spread is
                gone. What replaces it is narrower and is not zero: the{' '}
                <b>duration clause is silent on filled positions</b>, so the result below is
                conditional on the adopted pending-instruction-only reading and the +0.0376R
                time-exit alternative stands unrefuted by the text. What the week also exposed
                is new and is not a win: <b>the stop was written on a 1d-close basis and the
                tape traded $1,028.10 below it across 896 minute bars</b>. The rule survived
                because of the basis it was written on, not because the level was well-placed.
                The 08-31 note <b>did</b> disclose in advance that the stop sat above recent
                print lows, that those paths would cross it, and that survival depended on the
                close basis — that warning was given and is credited here. What it did not
                carry, and could not have, was a <em>quantified</em> stress figure: no prior
                note put a number on how far mark-to-market loss could run past nominal R, and
                nobody could have forecast this specific $1,028.10 overshoot in advance.
              </div>
              <div className="dn-lvls">
                <div>
                  <span className="dn-lvl-k">arm (rule satisfied · basis-robust)</span>
                  <span className="dn-lvl-v bull">rule: <b>two consecutive settled exchange 1h closes ≥ $78,431</b>, closes only, no wicks · the 08:00-labelled bar closed <b>$78,439.10</b> (clearing by $8.10) and the 09:00-labelled bar closed <b>$78,486.60</b> ($55.60), so the arm struck <b>2026-08-31 10:00Z</b>, <b>9h55m after that note&rsquo;s 00:05Z anchor</b> · <b>re-run under the ±1-minute label convention the manifest discloses, the same two bars close $78,482.80 and $78,492.40 and the arm strikes at the same 10:00Z</b> — the price-basis ambiguity of defect (b) does not touch this adjudication</span>
                </div>
                <div>
                  <span className="dn-lvl-k">entry (marketable at the arm instant)</span>
                  <span className="dn-lvl-v">instructed <b>≈$78,500 at 0.2R, no chase</b> · the 2026-08-31 10:00Z minute bar opened $78,486.60 with a high of $78,496.80 — <b>already below the limit when the arm struck</b>, so no chase was required and none is claimed · 3,655 minute bars traded at or below $78,500 in the window</span>
                </div>
                <div>
                  <span className="dn-lvl-k">stop (never fired on its written basis · traded through by $1,028.10)</span>
                  <span className="dn-lvl-v bear"><b>1d close &lt; $77,180</b> · <b>never fired</b>: the qualifying closes were 09-01 $77,400.10 ($220.10 clear) and 09-02 $77,300.00 ($120.00 clear) · <b>traded through on a print basis</b>: <b>896 minute bars at or under $77,180</b>, first at 09-01 18:01Z, deepest <b>$76,151.90 @09-02 10:51Z = $1,028.10 below</b></span>
                </div>
                <div>
                  <span className="dn-lvl-k">partial · half at $79,600 (written 08-31, before the approach)</span>
                  <span className="dn-lvl-v bull">first touch <b>2026-09-03 14:28Z</b>, bar high $79,645.00 · 3d 4h28m after the arm · <b>+$1,100.00 = +0.8333R</b> on the half</span>
                </div>
                <div>
                  <span className="dn-lvl-k">remainder · $81,000 FIXED (not an MA — defect (d) closed by design)</span>
                  <span className="dn-lvl-v bull">first touch <b>2026-09-03 15:51Z</b>, bar high $81,037.00 · 1h23m after the partial · <b>+$2,500.00 = +1.8939R</b> on the half · <b>the $78,500 1d-close trail never came into play</b>, because no daily close fell between the two exits — they resolved in the same session</span>
                </div>
                <div>
                  <span className="dn-lvl-k">modeled result · CONDITIONAL on the adopted expiry reading</span>
                  <span className="dn-lvl-v bull">R = $78,500 − $77,180 = <b>$1,320</b> · half at +0.8333R + half at +1.8939R = <b>+1.3636R gross</b> · at the instructed 0.2R sizing <b>+0.2727R</b> · <b>this is the adopted reading, not the only one</b>: it holds if the 08-31 duration clause expired the <em>pending instruction</em> only. Read as a hard time exit on the filled position, the settled 08-31 close $78,549.60 gives <b>+0.0376R gross / +0.0075R at 0.2R</b> instead. The prior text is silent between the two and is not rewritten here</span>
                </div>
                <div>
                  <span className="dn-lvl-k">excursions (context, not P&amp;L) · one is POST-EXIT</span>
                  <span className="dn-lvl-v">both halves were modeled exited by <b>09-03 15:51Z</b>. The window high <b>$82,282.80 @09-03 21:34Z</b> prints <b>5h43m after that exit</b>, so it is <b>post-exit counterfactual upside, NOT trade MFE and NOT a giveback</b>: had the position been held it would have been +$3,782.80 / +2.8658R at that print, and the $1,282.80 / 0.9718R difference is forgone counterfactual upside rather than something surrendered from an open position · <b>print-basis MAE</b> <b>$76,151.90 @09-02 10:51Z</b> = −$2,348.10 = <b>−1.7789R gross</b>, which is an excursion measure and not a realized or stop-out return</span>
                </div>
                <div>
                  <span className="dn-lvl-k">the new finding · stated risk vs realized excursion</span>
                  <span className="dn-lvl-v bear">R was <b>$1,320</b>. The print-basis adverse excursion was <b>$2,348.10</b>, which <b>exceeded nominal R by 77.89%</b> (equivalently 1.78× R; R covers 56.2% of it). A position sized off a close-basis stop therefore carried mark-to-market drawdown well past what the sizing arithmetic implied. The 08-31 note <b>did</b> warn that the stop sat above recent print lows and would be crossed on a print basis; what no note carried was a <b>quantified stress-sizing rule</b> putting a number on the overshoot. That gap — not an absence of warning — is scored as a new open defect below</span>
                </div>
                <div>
                  <span className="dn-lvl-k">disposal clauses (never engaged)</span>
                  <span className="dn-lvl-v">&ldquo;a 1d close above $81,000 without an arm retires it unfilled&rdquo; — 09-03 closed $81,230.70, but the framework had armed on 08-31 and both halves had exited by 15:51Z that day, so the clause was moot when its condition printed · &ldquo;held until the 2026-09-01 00:00Z daily close and then lapses&rdquo; — the arm struck 14h00m inside that window, and <b>the clause does not say what happens to an already-filled position</b>; the pending-instruction-only reading is adopted and the alternative is priced above</span>
                </div>
                <div>
                  <span className="dn-lvl-k">do-not</span>
                  <span className="dn-lvl-v">do not read the surviving stop as a validated level — it survived on basis, not geometry · do not size the next trade off the <b>post-exit</b> +2.8658R counterfactual peak, which the position never held into · do not read −1.7789R as a stop-out result: on an ideal touch-basis fill at $77,180 from $78,500 the stop return is <b>−1R</b> before costs, and real slippage is unknown because no execution record exists · do not treat one resolution as evidence that the specification method generalises; it is one observation on one framework, and its headline number is reading-dependent</span>
                </div>
              </div>
            </div>

            <p>
              <span className="dn-signal">
                Ledger · near-miss / disposal record · SEVENTH EVENT ADDED, and the first
                event that is a fill and a close at once.
              </span>{' '}
              The 08-31 note closed this ledger at{' '}
              <span className="dn-tag">6 events / 3 near-misses / 1 disposal / 1 modeled fill
              / 1 modeled close</span>. Today appends row 7 and changes nothing above it —
              rows 1–6 are dated history and are not reclassified, which is the discipline the
              ledger exists for.
            </p>

            <div className="dn-lvls">
              <div><span className="dn-lvl-k">row 1 · 2026-08-23 (near-miss #1)</span><span className="dn-lvl-v">pullback long leg 2 — lowest exchange 1h close $76,020.30, $20.30 above the $76,000 band top</span></div>
              <div><span className="dn-lvl-k">row 2 · 2026-08-24 (near-miss #2)</span><span className="dn-lvl-v">pullback long first target $80,000 — 24h high $79,991.00, $9.00 short, on a framework that had never armed</span></div>
              <div><span className="dn-lvl-k">row 3 · 2026-08-25 (disposal)</span><span className="dn-lvl-v">pullback long RETIRED UNFILLED on the pre-committed disposal rule — no fill price exists, so no R figure is computed</span></div>
              <div><span className="dn-lvl-k">row 4 · 2026-08-26 (near-miss #3 · UNCHANGED)</span><span className="dn-lvl-v">retest-hold long ARMED and not filled by that note&rsquo;s anchor — post-arm low $78,351.00 vs the ≈$78,200 limit = $151.00. Keeps its near-miss classification permanently</span></div>
              <div><span className="dn-lvl-k">row 5 · 2026-08-27 (modeled fill #1)</span><span className="dn-lvl-v">row 4&rsquo;s framework resolved — the ≈$78,200 limit price traded on 08-26 at 12:30Z and swept $600.00 through, recorded as a modeled/paper fill of a desk instruction</span></div>
              <div><span className="dn-lvl-k">row 6 · 2026-08-31 (modeled close #1)</span><span className="dn-lvl-v">row 5&rsquo;s position resolved on its own written levels for a modeled +1.6814R gross on the adopted reading, +0.5285R on the most conservative — a 3.18× spread across three defensible readings of the desk&rsquo;s own text</span></div>
              <div><span className="dn-lvl-k">row 7 · 2026-09-07 (NEW · modeled fill #2 AND modeled close #2 — one event, two tags)</span><span className="dn-lvl-v bull">the 08-31 reclaim-and-hold long armed 08-31 10:00Z, filled at the arm, and closed on $79,600 @09-03 14:28Z and $81,000 @09-03 15:51Z for <b>+1.3636R gross / +0.2727R at 0.2R on the adopted pending-instruction-only expiry reading</b>; the competing hard-time-exit reading of the same duration clause gives <b>+0.0376R gross / +0.0075R at 0.2R</b> off the settled 08-31 close $78,549.60. The exit ambiguity of row 6 is closed; a <b>duration-clause ambiguity is open in its place</b>, and no uniqueness is claimed. Stop never fired on its written 1d-close basis despite an 896-bar, $1,028.10 print-basis breach. <b>Unreconciled — no broker feed has ever been loaded</b></span></div>
              <div><span className="dn-lvl-k">counts</span><span className="dn-lvl-v"><b>7 events</b> · tags: 3 near-misses, 1 disposal, 2 modeled fills, 2 modeled closes. <b>The tags sum to 8 and the events to 7 by design</b>: row 7 is a single event carrying both a fill and a close, and the two counts are published separately rather than reconciled away</span></div>
              <div><span className="dn-lvl-k">carried, unchanged</span><span className="dn-lvl-v">the 08-19 scout stays <b>EXPIRED UNFILLED</b>. Its 10.03R gross / ≈2.01R at stated 0.2R sizing is <b>counterfactual opportunity cost — a forgone excursion on an unentered idea, not earned P&amp;L</b>, exactly as the 2026-08-25 note recorded it when the framework was disposed of. Not re-litigated</span></div>
            </div>

            <p>
              <b>Open design defects, honestly scored.</b>{' '}
              <b>(a) still open</b> — the <code>net_btc</code> gate remains unsound while the
              SM feed produces roster discontinuities; <b>re-confirmed today</b> at 86.39%
              two-minute concentration, a second consecutive checked note, with the longest
              constant-roster run in the 24h window at nine minutes.{' '}
              <b>(b) still open, and it was load-bearing this week</b> — the stop&rsquo;s
              1d-close basis was the difference between a +1.3636R close and a stop-out that,
              on an ideal touch-basis fill, would have returned <b>−1R</b> before costs; the
              −1.7789R figure is the print-basis MAE, an excursion measure, not that stop-out
              return. The arm also survived the ±1-minute bar-label ambiguity only because it
              was re-run under both conventions here. Surviving is not the same as being
              specified well.{' '}
              <b>(c) CLOSED</b> — no instruction between entry and target: the remainder
              clause was written before the approach and removed the three-way exit spread.{' '}
              <b>(d) CLOSED</b> — a target quoted as a moving MA: the remainder exit was
              $81,000 fixed and it is the number that resolved the trade.{' '}
              <b>(e) structurally open</b> — execution state cannot be asserted from
              price-path data; applied throughout, and no blotter has ever been loaded.{' '}
              <b>(f) stays retired</b> — the 434-minute funding de-crowding gate: on a single
              de-duplicated 14-day recomputation, under the previously declared first-below to
              last-below convention where <b>elapsed = rows − 1</b>, it is{' '}
              <b>0-for-8 on closed observations</b>{' '}
              (<b>434 / 2,095 / 437 / 626 / 471 / 977 / 750 / 3,389</b> elapsed minutes, all
              re-pinned; the earlier draft&rsquo;s durations each ran two minutes long because
              they spanned the flanking capped samples, and every one is corrected here). The
              ninth is open at <b>4,548 elapsed
              below-cap minutes</b> from the first below-cap row 09-03 20:17Z, which is a
              different metric from the <b>4,549 minutes since the last capped row</b> at
              20:16Z quoted in the tiles. Recorded as an observation, not resurrected as a
              gate.{' '}
              <b>(g) NEW</b> — <b>no quantified stress-sizing rule</b>: R was $1,320 while the
              print-basis adverse excursion reached $2,348.10, <b>exceeding nominal R by
              77.89%</b>. The 08-31 note did warn that the stop sat above recent print lows and
              would be crossed on prints; what was missing was a number attached to that
              warning. The framework below publishes both risk figures at sizing time rather
              than only the close-basis one.
            </p>

            <h2 className="dn-sec">
              Decision conditions{' '}
              <span className="dn-roman">VI</span> · book FLAT after a clean close · a new
              framework is DEFINED and NOT ARMED with a <b>forward-only</b> first leg so it
              cannot be back-fitted · chase-short stood down an eighth checked note with the
              two legs <b>SPLIT</b>, not improving
            </h2>

            <p>
              The book is <b>FLAT</b> because the framework closed on its own written levels,
              not because the desk chose to stand aside. What is in front of it is genuinely
              two-sided and gets said that way. <b>For:</b> the weekly settled +3.435% and
              took a third consecutive close above the 200W cycle floor; every lid the 08-31
              note was written against (W-EMA100, D-EMA400, W-SMA150) is cleared; the matrix
              is 18-of-20; the sub-spot gamma floor repaired from inversion to +41.53M; funding
              is 4,549 minutes past the last capped row (4,548 elapsed below-cap minutes) with
              7d occupancy down 45.6% → 10.18%; the 1d TD9
              SELL has reset to Buy 1; and the chain-median implied <em>discount</em> to
              trailing RV has widened from 0.18pt to 3.70pt — both readings are on the cheap
              side, so this is a widening of an existing discount and not a sign change.{' '}
              <b>Against:</b> the modeled dealer-gamma proxy went +184.30M → +296.19M, an
              increase of +111.89M to the second-deepest <em>level</em> of 83 archived panels,
              which argues containment and argues against a breakout <em>if</em> the sign
              convention behind the proxy corresponds to real dealer positioning; bearish
              regular divergence is clustered on 12h and 1d
              with the scan raising its own higher-timeframe warning; the 1w frame is still
              below the weekly cloud on a 32nd bar and W-SMA100 sits $8,803.01 overhead; OI
              is down 7.21% from its peak with the 1h flow now futures-sold and taker-negative;
              and the macro board went from two episodic flags to six while the 22-asset panel
              reclassified to NORMAL and BTC&rsquo;s own correlations to gold and the indices
              strengthened from an already-positive base — so a BTC-specific thesis sits in a
              more co-moving tape than a week ago, which is a sample-correlation statement and
              not a measured beta.
            </p>

            <p>
              <span className="dn-signal">
                A new framework is DEFINED and NOT ARMED, and its first leg is deliberately
                forward-only.
              </span>{' '}
              <b>Long, shelf-test.</b> <b>Leg 1 — must occur AFTER the 2026-09-07 00:05Z
              anchor:</b> an exchange one-minute print{' '}
              <b>≤ $79,600</b>, below the $80,000 +38.66M gamma shelf. <b>$79,600 and $79,500
              are chosen framework levels, not a loaded structure</b>: no volume-profile or NTT
              node series is loaded in this cut (the manifest keeps NTT framework-only), so any
              source-sounding node description of these levels is withdrawn. The
              visible GEX profile does carry a $79,500 strike at −0.546662M; that is a strike
              value, and no node or node boundary is asserted anywhere in this framework.{' '}
              <b>Prints before this anchor do not count, and the exclusion is
              named rather than implied</b>: the 09-06 14:00-labelled bar low{' '}
              <span className="dn-tag">$79,125.30</span> would otherwise satisfy this leg on
              the exchange-bar basis, and the last two settled 1h closes ($80,005.40 and
              $80,301.10) would otherwise satisfy leg 2 — <b>so a backward-looking version of
              this rule would already be armed at the anchor, which is exactly the
              back-fitting the 08-31 note existed to prevent</b>. <b>Leg 2:</b> two
              consecutive settled exchange 1h closes <b>≥ $80,000</b> occurring after leg 1,
              closes only, no wicks, exchange-bar basis, and the ±1-minute label convention
              disclosed in the manifest applies. <b>Entry ≈$80,100 at 0.2R, no chase.</b>{' '}
              <b>Stop: 1d close &lt; $78,900</b> for <b>$1,200</b> of close-basis risk.
            </p>

            <p>
              <b>The stop does NOT sit below the recent print lows, and per defect (g) both
              risk numbers are published at sizing time rather than only the flattering
              one.</b>{' '}
              $78,900 is{' '}
              <span className="dn-tag bear">$281.90 ABOVE the 09-04 low $78,618.10</span>, so
              that path would have crossed it on a print basis; 09-04 closed $79,616.10, so
              the level survives on its written 1d-close basis only. The most recent
              comparable print excursion below a written stop was{' '}
              <span className="dn-tag bear">$1,028.10</span> last week, which on this
              structure would put mark-to-market risk near{' '}
              <span className="dn-tag bear">$2,230 ≈ 1.86× the stated R</span> without the
              stop firing. <b>That number is stated before the trade, not after it.</b>{' '}
              <b>Remainder clause, written now:</b> take half at <b>$81,300</b>{' '}
              (<b>+1.0000R</b>), the remainder exits at <b>$82,000 fixed</b> — the largest
              gamma wall at +55.38M, a fixed number and not an MA (<b>+1.5833R</b>) — and the
              trailing stop after the partial is <b>$80,000 on a 1d-close basis</b>, the basis
              named explicitly so touch-versus-close cannot be adjudicated after the fact.
              R/R on the remainder ≈<b>1.5833:1</b>; fully resolved the framework returns{' '}
              <b>+1.2917R gross / +0.2583R at 0.2R sizing</b> — arithmetic on chosen levels,
              not evidence. <b>Duration — specified by state, because last week&rsquo;s clause
              was not:</b> at the <b>2026-09-14 00:00Z weekly settle</b>, (i) if the framework
              is <b>unarmed</b>, it lapses and is retired unfilled; (ii) if it is{' '}
              <b>armed but unfilled</b>, the arm and the working entry both lapse and it is
              retired unfilled; (iii) if it is <b>filled</b>, <b>the deadline does not touch
              the open position</b> — the position continues under its own stop, partial,
              remainder and trailing rules until one of them resolves it. All three states are
              named in advance so that no post-hoc reading is required, which is the specific
              gap the 08-31 clause left open. <b>Disposal,
              pre-committed:</b> a 1d close below $78,900 retires it, and a 1d close above
              $82,000 without an arm retires it unfilled.{' '}
              <b>It is NOT ARMED at this anchor</b> — leg 1 requires a{' '}
              <span className="dn-tag">$733.99 / −0.91%</span> decline from spot $80,333.99
              that has not occurred after the anchor, and no post-anchor print exists at all.
            </p>

            <p>
              <span className="dn-signal">
                The chase-short is stood down for an eighth checked note, and this time the
                two legs SPLIT rather than improved.
              </span>{' '}
              The dated sequence this repository records is{' '}
              <span className="dn-tag">08-23 first two-leg improvement, 08-26 second, 08-27
              opposite-direction, 08-31 third</span>; today is the{' '}
              <b>second opposite-direction observation, not the first</b>, and no superlative
              is claimed for it. The <b>price leg</b> improved by the smallest margin of the
              documented run: a <span className="dn-tag">14.8179%</span> decline now reaches
              the flip $68,430.18 on the live-spot basis, against 14.96% on 08-31 — an
              improvement of <span className="dn-tag">0.1421 percentage points</span>, against
              3.14pt, 1.36pt and 0.62pt previously. On the GEX file&rsquo;s own Deribit index
              the same distance is <span className="dn-tag">15.3002%</span>, and both
              references are published because they differ by 0.48pt. The <b>gamma leg moved
              hard against the trade</b>: the footed aggregate went{' '}
              <span className="dn-tag bear">+184.30M → +296.19M</span>, an increase of
              +111.89M to the second-deepest <em>level</em> of 83 archived panels. A short needs
              that aggregate
              to turn negative or collapse toward zero; it did the opposite by more than a
              hundred million. It stays <b>stood down</b>, and the reason is arithmetic rather
              than conviction: a 14.82% decline is still a very long way, +296.19M is still a
              deeply positive modeled proxy, and the interval over which both legs are measured
              contains six unarchived sessions.
            </p>

            <p>
              The right read for the week ahead is{' '}
              <em>the specification worked at the exits and ran out of words at the
              edges</em>. The framework
              written on 08-31 armed on time, filled without a chase, was carried $1,028.10
              underwater through a stop that never fired, and closed on two numbers written in
              advance — which is the outcome this desk has been trying to engineer for two
              weeks. Two things it did not do. It did not say whether its own expiry deadline
              reached a filled position, so the headline +1.3636R is an adopted reading with a
              +0.0376R alternative standing beside it. And while it <em>did</em> warn that the
              stop sat above recent print lows and would be crossed on prints, it never put a
              number on the overshoot, so nothing quantified the $2,348.10 against a $1,320 R
              at sizing time. Finish the specification at both edges; the middle of it is
              already working.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 · <b>post codex hostile audit</b> ·{' '}
              <code>audits/2026-09-07-desk-note.md</code>
            </span>
            v1 was audited by codex CLI 0.153.4 (gpt-6-astra, effort xhigh) and returned{' '}
            <b>BLOCK-CRITICAL — 3 CRITICAL, 11 MAJOR, 10 MINOR, 0 NIT</b>, all 24 open. This v2
            applies all 24. Each row below records the <b>stale-form pattern searched</b>, hits
            before, hits after, and the disposition. <b>Stale form</b> means the string carrying
            the pre-fix meaning; where a corrected sentence deliberately quotes or names the
            withdrawn claim, that residue is listed separately at the end rather than counted
            as a resolution. Every count is a grep over the <b>full EN note body</b>, not over
            the audit&rsquo;s cited lines, which are treated as examples of a broken invariant
            rather than an enumeration. <b>This audit-trace block is excluded from the
            counts</b>, because it necessarily quotes every retired string in order to record
            what was searched; the body is everything above it, through the closing paragraph
            of §VI.
            <div className="dn-lvls">
              <div><span className="dn-lvl-k">DN-001 · CRITICAL · lead substituted the GEX change for the prior level</span><span className="dn-lvl-v">pattern: <code>deepened +111.89M to</code> / <code>DEEPENED +111.89M to</code> (case-insensitive) · hits before <b>3</b> across 3 sites — the lead, the §III heading and the §VI against-list, all of which read the change as if it were the baseline · hits after <b>0</b> · every site now prints <b>+184.30M → +296.19M, an increase of +111.89M</b>, matching §III body and §VI chase-short · <b>RESOLVED</b></span></div>
              <div><span className="dn-lvl-k">DN-002 · CRITICAL · false and self-refuted Aug/Sep superlative</span><span className="dn-lvl-v">patterns: <code>largest single-interval</code>, <code>August or September</code> · hits before <b>2</b> (one §III signal sentence) · hits after <b>0</b> · restated as the <b>second-largest archived August/September positive endpoint change</b>, with 08-20 +125.21M named inline as the larger one inside the same two months, and the seven-day-gap disclosure retained and explicitly denied any rescuing role. The separately-verified all-archive ranks (5th absolute, 3rd positive) are unchanged · <b>RESOLVED</b></span></div>
              <div><span className="dn-lvl-k">DN-003 · CRITICAL · BTC-over-NQ lead widened; draft said it collapsed off the wrong dated baseline</span><span className="dn-lvl-v">patterns: <code>26.09pt in the 08-31</code>, <code>lead collapsing</code>, <code>has collapsed with it</code> · hits before <b>3</b> across the lead and §IV · hits after <b>0</b> · the comparison is re-based to the <b>08-31 note&rsquo;s 0.20pt</b> (BTC −0.21% vs NQ −0.41%), today&rsquo;s 2.25pt is a <b>widening of 2.05pt</b>, and the week-over-week narrative is rewritten at both sites · <b>RESOLVED</b></span></div>
              <div><span className="dn-lvl-k">DN-004 · MAJOR · retail attribution contradicted the paragraph&rsquo;s own evidence limit</span><span className="dn-lvl-v">patterns: <code>wrong side</code>, <code>maximally long</code>, <code>minimally long</code>, <code>most long at the low</code>, <code>least long</code> · hits before <b>5</b> across 3 sites — the §I signal sentence, the §I heading and the retail tile · hits after <b>0</b> · all three now carry the dated crowding observation only, and the no-P&amp;L / no-cohort / no-entry-distribution restriction is repeated in the heading and the tile, not just the body · <b>RESOLVED</b></span></div>
              <div><span className="dn-lvl-k">DN-005 · MAJOR · &ldquo;spot CVD&rdquo; is not measured spot volume</span><span className="dn-lvl-v">patterns: <code>spot CVD</code>, <code>in spot only</code>, <code>bought in spot</code> · hits before <b>4</b> · hits after <b>0</b> · the series is renamed the <b>Coinbase price/premium proxy</b> with its construction printed inline (<code>cb_cvd</code> takes a Coinbase price and applies <code>max(|premium|, 0.5)</code> by direction; no trade size, aggressor side or volume enters it), and every definitive spot-buying claim is withdrawn · <b>RESOLVED</b></span></div>
              <div><span className="dn-lvl-k">DN-006 · MAJOR · weekly CVD subtraction crossed accumulator resets</span><span className="dn-lvl-v">assertion patterns: <code>strongly positive</code>, <code>both CVDs</code> · hits before <b>2</b> · hits after <b>0</b> · the weekly flow claim is <b>withdrawn</b>, the three resets are dated inline (09-01 06:38Z, 09-03 06:30Z, 09-03 06:34Z, with the −3,902.2 → +40.0 and −1,433.3 → +10.1 jumps shown), and the week is restated as a first-occurrence interval sum of sampled <code>taker_net</code> = <b>+30.99</b> (+68.88 with duplicates retained), labelled a sampled-minute sum and not complete exchange flow · <b>RESOLVED</b></span></div>
              <div><span className="dn-lvl-k">DN-007 · MAJOR · cross-asset provenance missing and the weekend caveat inverted</span><span className="dn-lvl-v">pattern: <code>no equity prints</code> · hits before <b>2</b> (manifest row, §IV) · hits after <b>0</b> · both sites now disclose <b>Hyperliquid perps</b> and the <code>NQ = xyz:XYZ100</code> alias, state that the two weekend days <b>do</b> carry prints (48 non-null weekend observations each for NQ, SP500 and NVDA) while the cash markets are closed, and separate the <b>166 all-asset complete-case rows</b> from the <b>168 pairwise observations</b> behind the quoted BTC/NQ and BTC/GOLD correlations · <b>RESOLVED</b></span></div>
              <div><span className="dn-lvl-k">DN-008 · MAJOR · market-wide correlation promoted to proof of new BTC macro beta</span><span className="dn-lvl-v">patterns: <code>re-coupled</code>, <code>stopped trading on its own</code>, <code>beta it did not have</code>, <code>beta it did not carry</code> · hits before <b>5</b> across the lead, the §IV heading, the §IV signal sentence, the §IV closing line and the §VI against-list · hits after <b>0</b> · 0.204 → 0.286 is now stated as a <b>22-asset mean-|r| classification, not a BTC beta estimate</b>; the 08-31 base is printed as <b>NQ +0.405 / GOLD +0.357</b> so the correct claim is strengthened co-movement on an already-positive base; and the absence of any beta regression, uncertainty interval or significance test is stated · <b>RESOLVED</b></span></div>
              <div><span className="dn-lvl-k">DN-009 · MAJOR · &ldquo;exactly one defensible reading&rdquo; not established — expiry silent on filled positions</span><span className="dn-lvl-v">patterns: <code>exactly one</code>, <code>ONE reading</code>, <code>one reading</code>, <code>no ambiguity</code>, <code>and no other</code> · hits before <b>10</b> across 9 sites — lead, §V heading, trade thesis, result row, ledger row 7, defect (c), the §VI closing paragraph and the signature · hits after <b>0</b> · +1.3636R is now labelled <b>conditional on the adopted pending-instruction-only expiry reading</b>, the competing hard-time-exit reading is priced at <b>+0.0376R gross / +0.0075R at 0.2R</b> off the settled 08-31 close $78,549.60, the prior instruction is <b>not</b> retroactively rewritten, and the new framework&rsquo;s duration clause now specifies all three states (unarmed / armed-unfilled / filled) in advance · <b>RESOLVED</b></span></div>
              <div><span className="dn-lvl-k">DN-010 · MAJOR · fewer instruments cannot rule out a coverage-driven rise</span><span className="dn-lvl-v">pattern: <code>coverage moved the wrong way</code> · hits before <b>1</b> · hits after <b>0</b> · the inference is withdrawn and replaced with the mechanism that defeats it — puts carry a negative sign, so dropping negative-GEX instruments raises net GEX while the count falls — plus an explicit statement that the 46 common <b>strikes</b> are a strike intersection, not a matched-instrument universe, and that composition/expiry/valuation effects are <b>unresolved</b> without a matched-instrument decomposition · <b>RESOLVED</b></span></div>
              <div><span className="dn-lvl-k">DN-011 · MAJOR · GEX proxy treated as an observed dealer book with guaranteed containment</span><span className="dn-lvl-v">patterns: <code>by construction</code>, <code>dealer book</code>, <code>dampens realized</code> · hits before <b>3</b> · hits after <b>0</b> · a new §III paragraph publishes the sign convention (<b>call OI × gamma minus put OI × gamma</b>, signs assumed, holders unidentified, no hedge trade observed), the section heading and every &ldquo;clamp&rdquo; usage are scoped to a <b>modeled dealer-gamma proxy</b>, and containment is restated as conditional on the dealer-position and hedging assumptions rather than a construction guarantee · <b>RESOLVED</b></span></div>
              <div><span className="dn-lvl-k">DN-012 · MAJOR · post-exit high mislabelled as trade MFE; MAE mislabelled as a stop-out</span><span className="dn-lvl-v">patterns: <code>MFE &lt;b&gt;$82,282.80</code>, <code>gave back $1,282.80</code>, <code>1.7789R stop-out</code>, <code>unclaimed</code> · hits before <b>4</b> across the excursion row, the do-not row and defect (b) · hits after <b>0</b> · the $82,282.80 @21:34Z high is relabelled <b>post-exit counterfactual upside, 5h43m after the 15:51Z modeled exit</b>, the $1,282.80 is forgone counterfactual upside rather than a giveback, −1.7789R is kept strictly as <b>print-basis MAE</b>, and the stop-out return is stated as <b>−1R under an ideal touch-fill assumption</b> with slippage unknown · <b>RESOLVED</b></span></div>
              <div><span className="dn-lvl-k">DN-013 · MAJOR · &ldquo;the risk disclosure did not work&rdquo; erased a prior explicit warning</span><span className="dn-lvl-v">patterns: <code>risk disclosure did not</code>, <code>specification told the desk</code>, <code>tell anyone at sizing</code> · hits before <b>3</b> across the trade card, the defect list and the §VI closing paragraph · hits after <b>0</b> · all three now credit the 08-31 note for disclosing that the stop sat above recent print lows and would be crossed on prints, and locate the actual gap in the <b>absence of a quantified stress-sizing rule</b>; the signature is rewritten to match, and no note is faulted for failing to forecast the specific $1,028.10 overshoot · <b>RESOLVED</b></span></div>
              <div><span className="dn-lvl-k">DN-014 · MAJOR · subtracting two roster jumps does not certify the residual as flow</span><span className="dn-lvl-v">patterns: <code>smart money added</code>, <code>+210 BTC</code> · hits before <b>2</b> · hits after <b>0</b> · restated as <b>&ldquo;the remaining sampled net-position changes sum to +209.9101 BTC, still uncertified as flow&rdquo;</b>, with the reason printed inline (removing the only two ≥100-trader moves leaves smaller composition changes untouched, and the longest constant-roster run is nine minutes) and the rejection of <code>net_btc</code> gates retained · <b>RESOLVED</b></span></div>
              <div><span className="dn-lvl-k">DN-015 · MINOR · rounded strip does not reproduce the exact pin &ldquo;to the cent&rdquo;</span><span className="dn-lvl-v">pattern: <code>to the cent</code> · hits before <b>2</b> (manifest row, §III) · hits after <b>0</b> · both sites now separate the <b>$296.190000M sum of twelve independently 0.01M-rounded rows</b> from the exact <b>$296,197,441.55</b>, print the <b>$7,441.55</b> gap, and note the exact total rounds to <b>$296.20M</b>. Strip-derived deltas are kept consistently on the rounded-row basis and labelled. The byte-identical sha256 pin is unaffected and stated separately · <b>RESOLVED</b></span></div>
              <div><span className="dn-lvl-k">DN-016 · MINOR · every closed below-cap episode overstated by two minutes</span><span className="dn-lvl-v">patterns: <code>ninth open at 4,549</code>, <code>436 / 2,097</code>, <code>2,097</code>, <code>3,391</code> · hits before <b>5</b> · hits after <b>0</b> · defect (f) now prints <b>434 / 2,095 / 437 / 626 / 471 / 977 / 750 / 3,389</b> under the previously declared first-below to last-below convention with <b>elapsed = rows − 1</b> named inline, and distinguishes the open ninth at <b>4,548 elapsed below-cap minutes</b> from <b>4,549 minutes since the last capped row</b> — a distinction now also carried in the funding tile and §VI. <b>0-for-8 on closed episodes still holds</b> at a ≥434-minute gate · <b>RESOLVED</b></span></div>
              <div><span className="dn-lvl-k">DN-017 · MINOR · window statistics mixed inclusive rows and intervals unnamed</span><span className="dn-lvl-v">patterns: <code>24h mean +4.3694%, range</code>, <code>taker net −346.33</code> (unlabelled forms) · hits before <b>2</b>, plus the whole unlabelled flow paragraph · hits after <b>0</b> · both funding tiles name the sampled-row mean and print the interval mean beside it (+4.3696% / +6.4890%), and the flow section defines both sample sets before use and leads with <b>interval sums</b> — 24h −355.13, 4h −39.41, 1h −222.70, 1h big-print −112.56 — with the sampled-row forms printed alongside. The 10,080-interval cap denominator is unchanged · <b>RESOLVED</b></span></div>
              <div><span className="dn-lvl-k">DN-018 · MINOR · 200W insertion rank double-counted the current observation</span><span className="dn-lvl-v">patterns: <code>45 / 168</code>, <code>26.79th</code>, <code>167 historical</code> · hits before <b>3</b> · hits after <b>0</b> · corrected to insertion rank <b>45 / 167 = 26.95th</b> with the sample membership stated inline — the file holds <b>167 settled ratios including current</b>, not 167 prior — and both strict conventions published: <b>44/167 = 26.35%</b> whole-sample and <b>44/166 = 26.51%</b> prior-only. This is the same error the 08-31 audit corrected and it is named as such in the body · <b>RESOLVED</b></span></div>
              <div><span className="dn-lvl-k">DN-019 · MINOR · wrong denominator for the R-versus-excursion understatement</span><span className="dn-lvl-v">patterns: <code>by 78%</code>, <code>understated the realized</code> · hits before <b>2</b> (lead, defect (g) header) · hits after <b>0</b> · every site now says <b>the print-basis MAE exceeded nominal R by 77.89%</b>; where the coverage direction is wanted the trade card adds <b>R covers 56.2% of it</b>, and the 1.78× ratio is retained as a ratio · <b>RESOLVED</b></span></div>
              <div><span className="dn-lvl-k">DN-020 · MINOR · NFCI z-score presented as the index level</span><span className="dn-lvl-v">pattern: <code>NFCI is RISK-ON at</code> · hits before <b>1</b> · hits after <b>0</b> · restated as <b>NFCI −0.558, regime z −1.38, RISK-ON</b>, with the level and the z-score explicitly named as different columns and the source&rsquo;s <b>stale 9d</b> flag retained · <b>RESOLVED</b></span></div>
              <div><span className="dn-lvl-k">DN-021 · MINOR · FX sentence reversed USD/CNY and conflated a quote return with a reciprocal return</span><span className="dn-lvl-v">patterns: <code>dollar-CNY firms</code>, <code>yen strengthening 2.46</code> · hits before <b>2</b> · hits after <b>0</b> · rewritten as <b>the USD/JPY proxy fell 2.46% (160.1 → 156.1) across the 7d window — a quote decline, with the reciprocal yen-in-dollars return approximately +2.52% and the two named as different numbers — while USD/CNY also declined, 6.7208 → 6.7013 ≈ −0.29%</b>, with the −0.02 current-panel daily delta printed · <b>RESOLVED</b></span></div>
              <div><span className="dn-lvl-k">DN-022 · MINOR · &ldquo;now cheap rather than rich&rdquo; implied a sign change that did not occur</span><span className="dn-lvl-v">pattern: <code>rather than rich</code> · hits before <b>1</b> · hits after <b>0</b> · restated as <b>the chain-median discount to trailing RV widened from 0.18pt to 3.70pt</b>, with both observations explicitly on the cheap side, and the non-tradable mixed-tenor chain-median qualification retained · <b>RESOLVED</b></span></div>
              <div><span className="dn-lvl-k">DN-023 · MINOR · the $79,500 &ldquo;node&rdquo; had no loaded provenance</span><span className="dn-lvl-v">patterns: <code>$79,500 node</code>, <code>top of the $79,500</code> · hits before <b>1</b> · hits after <b>0</b> · $79,600 and $79,500 are relabelled <b>chosen framework levels</b>, the source-sounding node description is withdrawn, the manifest&rsquo;s NTT framework-only scope is cited, and the visible <b>$79,500 strike at −0.546662M</b> is named as a strike value with no node boundary asserted · <b>RESOLVED</b></span></div>
              <div><span className="dn-lvl-k">DN-024 · MINOR · expired-unfilled scout carried an unlabelled R figure</span><span className="dn-lvl-v">pattern: <code>EXPIRED UNFILLED at 10.03R</code> · hits before <b>1</b> · hits after <b>0</b> · the ledger row now reads <b>counterfactual opportunity cost — a forgone excursion on an unentered idea, not earned P&amp;L</b>, with the dated 2026-08-25 reference that first recorded it that way · <b>RESOLVED</b></span></div>
              <div><span className="dn-lvl-k">deliberate residues, named so the grep record is honest</span><span className="dn-lvl-v">six strings survive on purpose and none carries its pre-fix meaning. (1) <code>wrong-footed</code> ×1, inside the §I sentence that <em>refuses</em> the claim (DN-004&rsquo;s fix requires preserving that restriction). (2) <code>6,107.0</code> and (3) <code>5,577.6</code> ×1 each, inside the §I sentence marking them <b>not valid</b> and not published as flow. (4) <code>74.11</code> ×1, retained legitimately as the named sampled-row endpoint form beside the +30.99 interval sum. (5) <code>macro beta</code> ×1, inside the §IV clause stating nothing here shows BTC acquiring it. (6) <code>26.09pt</code> ×1 in §IV and <code>3.18×</code> ×3, both now explicitly dated — 26.09pt to the <b>08-24</b> note, 3.18× to ledger row 6 / the 08-31 exit spread that this week&rsquo;s remainder clause closed. Assertion-form greps for all six return <b>0</b>, as listed row by row above</span></div>
            </div>
            <br />
            Scope note on how these were applied: Stage B&rsquo;s <code>file:line</code>{' '}
            citations were treated as <b>examples of a broken invariant, not an enumeration</b>.
            Each finding was swept across the whole file, which is why several rows show more
            hits before than the audit cited — DN-001 at 3 sites against 1 cited, DN-004 at 3
            against 2, DN-008 at 5 against 3, DN-009 at 9 against 4, DN-012 at 4 against 2.
            That gap is the 2026-06-08 / 06-09 failure mode and is the reason the sweep is
            recorded per pattern rather than per line.
            <br /><br />
            <b>Not fixed because not findable in this cut, and carried forward openly:</b> the
            audit&rsquo;s six open issues stand as written — execution existence and status
            remain unverified with no blotter ever loaded; weekly flow is uncertified and is now
            published as such; the prior-week 200W watch-state claim is unpinned and the read is
            a disclosed parquet fallback; there are no dated 09-01 – 09-06 GEX panels, so the
            intraperiod gamma path is unobserved; and the build check is a{' '}
            <b>TypeScript proxy only</b> — this server runs Node 18.19.1 and the installed Next
            16.2.6 CLI requires 20.9.0+, so no production build or runtime gate exercise was
            performed at either stage.
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · not financial advice</span>
            This note is an internal desk artifact prepared for discussion among principals of
            Hysteresis Research and is{' '}
            <em>not investment advice, not a solicitation, not an offer</em>, and not
            personalized to any recipient&rsquo;s circumstances. Numbers reflect a single
            atomic snapshot (2026-09-07 00:05Z) with section-level provenance disclosed in the
            manifest band above; the macro Tier-1 panel render is 2026-09-06 22:17Z (1h48m
            before the snapshot) and several inputs are explicitly stale, absent or pending
            and are flagged as such. All trade-book figures are{' '}
            <em>modelled / paper</em> and unreconciled — no order blotter or execution feed
            has ever been loaded into this lineage. Levels, sizes, and conditions are
            illustrative of the desk&rsquo;s process, not standing recommendations. Past
            correlation, gamma, and positioning patterns do not bind future tape. Derivatives
            carry the risk of total loss and, where leveraged, loss exceeding deposited
            margin. <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                The rule armed on time, filled without a chase, went a thousand dollars
                underwater without firing, and closed on two numbers we wrote before we needed
                them. We still never said what expiry does to a position we already own, and we
                warned about the stop without ever pricing it. Say both out loud before the
                next one.
              </div>
              <div className="dn-sign-name">Desk · BTC derivatives</div>
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
            v2 · 2026-09-07 00:05Z snapshot · archive
            /opt/desk-note/snapshots/2026-09-07-0005/ · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · gex_summary.json · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED · Yahoo · Deribit
          </span>
        </footer>
      </article>
    </main>
  );
}
