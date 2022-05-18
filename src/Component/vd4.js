import React, { Component } from "react";
import products_data from "./data";
export default class Product extends Component {
    constructor(props) {
        super(props);
        var arr = products_data();
        this.state = { arr };
    }
    render() {
        const Buy = (name) => {
            alert("Cảm ơn bạn đã chọn mặt hàng: " + (name))
        };

        return (
            <div>
                {
                    this.state.arr.map(key =>

                        <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
                            <div className='text'>
                                <div className='p-name'>
                                    <a href='item.html'>{key.name}</a>
                                </div>
                            </div>
                            <div className='p-img'>
                                <img src={key.image} with={200} height={200} />

                            </div>

                            <div className='text'>
                                <span>{key.price} <sup>đ</sup></span>
                                <input type="button" className='button' name='add' defaultValue="Add to cart"
                                    onClick={Buy}
                                />
                            </div>
                            <div className='clear' />
                        </div>
                    )

                }
            </div>
        );
    }
}
