import { TimelineEventConfig } from "src/app/pages/display-timeline/timeline-items/timeline-item/timeline-event-config.interface";
import { TimelineEventType } from "src/app/pages/display-timeline/timeline-items/timeline-item/timeline-event-type.enum";

export const bbbyConfigs: TimelineEventConfig[] = [
    {
        title: 'Kais delivers bottles of wine signed by Jim Cramer to Bill Pulte',
        dateYYYYMMDD: '2023-09-25',
        urls: [
            {
                url: 'https://www.youtube.com/watch?v=Hcmz3q351fY&t=7464s',
                type: 'YOUTUBE',
                label: 'PP Show live stream - Sept 25',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/ThePPShow/comments/16q9per/kais_the_legend_on_x/',
                type: 'REDDIT',
                label: 'Bottles signed by Jim Cramer - Sept 23',
                archiveLink: '',
            },
            {
                url: 'https://twitter.com/kaismaalej/status/1705623469386309955',
                type: 'X-TWITTER',
                label: 'Bottles signed by Jim Cramer - Sept 23',
                archiveLink: '',
            },
        ],
        description: '',
        types: [TimelineEventType.OTHER],
        significance: 1,
        tags: [ 'bbby', 'kais', 'cramer', 'pulte', 'bottles', 'wine'],
    },

]; 



/**
 * 
 *             {
                url: 'https://www.reuters.com/legal/government/column-meme-king-ryan-cohen-moves-toss-novel-insider-trading-case-by-bed-bath-2023-11-09/',
                type: 'NEWS',
                label: 'reuters.com - ‘Meme king’ Ryan Cohen moves to toss novel insider trading case by Bed Bath shareholders',
                archiveLink: '',
            },
 */