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
import { ApiResponse } from '@nestjs/swagger';


@Controller('contacts')
export class ContactsController {
  constructor(
    private configService: ConfigService, // test
    private contactsService: ContactsService,
  ) {}
  @Get()
  @ApiResponse({ type: Contact })
  findAll(): Promise<Contact[]> {
    return this.contactsService.findAll();
  }

  @Get(':id')
  @ApiResponse({ type: Contact })
  findOne(@Param('id') id: string): Promise<Contact> {
    return this.contactsService.findOne(id);
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string): { message: string } {
    this.contactsService.deleteOne(id);
    return { message: 'contact deleted' };
  }

  @Patch(':id')
  @ApiResponse({ type: Contact })
  updateOne(
    @Param('id') id: string,
    @Body() createContactDto: CreateContactDto,
  ): Promise<Contact> {
    const contact = this.contactsService.updateOne(id, createContactDto);
    return contact;
  }

  @Post()
  @ApiResponse({ type: Contact })
  create(@Body() createContactDto: CreateContactDto): Promise<Contact> {
    return this.contactsService.create(createContactDto);
  }
}
