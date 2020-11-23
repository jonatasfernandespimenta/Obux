import { Controller, Post, Body, Get, Put, Delete, Param, UseInterceptors, UploadedFile, Res } from '@nestjs/common';
import { UserService } from '../../services/user/user.service';
import { AuthService } from '../../services/auth/auth.service';
import { CreateUserDto } from '../../dtos/user-dtos/createuser.dto';
import { LoginDto } from '../../dtos/user-dtos/login.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer'
import { extname, join } from 'path'
import { ServeStaticModule } from '@nestjs/serve-static';

@Controller('users')
export class UsersController {

  constructor(
    private readonly user: UserService,
    private readonly auth: AuthService
  ) {  }

  @Get(':id')
  getUser(@Param() params) {
    return this.user.getUser(params.id);
  }

  @Get('/')
  getUsers() {
    return this.user.getUsers();
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, cb) => {
        const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
        cb(null, `${randomName}${extname(file.originalname)}`)
      }
    })
  }))
  uploadSingle(@UploadedFile() file) {
    return file;
  }


  @Post('create')
  createUser(@Body() newUser: CreateUserDto) {
    return this.user.createUser(newUser);
  }

  @Post('login')
  async userLogin(@Body() userCredentials: LoginDto) {
    return this.auth.login(userCredentials);
  }

  @Post('isemailavailable')
  async isAvailable(@Body() email) {
    return this.user.isEmailAvailable(email);
  }

  @Delete('deluser/:id')
  delUser(@Param() params) {
    return this.user.deleteUser(params.id);
  }

}
