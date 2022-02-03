import { useState } from 'react';
import Modal from 'react-modal';
import AddTransaction from './AddTransaction';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

export default function ButtonTransaction() {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
            <button
                className='bg-primary text-white border-0 rounded'
                onClick={openModal}
                type='button'
            >
                اضافه کردن
            </button>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                ariaHideApp={false}
                contentLabel='Add a new transaction'
            >
                <AddTransaction />
            </Modal>
        </>
    );
}
