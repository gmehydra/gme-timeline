import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { TimelineItemsService } from './timeline-items.service';
import { TimelineItem } from './timeline-item/timeline-item.class';
import { ScreeSizeService } from '../scree-size.service';
import { HistoricDataService as GmePriceDataService } from '../historic-data.service';

@Component({
  selector: 'app-timeline-items',
  templateUrl: './timeline-items.component.html',
  styleUrls: ['./timeline-items.component.scss']
})
export class TimelineItemsComponent implements OnInit {
  constructor(private _itemService: TimelineItemsService, private _dataService: GmePriceDataService, private _screenService: ScreeSizeService) { }

  private _selectedItem: TimelineItem | null = null;
  public get selectedItem(): TimelineItem | null { return this._selectedItem; }
  public get timelineItems(): TimelineItem[] { return this._itemService.timelineItems; }
  public get timelineItemsMobile(): TimelineItem[] { return this.timelineItems.sort((itemA, itemB)=>{
    if(itemA.dateYYYYMMDD > itemB.dateYYYYMMDD){
      return -1;
    }else if(itemA.dateYYYYMMDD < itemB.dateYYYYMMDD){
      return 1;
    }else{
      return 0;
    }
  })}
  public get isMobile(): boolean { return this._screenService.isMobile; }

  ngOnInit() {
    this._itemService.itemSelected$().subscribe({
      next: (item) => {
        this.timelineItems.forEach(item => item.unselect())
        if(item !== null){
          item.select();
          const scrollToElement = document.getElementById(this.itemId(item));
          if(!this.isMobile){
            scrollToElement?.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
          }else if(this.isMobile){
            scrollToElement?.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
          }
        }else{
        }
      }
    });
  }

  public itemId(item: TimelineItem): string {
    return 'item' + this.timelineItems.indexOf(item);
  }
}
