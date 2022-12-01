import React from 'react'

const CarContext = React.createContext({
    items: [],
    totalAmount: 0,
    totalPrice: 0,
    cartDispatch: () => {},
})

export default CarContext
