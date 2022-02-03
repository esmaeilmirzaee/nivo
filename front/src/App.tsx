import { useState } from 'react';
import NewTransaction from './components/NewTransaction';
import ReportItem from './components/ReportItem';
import AllTransactions from './components/AllTransactions';

export interface MonthType {
    amount: {
        type: 'deposit' | 'withdraw';
        amount: number;
    };
}
interface ItemType {
    type: 'deposit' | 'withdraw';
}

export interface TransactionType {
    id: number;
    description: string;
    amount: number;
    type: 'deposit' | 'withdraw';
}

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className='container' dir='rtl'>
            <h1>خوش آمدید</h1>
            <div className='container border' style={{ width: '20rem' }}>
                <div className='border-bottom px-4 pt-4 pb-2 border-danger row'>
                    {/* <h3>اضافه کردن</h3> */}
                    {/* tab months */}

                    {['قبل', 'جاری', 'آتی'].map((m, idx) => (
                        <div className='container col'>
                            <button
                                key={idx}
                                className={`${
                                    m === 'جاری' ? 'active' : ''
                                } btn btn-outline-light text-black`}
                            >
                                {m}
                            </button>
                        </div>
                    ))}
                </div>
                <div className='container m-1 border-bottom border-warning border-2'>
                    <div className='row'>
                        {[
                            { type: 'deposit', amount: 333333 },
                            {
                                type: 'withdraw',
                                amount: 22222222,
                            },
                        ].map((item: MonthType, idx: number) => (
                            <ReportItem key={idx} item={item} />
                        ))}
                    </div>
                </div>

                <div className='d-grid my-2'>
                    <NewTransaction />
                </div>

                <div className='container my-2'>
                    <AllTransactions />
                </div>
            </div>
        </div>
    );
}

export default App;
