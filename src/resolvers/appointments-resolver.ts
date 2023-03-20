import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from "type-graphql";
import { CreateAppointmentInput } from "../dto/inputs/create-appointment-input";
import { Appointment } from "../dto/models/appointment";
import { Customer } from "../dto/models/customer";

const appointments: Appointment[] = [];

@Resolver(() => Appointment)
export class AppointmentsResolver {
  @Query(() => [Appointment])
  async appointments() {
    return appointments;
  }

  @Mutation(() => Appointment)
  async createAppointment(@Arg('data') data: CreateAppointmentInput) {
    const appointment: Appointment = {
      startAt: data.startAt,
      endAt: data.endAt,
    }
    appointments.push(appointment);
    return appointment;
  }

  @FieldResolver(() => Customer)
  async customer(@Root() appointment: Appointment) {
    console.log(appointment);
    return {
      name: 'John Doe'
    }
  }
}