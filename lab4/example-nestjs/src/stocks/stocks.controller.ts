import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put } from '@nestjs/common';
import { StocksService } from './stocks.service';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import { Stock } from './entities/stock.entity';

@Controller('stocks')
export class StocksController {
    constructor(private readonly stocksService: StocksService) {}

    @Put(':id')
    replace(@Param('id') id: string, @Body() updateStockDto: UpdateStockDto) {
        return this.stocksService.replace(+id, updateStockDto);
    }

    @Post()
    create(@Body() createStockDto: CreateStockDto) {
        return this.stocksService.create(createStockDto);
    }

    // @Get()
    // findAll() {
    //     return this.stocksService.findAll();
    // }

//     @Get()
//     findAll(@Query('title') title?: string): Stock[] {
//     return this.stocksService.findAll(title);
//   }
    
    @Get()
    findAll(
        @Query('title') title?: string,
        @Query('height') height?: number,
        @Query('lifespan') lifespan?: number,
    ): Stock[] {
        return this.stocksService.findAll(title, height, lifespan);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.stocksService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateStockDto: UpdateStockDto) {
        return this.stocksService.update(+id, updateStockDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.stocksService.remove(+id);
    }
}