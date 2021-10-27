import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { User } from './user.model'
import { UserController } from './user.controller'
import { UserService } from './user.service'
import { Role } from 'src/role/role.model'
import { RoleModule } from 'src/role/role.module'

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [SequelizeModule.forFeature([User, Role]), RoleModule],
})
export class UserModule {}
