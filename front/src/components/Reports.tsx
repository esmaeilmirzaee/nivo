import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Transaction } from '../state';
export default function Reports() {
    let [amount, setAmounts] = useState({ deposit: 0, withdraw: 0 });
    const { transactions, loading } = useSelector((state) => state.transaction);

    useEffect(() => {
        let totalDeposit = 0,
            totalWithdraw = 0;

        transactions.forEach((t) => {
            if (t.type) {
                totalDeposit += t.amount;
            } else {
                totalWithdraw += t.amount;
            }
        });
        setAmounts({ deposit: totalDeposit, withdraw: totalWithdraw });
    }, [transactions]);

    return (
        <div className='container m-1 border-bottom border-warning border-2'>
            <div className='row'>
                {[{ type: true }, { type: false }].map((item, idx) => (
                    <div className='col m-0.5' key={idx}>
                        <div
                            className={`${
                                item.type ? 'bg-primary' : 'bg-danger'
                            } px-2 rounded rounded-3`}
                        >
                            <p className='text-white'>مبلغ</p>
                            <p className='text-white text-end'>
                                {item.type
                                    ? amount.deposit.toLocaleString('fa-IR')
                                    : amount.withdraw.toLocaleString('fa-IR')}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
