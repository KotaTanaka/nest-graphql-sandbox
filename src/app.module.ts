import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
// import { Connection } from 'typeorm';

// from app
// import { AppController } from '@/app.controller';
// import { AppService } from '@/app.service';
// import { BookModule } from '@/book/book.module';
import { BooksModule } from './graphql/books/books.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      playground: true,
      autoSchemaFile: 'src/graphql/schema.gql',
    }),
    BooksModule,
  ],
  // imports: [TypeOrmModule.forRoot(), BookModule],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {
  // constructor(private readonly connection: Connection) {}
}
