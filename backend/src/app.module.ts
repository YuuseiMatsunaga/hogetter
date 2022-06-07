import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(), // typeormを使うために使用
    ConfigModule.forRoot({ // envファイルを組み込むために使用
      isGlobal: true,
      envFilePath: [`.env.local`, `.env`]
    }),
    AuthModule
  ],
  controllers: [
    AppController // 後述するクラス
  ],
  providers: [AppService],
})
export class AppModule {}