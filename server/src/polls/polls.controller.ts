import { Body, Controller, Post } from '@nestjs/common';
import CreatePollDto from './dto/create-poll.dto';
import JoinPollDto from './dto/join-poll.dto';
import { PollsService } from './polls.service';

@Controller('polls')
export class PollsController {
  constructor(private pollsService: PollsService) {}

  @Post()
  create(@Body() createPollDto: CreatePollDto) {
    const result = this.pollsService.createPoll(createPollDto);
    return result;
  }

  @Post('join')
  async join(@Body() joinPollDto: JoinPollDto) {
    const result = this.pollsService.joinPoll(joinPollDto);
    return result;
  }

  @Post('rejoin')
  async rejoin() {
    const result = this.pollsService.rejoinPoll({
      name: 'From token',
      pollID: 'also from token',
      userID: 'Guess where this comes from?',
    });

    return result;
  }
}
