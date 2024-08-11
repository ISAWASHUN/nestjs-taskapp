import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TaskService } from './task.service';
import { Task } from './model/task.model';

@Resolver()
export class TaskResolver {
  constructor(private readonly taskService: TaskService) {}

  @Query(() => [Task], { nullable: 'items' })
  getTasks() {
    return this.taskService.getTasks();
  }

  @Mutation(() => Task)
  createTask(
    @Args('name') name: string,
    @Args('dueDate') dueDate: string,
    @Args('description', { nullable: true }) describe: string,
  ): Task {
    return this.taskService.createTask(name, dueDate, describe);
  }
}
