import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TransactionService } from 'src/chats/services/transactions/transactions.service';

@Controller('transactions')
export class TransactionController {
  constructor(
    private readonly transaction: TransactionService,
  ) {  }

  @Get(':id')
  getChat(@Param() params) {
    return this.transaction.getTransaction(params.id);
  }

  @Get('/')
  getChats() {
    return this.transaction.getTransactions();
  }

  @Post('create')
  createChat(@Body() newTransaction) {
    return this.transaction.createTransaction(newTransaction);
  }
}
