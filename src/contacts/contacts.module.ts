import { Module } from '@nestjs/common';
import { ContactsController } from './contacts.controller';
import { ConfigModule } from '@nestjs/config';
import { Contact, ContactSchema } from './schemas/contacts.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { ContactsService } from './contacts.service';
@Module({
  imports: [
    ConfigModule,
    MongooseModule.forFeature([{ name: Contact.name, schema: ContactSchema }]),
  ],
  controllers: [ContactsController],
  providers: [ContactsService],
})
export class ContactsModule {}
