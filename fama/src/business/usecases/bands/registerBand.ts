import { v4 } from "uuid";
import { BandDatabase } from "../../../data/bandDatabase";
import { Band } from "../../entities/band";

export class RegisterBandUC {
    constructor(private bandDB: BandDatabase) { }

    public async execute(input: RegisterBandUCInput): Promise<RegisterBandUCOutput> {
        try {
            const bandId = v4();

            if (!input.name || !input.music_genre || !input.responsible) {
                throw new Error("Possuie valores vazios.")
            } else {
                const newBand = new Band(bandId, input.name, input.music_genre, input.responsible)

                await this.bandDB.createBand(newBand)
                return {
                    message: "Banda Cadastrada com sucesso!"
                }
            }
        } catch (err) {
            throw new Error(err.message)
        }
    }
}


export interface RegisterBandUCInput {
    name: string,
    music_genre: string,
    responsible: string
}

export interface RegisterBandUCOutput {
    message: string
}