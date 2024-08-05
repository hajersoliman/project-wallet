import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SoftwareController } from './software/software.controller';
import { WalletService } from './wallet/wallet.service';
import { ElasticsearchModule } from '@nestjs/elasticsearch';




@Module({
  imports: [
    MongooseModule.forRoot(
      process.env.MONGO_URL || 'mongodb://localhost:27017/nestdb',
    ),

    ElasticsearchModule.register({
      node: 'http://localhost:9200', // Elasticsearch server URL
    }), 
  ],
  controllers: [AppController, SoftwareController],
  providers: [AppService, WalletService],
  exports: [ElasticsearchModule],
})

export class AppModule {}
export class ElasticsearchConfigModule {}

