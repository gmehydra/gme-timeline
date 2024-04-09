import * as dayjs from "dayjs";
import { GmePriceEntry } from "../../../../services/gme-price-entry.interface";
import { TimelineEventConfig } from "./timeline-event-config.interface";
import { TimelineEventType } from "./timeline-event-type.enum";
import { TimelineEventURL } from "./timeline-event-url.interface";
import { QuarterlyResult } from "src/app/pages/financials/quarterly-results/quarterly-result.class";

export class TimelineEvent{

    private _title: string;
    private _dateYYYYMMDD: string;
    private _urls: TimelineEventURL[];
    private _description: string;
    private _types: TimelineEventType[];
    private _significance: number;
    private _imgSrc: string = '';
    private _tags: string[] = [];

    private _isSelected: boolean = false;
    private _gmePriceEntry: GmePriceEntry | undefined;
    private _gmePrice: number = -1;
    private _gmePricePreSplit: string = '';
    private _specialIdentifier: string = '';
    private _itemIndex: number = -1;
    private _localArticle: TimelineEventURL | null = null;
    
    private _quarterlyFinancialResult: QuarterlyResult | null = null;

    public get title(): string { return this._title; }
    public get dateYYYYMMDD(): string { return this._dateYYYYMMDD; }
    public get dateMMMDDYYYY(): string { return dayjs(this.dateYYYYMMDD).format('MMM DD, YYYY')}
    public get urls(): TimelineEventURL[] { return this._urls; }
    public get description(): string { return this._description; }
    public get mainType(): TimelineEventType { return this._types[0]; }
    public get types(): TimelineEventType[] { return this._types; }
    public get significance(): number { return this._significance; }
    public get imgSrc(): string { return this._imgSrc;}
    public get tags(): string[] { return this._tags; }
    public get localArticle(): TimelineEventURL | null { return this._localArticle;}

    public get isSelected(): boolean { return this._isSelected; }
    public get hasImg(): boolean { return this._imgSrc !== ''; }
    public get hasLocalArticle(): boolean { return this._localArticle !== null;}

    public get gmePriceEntry(): GmePriceEntry | undefined { return this._gmePriceEntry;}
    public get gmePrice(): number { return this._gmePrice; }
    public get gmePricePreSplit(): string { return this._gmePricePreSplit; }
    public get specialIdentifier(): string { return this._specialIdentifier; }
    public get itemIndex(): number { return this._itemIndex; }

    public get quarterlyFinancialResult():  QuarterlyResult | null { return this._quarterlyFinancialResult; }

    constructor(config: TimelineEventConfig, gmePriceEntry: GmePriceEntry | undefined, index: number){
        this._title = config.title;
        this._dateYYYYMMDD = config.dateYYYYMMDD;
        this._urls = config.urls;
        this._types = config.types;
        this._significance = config.significance
        this._description = config.description;
        if(config.imgSrc){
            this._imgSrc = config.imgSrc;
        }
        this._gmePriceEntry = gmePriceEntry;
        if(this._gmePriceEntry !== undefined){
            this._gmePrice = this._gmePriceEntry.close;
            const preSplit = this._gmePrice * 4;
            if(this._dateYYYYMMDD < '2022-07-21'){
                this._gmePricePreSplit = preSplit.toFixed(2);
            }
        }else{
        }
        if(config.specialIdentifier === 'STOCK-SPLIT'){
            this._specialIdentifier = config.specialIdentifier;
        }
        this._itemIndex = index;
        if(config.tags){
            this._tags = config.tags;
        }
        if(config.localArticle){
            this._localArticle = config.localArticle;
        }
    }

    public select(){ this._isSelected = true; }
    public unselect() { this._isSelected = false;}


    public setQuarterlyFinancialResult(result: QuarterlyResult){
        this._quarterlyFinancialResult = result;
    }
}