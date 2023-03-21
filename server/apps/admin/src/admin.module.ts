import { DbModule } from '@libs/db';
import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { VideosModule } from './videos/videos.module';
import { EpisodesController } from './episodes/episodes.controller';
import { EpisodesModule } from './episodes/episodes.module';

@Module({
  imports: [
    DbModule,
    UsersModule,
    VideosModule,
    EpisodesModule
  ],
  controllers: [AdminController, UsersController, EpisodesController],
  providers: [AdminService],
})
export class AdminModule {}
