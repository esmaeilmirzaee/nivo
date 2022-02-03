import axios from 'axios';
import { Dispatch } from 'react';
import { Transaction, TransactionAction, TransactionState } from '..';

const CORE_URL = 'http://localhost:5000/api/transactions';

export const addTrnasaction =
    (transaction: Transaction) =>
    async (dispatch: Dispatch<TransactionAction>) => {
        dispatch({ type: 'REQUEST' });
        try {
            await axios.post(CORE_URL, transaction);

            // TODO:This could be so much better
            let { data }: { data: Transaction } = await axios.get(CORE_URL);

            dispatch({ type: 'SUCCESS', payload: data.data });
        } catch (e: any) {
            dispatch({ type: 'FAILURE', payload: { error: e.message } });
        }
    };

// TODO: this should be aligned by the user id
export const getTrnasactions =
    () => async (dispatch: Dispatch<TransactionAction>) => {
        dispatch({ type: 'REQUEST' });
        try {
            let { data }: { data: TransactionState[] } = await axios.get(
                CORE_URL,
            );

            dispatch({ type: 'SUCCESS', payload: data.data });
        } catch (e: any) {
            dispatch({ type: 'FAILURE', payload: { error: e.message } });
        }
    };
