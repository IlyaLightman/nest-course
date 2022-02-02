import { ApiProperty } from "@nestjs/swagger"
import { IsString,Length, IsEmail } from "class-validator"

export class CreateUserDto {
    @ApiProperty({ example: 'user@mail.com', description: 'Email' })
    @IsString({ message: 'Must be a string' })
    @IsEmail({}, { message: 'Incorrect Email' })
    readonly email: string

    @ApiProperty({ example: 'qwerty', description: 'Password' })
    @IsString({ message: 'Must be a string' })
    @Length(5, 20, { message: 'Password length have to include from 5 to 20 letters' })
    readonly password: string
}
