import axios from 'axios';
import { Dispatch } from 'react';
import { TransactionAction, TransactionState } from '..';

export const addTrnasaction =
    (transaction: TransactionState) =>
    async (dispatch: Dispatch<TransactionAction>) => {
        dispatch({ type: 'REQUEST' });
        try {
            let { data }: { data: TransactionState } = await axios.get('');
            dispatch({ type: 'SUCCESS', payload: data });
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
                'http://localhost:5000/api/transactions',
            );

            dispatch({ type: 'SUCCESS', payload: data.data });
        } catch (e: any) {
            dispatch({ type: 'FAILURE', payload: { error: e.message } });
        }
    };
