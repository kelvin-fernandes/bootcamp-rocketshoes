import React from 'react';
import { connect } from 'react-redux';
import {
    MdAddCircleOutline,
    MdRemoveCircleOutline,
    MdDelete
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

function Cart({ cart }) {
    return (
        <Container>
            <ProductTable>
                <thead>
                    <tr>
                        <th />
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {cart.map(product => (
                        <tr>
                            <td>
                                <img src={product.image} alt={product.title} />
                            </td>
                            <td>
                                <strong>{product.title}</strong>
                                <span>{product.priceFormatted}</span>
                            </td>
                            <td>
                                <div>
                                    <button type="button">
                                        <MdRemoveCircleOutline
                                            size={20}
                                            color="#593080"
                                        />
                                    </button>
                                    <input
                                        type="number"
                                        readOnly
                                        value={product.amount}
                                    />
                                    <button type="button">
                                        <MdAddCircleOutline
                                            size={20}
                                            color="#593080"
                                        />
                                    </button>
                                </div>
                            </td>
                            <td>
                                <strong>R$ 259,80</strong>
                            </td>
                            <td>
                                <MdDelete size={20} color="#593080" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </ProductTable>

            <footer>
                <button type="button">Proceed to checkout</button>

                <Total>
                    <span>Total</span>
                    <strong>R$ 1534,67</strong>
                </Total>
            </footer>
        </Container>
    );
}

const mapStateToProps = state => ({
    cart: state.cart
});

export default connect(mapStateToProps)(Cart);
