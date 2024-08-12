import { Field, ObjectType } from '@nestjs/graphql';
import { User } from '../../user/model/user.model';


@ObjectType()
export class SignInResponse {
  @Field()
  accessToken: string;

  @Field(() => User)
  user: User;
}
