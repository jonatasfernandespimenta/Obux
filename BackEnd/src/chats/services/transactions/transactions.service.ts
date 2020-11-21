import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TransactionEntity } from 'src/chats/domain/transaction-domain/transaction.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TransactionService { 
  constructor(@InjectRepository(TransactionEntity) private transactionRepository: Repository<TransactionEntity>) {  }

  async getTransactions() {
    return await this.transactionRepository.find();
  };

  async getTransaction(_id: number) {
    return await this.transactionRepository.find({
      where: [{ "id": _id }]
    })
  };

  async createTransaction(newTransaction) {
    return await this.transactionRepository.save(newTransaction);
  }

}
