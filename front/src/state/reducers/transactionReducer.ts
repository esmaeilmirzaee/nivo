import { TransactionAction, TransactionState } from '..';

export default function transactionReducer(
    state: TransactionState = { transactions: [], error: '', loading: false },
    action: TransactionAction,
) {
    switch (action.type) {
        case 'REQUEST': {
            return { loading: true, transactions: [] };
        }
        case 'SUCCESS': {
            return { loading: false, transactions: action.payload };
        }
        case 'FAILURE': {
            return { loading: false, error: action.payload };
        }
        default:
            return state;
    }
}
