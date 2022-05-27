import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getAllStudents() {
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
