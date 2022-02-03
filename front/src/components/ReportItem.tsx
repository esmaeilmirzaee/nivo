import { MonthType } from '../App';

export default function ({ item }: { item: MonthType }) {
    return (
        <div className='col m-0.5'>
            <div
                className={`${
                    item?.type === 'deposit' ? 'bg-primary' : 'bg-danger'
                } px-2 rounded rounded-3`}
            >
                <p className='text-white'>مبلغ</p>
                <p className='text-white text-end'>
                    {item?.amount?.toLocaleString('fa-IR')}
                </p>
            </div>
        </div>
    );
}
