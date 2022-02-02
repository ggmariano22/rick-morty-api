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

    get(url: string) {
        return this.axios.get(url)
        .then(response => response)
        .catch(error => error);
    }
}
