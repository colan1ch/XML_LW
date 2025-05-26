import { Module } from '@nestjs/common';
import { StocksService } from './stocks.service';
import { StocksController } from './stocks.controller';
import { FileAccessor, FileService } from '../../file.service'
import {Stock} from '../stocks/entities/stock.entity'

@Module({
  controllers: [StocksController],
  providers: [
    StocksService,
    {
      provide: FileService,
      useFactory: () => new FileService<Stock[]>('assets/stocks.json'),
    },
  ],
})
export class StocksModule {}