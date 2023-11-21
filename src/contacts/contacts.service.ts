import { Injectable } from '@nestjs/common';
import { Contact } from './schemas/contacts.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateContactDto } from './dto/create-contact.dto';

@Injectable()
export class ContactsService {
  constructor(
    @InjectModel(Contact.name) private contactModel: Model<Contact>,
  ) {}
  create(createContactDto: CreateContactDto): Promise<Contact> {
    const contact = new this.contactModel(createContactDto).save();
    return contact;
  }
  deleteOne(id: string): Promise<Contact> {
    return this.contactModel.findByIdAndDelete(id).exec();
  }
  updateOne(id: string, createContactDto: CreateContactDto): Promise<Contact> {
    return this.contactModel.findByIdAndUpdate(id, createContactDto, {
      new: true,
    });
  }
  findOne(id: string): Promise<Contact> {
    return this.contactModel.findById(id);
  }
  findAll(): Promise<Contact[]> {
    return this.contactModel.find();
  }
}
