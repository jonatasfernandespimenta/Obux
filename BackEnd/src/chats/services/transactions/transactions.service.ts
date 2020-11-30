import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TransactionEntity } from 'src/chats/domain/transaction-domain/transaction.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TransactionService {
  constructor(@InjectRepository(TransactionEntity) private transactionRepository: Repository<TransactionEntity>) {  }

  async getTransactions() {
    return await this.transactionRepository.find({
      order: { id: "DESC" },
      where: [{ "accepted": true }]
    });
  };

  async getTransaction(_id: number) {
    return await this.transactionRepository.find({
      where: [{ "id": _id }],
      relations: ['user']
    })
  };

  async createTransaction(newTransaction) {
    return await this.transactionRepository.save(newTransaction);
  };

  async updateTransaction(_id: number, transaction: TransactionEntity) {
    const property = await this.transactionRepository.findOne({
      where: { id: _id }
    });

    return this.transactionRepository.save({
      ...property,
      ...transaction
    });
  }

}
