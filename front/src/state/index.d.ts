type TransactionType = 'DEPOSIT' | 'WITHDRAW';
export type ActionType = 'REQUEST' | 'SUCCESS' | 'FAILURE';

export interface Transaction {
    id: number;
    description: string;
    type: TransactionType;
    amount: number;
}

export interface TransactionState {
    transactions: Transaction[];
    error: string;
    loading: boolean;
}

export interface TransactionAction {
    type: ActionType;
    payload?:
        | TransactionState
        | TransactionState[]
        | { error: string }
        | undefined;
}
