import { getCustomRepository } from 'typeorm';

import AppError from '../errors/AppError';

import Transaction from '../models/Transaction';

import Transactionsrepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transatrionsRepository = getCustomRepository(Transactionsrepository);

    const transaction = await transatrionsRepository.findOne(id);

    if (!transaction) {
      throw new AppError('Transaction does not exist');
    }

    await transatrionsRepository.remove(transaction);
  }
}

export default DeleteTransactionService;
