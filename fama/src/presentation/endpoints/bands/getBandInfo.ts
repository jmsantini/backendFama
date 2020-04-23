import { Request, Response } from "express";
import { GetBandInfoUC } from "../../../business/usecases/bands/getBandInfo";
import { BandDatabase } from "../../../data/bandDatabase";

export const getBandInfoEndpoint = async (req: Request, res: Response) => {
    try{
        const getBandInfoUC = new GetBandInfoUC(new BandDatabase());
        
        const result = await getBandInfoUC.execute({
            id: req.query.id,
            name: req.query.name
        });

        res.status(200).send({band:result})
    } catch (err) {
        res.status(err.console.errorCode || 400).send({
            message: err.message
        });
    }
}