import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class JwtRoleGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req: Request = context.switchToHttp().getRequest();
    if(req.headers['access-token']) {
      const token = req.headers['access-token'];
      const decodedToken = this.jwtService.decode(token) as Record<string, any>;
      
      if(decodedToken.admin) {
        const verification = this.jwtService.verify(token);
        return verification.admin;
      } else {
        throw new HttpException('Access denied', HttpStatus.UNAUTHORIZED);
      }
    } else {
      throw new HttpException('Access denied', HttpStatus.UNAUTHORIZED);
    }
  }
}
