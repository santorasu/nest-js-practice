import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
    private students = [
        {
            id: 1,
            name: 'John Doe',
            age: 20,
            grade: 'A'
        },
        {
            id: 2,
            name: 'Jane Smith',
            age: 22,
            grade: 'B'
        },
        {
            id: 3,
            name: 'Alice Johnson',
            age: 21,
            grade: 'A'
        }
    ];

    getAllStudents(){
        return this.students;
    }

    getStudentById(id: number){

        const student = this.students.find((s) => s.id === id);
        if (!student) throw new NotFoundException('Student not found');
        return student;
    }

    // POST
    createStudent(data: { name : string; age: number, grade: string }) {
        const newStudent = {
            id: Date.now(),
            ...data,
        };

        this.students.push(newStudent);
        return newStudent;
    }

    // PUT
    updateStudent(id: number, data: {name: string; age: number; grade: string}){
        const index = this.students.findIndex
        ((s) => s.id === id);
        if (index === -1) throw new NotFoundException('Student not found');

        this.students[index] = { id, ...data };
        return this.students[index];
    }

    // PATCH
    patchStudent(id: number, data : Partial<{ name: string; age : number; grade : string}>){
        const student = this.getStudentById(id);
        Object.assign(student, data);
        return student;
    }

    // DELETE
    deleteStudent(id : number){
        const index = this.students.findIndex((s) => s.id === id);
        if (index === -1) throw new NotFoundException('Student not found');
        const deleted = this.students.splice(index, 1);
        return { message : 'Student deleted successfully', student: deleted[0] };
    }
}
