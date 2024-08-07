import { Injectable } from '@angular/core';
import { TimelineEventType } from '../pages/display-timeline/timeline-items/timeline-item/timeline-event-type.enum';
import { Observable, Subject } from 'rxjs';
import { EarningsResult } from '../pages/earnings/earnings-results/earnings-result.class';
import * as dayjs from 'dayjs';
import { EarningsResultInterface } from '../pages/earnings/earnings-results/earnings-result.interface';
import { GmePriceEntry } from './gme-price-entry.interface';
import { TimelineEventConfig } from '../pages/display-timeline/timeline-items/timeline-item/timeline-event-config.interface';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor() { }

  private _categories: TimelineEventType[] = [];
  private _significanceValue: number = -1;
  private _chartListIsVertical: boolean = false;
  private _chartListIsVertical$: Subject<boolean> = new Subject();

  private _quarterlyEarnings: EarningsResult[] = [];
  private _annualEarnings: EarningsResult[] = [];

  private _latestEarningsDateYYYYMMDD: string | null = null;
  private _lastEventsCheckedDateYYYYMMDD: string | null = null;
  
  private _gmeData: GmePriceEntry[] = [];
  private _eventConfigs: TimelineEventConfig[] = [];


  public get categories(): TimelineEventType[] { return this._categories; }
  public get significanceValue(): number { return this._significanceValue; }
  public get quarterlyEarnings(): EarningsResult[] { return this._quarterlyEarnings; }
  public get annualEarnings(): EarningsResult[] { return this._annualEarnings; }
  public get gmeData(): GmePriceEntry[] { return this._gmeData; }
  public get eventConfigs(): TimelineEventConfig[] { return this._eventConfigs; }

  public get latestEarningsDateYYYYMMDD(): string | null { return this._latestEarningsDateYYYYMMDD; }
  public get lastEventsCheckedDateYYYYMMDD(): string | null { return this._lastEventsCheckedDateYYYYMMDD; }

  public get chartListIsVertical(): boolean { return this._chartListIsVertical; }
  public get chartListIsVertical$(): Observable<boolean> { return this._chartListIsVertical$.asObservable(); }

  public getSettings() {
    this._chartListIsVertical = this._loadChartListDirectionFromLS();
    this._categories = this._loadCategoriesFromLS();
    this._significanceValue = this._loadSignificanceFromLS();
    this._quarterlyEarnings = this._loadQuarterlyEarningsFromLS();
    this._annualEarnings = this._loadAnnualEarningsFromLS();
    this._latestEarningsDateYYYYMMDD = this._getLatestEarningsDate();
    this._gmeData = this._loadGmeDataFromLS();
    this._eventConfigs = this._loadEventsFromLS();
    const lastCheckDate = this._getLastEventsCheckedDate();
    if(lastCheckDate){
      this._lastEventsCheckedDateYYYYMMDD = lastCheckDate.format('YYYY-MM-DD');
    }else{

    }
  }

  /**
   * 
   * @param now current time to compare against previous time
   * @returns true if an update is required, false to take no action.
   */
  public gmeCheckTimeLapsed(now: dayjs.Dayjs): boolean { 
    let storageValue = localStorage.getItem('latest_events_check_time');
    if(storageValue){
      const prevTime = dayjs(storageValue);
      if(now.isAfter(prevTime.add(24, 'hours'))){
        return true;
      }else{
        return false;
      }
    }else{
      return true;
    }
  }

  private _getLastEventsCheckedDate(): dayjs.Dayjs | null{ 
    let storageValue = localStorage.getItem('latest_events_check_time');
    if(storageValue){
      let timeValue = dayjs(storageValue);
      return timeValue;
    }else{
      return null;
    }
  }

  public setLastEventsCheckedDate(){ 
    localStorage.setItem('latest_events_check_time', dayjs().format());
  }

  private _loadGmeDataFromLS(): GmePriceEntry[]{
    let storageValue = localStorage.getItem('gme_data');
    if (storageValue !== null) {
      let priceEntries: GmePriceEntry[] = JSON.parse(storageValue);
      return priceEntries;
    }
    return [];
  }
  private _loadEventsFromLS(): TimelineEventConfig[]{
    let storageValue = localStorage.getItem('events_data');
    if (storageValue !== null) {
      let events: TimelineEventConfig[] = JSON.parse(storageValue);
      return events;
    }
    return [];
  }

  public updateCategories(selectedCategories: TimelineEventType[]) {
    // console.log(selectedCategories);
    let categoriesString = '';
    selectedCategories.forEach(category => {
      categoriesString += "'" + category + "', ";
    });
    categoriesString = categoriesString.trimEnd();
    categoriesString = categoriesString.substring(0, categoriesString.length - 1);
    localStorage.setItem('categories', categoriesString);
    this._categories = this._loadCategoriesFromLS();
  }
  public updateSignificanceValue(value: number) {
    this._significanceValue = value;
    localStorage.setItem('significance', String(this._significanceValue));
  }
  public updateListDirection(direction: 'VERTICAL' | 'HORIZONTAL') {
    if (direction === 'VERTICAL') {
      this._chartListIsVertical = true;
    } else {
      this._chartListIsVertical = false;
    }
    this._chartListIsVertical$.next(this._chartListIsVertical);
    localStorage.setItem('list_display_direction', direction);
  }

  public setEarningsData(annualResults: EarningsResult[], quarterlyResults: EarningsResult[]) {
    localStorage.setItem('quarterly_earnings', JSON.stringify(quarterlyResults.map(item => item.data)));
    localStorage.setItem('annual_earnings', JSON.stringify(annualResults.map(item => item.data)));
  }
  public setGmeData(gmeData: GmePriceEntry[]){
    localStorage.setItem('gme_data', JSON.stringify(gmeData));
  }
  public setEventsData(events: TimelineEventConfig[]){
    localStorage.setItem('events_data', JSON.stringify(events));
  }


  private _getLatestEarningsDate(): string | null{
    let value: string = '';
    if(this.quarterlyEarnings.length > 0){
      if(this.quarterlyEarnings[0].filingDateYYYYMMDD){
        value = this.quarterlyEarnings[0].filingDateYYYYMMDD;
        return value;
      }
    }
    return null;
  }


  private _loadQuarterlyEarningsFromLS(): EarningsResult[] {
    let storageValue = localStorage.getItem('quarterly_earnings');
    if (storageValue !== null) {
      let config: EarningsResultInterface[] = JSON.parse(storageValue);
      let earnings: EarningsResult[] = config.map(config => new EarningsResult(config));
      return earnings;
    }
    return [];
  }
  private _loadAnnualEarningsFromLS(): EarningsResult[] {
    let storageValue = localStorage.getItem('annual_earnings');
    if (storageValue !== null) {
      let config: EarningsResultInterface[] = JSON.parse(storageValue);
      let earnings: EarningsResult[] = config.map(config => new EarningsResult(config));
      return earnings;
    }
    return [];
  }

  private _loadSignificanceFromLS(): number {
    const significanceStr = localStorage.getItem('significance');
    let significance: number = 3;
    if (significanceStr !== null) {
      significance = Number(significanceStr);
    }
    return significance;
  }

  private _loadChartListDirectionFromLS(): boolean {
    const displayValue = localStorage.getItem('list_display_direction');
    let isVertical: boolean = false;
    if (displayValue !== null) {
      if (displayValue === 'VERTICAL') {
        isVertical = true;
      }
    }
    return isVertical;
  }

  private _loadCategoriesFromLS(): TimelineEventType[] {
    const categoriesString = localStorage.getItem('categories');
    const categoriesSplit = categoriesString?.split(", ");
    let categories: TimelineEventType[] = [];
    categoriesSplit?.forEach(category => {
      category = category.substring(1, category.length - 1)
      categories.push(this._resolveCategory(category));
    });
    if (categories.length === 0) {
      categories.push(TimelineEventType.DRS);
      categories.push(TimelineEventType.CORP);
      categories.push(TimelineEventType.RC);
      categories.push(TimelineEventType.MEDIA);
      categories.push(TimelineEventType.SOCIAL_MEDIA);
      categories.push(TimelineEventType.OTHER);
    }
    categories = this._sortCategories(categories);
    return categories;
  }

  private _sortCategories(categories: TimelineEventType[]) {
    const priority = [
      TimelineEventType.DRS, TimelineEventType.CORP, TimelineEventType.RC, TimelineEventType.MEDIA, TimelineEventType.SOCIAL_MEDIA, TimelineEventType.OTHER,
    ];
    const newCategories: TimelineEventType[] = [];
    priority.forEach(priorityItem => {
      if (categories.indexOf(priorityItem) > -1) {
        newCategories.push(priorityItem);
      }
    })
    return newCategories;
  }

  private _resolveCategory(categoryString: string): TimelineEventType {
    let type: TimelineEventType = TimelineEventType.OTHER;
    if (categoryString === 'Corporate') {
      type = TimelineEventType.CORP;
    } else if (categoryString === 'DRS') {
      type = TimelineEventType.DRS;
    } else if (categoryString === 'Media') {
      type = TimelineEventType.MEDIA;
    } else if (categoryString === 'Ryan Cohen') {
      type = TimelineEventType.RC;
    } else if (categoryString === 'Social Media') {
      type = TimelineEventType.SOCIAL_MEDIA;
    } else if (categoryString === 'Other') {
      type = TimelineEventType.OTHER;
    }
    return type;
  }
}
