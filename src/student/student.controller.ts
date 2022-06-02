import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { HttpServiceInterceptor } from '../interceptors/authentication.interceptor';
import { StudentService } from './student.service';

@Controller('students')
@UseInterceptors(HttpServiceInterceptor) //through interceptor
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getAllStudents(@Headers() headersRequest) {
    console.log('headers: ', headersRequest);
    return this.studentService.getAllStudents();
  }

  @Get('/:id')
  getStudentById(@Body() bodyContent) {
    return this.studentService.getStudentById(bodyContent);
  }

  @Delete()
  deleteStudentById(@Body() bodyContent) {
    return this.studentService.deleteStudentById(bodyContent);
  }

  @Post()
  postStudentById(@Body() bodyContent) {
    return this.studentService.postStudentById(bodyContent);
  }

  @Put()
  putStudentById(@Body() bodyContent) {
    return this.studentService.putStudentById(bodyContent);
  }
}
