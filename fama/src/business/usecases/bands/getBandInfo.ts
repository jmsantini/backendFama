import { Band } from "../../entities/band"
import { BandGateway } from "../../gateways/band";


export class GetBandInfoUC {
    constructor(
        private bandGateway: BandGateway
    ) { }

    public async execute(input: GetBandInfoUCInput): Promise<GetBandInfoUCOutput> {
        let band: Band | undefined;

        if (input.id) {
            band = await this.bandGateway.getBandById(input.id)

        } else if (input.name) {
            band = await this.bandGateway.getBandByName(input.name);

        }

        if (!band) {
            throw new Error("Banda não encontrada")
        }

        return {
            id: band.getId(),
            name: band.getName(),
            music_genre: band.getMusicGenre(),
            responsible: band.getResponsible()
        }
    };
}

export interface GetBandInfoUCInput {
    id: string;
    name: string;
}

export interface GetBandInfoUCOutput {
    id: string;
    name: string;
    music_genre: string;
    responsible: string;
}