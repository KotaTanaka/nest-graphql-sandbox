import { Module } from '@nestjs/common';
import { APIModule } from '@/api/api.module';
import { GQLModule } from '@/graphql/graphql.module';

@Module({
  imports: [APIModule, GQLModule],
})
export class AppModule {}
