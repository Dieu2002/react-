import React from 'react';
function Card(props) {
    const Buy = (name) => {
        alert("Cảm ơn bạn đã chọn mặt hàng: " + (props.namepro))
    };
    return (

        <>
            <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
                <div className='text'>
                    <div className='p-name'>
                        <h3>{props.namepro} </h3>
                    </div>
                </div>
                <div className='p-img'>
                    <img src={props.linkimg} with={200} height={200} />

                </div>
                <div className='text'>
                    <span>{props.price} <sup>đ</sup></span>
                    <input type="button" className='button' name='add' defaultValue="Add to cart"
                        onClick={Buy}
                    />
                </div>
                <div className='clear' />
            </div>

        </>

    );

}
export default Card;
