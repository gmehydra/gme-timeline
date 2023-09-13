import { TimelineItemConfig } from "../timeline-item/timeline-item-config.interface";
import { TimelineItemType } from "../timeline-item/timeline-item-type.enum";

export const mediaItemConfigs: TimelineItemConfig[] = [
    {
        title: 'Thomas Peterffy says “we came dangerously close to the collapse of the entire system”',
        dateYYYYMMDD: '2021-02-17',
        urls: [
            {
                url: 'https://www.youtube.com/watch?v=_TPYuIRVfew&t=37s',
                type: 'YOUTUBE',
                label: 'YouTube link',
                archiveLink: '',
            },
        ],
        description: '',
        type: [TimelineItemType.MEDIA],
        significance: 2,
    },
        // new TimelineItem(
    //     'GameStop: The Wall Street Hijack',
    //     '2021-04-08',
    //     'https://www.imdb.com/title/tt14439472/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_gamestop',
    //     'Low impact movie:: A group of young, risk-embracing day traders used social media to organize a massive stock buy-up. Jordan Belfort provides details about the story, exploring how it shook the world""s markets.',
    //     [TimelineItemType.MEDIA],
    //     1,
    // ),
    {
        title: 'Melissa Lee of CNBC:  "Naked Shorts, Yea"',
        dateYYYYMMDD: '2021-06-04',
        urls: [
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/nshffm/naked_shorts_just_confirmed_by_the_enemies/',
                type: 'REDDIT',
                label: 'Superstonk link',
                archiveLink: '',
            },
            {
                url: 'https://youtu.be/XpHcA8Y1mWI?t=94',
                type: 'YOUTUBE',
                label: 'YouTube link',
                archiveLink: '',
            },
        ],
        description: 'In response to the statement: "There are a lot of short sellers borrowing stock that they didn`t have," Melissa Lee says:  "Naked shorts, yea."',
        type: [TimelineItemType.MEDIA],
        significance: 2,
        imgSrc: 'assets/melissa-lee-naked-shorts.png'
    },    
        // {
    //     title: 'CNBC confirms that naked short selling is a real and prevalent problem',
    //     dateYYYYMMDD: '2021-06-09',
    //     urls: [
    //         {
    //             url: 'https://www.youtube.com/watch?v=lB43u38BV8o',
    //             type: 'YOUTUBE',
    //             label: 'CNBC confirms that naked short selling is a real and prevalent problem',
    //             archiveLink: '',
    //         },
    //     ],
    //     description: '', 
    //     type: [TimelineItemType.MEDIA],
    //     significance: 1,
    // },    
    {
        title: '"Sell the stock first and ask questions later" says Anthony Chukumba',
        dateYYYYMMDD: '2021-09-09',
        urls: [
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/pkvxdz/cnbc_interview_trying_hard_to_create_a_narrative/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread with video',
                archiveLink: '',
            }
        ],
        description: 'Two months after stating that "I will never cover GameStop ever again, there is just no point", Anthony Chukumba of Loop Capital goes on CNBC and says of GameStops recent earnings call: "That earnings call was shameful.  Absolutely positively shameful... it is shameful.  It was disrespectful to their shareholders...".  Followed soon after by: "Sell the stock first and ask questions later"',
        type: [TimelineItemType.MEDIA],
        significance: 2,
        imgSrc: 'assets/cnbc-2021-09-09.PNG'
    },
    {
        title: 'GameStop: Rise of the Players - Documentary Movie ',
        dateYYYYMMDD: '2022-01-28',
        urls: [
            {
                url: 'https://www.imdb.com/title/tt17200376/?ref_=nv_sr_srsg_1_tt_8_nm_0_q_gamestop',
                type: 'OTHER',
                label: 'IMDB link',
                archiveLink: '',
            },
        ],
        description: '"The David-and-Goliath story about the group of amateur investors who bought stock in the failing video game chain, GameStop."',
        type: [TimelineItemType.MEDIA],
        significance: 2,
    },
    {
        title: 'Gaming Wall St – HBO max - 2 episode miniseries',
        dateYYYYMMDD: '2022-03-03',
        urls: [
            {
                url: 'https://en.wikipedia.org/wiki/Gaming_Wall_Street',
                type: 'WIKIPEDIA',
                label: 'Wikipedia link',
                archiveLink: '',
            },
            {
                url: 'https://www.youtube.com/watch?v=i-tKiiHWGkE',
                type: 'YOUTUBE',
                label: '"I would illegally naked short sell stocks every day.  Every day."',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/13smw84/i_would_illegally_naked_short_sale_stocks_every/',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
            {
                url: 'https://lemmy.whynotdrs.org/post/197163',
                type: 'LEMMY',
                label: '',
                archiveLink: '',
            }
        ],
        description: 'Explores the stock market frenzy of GameStop, and how a group of armchair investors and online vigilantes ultimately helped expose the dark underbelly of Wall Street.',
        type: [TimelineItemType.MEDIA],
        significance: 2,
    },
    {
        title: 'SEC posts a video disparaging meme-stocks',
        dateYYYYMMDD: '2022-05-31',
        urls: [
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/v22zvj/the_official_sec_youtube_channel_just_shared_a/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
            {
                url: 'https://www.youtube.com/watch?v=av3k_lcGm9g',
                type: 'YOUTUBE',
                label: 'YouTube video',
                archiveLink: '',
            },
            {
                url: 'https://en.wikipedia.org/wiki/Meme_stock',
                type: 'WIKIPEDIA',
                label: 'Meme stock - Wikipedia',
                archiveLink: '',
            }
        ],
        description: 'What even is a meme stock and why would the SEC go out of their way to disparage people that invest in meme stocks?',
        type: [TimelineItemType.MEDIA],
        significance: 2,
        imgSrc: 'assets/sec-meme-stocks.PNG'
    },
    


    {
        title: 'CNBC watches Superstonk',
        dateYYYYMMDD: '2022-08-29',
        urls: [
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/x0o988/cnbc_cuts_off_guest_immediately_for_mentioning/',
                type: 'REDDIT',
                label: 'Superstonk - CNBC cuts off guest immediately for mentioning “shorts covering”',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/x1qgr9/its_glorious_cnbc_feeling_the_need_to_explain/',
                type: 'REDDIT',
                label: 'Superstonk - Its glorious! CNBC feeling the need to explain themselves. ',
                archiveLink: '',
            },
        ],
        description: 'CNBC noticed conversations that were critical of them that were happening on superstonk and felt the need to make a segment the next day explaining themselves',
        type: [TimelineItemType.MEDIA],
        significance: 2,
        imgSrc: 'assets/cnbc-2022-08-30.PNG'
    },


    

    {
        title: 'Eat the Rich: The GameStop Saga - Netflix 3 episode series',
        dateYYYYMMDD: '2022-09-28',
        urls: [
            {
                url: 'https://www.imdb.com/title/tt14036920/?ref_=nv_sr_srsg_3_tt_8_nm_0_q_gamestop',
                type: 'OTHER',
                label: 'IMDB link',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/xcmvx3/eat_the_rich_the_gamestop_saga_netflix/',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/xt78an/boomer_dad_texted_me_if_ive_seen_the_movie_eat/',
                type: 'REDDIT',
                label: 'Superstonk thread - October 1',
                archiveLink: '',
            },
        ],
        description: 'A look at the layers of intrigue, from the supercharged power of digital communities to the gamification of trading.',
        type: [TimelineItemType.MEDIA],
        significance: 2,
        imgSrc: 'assets/eat-the-rich.PNG'
    },
    {
        title: 'Apes Together Strong released',
        dateYYYYMMDD: '2023-05-22',
        urls: [
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/13oyf8w/apes_together_strong_official_release_statement/',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
            {
                url: 'https://vimeo.com/ondemand/433664',
                type: 'OTHER',
                label: 'Apes Together Strong on Vimeo',
                archiveLink: '',
            },
            {
                url: 'https://www.youtube.com/watch?v=TwNzVWDDb6s',
                type: 'YOUTUBE',
                label: 'Apes Together Strong trailer',
                archiveLink: '',
            },
        ],
        description: 'After 2 years, GameStop investors (Mulligan bros) release Apes Together Strong, a documentary documentary about the endemic corruption on Wall Street and the “Apes” fighting for transparency and accountability in our capital markets.',
        type: [TimelineItemType.MEDIA],
        significance: 2,
    },
    {
        title: 'Making of the Meme King - CNBC documentary',
        dateYYYYMMDD: '2023-06-06',
        urls: [
            {
                url: 'https://www.imdb.com/title/tt27903262/',
                type: 'OTHER',
                label: 'IMDB link',
                archiveLink: '',
            },
            {
                url: 'https://www.youtube.com/watch?v=ZyzWdnl1jAg',
                type: 'YOUTUBE',
                label: 'CNBC explainer video',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/13tof29/i_didnt_hear_about_this_until_now_making_of_the/',
                type: 'REDDIT',
                label: 'Superstonk thread - May 27',
                archiveLink: '',
            },


        ],
        description: 'Follows Ryan Cohen"s Rise from High School Graduate to Influential Force Behind the infamous GameStop Meme-Stock Phenomenon that exposed the need for market reform to protect retail investors from predatory shorting and corporate sabotage. ',

        type: [TimelineItemType.MEDIA],
        significance: 2,
    },
    {
        title: 'CNBC panelists (paid actors) put out a hit piece about Ryan Cohen, Bed Bath and Beyond, Teddy',
        dateYYYYMMDD: '2023-07-06',
        urls: [
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/14sarx9/sea_bscuit_talkin_bout_rc_lots_to_take_apart/',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '"I called and reached out, or tried to reach out to Teddy’s patent lawyer, but didn’t hear back in time for this hit."',
        type: [TimelineItemType.MEDIA],
        significance: 2,
        imgSrc: 'assets/cnbc-hit-2023-07-06.PNG'
    },
    {
        title: 'CNBC personality Joe Kernan grimaces upon the mention of GameStop',
        dateYYYYMMDD: '2023-09-11',
        urls: [
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/16furge/they_hate_when_gamestop_is_brought_up/',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: 'Guest: "...I saw Dumb Money on Friday night, which is the GameStop movie, and uh..." Joe Kernan:  *grimaces* ',
        type: [TimelineItemType.MEDIA],
        significance: 1,
        imgSrc: 'assets/cnbc-joe-kernan-2023-09-11.PNG'
    },
    {
        title: 'Dumb Money movie released',
        dateYYYYMMDD: '2023-09-22',
        urls: [
            {
                url: 'https://www.youtube.com/watch?v=bmr8YmwnZ3w',
                type: 'YOUTUBE',
                label: 'YouTube link',
                archiveLink: '',
            },
            {
                url: 'https://lemmy.whynotdrs.org/post/85996',
                type: 'LEMMY',
                label: 'Dumb Money movie trailer',
                archiveLink: '',
            },
        ],
        description: 'Dumb Money is the ultimate David vs. Goliath tale, based on the insane true story of everyday people who flipped the script on Wall Street and got rich by turning GameStop (yes, the mall videogame store) into the world"s hottest company.',
        type: [TimelineItemType.MEDIA],
        significance: 3,
    },

]