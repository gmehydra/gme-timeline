import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ChartDataSetManager } from './chart-dataset-manager.class';
import { TimelineItemType } from '../timeline-items/timeline-item/timeline-item-type.enum';
import { TimelineItem } from '../timeline-items/timeline-item/timeline-item.class';

@Injectable({
  providedIn: 'root'
})

export class ChartDataManagerService {
  /**
   * The ChartDataManagerService manages the datasets for the chart.  As filters are applied, the datasets need to be updated.
   */
  constructor() {
    this._dataManager = new ChartDataSetManager([], [], [], -1);
  }

  private _dataSets$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  // private _dataSetsMobile$: BehaviorSubject<any> = new BehaviorSubject([]);
  private _dataManager: ChartDataSetManager;
  public get dataSets(): any[] { return this._dataSets$.getValue(); }
  public get dataSets$(): Observable<any[]> { return this._dataSets$.asObservable(); }
  // public get significanceValue(): number { return this._dataManager.significanceValue; }
  // public get categories(): TimelineItemType[] { return this._dataManager.categories; }
  // public get dataSetsMobile(): any[] { return this._dataSetsMobile$.getValue(); }
  // public get dataSetsMobile$(): Observable<any[]> { return this._dataSetsMobile$.asObservable(); }
  // public get dataManager(): ChartDataSetManager { return this._dataManager; }

  public get isUpdating$(): Observable<boolean> { return this._dataManager.isUpdating$; }

  public registerDataManager(dataManager: ChartDataSetManager) {
    this._dataManager = dataManager;
    this._dataManager.getAndUpdateDatasets();
    this._dataManager.datasets$.subscribe({
      next: (datasets) => {
        this._dataSets$.next(datasets);
      },
      error: () => { },
      complete: () => { },
    });
  }

  public updateSignificanceValue(value: number) {
    this._dataManager.updateSignificanceValue(value);
  }
  public updateCategories(categories: TimelineItemType[]) {
    this._dataManager.updateCategories(categories);
  }

  public lookupEventByIndex(datasetIndex: number, index: number) {
    return this._dataManager.lookupTimelineItemByIndex(datasetIndex, index);
  }
  public lookupIndexByEvent(event: TimelineItem): { datasetIndex: number, itemIndex: number } {
    return this._dataManager.lookupIndexByTimelineItem(event);
  }

  public getTypeColor(type: TimelineItemType, transparency?: number): string {
    return this._dataManager.getTypeColor(type, transparency);
  }



}
