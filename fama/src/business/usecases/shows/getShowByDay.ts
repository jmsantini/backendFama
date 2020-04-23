import { ShowGateway } from "../../gateways/show";
import { ShowWeekDay } from "../../entities/show";
export class GetShowsByDayUC {
    constructor(
        private showGateway: ShowGateway
    ){}
    public async execute(input: GetShowsByDayUCInput): Promise<GetShowsByDayUCOutput>{
        const show = await this.showGateway.getShowsByDay(input.week_day)
        if(!show){
            throw new Error("Não pussui shows!")
        }
        return {
            shows: show.map(band => {
                return {
                    id: band.getBandId(),
                    week_day: band.getWeekDate(),
                    start_time: band.getStartTime(),
                    end_time: band.getEndTime(),
                    band_id: band.getBandId()
                }
            })
        }
    }
}
export interface GetShowsByDayUCInput {
    week_day: ShowWeekDay;
}
export interface GetShowsByDayUCOutput {
    shows: GetShowsByDayUCOutputShows[]
}
export interface GetShowsByDayUCOutputShows{
    id: string;
    week_day: ShowWeekDay;
    start_time: number;
    end_time: number;
    band_id: string;
}