export default function TransactionItem({ item }) {
    return (
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
}
