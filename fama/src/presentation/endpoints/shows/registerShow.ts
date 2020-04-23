import { Request, Response } from "express";
import { ShowDatabase } from "../../../data/showDatabase";
import { RegisterShowUC } from "../../../business/usecases/shows/registerShow";

export const registerShowEndPoint = async (req: Request, res: Response) => {
    try {
        const registerShowUC = new RegisterShowUC(new ShowDatabase());
        const result = await registerShowUC.execute({
            week_day: req.body.week_day,
            start_time: req.body.start_time,
            end_time: req.body.end_time,
            band_id: req.body.band_id
        })

        res.status(200).send(result)
    } catch (err) {
        res.status(err.errorCode || 400).send({
            message: err.message
        })
    }
}