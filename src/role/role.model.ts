import { ApiProperty } from '@nestjs/swagger'
import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript'
import { User } from 'src/user/user.model'
import { UserRole } from './user-role.model'

interface RoleAttributes {
  value: string
  description: string
}

@Table({ tableName: 'roles' })
export class Role extends Model<Role, RoleAttributes> {
  @ApiProperty({ example: 1, description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number

  @ApiProperty({ example: 'ADMIN', description: 'Значение роли пользователя' })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  value: string

  @ApiProperty({ example: 'Администратор', description: 'Описание роли' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string

  @BelongsToMany(() => User, () => UserRole)
  users: User[]
}
