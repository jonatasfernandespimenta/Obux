import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class IsOwner implements CanActivate {
  constructor(private jwtService: JwtService) {}
  
  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest();

    
    const decodedToken = this.jwtService.decode(req.headers['access-token']) as Record<string, any>;

    const userValidation = Number(req.user.id) === Number(req.params?.id);
    const orderValidation = Number(req.user.id) === Number(req.body.user?.id);
    const itemValidation = Number(req.user.id) === Number(req.body?.userId);

    if(decodedToken.admin) {
      return true;
    }

    if(userValidation) {
      return Number(req.user.id) === Number(req.params.id);
    } 
    
    if(orderValidation) {
      return Number(req.user.id) === Number(req.body.user.id);
    }

    if(itemValidation) {
      return Number(req.user.id) === Number(req.body.userId);
     }

    else {
      throw new HttpException('Access denied', HttpStatus.UNAUTHORIZED);
    }

  }
}
