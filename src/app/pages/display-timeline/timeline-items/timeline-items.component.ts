import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { TimelineItemsService } from './timeline-items.service';
import { TimelineEvent } from './timeline-item/timeline-event.class';
import { ScreenSizeService } from 'src/app/services/screen-size.service';
import { DisplayService } from '../display.service';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-timeline-items',
  templateUrl: './timeline-items.component.html',
  styleUrls: ['./timeline-items.component.scss']
})
export class TimelineItemsComponent implements OnInit, AfterViewInit {
  constructor(
    private _itemService: TimelineItemsService, 
    private _screenService: ScreenSizeService, 
    private _displayService: DisplayService,
    private _settingsService: SettingsService) { }

  private _selectedItem: TimelineEvent | null = null;
  private _descendingItems: TimelineEvent[] = [];
  public get selectedItem(): TimelineEvent | null { return this._selectedItem; }
  public get displayedTimelineItems(): TimelineEvent[] { return this._itemService.displayedTimelineItems; }
  public get timelineItemsDescending(): TimelineEvent[] { return this._descendingItems; }
  public get isMobile(): boolean { return this._screenService.isMobile; }
  public get isListView(): boolean { return this._settingsService.chartListIsVertical; }


  private _updateItems(){
    this._descendingItems = Object.assign([], this.displayedTimelineItems);
    this._descendingItems = this._descendingItems.sort((itemA, itemB)=>{
      if(itemA.dateYYYYMMDD > itemB.dateYYYYMMDD){
        return -1;
      }else if(itemA.dateYYYYMMDD < itemB.dateYYYYMMDD){
        return 1;
      }else{
        return 0;
      }});
  }


  ngOnInit() {
    this._updateItems();
    this._itemService.displayedTimelineItems$.subscribe({
      next: ()=>{
        this._updateItems();
      }
    })

    
    this._itemService.unselectAll$.subscribe({
      next: (isAllUnselected) => {
        if(isAllUnselected === true){
          // close all timeline Items if this instruction is received.
          // e.g., Mobile user clicks on settings buttons, close all open timeline items.
          this.displayedTimelineItems.forEach(timelineItem => timelineItem.unselect());
        }
      }
    })
    this._itemService.itemSelected$.subscribe({
      next: (selected) => {
        if(selected.source !== 'UNSELECT'){
          // an item was selected.
          const scrollToElement = document.getElementById(this.itemId(selected.item));
          if(!this.isMobile){
            // if not mobile, 
            if(this.isListView){
              // if list items are vertical and not horizontal,
              if(selected.source === "CHART"){
                // in the case that a user is using the chart circles, unselect all selected items.
                this.displayedTimelineItems.forEach(timelineItem => timelineItem.unselect());
              }
            }else{
              // in the horizontal view, always unselect all items when opening new item.
              this.displayedTimelineItems.forEach(timelineItem => timelineItem.unselect());
            }
          }
            selected.item.select();
            this._scrollIntoView(scrollToElement);
        }else if(selected.source === 'UNSELECT'){
          // if an item was unselect()ed (e.g. user clicked on X button)
          selected.item.unselect();
        }
      }
    });
    this._settingsService.chartListIsVertical$.subscribe({
      next: ()=>{ this._itemService.displayedTimelineItems}
    })
  }

  ngAfterViewInit(){
    if(!this.isMobile && !this.isListView){
      const finalItem = this.displayedTimelineItems[this.displayedTimelineItems.length-1];
      const scrollToElement = document.getElementById(this.itemId(finalItem));
      this._scrollIntoView(scrollToElement);
    }
  }

  private _scrollIntoView(scrollElement: HTMLElement | null){
    if(this._isChromeBrowser()){
      scrollElement?.scrollIntoView({ behavior: "instant", block: "center", inline: "center" });
    }else{
      scrollElement?.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
    }
  }

  public itemId(item: TimelineEvent): string {
    return 'item' + this.displayedTimelineItems.indexOf(item);
  }

  private _isChromeBrowser(): boolean { 
    const agent = window.navigator.userAgent.toLowerCase()
    return (agent.indexOf('chrome') > -1 && !!(<any>window).chrome);
  }


  
}
