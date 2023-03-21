import { prop, modelOptions, Ref } from '@typegoose/typegoose'
import {ApiProperty} from '@nestjs/swagger'
import { Episode } from './episode.model'

@modelOptions({
    schemaOptions:{
        timestamps: true,
    }
})

export class Video {

    @ApiProperty({description: '视频名称'})
    @prop()
    name: string


    @ApiProperty({description: '封面'})
    @prop()
    cover: string

    @prop({ref: ()=> Episode})
    public episodes?: Ref<Episode>[]
}