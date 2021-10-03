import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'

@Module({
  controllers: [],
  providers: [],
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'tima6452',
      database: 'next-learning',
      models: [],
      autoLoadModels: true,
    }),
  ],
})
export class AppModule {}
