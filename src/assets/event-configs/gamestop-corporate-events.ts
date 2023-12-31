import { TimelineEventConfig } from "src/app/pages/display-timeline/timeline-items/timeline-item/timeline-event-config.interface";
import { TimelineEventType } from "src/app/pages/display-timeline/timeline-items/timeline-item/timeline-event-type.enum";

export const corporateEvents: TimelineEventConfig[] = [
    {
        title: 'GameStop Reports First Quarter 2020 Results',
        dateYYYYMMDD: '2020-06-09',
        urls: [
            {
                url: 'https://investor.gamestop.com/news-releases/news-release-details/gamestop-reports-first-quarter-results',
                type: 'GAMESTOP',
                label: 'Earnings Release',
                archiveLink: '',
            },
            {
                url: 'https://investor.gamestop.com/sec-filings/sec-filing/10-q/0001326380-20-000060',
                type: 'DOCUMENT',
                label: 'Form 10-Q',
                archiveLink: '',
            },
        ],
        description: '',
        types: [TimelineEventType.CORP],
        significance: 1,
        tags: ['corporate', 'earnings', '10-Q'],
    },
    {
        title: 'GameStop Reports Second Quarter 2020 Results',
        dateYYYYMMDD: '2020-09-09',
        urls: [
            {
                url: 'https://investor.gamestop.com/news-releases/news-release-details/gamestop-reports-second-quarter-results-and-strong-progress',
                type: 'GAMESTOP',
                label: 'Earnings Release',
                archiveLink: '',
            },
            {
                url: 'https://investor.gamestop.com/sec-filings/sec-filing/10-q/0001326380-20-000119',
                type: 'DOCUMENT',
                label: 'Form 10-Q',
                archiveLink: '',
            },
        ],
        description: '',
        types: [TimelineEventType.CORP],
        significance: 1,
        tags: ['corporate', 'earnings', '10-Q'],
    },
    {
        title: 'GameStop Reports Third Quarter 2020 Results',
        dateYYYYMMDD: '2020-12-08',
        urls: [
            {
                url: 'https://investor.gamestop.com/news-releases/news-release-details/gamestop-reports-third-quarter-results-positive-start-fourth',
                type: 'GAMESTOP',
                label: 'Earnings Release',
                archiveLink: '',
            },
            {
                url: 'https://investor.gamestop.com/sec-filings/sec-filing/10-q/0001326380-20-000134',
                type: 'DOCUMENT',
                label: 'Form 10-Q',
                archiveLink: '',
            },
        ],
        description: 'Q3 2020',
        types: [TimelineEventType.CORP],
        significance: 1,
        tags: ['corporate', 'earnings', '10-Q'],
    },

    {
        title: 'GameStop Reports Fourth Quarter and Fiscal 2020 Results',
        dateYYYYMMDD: '2021-03-23',
        urls: [
            {
                url: 'https://investor.gamestop.com/news-releases/news-release-details/gamestop-reports-fourth-quarter-and-fiscal-2020-results',
                type: 'GAMESTOP',
                label: 'Earnings Release',
                archiveLink: '',
            },
            {
                url: 'https://investor.gamestop.com/sec-filings/sec-filing/10-k/0001326380-21-000032',
                type: 'DOCUMENT',
                label: 'Form 10-K',
                archiveLink: '',
            },
        ],
        description: 'Q4 2020',
        types: [TimelineEventType.CORP],
        significance: 2,
        tags: ['corporate', 'earnings', '10-Q'],
    },
    {
        title: 'GameStop Completes At-The-Market Equity Offering Program',
        dateYYYYMMDD: '2021-04-05',
        urls: [
            {
                url: 'https://news.gamestop.com/news-releases/news-release-details/gamestop-completes-market-equity-offering-program ',
                type: 'GAMESTOP',
                label: 'GameStop link',
                archiveLink: '',
            },
            {
                url: 'https://lemmy.whynotdrs.org/post/251006',
                type: 'LEMMY',
                label: '',
                archiveLink: '',
            }
        ],
        description: 'The Company ultimately sold 3,500,000 shares of common stock and generated aggregate gross proceeds before commissions and offering expenses of approximately $551,000,000 ',
        types: [TimelineEventType.CORP],
        significance: 4,
        tags: ['corporate', 'atm'],
    },

    {
        title: 'GameStop announces that Ryan Cohen will be become chairman on June 9',
        dateYYYYMMDD: '2021-04-08',
        urls: [
            {
                url: 'https://www.cnbc.com/2021/04/08/gamestop-stock-up-after-company-says-ryan-cohen-to-be-chairman.html',
                type: 'NEWS',
                label: 'CNBC link',
                archiveLink: '',
            },
            {
                url: 'https://investor.gamestop.com/news-releases/news-release-details/gamestop-announces-slate-director-candidates-2021-annual-meeting',
                type: 'GAMESTOP',
                label: 'GameStop link',
                archiveLink: '',
            },
            {
                url: 'https://twitter.com/ryancohen/status/1380212953748676608?s=20',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/mmr1de/everyone_please_welcome_chairman_cohen/',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '',
        types: [TimelineEventType.CORP],
        significance: 1,
        imgSrc: 'assets/rc-chairman.jpg',
        tags: ['corporate', 'announcement', 'ryan cohen', 'board of directors', 'chairman'],
    },
    {
        title: 'GameStop Releases First Quarter 2021 Financial Results',
        dateYYYYMMDD: '2021-06-09',
        urls: [
            {
                url: 'https://investor.gamestop.com/news-releases/news-release-details/gamestop-releases-first-quarter-2021-financial-results',
                type: 'GAMESTOP',
                label: 'Earnings Release',
                archiveLink: '',
            },
            {
                url: 'https://investor.gamestop.com/sec-filings/sec-filing/10-q/0001326380-21-000066',
                type: 'DOCUMENT',
                label: 'Form 10-Q',
                archiveLink: '',
            },
            {
                url: 'https://www.youtube.com/watch?v=lB43u38BV8o',
                type: 'YOUTUBE',
                label: 'CNBC confirms that naked short selling is a real and prevalent problem',
                archiveLink: '',
            },
        ],
        description: 'Q1 2021 Ryan Cohen becomes chairman of GameStop, Matt Furlong becomes CEO',
        types: [TimelineEventType.CORP, TimelineEventType.MEDIA],
        significance: 4,
        // imgSrc: 'assets/rc-chairman.jpg'
        tags: ['corporate', 'earnings', 'ryan cohen', 'board of directors', 'chairman', 'ceo', 'matt furlong'],
    },
    {
        title: 'GameStop Completes At-The-Market Equity Offering Program',
        dateYYYYMMDD: '2021-06-22',
        urls: [
            {
                url: 'https://news.gamestop.com/news-releases/news-release-details/gamestop-completes-market-equity-offering-program-0',
                type: 'GAMESTOP',
                label: 'GameStop link',
                archiveLink: '',
            },
            {
                url: 'https://lemmy.whynotdrs.org/post/251006',
                type: 'LEMMY',
                label: '',
                archiveLink: '',
            }
        ],
        description: 'The Company ultimately sold 5,000,000 shares of common stock and generated aggregate gross proceeds before commissions and offering expenses of approximately $1,126,000,000.',
        types: [TimelineEventType.CORP],
        significance: 4,
        tags: ['corporate', 'atm']
    },
    {
        title: 'GameStop Reports Financial Results for Q2 2021',
        dateYYYYMMDD: '2021-09-08',
        urls: [
            {
                url: 'https://investor.gamestop.com/news-releases/news-release-details/gamestop-reports-financial-results-q2-2021',
                type: 'GAMESTOP',
                label: 'Earnings Release',
                archiveLink: '',
            },
            {
                url: 'https://investor.gamestop.com/sec-filings/sec-filing/10-q/0001326380-21-000090',
                type: 'DOCUMENT',
                label: 'Form 10-Q',
                archiveLink: '',
            },
        ],
        description: 'Q2 2021',
        types: [TimelineEventType.CORP],
        significance: 1,
        tags: ['corporate', 'earnings', '10-Q'],
    },
    {
        title: 'GameStop publishes 2021 Q3 financial report featuring 5.2 million (20.8 million post-split) shares directly registered',
        dateYYYYMMDD: '2021-12-08',
        urls: [
            
            {
                url: 'https://lemmy.whynotdrs.org/post/193107',
                type: 'LEMMY',
                label: '',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/rc1d5r/52_million_shares_registered_through_computershare/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
            {
                url: 'https://investor.gamestop.com/news-releases/news-release-details/gamestop-reports-financial-results-q3-2021',
                type: 'GAMESTOP',
                label: 'Earnings Release',
                archiveLink: '',
            },
            {
                url: 'https://investor.gamestop.com/sec-filings/sec-filing/10-q/0001326380-21-000129',
                type: 'DOCUMENT',
                label: 'Form 10-Q',
                archiveLink: '',
            },
        ],
        description: 'GameStop reports for the first time, as of October 30, 2021, the number of shares that have been directly registered ("DRSd")',
        types: [TimelineEventType.DRS, TimelineEventType.CORP],
        significance: 5,
        tags: ['corporate', 'earnings', '10-Q', 'drs'],
    },
    {
        title: 'GameStop Reports Fourth Quarter and Fiscal Year 2021 Results',
        dateYYYYMMDD: '2022-03-17',
        urls: [
            // {
            //     url: '',
            //     type: 'REDDIT',
            //     label: 'Superstonk thread',
            //     archiveLink: '', 
            // },
            {
                url: 'https://investor.gamestop.com/news-releases/news-release-details/gamestop-reports-fourth-quarter-and-fiscal-year-2021-results',
                type: 'GAMESTOP',
                label: 'Earnings Release',
                archiveLink: '',
            },
            {
                url: 'https://investor.gamestop.com/sec-filings/sec-filing/10-k/0001326380-22-000021',
                type: 'DOCUMENT',
                label: 'Form 10-K',
                archiveLink: '',
            },
        ],
        description: 'Q4 2021',
        types: [TimelineEventType.CORP],
        significance: 2,
        tags: ['corporate', 'earnings', '10-Q'],
    },
    {
        title: 'GameStop Launches Wallet for Cryptocurrencies and NFTs',
        dateYYYYMMDD: '2022-05-23',
        urls:[
            {
                url: 'https://news.gamestop.com/news-releases/news-release-details/gamestop-launches-wallet-cryptocurrencies-and-nfts',
                type: 'GAMESTOP',
                label: 'GameStop Launches Wallet for Cryptocurrencies and NFTs',
                archiveLink: ''
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/uvxmks/gamestop_launches_wallet_for_cryptocurrencies_and/?sort=top',
                type: 'REDDIT',
                label: 'GameStop Launches Wallet for Cryptocurrencies and NFTs',
                archiveLink: '',
            },
        ],
        description: '',
        types: [TimelineEventType.CORP],
        significance: 2,
        tags: ['corporate', 'announcement', 'crypto', 'wallet', 'web3', 'nfts', 'launch']
    },
    {
        title: 'GameStop Reports First Quarter Fiscal Year 2022 Results',
        dateYYYYMMDD: '2022-06-01',
        urls: [
            // {
            //     url: '',
            //     type: 'REDDIT',
            //     label: 'Superstonk thread',
            //     archiveLink: '', 
            // },
            {
                url: 'https://investor.gamestop.com/news-releases/news-release-details/gamestop-reports-first-quarter-fiscal-year-2022-results',
                type: 'GAMESTOP',
                label: 'Earnings Release',
                archiveLink: '',
            },
            {
                url: 'https://investor.gamestop.com/sec-filings/sec-filing/10-q/0001326380-22-000072',
                type: 'DOCUMENT',
                label: 'Form 10-Q',
                archiveLink: '',
            },
        ],
        description: 'Q1 2022',
        types: [TimelineEventType.CORP],
        significance: 1,
        tags: ['corporate', 'earnings', '10-Q'],
    },
    {
        title: 'GameStop does a 4-for-1 stock split in the form of a stock dividend',
        dateYYYYMMDD: '2022-07-21',
        urls: [
            {
                url: 'https://investor.gamestop.com/stock-split',
                type: 'GAMESTOP',
                label: 'GameStop guidance',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/wdqiu5/confusion_over_a_stock_split_vs_dividend/',
                type: 'REDDIT',
                label: 'Superstonk thread - August 1 ',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/wedhuw/this_is_a_stock_split_this_is_not_a_dividend_this/',
                type: 'REDDIT',
                label: 'Superstonk thread - August 2',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/wh760e/gamestop_statement_about_stock_split_in_the_form/',
                type: 'REDDIT',
                label: 'Superstonk thread - August 5',
                archiveLink: '',
            },
        ],
        description: '',
        types: [TimelineEventType.CORP],
        significance: 3,
        specialIdentifier: 'STOCK-SPLIT',
        tags: ['corporate', 'stock split', 'split'],
    },
    {
        title: 'GameStop Reports Second Quarter Fiscal Year 2022 Results',
        dateYYYYMMDD: '2022-09-07',
        urls: [    
            {
                url: 'https://investor.gamestop.com/news-releases/news-release-details/gamestop-reports-second-quarter-fiscal-year-2022-results',
                type: 'GAMESTOP',
                label: 'Earnings Release',
                archiveLink: '',
            },
            {
                url: 'https://investor.gamestop.com/sec-filings/sec-filing/10-q/0001326380-22-000126',
                type: 'DOCUMENT',
                label: 'Form 10-Q',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/x8f6yw/gamestop_forms_partnership_with_ftx/',
                type: 'REDDIT',
                label: 'GameStop forms partnership with FTX',
                archiveLink: '',
            },
            {
                url: 'https://news.gamestop.com/news-releases/news-release-details/gamestop-forms-partnership-ftx',
                type: 'GAMESTOP',
                label: 'GameStop forms partnership with FTX',
                archiveLink: '',
            },
        ],
        description: 'Q2 2022',
        types: [TimelineEventType.CORP],
        significance: 2,
        tags: ['FTX', 'partnership', 'earnings', 'corporate']
    },


    {
        title: 'GameStop Reports Third Quarter Fiscal Year 2022 Results',
        dateYYYYMMDD: '2022-12-07',
        urls: [
            // {
            //     url: '',
            //     type: 'REDDIT',
            //     label: 'Superstonk thread',
            //     archiveLink: '', 
            // },
            {
                url: 'https://investor.gamestop.com/news-releases/news-release-details/gamestop-reports-third-quarter-fiscal-year-2022-results',
                type: 'GAMESTOP',
                label: 'Earnings Release',
                archiveLink: '',
            },
            {
                url: 'https://investor.gamestop.com/sec-filings/sec-filing/10-q/0001326380-22-000137',
                type: 'DOCUMENT',
                label: 'Form 10-Q',
                archiveLink: '',
            },
        ],
        description: 'Q3 2022',
        types: [TimelineEventType.CORP],
        significance: 1,
        tags: ['corporate', 'earnings', '10-Q'],
    },
    {
        title: 'GameStop Reports Fourth Quarter and Fiscal Year 2022 Results',
        dateYYYYMMDD: '2023-03-21',
        urls: [
            // {
            //     url: '',
            //     type: 'REDDIT',
            //     label: 'Superstonk thread',
            //     archiveLink: '', 
            // },
            {
                url: 'https://investor.gamestop.com/news-releases/news-release-details/gamestop-reports-fourth-quarter-and-fiscal-year-2022-results',
                type: 'GAMESTOP',
                label: 'Earnings Release',
                archiveLink: '',
            },
            {
                url: 'https://investor.gamestop.com/sec-filings/sec-filing/10-k/0001326380-23-000019',
                type: 'DOCUMENT',
                label: 'Form 10-K',
                archiveLink: '',
            },
            {
                url: 'https://investor.gamestop.com/static-files/fe325562-c087-4fad-809c-efd183364196',
                type: 'GAMESTOP',
                label: '2022 Report',
                archiveLink: '',
            },
        ],
        description: 'Q4 2022',
        types: [TimelineEventType.CORP],
        significance: 2,
        tags: ['corporate', 'earnings', '10-Q'],
    },
    {
        title: 'GameStop Discloses First Quarter 2023 Results',
        dateYYYYMMDD: '2023-06-07',
        urls: [
            // {
            //     url: '',
            //     type: 'REDDIT',
            //     label: 'Superstonk thread',
            //     archiveLink: '', 
            // },
            {
                url: 'https://investor.gamestop.com/news-releases/news-release-details/gamestop-discloses-first-quarter-2023-results',
                type: 'GAMESTOP',
                label: 'Earnings Release',
                archiveLink: '',
            },
            {
                url: 'https://investor.gamestop.com/sec-filings/sec-filing/10-q/0001326380-23-000028',
                type: 'DOCUMENT',
                label: 'Form 10-Q',
                archiveLink: '',
            },
        ],
        description: 'Q1 2023',
        types: [TimelineEventType.CORP],
        significance: 1,
        tags: ['corporate', 'earnings', '10-Q'],
    },
    {
        title: 'GameStop Announces Election of Ryan Cohen as Executive Chairman',
        dateYYYYMMDD: '2023-07-07',
        urls: [
            {
                url: 'https://news.gamestop.com/news-releases/news-release-details/gamestop-announces-election-ryan-cohen-executive-chairman',
                type: 'GAMESTOP',
                label: 'GameStop link',
                archiveLink: '',
            },
        ],
        description: '',
        types: [TimelineEventType.CORP],
        significance: 3,
        tags: ['corporate', 'announcement', 'ryan cohen', 'executive chairman', 'chairman', 'ceo', 'furlong'],
    },
    {
        title: 'GameStop Discloses Second Quarter 2023 Results',
        dateYYYYMMDD: '2023-09-06',
        urls: [
            {
                url: 'https://gamestop.gcs-web.com/news-releases/news-release-details/gamestop-discloses-second-quarter-2023-results',
                type: 'GAMESTOP',
                label: 'Earnings Release',
                archiveLink: '',
            },
            {
                url: 'https://gamestop.gcs-web.com/sec-filings/sec-filing/10-q/0001326380-23-000047',
                type: 'DOCUMENT',
                label: 'Form 10-Q',
                archiveLink: '',
            },
            {
                url: 'https://lemmy.whynotdrs.org/post/179071?scrollToComments=true',
                type: 'LEMMY',
                label: 'GameStop Discloses Second Quarter 2023 Results Gamestop Corp.',
                archiveLink: '', 
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/16bwilc/holy_schmoly_i_just_compared_all_form_10q_from/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread - HOLY SCHMOLY: I just compared all form 10-Q from 2021-2023',
                archiveLink: '', 
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/16bv9e9/754m_drsd/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread - 75.4m DRSd',
                archiveLink: '', 
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/16buhp3/gamestop_second_quarter_2023_results/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread - GameStop Second Quarter 2023 Results!',
                archiveLink: '', 
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/16buggn/gamestop_discloses_second_quarter_2023_results/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread - GameStop Discloses Second Quarter 2023 Results',
                archiveLink: '', 
            },
        ],
        description: 'Q2 2023',
        types: [TimelineEventType.CORP],
        significance: 2,
        tags: ['corporate', 'earnings', '10-Q'],
    },

    {
        title: 'GameStop Announces Election of Ryan Cohen as Chief Executive Officer',
        dateYYYYMMDD: '2023-09-28',
        urls: [
            {
                url: 'https://gamestop.gcs-web.com/news-releases/news-release-details/gamestop-announces-election-ryan-cohen-chief-executive-officer?fbclid=IwAR2UTugbErkjZ5hmWfx6DywYdHPG446WNUGUJFSFgwcmFr1ixzW-xKmOxzY',
                type: 'GAMESTOP',
                label: 'GameStop Announcement',
                archiveLink: '',
            },
            {
                url: 'https://gamestop.gcs-web.com/node/20241/html',
                type: 'GAMESTOP',
                label: 'Form 8-K',
                archiveLink: '',
            },
            {
                url: 'https://lemmy.whynotdrs.org/post/251667?scrollToComments=true',
                type: 'LEMMY',
                label: '',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/16uc4ve/gamestop_board_elected_ryan_cohen_as_ceo/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '', 
            },
            {
                url: 'https://lemmy.whynotdrs.org/post/252364?scrollToComments=true',
                type: 'LEMMY',
                label: 'Ryan Cohens email to corporate employees',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/16urjos/ryan_cohens_email_to_corporate_employees_and/?sort=top',
                type: 'REDDIT',
                label: 'Ryan Cohens email to corporate employees',
                archiveLink: '',
            },
            // https://www.youtube.com/watch?v=KZ5gskJY3LM
            // {
            //     url: 'https://www.reddit.com/r/ThePPShow/comments/16uc0li/ryan_cohen_elected_game_stop_ceo_immediately/?sort=top',
            //     type: 'REDDIT',
            //     label: 'thePPshow thread',
            //     archiveLink: '', 
            // },            
        ],
        description: '',
        types: [TimelineEventType.CORP, TimelineEventType.RC],
        significance: 3,
        tags: ['corporate', 'announcement', 'ceo', 'ryan cohen', '8k'],
    },
    {
        title: 'GameStop Discloses Second Quarter 2023 Results',
        dateYYYYMMDD: '2023-12-06',
        urls: [
            {
                url: 'https://investor.gamestop.com/news-releases/news-release-details/gamestop-discloses-third-quarter-2023-results',
                type: 'GAMESTOP',
                label: 'Earnings Release',
                archiveLink: '',
            },
            {
                url: 'https://investor.gamestop.com/sec-filings/sec-filing/10-q/0001326380-23-000063',
                type: 'DOCUMENT',
                label: 'Form 10-Q',
                archiveLink: '',
            },
            {
                url: 'https://lemmy.whynotdrs.org/post/455516',
                type: 'LEMMY',
                label: '',
                archiveLink: '', 
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/18ce8e1/earnings/',
                type: 'REDDIT',
                label: 'Earnings',
                archiveLink: '', 
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/18cgyk6/gamestop_board_approves_investment_policy/',
                type: 'REDDIT',
                label: 'GameStop board approves Investment Policy delegating portfolio management to CEO Ryan Cohen',
                archiveLink: '', 
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/18ceosw/still_stuck_at_25_drs_something_is_not_adding_up/',
                type: 'REDDIT',
                label: 'Still stuck at 25% DRS... Something is not adding up',
                archiveLink: '', 
            },
        ],
        description: 'Q3 2023',
        types: [TimelineEventType.CORP],
        significance: 2,
        tags: ['corporate', 'earnings', '10-Q'],
    },
];