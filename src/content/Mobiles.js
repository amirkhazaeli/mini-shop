import React from "react";
import formatNumber from "./utl";
import Slide from 'react-reveal/Slide'

function Mobiles(props) {
    return (
        <>
            <div className="mobiles">
            <Slide bottom>
            <ul>
                    {
                        props.item.map((item) => {
                            return (
                                <li key={item.id}>
                                    <div className="mobile">
                                        <img src={item.image} alt="" />
                                        <span>{item.title}</span>
                                        <div className="price-info">
                                            <button type="submit" onClick={()=> props.buttonClick(item)}>خرید</button>
                                            <span>{formatNumber(item.price)}</span>
                                        </div>
                                    </div>
                                </li>
                            )

                        })
                    }
                </ul>
            </Slide>

            </div>
        </>
    );
}

export default Mobiles;