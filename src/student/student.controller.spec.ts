import { UseInterceptors } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { HttpServiceInterceptor } from 'src/interceptors/authentication.interceptor';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';

//@UseInterceptors(HttpServiceInterceptor)
class StudentServiceStub {
  async getAllStudent() {
    return {
      email: 'pov@gmail.com',
      name: 'Povinszki',
      id: 4,
    };
  }
}

describe('StudentController', () => {
  let controller: StudentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      //imports: [HttpServiceInterceptor],
      controllers: [StudentController],
      providers: [
        {
          provide: StudentService,
          useClass: StudentServiceStub,
        },
        HttpServiceInterceptor,
      ],
    }).compile();

    controller = module.get<StudentController>(StudentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
