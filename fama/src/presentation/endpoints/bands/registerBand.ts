import { Request, Response } from "express";
import { RegisterBandUC } from "../../../business/usecases/bands/registerBand";
import { BandDatabase } from "../../../data/bandDatabase";


export const registerBandEndpoint = async (req: Request, res: Response) => {
    try {
        const registerBandUC = new RegisterBandUC(new BandDatabase());
        const result = await registerBandUC.execute({
            name: req.body.name,
            music_genre: req.body.music_genre,
            responsible: req.body.responsible
        })

        res.status(200).send(result)
    } catch (err) {
        res.status(err.errorCode || 400).send({
            message: err.message
        });
    }
}