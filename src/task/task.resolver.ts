import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Task } from '@prisma/client';
import { Task as TaskModel } from './model/task.model';
import { TaskService } from './task.service';
import { CreateTaskInput } from './dto/createTask.input';

@Resolver()
export class TaskResolver {
  constructor(private readonly taskService: TaskService) {}

  @Query(() => [TaskModel], { nullable: 'items' })
  async getTasks(): Promise<Task[]> {
    return await this.taskService.getTasks();
  }

  @Mutation(() => TaskModel)
  async createTask(
    @Args('createTaskInput') createTaskInput: CreateTaskInput,
  ): Promise<Task> {
    return await this.taskService.createTask(createTaskInput);
  }
}
