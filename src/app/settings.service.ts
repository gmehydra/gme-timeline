import { Injectable } from '@angular/core';
import { TimelineItemType } from './pages/display-timeline/timeline-items/timeline-item/timeline-item-type.enum';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor() { }

  private _categories: TimelineItemType[] = [];
  private _significanceValue: number = -1;
  private _showAsList: boolean = false;
  private _showAsList$: Subject<boolean> = new Subject();

  public get categories(): TimelineItemType[] { return this._categories; }
  public get significanceValue(): number { return this._significanceValue; }
  public get showAsList(): boolean { return this._showAsList; }
  public get showAsList$(): Observable<boolean> { return this._showAsList$.asObservable(); }

  public getSettings() {
    this._showAsList = this.getShowAsList();
    this._categories = this.getCategories();
    this._significanceValue = this.getSignificance();
  }

  public updateCategories(selectedCategories: TimelineItemType[]) {
    console.log(selectedCategories);
    let categoriesString = '';
    selectedCategories.forEach(category => {
      categoriesString += "'" + category + "', ";
    });
    categoriesString = categoriesString.trimEnd();
    categoriesString = categoriesString.substring(0, categoriesString.length - 1);
    localStorage.setItem('categories', categoriesString);
    this._categories = this.getCategories();
  }
  public updateSignificanceValue(value: number) {
    this._significanceValue = value;
    localStorage.setItem('significance', String(this._significanceValue));
  }
  public updateDisplayMode(mode: 'LIST' | 'CHART'){
    if(mode === 'LIST'){
      this._showAsList = true;
    }else{
      this._showAsList = false;
    }
    this._showAsList$.next(this._showAsList);
    localStorage.setItem('displaymode', mode);
  }

  public getSignificance(): number {
    const significanceStr = localStorage.getItem('significance');
    let significance: number = 2;
    if (significanceStr !== null) {
      significance = Number(significanceStr);
    }
    return significance;
  }

  public getShowAsList(): boolean { 
    const displayValue = localStorage.getItem('displaymode');
    let showAsList: boolean = false;
    if(displayValue !== null){
      if(displayValue === 'LIST'){
        showAsList = true;
      }
    }
    return showAsList;
  }

  public getCategories(): TimelineItemType[] {
    const categoriesString = localStorage.getItem('categories');
    const categoriesSplit = categoriesString?.split(", ");
    const categories: TimelineItemType[] = [];
    categoriesSplit?.forEach(category => {
      category = category.substring(1, category.length - 1)
      categories.push(this._resolveCategory(category));
    });
    if (categories.length === 0) {
      categories.push(TimelineItemType.CORP);
      categories.push(TimelineItemType.DRS);
      categories.push(TimelineItemType.MEDIA);
      categories.push(TimelineItemType.RC);
      categories.push(TimelineItemType.DFV);
      categories.push(TimelineItemType.OTHER);
    }
    return categories;
  }

  private _resolveCategory(categoryString: string): TimelineItemType {
    let type: TimelineItemType = TimelineItemType.OTHER;
    if (categoryString === 'Corporate') {
      type = TimelineItemType.CORP;
    } else if (categoryString === 'DRS') {
      type = TimelineItemType.DRS;
    } else if (categoryString === 'Media') {
      type = TimelineItemType.MEDIA;
    } else if (categoryString === 'Ryan Cohen') {
      type = TimelineItemType.RC;
    } else if (categoryString === 'DFV') {
      type = TimelineItemType.DFV;
    } else if (categoryString === 'Other') {
      type = TimelineItemType.OTHER;
    }
    return type;
  }
}
