import { IsInt, IsString, Length, Max, Min } from 'class-validator';

export default class CreatePollDto {
  @Length(1, 100)
  @IsString()
  topic: string;

  @Max(5)
  @Min(1)
  @IsInt()
  votesPerVoter: number;

  @Length(1, 25)
  @IsString()
  name: string;
}
