import { Injectable } from '@nestjs/common';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import { FileService } from 'file.service';
import { Stock } from './entities/stock.entity';

@Injectable()
export class StocksService {
  constructor(private fileService: FileService<Stock[]>) {}

  replace(id: number, updateStockDto: UpdateStockDto): void {
    const stocks = this.fileService.read();
  
    const index = stocks.findIndex((stock) => stock.id === id);

    stocks[index] = {
      ...updateStockDto,
      id
    } as Stock;
  
    this.fileService.write(stocks);
  }
  

  create(createStockDto: CreateStockDto) {
    const stocks = this.fileService.read();

    // для простоты новый id = текущее количество карточек + 1
    const stock = { ...createStockDto, id: stocks.length + 1 };

    this.fileService.add(stock);
  }

  // findAll(): Stock[] {
  //   const stocks = this.fileService.read();

  //   return stocks;
  // }

  // findAll(title?: string): Stock[] {
  //   const stocks = this.fileService.read();

  //   return title
  //     ? stocks.filter((stock) =>
  //         stock.title.toLowerCase().includes(title.toLowerCase()),
  //       )
  //     : stocks;
  // }

  findAll(title?: string, height?: number, lifespan?: number): Stock[] {
    const stocks = this.fileService.read();
  
    return stocks.filter((stock) => {
      const matchesTitle = title
        ? stock.title.toLowerCase().includes(title.toLowerCase())
        : true;
  
      const matchesHeight = height
        ? this.isInRange(height, stock.height)
        : true;
  
      const matchesLifespan = lifespan
        ? this.isInRange(lifespan, stock.lifespan)
        : true;
  
      return matchesTitle && matchesHeight && matchesLifespan;
    });
  }
  
  // Метод для проверки попадания в диапазон
  private isInRange(value: number, range: string): boolean {
    const match = range.match(/(\d+)[^\d]*(\d+)?/); // Извлечение чисел из строки
    if (!match) return false;
  
    const min = parseInt(match[1], 10);
    const max = match[2] ? parseInt(match[2], 10) : min;
  
    return value >= min && value <= max;
  }

  findOne(id: number): Stock | null {
    const stocks = this.fileService.read();

    return stocks.find((stock) => stock.id === id) ?? null;
  }

  update(id: number, updateStockDto: UpdateStockDto): void {
    const stocks = this.fileService.read();

    const updatedStocks = stocks.map((stock) =>
      stock.id === id ? { ...stock, ...updateStockDto } : stock,
    );

    this.fileService.write(updatedStocks);
  }

  remove(id: number): void {
    const filteredStocks = this.fileService
      .read()
      .filter((stock) => stock.id !== id);

    this.fileService.write(filteredStocks);
  }
}