import { Injectable } from '@nestjs/common';
import { Task } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskInput } from './dto/createTask.input';
import { UpdateTaskInput } from './dto/updateTask.input';

@Injectable()
export class TaskService {
  constructor(private readonly prismaService: PrismaService) {}
  async getTasks(): Promise<Task[]> {
    return await this.prismaService.task.findMany();
  }

  async createTask(createTaskInput: CreateTaskInput): Promise<Task> {
    const { name, dueDate, description } = createTaskInput;
    return this.prismaService.task.create({
      data: { name, dueDate, description },
    });
  }

  async updateTask(updateTaskInput: UpdateTaskInput): Promise<Task> {
    const { id, name, dueDate, status, description } = updateTaskInput;
    return this.prismaService.task.update({
      where: { id },
      data: { name, dueDate, status, description },
    });
  }

  async deleteTask(id: number): Promise<Task> {
    return this.prismaService.task.delete({ where: { id } });
  }
}
