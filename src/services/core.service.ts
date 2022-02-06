import { Injectable } from '@nestjs/common';
import { CoreClient } from '../clients/core-client';
import { charactersResponse, characterResponse } from '../helpers/formatResponse';

@Injectable()
export class CoreService {
    constructor(private readonly coreClient: CoreClient) {}

    async getCharacters(page: number = 1) {
        const results = await this.coreClient.get(`/character?page=${page}`);
        const response = {
            info: results.data.info,
            results: charactersResponse(results.data.results)
        }

        return response;
    }

    async getCharacter(id: number) {
        const results = await this.coreClient.get(`/character/${id}`);
        
        return characterResponse(results.data);        
    }
}
