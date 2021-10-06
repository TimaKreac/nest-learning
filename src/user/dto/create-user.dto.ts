import { ApiProperty } from '@nestjs/swagger'

export class CreateUserDto {
  @ApiProperty({
    example: 'user@gmail.com',
    description: 'Электронный адрес',
  })
  readonly email: string

  @ApiProperty({
    example: 'qwerty',
    description: 'Пароль пользователя',
  })
  readonly password: string
}
