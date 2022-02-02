import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  index(): Object {
    return {
      message: 'Rick and Morty API'
    };
  }
}
