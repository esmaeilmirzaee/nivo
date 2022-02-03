import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTrnasaction } from '../state/actions/transactionActions';

export default function AddTransaction({ onClose }) {
    let dispatch = useDispatch();
    const [values, setValues] = useState({
        description: '',
        amount: 0,
        type: '1',
    });

    const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        onClose();
        dispatch(
            addTrnasaction({
                ...values,
                id: 12,
                type: values.type === '1' ? 'DEPOSIT' : 'WITHDRAW',
            }),
        );
    };
    return (
        <>
            <div className='container py-2'>
                {/* transaction */}
                <form>
                    {/* name */}
                    <div className='mb-3 row '>
                        <div className='col-sm-8'>
                            <input
                                type='text'
                                className='form-control form-control-sm text-start'
                                id='description'
                                name='description'
                                value={values.description}
                                onChange={(e) =>
                                    setValues({
                                        ...values,
                                        ['description']: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <label
                            htmlFor='description'
                            className='col-form-label col-sm-4 text-start'
                        >
                            نام تراکنش
                        </label>
                    </div>

                    {/* amount */}
                    <div className='mb-3 row '>
                        <div className='col-sm-8'>
                            <input
                                type='number'
                                className='form-control form-control-sm '
                                id='amount'
                                name='amount'
                                value={values.amount}
                                onChange={(e) =>
                                    setValues({
                                        ...values,
                                        ['amount']: +e.target.value,
                                    })
                                }
                            />
                        </div>
                        <label
                            htmlFor='amount'
                            className='col-form-label col-sm-4 text-start'
                        >
                            مقدار
                        </label>
                    </div>

                    {/* deposit or withdraw */}
                    <select
                        className='form-select form-select-lg mb-3 text-start'
                        aria-label='.form-select-lg example'
                        dir='rtl'
                        onChange={(e) =>
                            setValues({
                                ...values,
                                ['type']: e.target.value,
                            })
                        }
                    >
                        <option
                            className='text-start'
                            value='1'
                            defaultValue='1'
                        >
                            پرداخت
                        </option>
                        <option className='text-start' value='2'>
                            دریافت
                        </option>
                    </select>

                    <button className='btn btn-primary' onClick={handleSubmit}>
                        اضافه کردن
                    </button>
                </form>
            </div>
        </>
    );
}
