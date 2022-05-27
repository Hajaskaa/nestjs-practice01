import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { StudentController } from 'src/student/student.controller';
import { StudentService } from 'src/student/student.service';

@Module({
  imports: [HttpModule],
  controllers: [StudentController],
  providers: [StudentService],
})
export class AppModule {}
