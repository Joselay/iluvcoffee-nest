import { DynamicModule, Module } from '@nestjs/common';
import { CONNECTION } from 'src/coffees/coffees.constants';
import { DataSourceOptions, createConnection } from 'typeorm';

@Module({})
export class DatabaseModule {
  static register(options: DataSourceOptions): DynamicModule {
    return {
      module: DatabaseModule,
      providers: [
        {
          provide: CONNECTION,
          useValue: createConnection(options),
        },
      ],
    };
  }
}
