import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Transaction, TransactionState, TransactionType } from '../state';
import { getTrnasactions } from '../state/actions/transactionActions';

export default function AllTransactions() {
    let dispatch = useDispatch();
    let { transactions, loading, error } = useSelector(
        (state) => state.transaction as TransactionState,
    );
    console.log(transactions);

    useEffect(() => {
        dispatch(getTrnasactions());
    }, []);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    return transactions.map((t: Transaction, idx: number) => (
        <TransactionItem key={idx} item={t} />
    ));
}

const TransactionItem = ({ item }: { item: Transaction }) => {
    return (
        <div className={`border-secondary border-bottom row py-1`}>
            {/* id */}
            <div className='col-2'>{item.id}</div>

            {/* title */}
            <div className='col-6'>{item.description}</div>

            {/* amount */}
            <div
                className={`${
                    item.type ? 'text-success' : 'text-danger'
                } col-4 text-end`}
            >
                {item?.amount?.toLocaleString('fa-IR')}
            </div>
        </div>
    );
};
