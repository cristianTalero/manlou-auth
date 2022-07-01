import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../schemas/user.schema';


@Module({
    imports: [
        MongooseModule.forRootAsync({
            inject: [ConfigService],
            
            useFactory: async (config: ConfigService) => ({
              uri: config.getOrThrow('MONGO_URL'),
              dbName: config.getOrThrow('MONGO_DATABASE'),
              w: 'majority',
              retryWrites: true
            })
        }),

        MongooseModule.forFeature([
            { name: User.name, schema: UserSchema }
        ]),
    ]
})
export class MongoDatabaseModule {}
