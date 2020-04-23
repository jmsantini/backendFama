import { Band } from "./band";

export class Show {
  constructor(
    private id: string,
    private week_day: ShowWeekDay,
    private start_time: number,
    private end_time: number,
    private band_id: string
  ) {}

  public getId(): string {
    return this.id;
  }

  public getWeekDate(): ShowWeekDay {
    return this.week_day;
  }

  public getStartTime(): number {
    return this.start_time;
  }

  public getEndTime(): number {
    return this.end_time;
  }

  public getBandId(): string {
    return this.band_id;
  }
}

export class ShowWithBand extends Show {
  constructor(
    id: string,
    week_day: ShowWeekDay,
    start_time: number,
    end_time: number,
    private band: Band
  ) {
    super(id, week_day, start_time, end_time, band.getId());
  }

  public getBand(): Band {
    return this.band;
  }
}

export enum ShowWeekDay {
  FRIDAY = "FRIDAY",
  SATURDAY = "SATURDAY",
  SUNDAY = "SUNDAY"
}

export const toShowWeekDay = (input: string): ShowWeekDay => {
  switch (input.toUpperCase()) {
    case "FRIDAY":
      return ShowWeekDay.FRIDAY;
    case "SATURDAY":
      return ShowWeekDay.SATURDAY;
    case "SUNDAY":
      return ShowWeekDay.SUNDAY;
    default:
      throw new Error("Invalid Week Day");
  }
};
