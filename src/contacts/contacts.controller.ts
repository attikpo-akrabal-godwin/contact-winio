import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Contact } from './schemas/contacts.schema';
import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-contact.dto';

@Controller('contacts')
export class ContactsController {
  constructor(
    private configService: ConfigService,
    private contactsService: ContactsService,
  ) {}
  @Get()
  findAll(): Promise<Contact[]> {
    return this.contactsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Contact> {
    return this.contactsService.findOne(id);
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string) {
    this.contactsService.deleteOne(id);
    return { message: 'contact deleted' };
  }

  @Patch(':id')
  updateOne(
    @Param('id') id: string,
    @Body() createContactDto: CreateContactDto,
  ) {
    const contact = this.contactsService.updateOne(id, createContactDto);
    return contact;
  }

  @Post()
  create(@Body() createContactDto: CreateContactDto): Promise<Contact> {
    return this.contactsService.create(createContactDto);
  }
}
