import { useState } from 'react';
import ReportItem from './components/ReportItem';

export interface MonthType {
    amount: {
        type: 'deposit' | 'withdraw';
        amount: number;
    };
}
interface ItemType {
    type: 'deposit' | 'withdraw';
}

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className='container' dir='rtl'>
            <h1>خوش آمدید</h1>
            <div className='container border' style={{ width: '20rem' }}>
                <div className='border-bottom px-4 pt-4 pb-2 border-danger'>
                    {/* <h3>اضافه کردن</h3> */}
                    {/* tab months */}
                </div>
                <div className='container m-1'>
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
                <div className='container py-2'>
                    {/* transaction */}
                    <form action=''>
                        {/* name */}
                        <div className='mb-3 row '>
                            <label
                                htmlFor='name'
                                className='col-form-label col-sm-4'
                            >
                                نام تراکنش
                            </label>
                            <div className='col-sm-8'>
                                <input
                                    type='text'
                                    className='form-control form-control-sm '
                                    id='name'
                                    placeholder='نام تراکنش'
                                />
                            </div>
                        </div>

                        {/* amount */}
                        <div className='mb-3 row '>
                            <label
                                htmlFor='amount'
                                className='col-form-label col-sm-4'
                            >
                                مقدار
                            </label>
                            <div className='col-sm-8'>
                                <input
                                    type='text'
                                    className='form-control form-control-sm '
                                    id='amount'
                                    placeholder='مقدار'
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;
