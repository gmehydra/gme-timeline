import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperstonkComponent } from './superstonk/superstonk.component';
import { RedditComponent } from './reddit/reddit.component';
import { DrsComponent } from './drs/drs.component';
import { GuideComponent } from './guide/guide.component';
import { InformationPointComponent } from './guide/information-point/information-point.component';
import { Fy23ProfitabilityComponent } from './fy23-profitability/fy23-profitability.component';
import { RcInterviewComponent } from './rc-interview/rc-interview.component';
import { NewsArticleComponent } from './fy23-profitability/news-article/news-article.component';
import { SneezeComponent } from './sneeze/sneeze.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MediaComponent } from './media/media.component';
import { OwnershipComponent } from './ownership/ownership.component';
import { NgChartsModule } from 'ng2-charts';
import { OwnershipTableComponent } from './ownership/ownership-table/ownership-table.component';
import { RoaringKittyComponent } from './roaring-kitty/roaring-kitty.component';
import { DrsTimelineComponent } from './drs/drs-timeline/drs-timeline.component';
import { MoassComponent } from './moass/moass.component';
import { SharedModule } from '../shared/shared.module';
import { OwnershipChartComponent } from './ownership/ownership-chart/ownership-chart.component';
import { AtmsComponent } from './atms/atms.component';
import { DrsFullTimelineComponent } from './drs-full-timeline/drs-full-timeline.component';



@NgModule({
  declarations: [
    SuperstonkComponent,
    RedditComponent,
    DrsComponent,
    GuideComponent,
    InformationPointComponent,
    Fy23ProfitabilityComponent,
    RcInterviewComponent,
    NewsArticleComponent,
    SneezeComponent,
    MediaComponent,
    OwnershipComponent,
    OwnershipTableComponent,
    RoaringKittyComponent,
    DrsTimelineComponent,
    MoassComponent,
    OwnershipChartComponent,
    AtmsComponent,
    DrsFullTimelineComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgChartsModule,
    SharedModule,
  ],
  
})
export class InfoPagesModule { }
