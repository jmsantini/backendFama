import { v4 } from "uuid";
import { Show, ShowWeekDay } from "../../entities/show";
import { ShowGateway } from "../../gateways/show";

export class RegisterShowUC {
    constructor(private showGateway: ShowGateway) { }

    public async execute(input: RegisterShowUCInput): Promise<RegisterShowUCOutput> {
        try {
            const showID = v4();

            if (!input.week_day || !input.start_time || !input.end_time || !input.band_id) {
                throw new Error("Possui valores invalidos.")
            }

            let weekDay = ShowWeekDay.FRIDAY;

            if (input.week_day === "SATURDAY") {
                weekDay = ShowWeekDay.SATURDAY;

            } else if (input.week_day === "SUNDAY") {
                weekDay = ShowWeekDay.SUNDAY

            } else if (input.week_day !== "FRIDAY") {
                throw new Error("Dia da semana invalido!")

            } else if (input.start_time < 8 || input.start_time > 23) {
                throw new Error("Horario inicial invalido.")

            } else if (input.end_time > 23 || input.end_time < 8) {
                throw new Error("Horario final invalido.")

            } else if (input.start_time % 1 !== 0) {
                throw new Error("Horario inicial tem que ser inteiro")

            } else if (input.end_time % 1 !== 0) {
                throw new Error("Horario final tem que ser inteiro")

            }

            const showTime = await this.showGateway.getShow(weekDay, input.start_time, input.end_time)

            if (showTime) {
                throw new Error("Horario indisponivel!")
            }

            const show = new Show(
                showID,
                weekDay,
                input.start_time,
                input.end_time,
                input.band_id
            )

            await this.showGateway.createShow(show)

            return {
                message: "Show Criado com sucesso!"
            }



        } catch (err) {
            throw new Error(err.message)
        }
    }
}


export interface RegisterShowUCInput {
    week_day: ShowWeekDay,
    start_time: number,
    end_time: number,
    band_id: string
}

export interface RegisterShowUCOutput {
    message: string
}