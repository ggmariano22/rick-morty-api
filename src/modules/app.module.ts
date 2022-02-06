import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { CoreModule } from '../modules/core.module';
import 'dotenv/config';

@Module({
  imports: [CoreModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
