import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogModule } from './blog/blog.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://uchqundev:vFS3bqVIRDvYumP1@cluster0.ionqzsa.mongodb.net/?retryWrites=true&w=majority',
    ),
    BlogModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
