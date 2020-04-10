import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

// from app
import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';
import { BookModule } from '@/book/book.module';

@Module({
  imports: [TypeOrmModule.forRoot(), BookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
