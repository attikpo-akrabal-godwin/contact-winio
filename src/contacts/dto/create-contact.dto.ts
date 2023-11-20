import { ApiProperty } from '@nestjs/swagger';
export class CreateContactDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  city: string;
  @ApiProperty()
  dob: Date;
}
