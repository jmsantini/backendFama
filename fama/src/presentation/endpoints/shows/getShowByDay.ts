import { Request, Response } from "express";
import { ShowDatabase } from "../../../data/showDatabase";
import { GetShowsByDayUC } from "../../../business/usecases/shows/getShowByDay";

export const GetShowsByDayEndpoint = async (req: Request, res: Response) => {
    try{
        const getShowsByDay = new GetShowsByDayUC(new ShowDatabase());
        const result = await getShowsByDay.execute({
            week_day: req.query.week_day
        })
        res.status(200).send(result)
    } catch(err){
        res.status(400).send({
            message: err.message
        })
    }
}