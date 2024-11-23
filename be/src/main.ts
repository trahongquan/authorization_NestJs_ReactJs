import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

const logger = new Logger('Database Connection');

async function bootstrap(): Promise<void> {
  try {
    const app = await NestFactory.create(AppModule);
    // app.useGlobalPipes(new ValidationPipe()); // Validator Pipe level globle

    // Cấu hình CORS
    const corsOptions: CorsOptions = {
      origin: 'http://localhost:3000',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      preflightContinue: false,
      optionsSuccessStatus: 204,
      credentials: true,
      allowedHeaders: ['Authorization', 'Content-Type'],
    };

    app.enableCors(corsOptions);

    const PORT = 3333;
    await app.listen(PORT, () => {
      logger.log(`App started on port ${PORT}`);
      // logger.log('Connected to MongoDB database successfully');
    });
  } catch (error) {
    logger.error(`Error starting the app: ${error.message}`);
  }
}

bootstrap();
