import React, { useState } from "react";
import Cart from "./Cart";
import Filter from "./Filter";
import Mobiles from "./Mobiles";
import Data from "../Data.json";
function Home() {

    const [item, setItem] = useState(Data.Mobiles);
    const [sort, setSort] = useState("asc")
    const [brand, setBrand] = useState("")
    const [cartItem, setcartItem] = useState([])


    const mobileFilter = (event) => {
        setSort(event.target.value);
        if (sort === "asc") {
            setItem(Data.Mobiles.sort((a, b) => (a.id < b.id ? 1 : -1)))
        }
        if (sort === "desc") {
            setItem(Data.Mobiles.sort((a, b) => (a.id > b.id ? -1 : 1)))
        };
    }
    const brandFilter = (event) => {
        if (event.target.value === "") {
            setBrand(event.target.value);
            setItem(Data.Mobiles)
            console.log();
        } else {
            setBrand(event.target.value);
            setItem(Data.Mobiles.filter((mobile) => mobile.avabrand.indexOf(event.target.value) >= 0))
        }
    }
    const buttonClick = (mobil) => {
        const exit = cartItem.find((element) => element.id === mobil.id)
        if (exit) {
            setcartItem(
                cartItem.map((element) => element.id === mobil.id ? { ...exit, qty: exit.qty + 1 } : element)
            )
        } else {
            setcartItem([...cartItem, { ...mobil, qty: 1 }])
        }

    }

    const removeItem = (item) => {
        const exit = cartItem.find((element) => element.id === item.id)
        if (exit.qty === 1) {
            setcartItem(
                cartItem.filter((element) => element.id !== item.id)
            )
        } else {
            setcartItem(
                cartItem.map((element) => element.id === item.id ? { ...exit, qty: exit.qty - 1 } : element)
            )
        }
    }
    return (
        <div className="container">
            <header>
                <a>فروشگاه موبایل</a>
            </header>
            <main>
                <div className="content">
                    <div className="Products">
                        <Filter
                            count={item.length}
                            mobileFilter={mobileFilter}
                            brandFilter={brandFilter}
                            brand={brand} />
                        <Mobiles item={item}
                            buttonClick={buttonClick} />
                    </div>
                    <div className="sidebar">
                        <Cart
                            cartItem={cartItem}
                            removeItem={removeItem} />
                    </div>
                </div>
            </main>
            <footer>
                طراحی و توسعه توسط امیر خزایلی
            </footer>
        </div>
    );
}

export default Home;
<>

</>