import { Module, Global } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { DbService } from './db.service';
import { Episode } from './models/episode.model';
import { User } from './models/user.model';
import { Video } from './models/video.model';
const models = TypegooseModule.forFeature([User, Video, Episode])
@Global()
@Module({
  imports: [
    TypegooseModule.forRoot('mongodb://localhost/TeaBud' /*,{
      useUnifiedTopology: true,
      useCreatIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true,
    }*/),
    models,

  ],
  providers: [DbService],
  exports: [DbService, models],
})
export class DbModule {}
