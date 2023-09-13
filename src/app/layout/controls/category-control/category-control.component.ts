import { Component, OnInit } from '@angular/core';
import { TimelineItemType } from 'src/app/timeline-items/timeline-item/timeline-item-type.enum';
import { CategoryButtons as CategoryButtonManager } from './category-button-manager.class';
import { CategoryButton } from './category-button.interface';
import { ChartDataManagerService } from 'src/app/chart/chart-data-manager-service';
import { TimelineItemsService } from 'src/app/timeline-items/timeline-items.service';

@Component({
  selector: 'app-category-control',
  templateUrl: './category-control.component.html',
  styleUrls: ['./category-control.component.scss']
})
export class CategoryControlComponent implements OnInit {

  constructor(private _dataManagerService: ChartDataManagerService, private _itemService: TimelineItemsService) { }

  private _buttonManager: CategoryButtonManager = new CategoryButtonManager();
  public get buttonManager(): CategoryButtonManager { return this._buttonManager; }
  public get categoryButtons(): CategoryButton[] { return this.buttonManager.categoryButtons; }

  ngOnInit() {
    const existingCategoriesFilter: TimelineItemType[] = this._dataManagerService.categories;
    this._buttonManager.setCategories(existingCategoriesFilter);
  }

  public onClickButtonCategory(button: CategoryButton) {
    this.buttonManager.onClickButtonCategory(button);
    this._makeUpdates();
  }
  public onClickShow(button: CategoryButton) {
    this.buttonManager.onClickShow(button);
    this._makeUpdates();
  }
  public onClickHide(button: CategoryButton) {
    this.buttonManager.onClickHide(button);
    this._makeUpdates();
  }

  private _makeUpdates(){
    const selectedCategories = this.buttonManager.selectedCategories;
    this._dataManagerService.updateCategories(selectedCategories);
    this._itemService.updateCategories(selectedCategories);
  }

}