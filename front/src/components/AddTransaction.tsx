export default function AddTransaction() {
    return (
        <>
            <div className='container py-2'>
                {/* transaction */}
                <form action=''>
                    {/* name */}
                    <div className='mb-3 row '>
                        <div className='col-sm-8'>
                            <input
                                type='text'
                                className='form-control form-control-sm text-start'
                                id='name'
                            />
                        </div>
                        <label
                            htmlFor='name'
                            className='col-form-label col-sm-4 text-start'
                        >
                            نام تراکنش
                        </label>
                    </div>

                    {/* amount */}
                    <div className='mb-3 row '>
                        <div className='col-sm-8'>
                            <input
                                type='text'
                                className='form-control form-control-sm '
                                id='amount'
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
                    >
                        <option className='text-start' value='1' selected>
                            پرداخت
                        </option>
                        <option className='text-start' value='2'>
                            دریافت
                        </option>
                    </select>

                    <button className='btn btn-primary'>اضافه کردن</button>
                </form>
            </div>
        </>
    );
}
