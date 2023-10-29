import { QuarterlyResult } from "../quarterly-results/quarterly-result.class";
import { YearlyResult } from "../quarterly-results/yearly-result.class";
import { ReleaseOverview } from "./release-overview/release-overview-interface";

export class EarningsTableRow{

    private _earningsResult: QuarterlyResult | YearlyResult;
    public get earningsResult(): QuarterlyResult | YearlyResult { return this._earningsResult; }

    private _earningsRelease: ReleaseOverview | undefined;
    public get earningsRelease(): ReleaseOverview | undefined { return this._earningsRelease;}

    private _showEarningsRelease: boolean = false;
    public get showEarningsRelease(): boolean { return this._showEarningsRelease; }
    public clickEarningsRelease() { this._showEarningsRelease = !this._showEarningsRelease; }

    constructor(earningsResult: QuarterlyResult | YearlyResult, releaseData: ReleaseOverview[]){
        this._earningsResult = earningsResult;
        const foundReleaseData = releaseData.find(item => item.quarter === earningsResult.quarter && item.year === earningsResult.fiscalYear);
        this._earningsRelease = foundReleaseData;
    }
}