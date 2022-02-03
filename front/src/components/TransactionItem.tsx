import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TransactionState, TransactionType } from '../state';
import { getTrnasactions } from '../state/actions/transactionActions';

export default function Transactions() {
    const [transactions, setTransactions] = useState<TransactionState[]>([]);
    let dispatch = useDispatch();
    let { data } = useSelector((state) => state);
    console.log(data);
    useEffect(() => {
        dispatch(getTrnasactions());
        if (data.length) {
            setTransactions(data);
        }
    }, []);
    return transactions.map((t: TransactionState, idx: number) => (
        <TransactionItem key={idx} item={t} />
    ));
}

const TransactionItem = ({ item }: { item: TransactionState }) => (
    <div className={`border-secondary border-bottom row py-1`}>
        {/* id */}
        <div className='col-2'>{item.id}</div>

        {/* title */}
        <div className='col-6'>{item.description}</div>

        {/* amount */}
        <div className='col-4 text-end'>
            {item?.amount?.toLocaleString('fa-IR')}
        </div>
    </div>
);
