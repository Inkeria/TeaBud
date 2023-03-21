import { Controller } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud'; 
import { ApiTags } from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';
import { Episode } from '@libs/db/models/episode.model';
@Crud({
    model: Episode
})
@ApiTags('分p')
@Controller('episodes')
export class EpisodesController {
    constructor(
        @InjectModel(Episode) private readonly model
    ){}
}