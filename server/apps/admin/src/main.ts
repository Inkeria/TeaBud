import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AdminModule } from './admin.module';
async function bootstrap() {
  const app = await NestFactory.create(AdminModule);

  const option = new DocumentBuilder()
    .setTitle('山芽-后台管理API')
    .setDescription('供后台管理界面调用的服务器API')
    .setVersion('1.0')
    .build()
  const document = SwaggerModule.createDocument(app, option);
  SwaggerModule.setup('api-docs', app, document);


  await app.listen(3000);
  console.log('http://localhost:3000/api-docs')
}
bootstrap();
