import axios from "axios";
import Card from "./Cart";
import { useEffect, useState } from 'react';

export default function Baitap() {
    const [listPros, setlistPros] = useState([]);
    const [type, setType] = useState('')
    const getData = () => {
        axios.get("https://6257ea29e4e0b73142830b72.mockapi.io/sp")
            .then((res) => {
                setlistPros(res.data);
            })

    };
    useEffect(() => {

        getData()
    }, []);
    return (
        <>
            <button
                onClick={() => {
                    setType("naam");
                }}
            >
                Áo khoác nam
            </button>
            <button
                onClick={() => {
                    setType("nu");
                }}
            >
                Đầm dạ hội
            </button>
            <div class="row">
                {type == ""
                    ? listPros.map((product) => (
                        <Card
                            linkimg={product.image}
                            namepro={product.title}
                            price={product.price}
                        />
                    ))
                    : listPros
                        .filter((product) => product.type == type)
                        .map((product) => (
                            <Card
                                linkimg={product.image}
                                namepro={product.title}
                                price={product.price}
                            />
                        ))}
            </div>
        </>
    );


}

