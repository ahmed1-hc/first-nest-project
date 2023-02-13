import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';
import { Users } from 'src/mock/users';

@Controller('users')
export class UsersController {
  @Get()
  findAll(@Res() res: Response) {
    res
      .status(HttpStatus.OK)
      .json({ success: true, message: 'All Users', data: Users });
  }
}
