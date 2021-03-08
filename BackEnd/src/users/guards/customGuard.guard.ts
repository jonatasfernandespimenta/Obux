import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class JwtCustomGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req: Request = context.switchToHttp().getRequest();

    if(req.headers['access-token']) {
      const token = req.headers['access-token'];
      const verification = this.jwtService.verify(token);
      req['user'] = {
        id: verification.userId,
      }
      return true;
    } else {
      throw new HttpException('Access denied', HttpStatus.UNAUTHORIZED);
    }
  }
}
