import { Module } from '@nestjs/common';
import { CoreController } from '../controllers/core.controller';
import { CoreService } from '../services/core.service';
import { CoreClient } from '../clients/core-client';

@Module({
    imports: [],
    controllers: [CoreController],
    providers: [CoreService, CoreClient]
})

export class CoreModule {}