import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { StudentController } from '../student/student.controller';
import { StudentService } from '../student/student.service';

@Module({
  imports: [HttpModule],
  controllers: [StudentController],
  providers: [StudentService],
})
export class AppModule {}

/*@Module({
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: HttpServiceInterceptor,
    },
  ],
})*/
