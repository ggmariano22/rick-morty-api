import { Injectable } from '@nestjs/common';
import { CoreClient } from '../clients/core-client';

@Injectable()
export class CoreService {
    constructor(private readonly coreClient: CoreClient) {}

    async getCharacters() {
        const results = await this.coreClient.get('/character');
        return results.data;
    }

    async getCharacter(id: number) {
        const results = await this.coreClient.get(`/character/${id}`);
        return results.data;
    }
}