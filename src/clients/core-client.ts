import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

@Injectable()
export class CoreClient {
    protected axios: AxiosInstance;

    constructor() {
        this.axios = axios.create({
            baseURL: process.env.RICK_MORTY_BASE_URI
        })
    }

    async get(url: string) {
        return await this.axios.get(url)
    }
}
