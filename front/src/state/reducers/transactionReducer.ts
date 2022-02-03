import { TransactionAction, TransactionState } from '..';

export default function transactionReducer(
    state: TransactionState = { transactions: [], error: '', loading: false },
    action: TransactionAction,
) {
    switch (action.type) {
        case 'REQUEST': {
            return { ...state, loading: true };
        }
        case 'SUCCESS': {
            return { ...state, loading: false, transactions: action.payload };
        }
        case 'FAILURE': {
            return { ...state, loading: false, error: action.payload };
        }
        default:
            return state;
    }
}
