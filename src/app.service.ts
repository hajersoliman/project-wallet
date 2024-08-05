import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';


@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World "do-pave"!';
  
  }
}

