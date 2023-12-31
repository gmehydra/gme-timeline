import { TimelineEventConfig } from "src/app/pages/display-timeline/timeline-items/timeline-item/timeline-event-config.interface";
import { TimelineEventType } from "src/app/pages/display-timeline/timeline-items/timeline-item/timeline-event-type.enum";

export const timelineEvents: TimelineEventConfig[] = [
    {
        title: 'Michael Burry files 13F showing position in GME',
        dateYYYYMMDD: '2019-02-14',
        urls: [
            {
                url: 'https://markets.businessinsider.com/news/stocks/big-short-investor-michael-burry-scion-gamestop-stock-price-frenzy-2021-2-1030050393',
                type: 'NEWS',
                label: 'Businessinsider.com',
                archiveLink: '',
            },
            {
                url: 'https://www.sec.gov/Archives/edgar/data/0001649339/000156761919004198/0001567619-19-004198-index.html',
                type: 'DOCUMENT',
                label: 'SEC link',
                archiveLink: '',
            },

        ],
        description: '',
        types: [TimelineEventType.OTHER],
        significance: 0,
        tags: ['michael burry', '13f', ]
    },
    {
        title: 'Michael Burry increases GME position',
        dateYYYYMMDD: '2019-05-15',
        urls: [
            {
                url: 'https://www.sec.gov/Archives/edgar/data/0001649339/000156761919010955/0001567619-19-010955-index.html',
                type: 'DOCUMENT',
                label: 'SEC link',
                archiveLink: '',
            },
        ],
        description: '',
        types: [TimelineEventType.OTHER],
        significance: 0,
        tags: ['michael burry']
    },
    {
        title: 'Michael Burry writes to GameStop board of directors',
        dateYYYYMMDD: '2019-08-16',
        urls: [
            {
                url: 'https://www.businesswire.com/news/home/20190819005633/en/Scion-Asset-Management-Urges-GameStop-Buy-238?mod=article_inline',
                type: 'NEWS',
                label: 'Businesswire.com',
                archiveLink: '',
            },
        ],
        description: '',
        types: [TimelineEventType.OTHER],
        significance: 0,
        tags: ['michael burry', 'letter']
    },
    {
        title: 'DFV Posts his GME position for the time on Reddit',
        dateYYYYMMDD: '2019-08-16',
        urls: [
            {
                url: 'https://www.reddit.com/r/wallstreetbets/comments/d1g7x0/hey_burry_thanks_a_lot_for_jacking_up_my_cost/',
                type: 'REDDIT',
                label: 'DFV post on r/wallstreetbets',
                archiveLink: '',
            },
        ],
        description: '',
        types: [TimelineEventType.SOCIAL_MEDIA],
        significance: 1,
        tags: ['dfv', 'wallstreetbets', 'burry']
    },
    {
        title: 'Michael Burry increases GME position',
        dateYYYYMMDD: '2019-11-14',
        urls: [
            {
                url: 'https://www.sec.gov/Archives/edgar/data/0001649339/000156761919021303/0001567619-19-021303-index.html',
                type: 'DOCUMENT',
                label: '13F on SEC.gov',
                archiveLink: '',
            },
        ],
        description: 'Position value of approximately $16.6 million',
        types: [TimelineEventType.OTHER],
        significance: 0,
        tags: ['michael burry']
    },
    {
        title: 'Naked, Short and Greedy: Wall Streets Failure to Deliver published',
        dateYYYYMMDD: '2019-12-02',
        urls: [
            {
                url: 'https://www.goodreads.com/book/show/49089890-naked-short-and-greedy',
                type: 'OTHER',
                label: 'goodreads.com',
                archiveLink: '',
            },
        ],
        description: 'Susanne Trimbath publishes a book that eventually becomes foundational to GameStop investors understanding of the market',
        types: [TimelineEventType.DRS],
        significance: 3,
        tags: ['trimbath', 'naked short selling', 'ftds', 'stock lending', 'dtc', 'dtcc', 'drs', 'regulators', 'drsgme'],
    },
    {
        title: 'Michael Burry increases GME position',
        dateYYYYMMDD: '2020-04-02',
        urls: [
            {
                url: 'https://www.sec.gov/Archives/edgar/data/0001649339/000090514820000491/efc20-335_sc13d.htm',
                type: 'DOCUMENT',
                label: '13D on SEC.gov',
                archiveLink: '',
            },
        ],
        description: 'Position value of approximately $9.7 million',
        types: [TimelineEventType.OTHER],
        significance: 0,
        tags: ['michael burry'],
    },
    {
        title: 'Michael Burry decreases GME position',
        dateYYYYMMDD: '2020-05-04',
        urls: [
            {
                url: 'https://www.sec.gov/Archives/edgar/data/0001649339/000090514820000563/efc20-411_sc13da.htm',
                type: 'DOCUMENT',
                label: '13D on SEC.gov',
                archiveLink: '',
            },
            // {
            //     url: 'https://twitter.com/Entrepreneur/status/1257350664306528257',
            //     type: 'X-TWITTER',
            //     label: 'Unrelated to Burry, RC Retweets',
            //     archiveLink: '',
            // },
        ],
        description: 'Position value of approximately $15.4 million',
        types: [TimelineEventType.OTHER],
        significance: 0,
        tags: ['michael burry'],
    },
    {
        title: 'Michael Burry - Scion Asset Management Voted in Support of GameStop’s Board and Management',
        dateYYYYMMDD: '2020-06-03',
        urls: [
            {
                url: 'https://www.businesswire.com/news/home/20200603005929/en/Scion-Asset-Management-Voted-in-Support-of-GameStop%E2%80%99s-Board-and-Management',
                type: 'NEWS',
                label: 'Businesswire.com link',
                archiveLink: '',
            },
        ],
        description: '',
        types: [TimelineEventType.OTHER],
        significance: 0,
        tags: ['michael burry', 'letter']
    },
    {
        title: 'Roaring Kitty - 100%+ short interest in GameStop stock (GME) – fundamental & technical deep value analysis',
        dateYYYYMMDD: '2020-07-27',
        urls: [
            {
                url: 'https://www.youtube.com/watch?v=GZTr1-Gp74U',
                type: 'YOUTUBE',
                label: 'YouTube link',
                archiveLink: '',
            },
        ],
        description: '',
        types: [TimelineEventType.SOCIAL_MEDIA],
        significance: 2,
        imgSrc: 'assets/dfv-short-interest.jpg',
        tags: ['dfv','dumb money'],
    },
    {
        title: 'Roaring Kitty - 5 reasons GameStop stock (GME) is a roach not a cigar butt a la Warren Buffett & could short squeeze',
        dateYYYYMMDD: '2020-08-04',
        urls: [
            {
                url: 'https://www.youtube.com/watch?v=JWdWCtLMoU0',
                type: 'YOUTUBE',
                label: 'YouTube link',
                archiveLink: '',
            },
            {
                url: 'https://twitter.com/CNBCMakeIt/status/1290713003483160582',
                type: 'X-TWITTER',
                label: 'Unrelated - RC retweets',
                archiveLink: '',
            }
        ],
        description: '',
        types: [TimelineEventType.SOCIAL_MEDIA],
        significance: 2,
        imgSrc: 'assets/dfv-cigar.jpg',
        tags: ['dfv', 'dumb money'],
    },
    {
        title: 'RC Ventures LLC purchases 9% of GameStop',
        dateYYYYMMDD: '2020-08-18',
        urls: [
            {
                url: 'https://www.sec.gov/Archives/edgar/data/1822844/000101359420000670/rc13d-082820.htm',
                type: 'DOCUMENT',
                label: 'SEC link',
                archiveLink: '',
            },
            {
                url: 'https://lemmy.whynotdrs.org/post/261607',
                type: 'LEMMY',
                label: '',
                archiveLink: '',
            },
        ],
        description: '',
        types: [TimelineEventType.RC],
        significance: 3,
        imgSrc: 'assets/ryan-cohen-loading.jpg',
        tags: ['ryan cohen', 'insiders']
    },
    {
        title: 'Roaring Kitty - The Big Short SQUEEZE from $5 to $50? Could GameStop stock (GME) explode higher?? Value investing!',
        dateYYYYMMDD: '2020-08-21',
        urls: [
            {
                url: 'https://www.youtube.com/watch?v=alntJzg0Um4',
                type: 'YOUTUBE',
                label: 'YouTube link',
                archiveLink: '',
            },
        ],
        description: '',
        types: [TimelineEventType.SOCIAL_MEDIA],
        significance: 2,
        tags: ['roaring kitty', 'squeeze', 'investing'],
    },
    {
        title: 'DFV learning about RC for the first time',
        dateYYYYMMDD: '2020-08-28',
        urls: [
            {
                url: 'https://youtu.be/2Af9T8TU2OM?t=3468',
                type: 'YOUTUBE',
                label: 'DFV live stream - August 28, 2020',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/qz501o/dfv_learning_about_rc_is_the_most_heartwarming/?sort=top',
                type: 'REDDIT',
                label: 'DFV learning about RC is the most HEARTWARMING AND BULLISH thing you’ll see - November 21, 2021',
                archiveLink: '',
            },
        ],
        description: '',
        types: [TimelineEventType.SOCIAL_MEDIA],
        significance: 1,
        tags: ['dfv', 'ryan cohen']
    },

    {
        title: 'Michael Burry decreases GME position',
        dateYYYYMMDD: '2020-09-30',
        urls: [
            {
                url: 'https://www.sec.gov/Archives/edgar/data/1649339/000156761920019679/xslForm13F_X01/form13fInfoTable.xml',
                type: 'DOCUMENT',
                label: '13F on SEC.gov',
                archiveLink: '',
            },
        ],
        description: 'Position value of approximately $17.4 million',
        types: [TimelineEventType.OTHER],
        significance: 0,
        tags: ['michael burry'],
    },
    {
        title: 'RC Ventures writes to the GameStop Board of Directors',
        dateYYYYMMDD: '2020-11-16',
        urls: [
            {
                url: 'https://www.sec.gov/Archives/edgar/data/1326380/000101359420000821/rc13da3-111620.pdf',
                type: 'DOCUMENT',
                label: 'SEC link',
                archiveLink: '',
            },
            {
                url: 'https://lemmy.whynotdrs.org/post/261607',
                type: 'LEMMY',
                label: '',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/nd18ee/ryan_cohens_letter_to_the_boardmy_north_star/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread - May 15 2021',
                archiveLink: '',
            },

        ],
        description: 'Subject: Maximizing Stockholder Value by Becoming the Ultimate Destination for Gamers, “GAMESTOP’S LEADERSHIP MUST PROMPTLY PIVOT FROM A BRICK-AND-MORTAR MINDSET TO A TECHNOLOGY-DRIVEN VISION”',
        types: [TimelineEventType.RC],
        significance: 4,
        tags: ['ryan cohen', 'letter', ],
    },
    {
        title: 'Through RC Ventures, Cohen now owns a 12.9% stake in GameStop worth $140 million as of Monday"s close, according to an SEC filing. ',
        dateYYYYMMDD: '2020-12-17',
        urls: [
            {
                url: 'https://markets.businessinsider.com/news/stocks/gamestop-stock-price-chewy-cofounder-ryan-cohen-activist-investment-stake-2020-12-1029915366',
                type: 'NEWS',
                label: 'Business Insider link',
                archiveLink: '',
            },
            {
                url: 'https://news.gamestop.com/static-files/89e3e0c1-e050-4511-887d-d1f9321703f8',
                type: 'GAMESTOP',
                label: 'GameStop link',
                archiveLink: '',
            },
        ],
        description: '',
        types: [TimelineEventType.RC],
        significance: 2,
        tags: ['ryan cohen', ],
    },
    {
        title: 'Michael Burry closes entire GME position',
        dateYYYYMMDD: '2020-12-31',
        urls: [
            {
                url: 'https://www.sec.gov/Archives/edgar/data/1649339/000156761921003819/xslForm13F_X01/form13fInfoTable.xml',
                type: 'DOCUMENT',
                label: '13F on SEC.gov',
                archiveLink: '',
            },
            {
                url: 'https://twitter.com/ryancohen/status/1344687817998401537',
                type: 'X-TWITTER',
                label: 'Unrelated to Burry - RC Tweet',
                archiveLink: '',
            },
        ],
        description: 'Some time between September 30th and December 31st, Michael Burry sells his entire GME position, evidenced by the absense of any position in GameStop in form 13F',
        types: [TimelineEventType.OTHER],
        significance: 0,
        tags: ['michael burry', ],
    },
    {
        title: 'Peak of the sneeze',
        dateYYYYMMDD: '2021-01-27',
        urls: [
            {
                url: 'https://lemmy.whynotdrs.org/post/156063',
                type: 'LEMMY',
                label: '',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/wallstreetbets/comments/l6ekdz/gme_yolo_update_jan_27_2021_guess_i_need_102/',
                type: 'REDDIT',
                label: 'GME YOLO update by DFV',
                archiveLink: '',
            },
            {
                url: 'https://en.wikipedia.org/wiki/GameStop_short_squeeze',
                type: 'WIKIPEDIA',
                label: 'Wikipedia link',
                archiveLink: '',
            },

        ],
        description: '',
        types: [TimelineEventType.OTHER],
        significance: 2,
        tags: ['short squeeze', 'sneeze', 'squeeze', 'gme yolo update', 'meme stocks', 'dumb money',],
    },
    {
        title: 'Michael Burry tweet',
        dateYYYYMMDD: '2021-01-29',
        urls: [
            {
                url: 'https://web.archive.org/web/20210130042803/https://twitter.com/michaeljburry/status/1355221824661983233',
                type: 'X-TWITTER',
                label: 'Michael Burry tweet (archive)',
                archiveLink: 'https://web.archive.org/web/20210130042803/https://twitter.com/michaeljburry/status/1355221824661983233',
            }
        ],
        description: '"May 2020, relatively sane times for $GME, I called in my lent-out GME shares. It took my brokers WEEKS to find my shares.  I cannot even imagine the sh*tstorm in settlement now. They may have to extend delivery timelines. #pigsgetslaughtered #nakedshorts"',
        types: [TimelineEventType.OTHER],
        significance: 1,
        imgSrc: 'assets/burry-tweet-2021-01-29.jpg',
        tags: ['michael burry', 'settlement', 'dtc', 'corruption', 'naked shorts', 'broker-dealers']
    },
    {
        title: 'Brokerages shut off the buy button',
        dateYYYYMMDD: '2021-01-28',
        urls: [
            {
                url: 'https://lemmy.whynotdrs.org/post/156058',
                type: 'LEMMY',
                label: '',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/investing/comments/l6wvia/robinhood_and_other_brokers_literally_blocking/',
                type: 'REDDIT',
                label: 'r/investing thread',
                archiveLink: '',
            },
            {
                url: 'https://www.cnbc.com/2021/01/28/robinhood-interactive-brokers-restrict-trading-in-gamestop-s.html',
                type: 'NEWS',
                label: 'CNBC.com',
                archiveLink: '',
            },
            // {
            //     url: 'https://www.benzinga.com/news/23/08/34086181/the-sec-releases-new-information-regarding-a-finra-rule-change-for-options-trading',
            //     type: 'NEWS',
            //     label: 'Benzinga.com',
            //     archiveLink: '',
            // },
        ],
        description: '',
        types: [TimelineEventType.OTHER],
        significance: 5,
        tags: ['broker-dealers', 'corruption', 'crime', 'abuse of power', 'cheating', 'wall st',]
    },

    {
        title: 'Game Stopped? Congressional hearing',
        dateYYYYMMDD: '2021-02-18',
        urls: [
            {
                url: 'https://www.youtube.com/watch?v=RfEuNHVPc_k',
                type: 'YOUTUBE',
                label: 'YouTube link',
                archiveLink: '',
            },
            {
                url: 'https://www.youtube.com/watch?v=OARREl39syQ',
                type: 'YOUTUBE',
                label: '"I like the stock" - Keith Gill',
                archiveLink: '',
            },
        ],
        description: 'Game Stopped? Who Wins and Loses When Short Sellers, Social Media, and Retail Investors Collide. Keith Gill testifies before congress House Committee on Financial Services',
        types: [TimelineEventType.OTHER],
        significance: 4,
        imgSrc: 'assets/i-like-the-stock.png',
        tags: ['short sellers', 'dfv', 'social media', 'congress', 'regulators', 'oversight']
    },
    {
        title: 'Michael Burry receives a visit from the SEC',
        dateYYYYMMDD: '2021-03-18',
        urls: [
            {
                url: 'https://markets.businessinsider.com/currencies/news/big-short-investor-michael-burry-stop-tweets-sec-regulators-visit-2021-3-1030222890                ',
                type: 'NEWS',
                label: 'businessinsider.com',
                archiveLink: '',
            },
        ],
        description: '"Tweeting and getting in the news lately apparently has caused the SEC to pay us a visit," the Scion Asset Management boss said in a now-deleted tweet.',
        types: [TimelineEventType.OTHER],
        significance: 1,
        tags: ['michael burry', 'sec', 'tweets', 'social media']
    },

    {
        title: 'GME YOLO update — Apr 16 2021 — final update',
        dateYYYYMMDD: '2021-04-16',
        urls: [
            {
                url: 'https://www.reddit.com/r/wallstreetbets/comments/msblc3/gme_yolo_update_apr_16_2021_final_update/?sort=top',
                type: 'REDDIT',
                label: 'DFV on r/wallstreetbets',
                archiveLink: '',
            },
            {
                url: 'https://twitter.com/ryancohen/status/1383204653630914563',
                type: 'X-TWITTER',
                label: 'RC Tweet - "👊"',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/msgqpc/dfv_is_streaming_and_now_gamestop_is_tweeting_at/',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: 'DFV’s final reddit post',
        types: [TimelineEventType.SOCIAL_MEDIA],
        significance: 3,
        imgSrc: 'assets/dfv-loading.jpg',
        tags: ['dfv', 'gme yolo update', 'wallstreetbets', ]
    },
    {
        title: 'Gary Gensler assumes position of chair of the SEC',
        dateYYYYMMDD: '2021-04-17',
        urls: [
            {
                url: 'https://en.wikipedia.org/wiki/Gary_Gensler',
                type: 'WIKIPEDIA',
                label: 'Wikipedia link',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/mqub8k/gary_gensler_confirmed_as_new_sec_chairman/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            }
        ],
        description: '',
        types: [TimelineEventType.OTHER],
        significance: 1,
        imgSrc: 'assets/gensler-loading.png',
        tags: ['Gary Gensler', 'SEC'],
    },
    {
        title: 'Roaring Kitty Tweet',
        dateYYYYMMDD: '2021-06-01',
        urls: [
            {
                url: 'https://twitter.com/theroaringkitty/status/1399727581369409539',
                type: 'X-TWITTER',
                label: 'Roaring Kitty tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/npupq3/roaring_kitty_on_twitter/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/npuu7r/for_anyone_having_trouble_viewing_the_video_in/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
            {
                url: 'https://twitter.com/ryancohen/status/1399526466770059268',
                type: 'X-TWITTER',
                label: 'Unrelated - RC Tweet "God bless 🇺🇸"',
                archiveLink: '',
            },
        ],
        description: 'DFV aka Roaring Kitty tweets an observing cat with background music of O Fortuna',
        types: [TimelineEventType.SOCIAL_MEDIA],
        significance: 1,
        imgSrc: 'assets/dfv-tweet-2021-06-01.PNG',
        tags: ['dfv']
    },



    {
        title: 'Michael Burry tweet',
        dateYYYYMMDD: '2021-06-15',
        urls: [
            {
                url: 'https://web.archive.org/web/20210616051602/https://twitter.com/michaeljburry/status/1404803383589060618',
                type: 'X-TWITTER',
                label: 'Michael Burry tweet (archive)',
                archiveLink: 'https://web.archive.org/web/20210616051602/https://twitter.com/michaeljburry/status/1404803383589060618',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/o0fdnl/michael_burry_vol2_jacked_to_the_tits/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '"People always ask me what is going on in the markets. It is simple. Greatest Speculative Bubble of All Time in All Things. By two orders of magnitude. #FlyingPigs360"',
        types: [TimelineEventType.OTHER],
        significance: 1,
        tags: ['michael burry', 'bubble', 'markets']
    },
    {
        title: 'DFVs former employer receives fine of $4.75 million from Massachusetts securities regulators',
        dateYYYYMMDD: '2021-09-16',
        urls: [
            {
                url: 'https://www.reuters.com/business/finance/massachusetts-fines-massmutual-475-mln-failing-supervise-roaring-kitty-other-2021-09-16/?taid=61438d2de56df4000174c11e&utm_campaign=trueAnthem:+Trending+Content&utm_medium=trueAnthem&utm_source=twitter',
                type: 'NEWS',
                label: 'reuters.com',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/ppfa9q/former_employer_of_roaring_kitty_fined_4_million/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread September 16',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/q6pfjj/dfvs_employer_fined_4m_for_inadequate_supervision/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread October 12',
                archiveLink: '',
            }
        ],
        description: '"State regulators found MassMutual failed to detect nearly 1,700 trades by Gill, who was able to execute at least two trades in GameStop in excess of $700,000, beyond a company limit."',
        types: [TimelineEventType.SOCIAL_MEDIA],
        significance: 1,
        tags: ['dfv', 'mass mutual', 'opposition', 'regulation', 'Massachusetts']
    },
    {
        title: 'SEC publishes the GameStop report',
        dateYYYYMMDD: '2021-10-18',
        urls: [
            {
                url: 'https://www.sec.gov/files/staff-report-equity-options-market-struction-conditions-early-2021.pdf',
                type: 'DOCUMENT',
                label: 'SEC link',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/qavn6v/superstonk_megathread_for_the_sec_staff_report_on/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk megathread',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/qavclr/official_link_to_the_sec_report_about_the_one/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/qbjhiv/fox_business_sec_gamestop_report_segment_2_with/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread regarding FOX business segment',
                archiveLink: '',
            },

        ],
        description: '',
        types: [TimelineEventType.OTHER],
        significance: 3,
        tags: ['SEC', 'gamma squeeze', 'short squeeze', 'squeeze', 'cover', 'short sellers', 'sentiment', 'naked', 'naked short selling', 'xrt', 'etf', 'short interest', 'exchange act', 'broker-dealers', 'finra', 't+2', 'options',]
    },
    {
        title: 'Financial Stability Oversight Council publishes Annual Report, saying that a single security exhibited idiosyncratic risk ',
        dateYYYYMMDD: '2021-12-17',
        urls: [
            {
                url: 'https://home.treasury.gov/system/files/261/FSOC2021AnnualReport.pdf',
                type: 'DOCUMENT',
                label: 'US Treasury link',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/rivizr/so_it_was_never_revealed_which_stock_had/',
                type: 'REDDIT',
                label: 'Superstonk thread - December 17, 2021',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/ztmutp/there_is_a_single_security_exhibiting/',
                type: 'REDDIT',
                label: 'Superstonk thread - December 23, 2022',
                archiveLink: '',
            },
        ],
        description: '',
        types: [TimelineEventType.OTHER],
        significance: 2,
        tags: ['fsoc', 'idiosyncratic risk', 'treasury', 'usa',]
    },
    {
        title: 'Superstonk participates in r/place 2022',
        dateYYYYMMDD: '2022-04-04',
        urls: [
            {
                url: 'https://www.reddit.com/r/place/comments/twft1q/full_screenshot_of_rplace_2022/',
                type: 'REDDIT',
                label: 'Full screenshot of r/place 2022',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/tts2vw/updated_coordinates_for_rplace/',
                type: 'REDDIT',
                label: 'Superstonk thread April 1 2022',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/tur8b5/updated_rplace_design_alliances/',
                type: 'REDDIT',
                label: 'Superstonk thread April 2 2022',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/tvdw8n/i_recreated_the_rplace_image_on_ps_and_its/',
                type: 'REDDIT',
                label: 'Superstonk thread April 3 2022',
                archiveLink: '',
            },

        ],
        description: '',
        types: [TimelineEventType.OTHER],
        significance: 1,
        imgSrc: 'assets/superstonk-r-place.png',
        tags: ['reddit', 'suerstonk', 'community', 'place']
    },
    {
        title: 'Pulte enters the fray',
        dateYYYYMMDD: '2022-04-09',
        urls: [
            {
                url: 'https://lemmy.whynotdrs.org/post/199572',
                type: 'LEMMY',
                label: '',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/tzxia1/hi_its_pulte/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk - Hi Its Pulte',
                archiveLink: '',
            },

        ],
        description: 'After engaging with Ryan Cohen on Twitter in discussions about BCG, Pulte begins to engage with Superstonk',
        types: [TimelineEventType.OTHER],
        significance: 3,
        imgSrc: 'assets/bill-pulte.jpg',
        tags: ['pulte', 'bcg', 'superstonk']
    },
    {
        title: 'Melvin Capital announces it will be shutting down',
        dateYYYYMMDD: '2022-05-18',
        urls: [
            {
                url: 'https://www.reuters.com/markets/us/hedge-fund-melvin-capital-tells-investors-it-plans-shut-down-letter-2022-05-18/',
                type: 'NEWS',
                label: 'Reuters.com',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/ussx2r/the_melvin_capital_shutdown_isnt_what_you_think/',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/ut71as/ken_takes_zero_accountability_again_puts_all_the/',
                type: 'REDDIT',
                label: 'Superstonk thread - May 19',
                archiveLink: '',
            },
            {
                url: 'https://en.wikipedia.org/wiki/Melvin_Capital',
                type: 'WIKIPEDIA',
                label: 'Melvin Capital - Wikipedia',
                archiveLink: '',
            },
        ],
        description: '',
        types: [TimelineEventType.OTHER],
        significance: 3,
        tags: ['melvin capital', 'gabe plotkin', 'hedge fund', 'failure', 'collapse'],
    },
    
    {
        title: 'An example of rot within the system',
        dateYYYYMMDD: '2022-09-21',
        urls: [
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/xkiiog/this_moment_from_the_house_committee_on_financial/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/xmujd3/the_big_short_director_adam_mckay_tweeted_a/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread about Adam Mckay tweeting this',
                archiveLink: '',
            },
            {
                url: 'https://jacobin.com/2022/09/trey-hollingsworth-bank-of-america-revolving-door-lobbying/',
                type: 'NEWS',
                label: 'jacobin.com',
                archiveLink: '',
            },
        ],
        description: 'A team member of congressional representative Trey Hollingsworth goes from overseeing the banks to joining Bank of America where her father already works.',
        types: [TimelineEventType.OTHER],
        significance: 1,
        imgSrc: 'assets/2022-09-21-boa-subversion.PNG',
        tags: ['corruption', 'congress', 'trey hollingsworth', 'bank of america', 'regulatory capture', 'regulation', 'lobbying' ],
    },

    {
        title: 'Crypto giant FTX collapses into bankruptcy',
        dateYYYYMMDD: '2022-11-12',
        urls: [
            {
                url: 'https://www.bbc.co.uk/news/business-63601213',
                type: 'NEWS',
                label: 'BBC.co.uk',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/ytxb95/ftx_megathread/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },

        ],
        description: '',
        types: [TimelineEventType.OTHER],
        significance: 2,
        tags: ['ftx', 'web3', 'crypto' ],
    },
    {
        title: 'The Ryan Cohen Interview with Joe Fonicello of GMEdd.com',
        dateYYYYMMDD: '2022-11-20',
        urls: [
            {
                url: 'https://www.youtube.com/watch?v=uN2Dw8AOdMk',
                type: 'YOUTUBE',
                label: 'YouTube link',
                archiveLink: '',
            },
            {
                url: 'https://lemmy.whynotdrs.org/post/231867',
                type: 'LEMMY',
                label: 'Full transcript, discussion',
                archiveLink: '',    
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/z0e1fq/gmedd_interview_with_ryan_cohen/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/wallstreetbets/comments/z0g9qb/a_ryan_cohen_interview/?sort=top',
                type: 'REDDIT',
                label: 'r/wallstreetbets thread',
                archiveLink: '',
            },
        ],
        description: '',
        types: [TimelineEventType.RC],
        significance: 4,
        imgSrc: 'assets/rc-gmedd-interview.png',
        tags: ['ryan cohen', 'gmedd', 'joe fonicello', 'interview', 'chewy', 'bbby', 'tweets' ],
    },
    {
        
        
        title: 'Zelda Tears of the Kingdom Midnight Release',
        dateYYYYMMDD: '2023-05-13',
        urls: [
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/13fa1bm/midnight_release_for_the_legend_of_zelda_tears_of/',
                type: 'REDDIT',
                label: 'Midnight Release For The Legend of Zelda: Tears of the Kingdom - Vancouver Island',
                archiveLink: '',
            },
            {
                url: 'https://www.tiktok.com/@blogto/video/7232273953799064837?lang=en',
                type: 'OTHER',
                label: 'the lineup went AROUND the block 😬🎮 ⚔️ #toronto ',
                archiveLink: '',
            },
            
        ],
        description: 'GameStop: a thriving brick and mortar retailer',
        types: [TimelineEventType.OTHER],
        significance: 2,
        tags: ['gaming', 'nintendo', 'release', 'zelda'],
    },
    {
        
        title: 'U.S. representative French Hill told Gary Gensler that he shouldn’t pursue market reforms based on “one meme stock event”',
        dateYYYYMMDD: '2023-09-27',
        urls: [
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/16txiqj/this_is_the_part_where_french_hill_told_gensler/',
                type: 'REDDIT',
                label: 'Superstonk post',
                archiveLink: '',
            },
            {
                url: 'https://lemmy.whynotdrs.org/post/221351',
                type: 'LEMMY',
                label: 'What is a meme stock?',
                archiveLink: '',
            },
            
        ],
        description: '"I really urge you to get these equity markets proposals in order and to rely on data and not just emotion or one meme stock event to make policy"',
        types: [TimelineEventType.OTHER],
        significance: 1,
        tags: ['meme stock', 'politics', 'Gary Gensler', 'congress' ],
    },
    {
        title: 'Sam Bankman-Fried found guilty of fraud',
        dateYYYYMMDD: '2023-11-02',
        urls: [
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/17mhjeh/sbf_found_guilty/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk post',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/17milh5/sam_bankmanfried_has_been_found_guilty_he_faces/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk post',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/CryptoCurrency/comments/17mhie4/excrypto_mogul_sam_bankmanfried_convicted_of/?sort=top',
                type: 'REDDIT',
                label: 'r/crytocurrency post',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/CryptoCurrency/comments/17m4xc5/sam_bankmanfried_on_verge_of_tears_as_his_lawyer/?sort=top',
                type: 'REDDIT',
                label: 'r/crytocurrency post',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/news/comments/17mhkec/ftx_founder_sambankmanfried_convicted_of/?sort=top',
                type: 'REDDIT',
                label: 'r/news post',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/technology/comments/17mhspy/sam_bankmanfried_found_guilty_on_all_seven_counts/?sort=top',
                type: 'REDDIT',
                label: 'r/technology post',
                archiveLink: '',
            },
            {
                url: 'https://www.cbc.ca/news/world/bankman-fried-convicted-1.7017241',
                type: 'NEWS',
                label: 'CBC',
                archiveLink: '',
            },
            {
                url: 'https://www.cnbc.com/2023/11/02/sam-bankman-fried-found-guilty-on-all-seven-criminal-fraud-counts.html',
                type: 'NEWS',
                label: 'CNBC',
                archiveLink: '',
            },
            {
                url: 'https://www.npr.org/2023/11/02/1210100678/sam-bankman-fried-trial-verdict-ftx-crypto',
                type: 'NEWS',
                label: 'NPR',
                archiveLink: '',
            },
            {
                url: 'https://www.theguardian.com/business/2023/nov/02/sam-bankman-guilty-ftx-alameda',
                type: 'NEWS',
                label: 'The Guardian',
                archiveLink: '',
            },
            {
                url: 'https://lemmy.whynotdrs.org/post/356880',
                type: 'LEMMY',
                label: '',
                archiveLink: '',
            },
        ],
        description: '',
        types: [TimelineEventType.OTHER],
        significance: 2,
        tags: ['SBF', 'Sam Bankman-Fried', 'FTX', 'fraud', 'crime', 'cryptocurrency' ],
    },
    {
        title: 'US to lower barriers on imposing "too big to fail" label on firms',
        dateYYYYMMDD: '2023-11-04',
        urls: [
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/17n3vqa/here_is_the_too_big_to_fail_meeting_discussion/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk - Here is the Too Big to Fail meeting discussion',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/17nfl54/regulators_make_it_easier_to_label_nonbanks_such/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk - Regulators make it easier to label non-banks (such as hedge funds and brokers) as "too big to fail", in latest oversight move.',
                archiveLink: '',
            },
            {
                url: 'https://news.yahoo.com/us-lower-barriers-imposing-too-194059890.html',
                type: 'NEWS',
                label: 'US to lower barriers on imposing "too big to fail" label on firms',
                archiveLink: '',
            },
            
        ],
        description: '',
        types: [TimelineEventType.OTHER],
        significance: 2,
        tags: ['regulators', 'fsoc', 'treasury', 'yellen', 'banks', 'banking', 'finance', 'wall street', 'too big to fail' ],
    },
    {
        
        title: "Moody’s changes outlook on United States’ ratings to 'negative'",
        dateYYYYMMDD: '2023-11-10',
        urls: [
            {
                url: 'https://www.reddit.com/r/Economics/comments/17sf7vj/moodys_changes_outlook_on_united_states_ratings/?sort=top',
                type: 'REDDIT',
                label: 'r/Economics',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/17sexdr/moodys_cuts_usa_outlook_to_negative_citing_higher/?sort=top',
                type: 'REDDIT',
                label: 'r/superstonk',
                archiveLink: '',
            },           
        ],
        description: '',
        types: [TimelineEventType.OTHER],
        significance: 2,
        tags: ['moodys', 'credit rating', 'credit', 'rating', 'USA' ],
    },
    {
        
        title: "Larry Cheng, GameStop board member, gives a brief interview with Bill Pulte on the PP Show",
        dateYYYYMMDD: '2023-12-14',
        urls: [
            {
                url: 'https://lemmy.whynotdrs.org/post/511231',
                type: 'LEMMY',
                label: 'Full trancript, discussion on Lemmy',
                archiveLink: '',
            },
            {
                url: 'https://youtu.be/9GCGn_STx-o?t=7932',
                type: 'YOUTUBE',
                label: 'Pulte + PP LIVE 2023 Feat. Larry Cheng!!',
                archiveLink: '',
            },
            {
                url: 'https://www.thestreet.com/memestocks/gme/gamestops-director-advocates-for-retail-investors-during-dedicated-community-event',
                type: 'NEWS',
                label: 'GameStop’s Director Advocates for Retail Investors During Dedicated Community Event'
            }
        ],
        description: 'Larry Cheng gives a brief interview with Bill Pulte on the PP Show.  For some reason, this conversation is not found in any GME subreddits.',
        types: [TimelineEventType.SOCIAL_MEDIA],
        significance: 2,
        tags: ['larry cheng', 'bill pulte', 'theppshow', 'community' ],
    },
]; 