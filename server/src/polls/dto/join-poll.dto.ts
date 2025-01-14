import { IsString, Length } from 'class-validator';

export default class JoinPollDto {
  @Length(6, 6)
  @IsString()
  pollID: string;

  @Length(1, 25)
  @IsString()
  name: string;
}
