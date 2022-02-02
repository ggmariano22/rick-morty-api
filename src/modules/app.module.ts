import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { CoreController } from '../controllers/core.controller';
import { AppService } from '../services/app.service';
import { CoreService } from '../services/core.service';
import { CoreClient } from '../clients/core-client';
import 'dotenv/config';

@Module({
  imports: [],
  controllers: [AppController, CoreController],
  providers: [AppService, CoreService, CoreClient],
})

export class AppModule {}
