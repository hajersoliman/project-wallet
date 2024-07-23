import { Controller, Get, Param, Post, Body, Put, Delete} from '@nestjs/common' ;
import { WalletService } from 'src/wallet/wallet.service';

@Controller('software')
export class SoftwareController {

    constructor(private readonly walletService: WalletService ){}


@Get()
findAllsoftware(){
  return 'All projects information' ;

}

@Get(':id')
findOne(@Param('id') id: string): string {
  return ` id #${id} cat`;
}

@Post()
  create(@Body() body) {
    return body;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body ) {
    return `This action updates a #${id} projects`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }

}