import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument } from 'mongoose';
export type ContactDocument = HydratedDocument<Contact>;
@Schema()
export class Contact {
  @Prop()
  @ApiProperty()
  name: string;

  @Prop()
  @ApiProperty()
  city: string;

  @Prop()
  @ApiProperty()
  dob: Date;
}

export const ContactSchema = SchemaFactory.createForClass(Contact);
