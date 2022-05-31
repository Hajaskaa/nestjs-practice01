import { HttpService } from '@nestjs/axios';
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class HttpServiceInterceptor implements NestInterceptor {
  constructor(private httpService: HttpService) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    /*const ctx = context.switchToHttp();
    const token = ctx.getRequest().headers['authorization'];
    console.log('interceptor');
    console.log(ctx);
    console.log('//////////////////////////');
    console.log(ctx.getRequest());
    console.log(ctx.getRequest().headers['authorization']);
    if (token) {*/
    this.httpService.axiosRef.defaults.headers.common['authorization'] =
      'sonicHedgehog';
    return next.handle().pipe();
  }
}
