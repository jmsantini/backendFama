import { Show, ShowWithBand, ShowWeekDay } from "../entities/show";

export interface ShowGateway {
  createShow(show: Show): Promise<void>;
  getShowWithBandByTimeRange(
    startTime: number,
    endTime: number,
    weekDay: ShowWeekDay
  ): Promise<ShowWithBand[]>;
  getShowsByDay(day: ShowWeekDay): Promise<ShowWithBand[]>;
  getShow(week_day:string, start_time:number, end_time: number): Promise<Show | undefined>;
}
