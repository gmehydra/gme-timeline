import { Injectable } from '@angular/core';
import { TimelineEvent } from '../../timeline-items/timeline-item/timeline-event';
import { HttpClient } from '@angular/common/http';
import { TagAssociation, TagAssociation as string } from './tag-association.interface';
import { TagAssociationLoader } from './tag-association-loader';
import { TagSearchManager } from './tag-search-manager.class';
import { TagSearchable } from './tag-searchable.class';

@Injectable({
  providedIn: 'root'
})
export class EventSearchService {
  constructor(private _httpClient: HttpClient) { }

  private _timelineItems: TimelineEvent[] = [];
  private _tagSearchManager: TagSearchManager = new TagSearchManager([],[]);

  private _tagAssociations: TagAssociation[] = [];

  public setTimelineItems(timelineItems: TimelineEvent[]) {
    this._initiate();
    this._timelineItems = timelineItems;
  }

  private _isInitiated: boolean = false;
  private _initiate(){
    if(!this._isInitiated){
      const loader: TagAssociationLoader = new TagAssociationLoader(this._httpClient);
      loader.loadTagAssociationsCSV$().subscribe({
        next: (tags) => {
          this._tagAssociations = tags;
          this._isInitiated = true;
          this._tagSearchManager = new TagSearchManager(this._timelineItems, this._tagAssociations);
        },
        error: () => { },
        complete: () => { },
      });
    }
  }
  public get allTimelineEvents(): TimelineEvent[] { return this._timelineItems; }

  private _tagResults: TagSearchable[] = [];
  public get tagResults(): TagSearchable[] { return this._tagResults; }
  private _eventResults: TimelineEvent[] = [];
  public get eventResults(): TimelineEvent[] { return this._eventResults; }


  public search(searchValue: string){
    this._tagResults = this._tagSearchManager.search(searchValue);
    if(this._tagResults.length === 1){
      this._eventResults = this.tagResults[0].events;
    }
  }
  public clearSearch(){
    this._tagSearchManager.clearSearch();
    this._tagResults = [];
    this._eventResults = [];
  }
  public onClickTagSearchable(tag: TagSearchable){
    this._tagResults = this._tagSearchManager.setTagSearchable(tag);
    this._eventResults = this.tagResults[0].events;
  }




}
