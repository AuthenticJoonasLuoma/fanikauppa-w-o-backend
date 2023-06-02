import React from 'react'

const OrderModal = ({ open, onClose, productsInCart }) => {
    if (!open) return null
    return (
        <div className='overlay'>
            <div className='modal-container'>
                <div className='modal-header'>
                    <p onClick={onClose} className='close-btn'>X</p>
                    <div className='products'>{productsInCart}</div>
                </div>
                <div className='modal-body'>
                    Tähän täytettävät tiedot
                </div>
                <div className='btn-container'>
                    <button className='btn-primary'>
                        <span className='bold'>Hyväksy Tilaus</span>
                    </button>
                    <button className='btn-outline'>
                        <span className='bold'>Hylkää</span>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default OrderModal