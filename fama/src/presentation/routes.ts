import express, { Request, Response } from "express";
import { registerBandEndpoint } from "./endpoints/bands/registerBand";
import { getBandInfoEndpoint } from "./endpoints/bands/getBandInfo";
import { registerShowEndPoint } from "./endpoints/shows/registerShow";
import { GetShowsByDayEndpoint } from "./endpoints/shows/getShowByDay";


const app = express();
app.use(express.json()); // Linha mágica (middleware)

app.post('/registerBand', registerBandEndpoint)
app.get('/band', getBandInfoEndpoint)

app.post('/registerShow', registerShowEndPoint)
app.get('/getShows', GetShowsByDayEndpoint)

export default app;
