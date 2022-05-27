import { HttpService } from '@nestjs/axios';
import { Body, Injectable } from '@nestjs/common';
//import { AxiosResponse } from 'axios';
//import { Observable } from 'rxjs';
//import { map } from 'rxjs/operators';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class StudentService {
  constructor(private httpService: HttpService) {} //constructor injection

  /*getAllStudents() { //WITH piping axiosresponse
    return this.httpService.get('http://localhost:4000/students').pipe(
      map((axiosResponse: AxiosResponse) => {
        console.log(axiosResponse);
        return axiosResponse.data;
      }),
    );
  }*/

  async getAllStudents() {
    //WITH firstValueFrom
    const url = 'http://localhost:4000/students';
    const { data } = await firstValueFrom(this.httpService.get(url));
    console.log(data);
    return data;
  }

  async getStudentById(studentId: string) {
    const url = 'http://localhost:4000/students/' + studentId;
    const { data } = await firstValueFrom(this.httpService.get(url));
    console.log(data);
    return data;
  }

  async deleteStudentById(bodyContent) {
    const url = 'http://localhost:4000/students/';
    console.log('bodyContent:');
    console.log(bodyContent);
    //console.log('bodyContent.body');
    //console.log(bodyContent.body);
    const { data } = await firstValueFrom(
      this.httpService.delete(url, { data: bodyContent }),
    ); //payload is the request body
    console.log('deleteData:');
    //console.log(foo);
    return data;
  }

  async postStudentById(bodyContent) {
    const url = 'http://localhost:4000/students/';
    const { data } = await firstValueFrom(
      this.httpService.post(url, bodyContent), //payload is the body of the request
    );
    console.log(data);
    return data;
  }

  async putStudentById(bodyContent) {
    const url = 'http://localhost:4000/students/';
    const { data } = await firstValueFrom(
      this.httpService.put(url, { data: bodyContent }),
    );
    console.log(data);
    return data;
  }
}
