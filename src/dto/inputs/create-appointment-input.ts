import { Field, InputType } from "type-graphql";

@InputType()
export class CreateAppointmentInput {
  @Field()
  customerId: String;

  @Field()
  startAt: Date;

  @Field()
  endAt: Date;
}