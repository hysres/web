import Link from 'next/link';
import BHMark from '../components/BHMark';
import TickerMark from '../components/TickerMark';
import type { Metadata } from 'next';
import { pageMetadata } from '../../lib/seo';
import { requireViewer } from '@/lib/gate';

// Internal-only route: not in public nav, not in sitemap, noindex/nofollow.
// Accessible by direct URL for desk principals; intentionally invisible to
// crawlers, search snippets, and social card harvesters.
export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk · Hysteresis Research',
    description: 'Internal desk archive.',
    path: '/desk',
    lang: 'en',
  }),
  alternates: { canonical: '/desk' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk() {
  await requireViewer('/desk');
  return (
    <main>
      <div className="col">
        <div className="marginalia">§1</div>
        <div className="hero-mark">
          <BHMark width={180} height={108} strokeWidth={2.2} />
        </div>

        <div className="marginalia">desk</div>
        <h1>Desk</h1>

        <div></div>
        <p className="lede">
          Dated tactical reads. Live tape, framework-only when the data
          isn&rsquo;t there.
        </p>

        <div className="marginalia">§2</div>
        <p className="body-paragraph">
          A daily artifact <span className="em">—</span> regime, positioning,
          dealer map, trade book, kill conditions. Numbers are timestamped
          per-section; framework-only when a claim outruns its data. Notes
          decay fast and are not re-edited after publication. Read with the
          manifest band first.
        </p>

        <div className="marginalia">§3</div>
        <p className="body-paragraph">
          Published in English with a parallel <Link href="/zh/desk">中文
          镜像</Link>. <span className="em">Not financial advice.</span>{' '}
          Each note carries its own NFA disclaimer and audit trace.
        </p>

        <div className="marginalia">§4</div>
        <p className="body-paragraph">
          <a href="https://bytes.space/" target="_blank" rel="noopener">
            The Workbench ↗
          </a>{' '}
          <span className="em">—</span> live but unfinished instruments: the
          regime score, the multi-model forecast tournament, MACD cycle, the
          daily market profile, the MSTR dilution explorer. Public, read-only,
          and revised without notice.{' '}
          <span className="em">Not investment advice.</span>
        </p>

        <div className="marginalia">§5</div>
        <ul className="entry-list">
          <li>
            <time dateTime="2026-09-07">2026-09-07</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-09-07">Paid on both exits, silent at both edges</Link>
          </li>
          <li>
            <time dateTime="2026-08-31">2026-08-31</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-08-31">Method sound, specification not</Link>
          </li>
          <li>
            <time dateTime="2026-08-27">2026-08-27</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-08-27">The limit price traded; a modeled fill, not a confirmed one</Link>
          </li>
          <li>
            <time dateTime="2026-08-26">2026-08-26</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-08-26">The framework armed; the entry price never traded</Link>
          </li>
          <li>
            <time dateTime="2026-08-25">2026-08-25</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-08-25">The disposal rule fired; the framework retires unfilled</Link>
          </li>
          <li>
            <time dateTime="2026-08-24">2026-08-24</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-08-24">The settle fired one leg; the other missed by $20.30</Link>
          </li>
          <li>
            <time dateTime="2026-08-23">2026-08-23</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-08-23">A bullish structure at a bad price — the weekly shelf handed back</Link>
          </li>
          <li>
            <time dateTime="2026-08-22">2026-08-22</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-08-22">The floor break being un-done, and the desk flat for all of it</Link>
          </li>
          <li>
            <time dateTime="2026-08-16">2026-08-16</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-08-16">Floor lost, flip still holding</Link>
          </li>
          <li>
            <time dateTime="2026-08-14">2026-08-14</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-08-14">Base holds the flip a fourth close as the leverage mix turns heavier</Link>
          </li>
          <li>
            <time dateTime="2026-08-12">2026-08-12</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-08-12">SM demand into a broken cap</Link>
          </li>
          <li>
            <time dateTime="2026-08-11">2026-08-11</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-08-11">Cap lost on the close but SM flips net long into the break</Link>
          </li>
          <li>
            <time dateTime="2026-08-10">2026-08-10</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-08-10">Stall at the cap as SM rolls back short</Link>
          </li>
          <li>
            <time dateTime="2026-08-09">2026-08-09</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-08-09">Reclaim holds the cap a second close but stalls; carry the scout, no fresh add</Link>
          </li>
          <li>
            <time dateTime="2026-08-08">2026-08-08</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-08-08">Demand-confirmed cap re-clear; scout add-leg fires under the framework</Link>
          </li>
          <li>
            <time dateTime="2026-08-07">2026-08-07</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-08-07">Scout fades at the cap; held on a hair-trigger, the SM re-short impaired</Link>
          </li>
          <li>
            <time dateTime="2026-08-06">2026-08-06</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-08-06">Divergence resolves bull; scout armed on a kiss at the cap</Link>
          </li>
          <li>
            <time dateTime="2026-08-05">2026-08-05</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-08-05">Coil breaks up, unconfirmed at the cap</Link>
          </li>
          <li>
            <time dateTime="2026-08-04">2026-08-04</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-08-04">Reclaim coils on the risen floor</Link>
          </li>
          <li>
            <time dateTime="2026-08-03">2026-08-03</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-08-03">The weekly close held the floor, but smart money sells the contested reclaim</Link>
          </li>
          <li>
            <time dateTime="2026-08-02">2026-08-02</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-08-02">Flat below the broken floor into the final day of the weekly close</Link>
          </li>
          <li>
            <time dateTime="2026-08-01">2026-08-01</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-08-01">Smart money catches the falling knife</Link>
          </li>
          <li>
            <time dateTime="2026-07-31">2026-07-31</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-07-31">Smart money covers and re-crosses long, pressing the D-EMA50 cap to the dollar</Link>
          </li>
          <li>
            <time dateTime="2026-07-30">2026-07-30</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-07-30">Smart money flips short as the floor holds to the dollar</Link>
          </li>
          <li>
            <time dateTime="2026-07-29">2026-07-29</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-07-29">Floor holds but the bounce is hollow</Link>
          </li>
          <li>
            <time dateTime="2026-07-28">2026-07-28</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-07-28">Cap reclaim rolls back onto the floor</Link>
          </li>
          <li>
            <time dateTime="2026-07-27">2026-07-27</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-07-27">Cap reclaimed on the up-close but on short-covering, scout stays deferred</Link>
          </li>
          <li>
            <time dateTime="2026-07-26">2026-07-26</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-07-26">Buyer trims into a capped bounce</Link>
          </li>
          <li>
            <time dateTime="2026-07-25">2026-07-25</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-07-25">Second down-close below the cap, OI still the wrong kind</Link>
          </li>
          <li>
            <time dateTime="2026-07-24">2026-07-24</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-07-24">The reclaim&rsquo;s first cap test failed, scout deferred</Link>
          </li>
          <li>
            <time dateTime="2026-07-23">2026-07-23</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-07-23">Smart money held the bid on the pullback</Link>
          </li>
          <li>
            <time dateTime="2026-07-22">2026-07-22</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-07-22">Smart money joined the bid, scout armed but waiting on a confirming up-close</Link>
          </li>
          <li>
            <time dateTime="2026-07-19">2026-07-19</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-07-19">Demand pulled OI up, but smart money fades the bid</Link>
          </li>
          <li>
            <time dateTime="2026-07-16">2026-07-16</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-07-16">Floor reclaimed but demand still absent</Link>
          </li>
          <li>
            <time dateTime="2026-07-14">2026-07-14</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-07-14">Floor handed back on the print, smart money tripled its short into the break</Link>
          </li>
          <li>
            <time dateTime="2026-07-13">2026-07-13</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-07-13">Floor confirmed on the weekly close, smart money re-shorted into it</Link>
          </li>
          <li>
            <time dateTime="2026-07-12">2026-07-12</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-07-12">Squeeze fuel unwound, floor held</Link>
          </li>
          <li>
            <time dateTime="2026-07-11">2026-07-11</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-07-11">Short-covered reclaim, not real demand</Link>
          </li>
          <li>
            <time dateTime="2026-07-10">2026-07-10</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-07-10">Floor re-reclaimed intra-week but the bounce is sold by smart money</Link>
          </li>
          <li>
            <time dateTime="2026-07-09">2026-07-09</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-07-09">Reclaim handed back intra-week as the tape turns genuinely bearish</Link>
          </li>
          <li>
            <time dateTime="2026-07-08">2026-07-08</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-07-08">First pullback holds the reclaimed floor but reads de-grossing</Link>
          </li>
          <li>
            <time dateTime="2026-07-07">2026-07-07</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-07-07">Floor reclaimed on the weekly close</Link>
          </li>
          <li>
            <time dateTime="2026-07-05">2026-07-05</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-07-05">Floor reclaimed on a daily close as the book deepens long-gamma</Link>
          </li>
          <li>
            <time dateTime="2026-07-04">2026-07-04</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-07-04">Bounce carried to the floor as the book deepens long-gamma</Link>
          </li>
          <li>
            <time dateTime="2026-07-03">2026-07-03</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-07-03">Bounce into a deepening long-gamma book</Link>
          </li>
          <li>
            <time dateTime="2026-07-01">2026-07-01</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-07-01">Bounce fails, book flips back short-gamma, flip lost</Link>
          </li>
          <li>
            <time dateTime="2026-06-30">2026-06-30</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-06-30">Break confirmed on the weekly close, tape bounces into it</Link>
          </li>
          <li>
            <time dateTime="2026-06-29">2026-06-29</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-06-29">Floor break extends to a fifth close</Link>
          </li>
          <li>
            <time dateTime="2026-06-28">2026-06-28</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-06-28">Floor break extends to a fourth close, the book flips net-long-gamma</Link>
          </li>
          <li>
            <time dateTime="2026-06-27">2026-06-27</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-06-27">Floor break stretches to a third close, the amplifier settles</Link>
          </li>
          <li>
            <time dateTime="2026-06-26">2026-06-26</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-06-26">Floor breaks on the second close</Link>
          </li>
          <li>
            <time dateTime="2026-06-25">2026-06-25</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-06-25">200W floor broke on the daily close, escalation pending into 26JUN opex</Link>
          </li>
          <li>
            <time dateTime="2026-06-24">2026-06-24</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-06-24">Floor under direct attack, book deepened short-gamma into 26JUN opex</Link>
          </li>
          <li>
            <time dateTime="2026-06-23">2026-06-23</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-06-23">Floor held into opex</Link>
          </li>
          <li>
            <time dateTime="2026-06-22">2026-06-22</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-06-22">In-progress weekly bar above the floor, dealer book flat, tape frozen 130.6h</Link>
          </li>
          <li>
            <time dateTime="2026-06-20">2026-06-20</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-06-20">Floor held twice on close, book de-amplified, tape frozen 65h</Link>
          </li>
          <li>
            <time dateTime="2026-06-19">2026-06-19</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-06-19">Price on the 200W floor, tape still frozen</Link>
          </li>
          <li>
            <time dateTime="2026-06-18">2026-06-18</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-06-18">Reclaim handed back, derivatives tape frozen</Link>
          </li>
          <li>
            <time dateTime="2026-06-16">2026-06-16</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-06-16">Fifth session up, 200W reclaim confirmed into top-divergence exhaustion</Link>
          </li>
          <li>
            <time dateTime="2026-06-15">2026-06-15</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-06-15">Fourth session up, top divergence widening</Link>
          </li>
          <li>
            <time dateTime="2026-06-14">2026-06-14</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-06-14">Real up-leg into top-divergence exhaustion</Link>
          </li>
          <li>
            <time dateTime="2026-06-13">2026-06-13</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-06-13">Digestion above the reclaimed floor</Link>
          </li>
          <li>
            <time dateTime="2026-06-12">2026-06-12</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-06-12">Reclaimed intraweek, book flipped long-gamma</Link>
          </li>
          <li>
            <time dateTime="2026-06-11">2026-06-11</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-06-11">Mean-revert cluster fired below the floor</Link>
          </li>
          <li>
            <time dateTime="2026-06-10">2026-06-10</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-06-10">200W re-broken on the print, put wall re-loaded to −47.86M</Link>
          </li>
          <li>
            <time dateTime="2026-06-09">2026-06-09</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-06-09">200W floor reclaimed on weekly close, dealer flip walked up</Link>
          </li>
          <li>
            <time dateTime="2026-06-08">2026-06-08</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-06-08">200W reclaimed on close, leg-3 trigger one wick away</Link>
          </li>
          <li>
            <time dateTime="2026-06-07">2026-06-07</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-06-07">Bounce off the cycle floor</Link>
          </li>
          <li>
            <time dateTime="2026-06-06">2026-06-06</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-06-06">Through the floor on the print</Link>
          </li>
          <li>
            <time dateTime="2026-06-05">2026-06-05</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-06-05">Pause without recovery</Link>
          </li>
          <li>
            <time dateTime="2026-06-04">2026-06-04</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-06-04">Third tier deeper, TD9 across five frames</Link>
          </li>
          <li>
            <time dateTime="2026-06-03">2026-06-03</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-06-03">Wall cleared, new magnet below</Link>
          </li>
          <li>
            <time dateTime="2026-06-02">2026-06-02</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-06-02">Cycle anchor lost, dealer book flipped back net-short-gamma, scout deferred</Link>
          </li>
          <li>
            <time dateTime="2026-06-01">2026-06-01</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-06-01">Anchor held, leverage rebuilt one-sided short</Link>
          </li>
          <li>
            <time dateTime="2026-05-31">2026-05-31</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-05-31">Book flipped to net-long-gamma, anchor held on close, scout deferred</Link>
          </li>
          <li>
            <time dateTime="2026-05-29">2026-05-29</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-05-29">Full ladder tagged, the amplifier expires today</Link>
          </li>
          <li>
            <time dateTime="2026-05-28">2026-05-28</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-05-28">Gate fired clean, target tagged to the dollar</Link>
          </li>
          <li>
            <time dateTime="2026-05-27">2026-05-27</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-05-27">The long got cut and the flip cracked</Link>
          </li>
          <li>
            <time dateTime="2026-05-26">2026-05-26</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-05-26">Long-add at the cluster</Link>
          </li>
          <li>
            <time dateTime="2026-05-25">2026-05-25</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-05-25">The cover printed at the cluster</Link>
          </li>
          <li>
            <time dateTime="2026-05-24">2026-05-24</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-05-24">Pinned at the cluster</Link>
          </li>
          <li>
            <time dateTime="2026-05-23">2026-05-23</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-05-23">The short re-stacked</Link>
          </li>
          <li>
            <time dateTime="2026-05-22">2026-05-22</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-05-22">The short case drained</Link>
          </li>
          <li>
            <time dateTime="2026-05-21">2026-05-21</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-05-21">SM sold the reclaim</Link>
          </li>
          <li>
            <time dateTime="2026-05-20">2026-05-20</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-05-20">Macro joins</Link>
          </li>
          <li>
            <time dateTime="2026-05-19">2026-05-19</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-05-19">Coiled on the anchor</Link>
          </li>
          <li>
            <time dateTime="2026-05-18">2026-05-18</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-05-18">Smart money short</Link>
          </li>
          <li>
            <time dateTime="2026-05-17">2026-05-17</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-05-17">Kill condition one</Link>
          </li>
          <li>
            <time dateTime="2026-05-15">2026-05-15</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-05-15">Between two walls</Link>
          </li>
        </ul>

        <div></div>
        <p className="signature">
          A note appears when the tape gives one. No calendar.
        </p>
      </div>
    </main>
  );
}
