import { useState } from 'react';
import NewTransaction from './components/NewTransaction';
import AllTransactions from './components/AllTransactions';
import Reports from './components/Reports';

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
                    {/* tab months */}
                    {['جاری'].map((m, idx) => (
                        <div className='d-grid col' key={idx}>
                            <button
                                className={`${
                                    m === 'جاری' ? 'active' : ''
                                } btn btn-outline-light text-black`}
                            >
                                {m}
                            </button>
                        </div>
                    ))}
                </div>

                <div>
                    <Reports />
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
