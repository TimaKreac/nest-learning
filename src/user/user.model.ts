import { ApiProperty } from '@nestjs/swagger'
import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript'
import { Role } from 'src/role/role.model'
import { UserRole } from 'src/role/user-role.model'

interface UserAttributes {
  email: string
  password: string
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserAttributes> {
  @ApiProperty({ example: 1, description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number

  @ApiProperty({ example: 'user@gmail.com', description: 'Электронный адрес' })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string

  @ApiProperty({ example: 'qwerty', description: 'Пароль пользователя' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string

  @ApiProperty({ example: true, description: 'Забанен пользователь или нет' })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  banned: boolean

  @ApiProperty({
    example: 'За хулиганство',
    description: 'Причина блокироваки',
  })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  banReason: string

  @BelongsToMany(() => Role, () => UserRole)
  roles: Role[]
}
