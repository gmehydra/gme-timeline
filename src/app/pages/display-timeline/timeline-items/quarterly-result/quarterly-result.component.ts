import { Component, Input, OnInit} from '@angular/core';
import { EarningsResult } from 'src/app/pages/earnings/earnings-results/earnings-result.class';

@Component({
  selector: 'app-quarterly-result',
  templateUrl: './quarterly-result.component.html',
  styleUrls: ['./quarterly-result.component.scss']
})
export class QuarterlyResultComponent implements OnInit {

  private _result: EarningsResult | null = null;
  @Input('result') public set result(result: EarningsResult) { this._result = result; }
  public get result(): EarningsResult | null { return this._result; }

  ngOnInit(): void {
  }
  public get eps(){
    return Number(this.result?.netEPS).toFixed(2);
    return 0;
  }

  public get isPositive(): boolean { 
    if(this.result){
      if(this.result.netEPS > 0 ){ 
        return true;
      }
    }
    return false;
  }

  public get drsPercent(): string{
    if(this.result){
      return ((this.result.drs / this.result.weightedAverageSharesOutstanding) * 100 ).toFixed(2);
    }
    return '';
  }
}
