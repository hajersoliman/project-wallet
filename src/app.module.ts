import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SoftwareController } from './software/software.controller';
import { WalletService } from './wallet/wallet.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URL || 'mongodb://localhost:27017/nestdb'),
    
  ],
  controllers: [AppController, SoftwareController],
  providers: [AppService, WalletService],

})

export class AppModule {}