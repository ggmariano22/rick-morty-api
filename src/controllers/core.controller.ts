import { Controller, Get, Render, Param } from '@nestjs/common';
import { CoreService } from '../services/core.service';

@Controller('core')
export class CoreController {
    constructor(private readonly coreService: CoreService) {}

    @Get()
    @Render('characters')
    getCharacters(): Object {
        return this.coreService.getCharacters();
    }

    @Get(':id')
    @Render('character')
    getCharacter(@Param() params): Object {
        return this.coreService.getCharacter(params.id);
    }

}