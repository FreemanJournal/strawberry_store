import React, { createContext, useReducer } from 'react'

const initialState = [];

const OrderReducer = (oldOrders, action) => {
    let orders;
    switch (action.type) {
        case "DELETE":
            return orders = oldOrders.filter((item) => item.id !== action.payload)
        case "ADD":
            orders = [action.payload, ...oldOrders]
            return orders
        default:
            return oldOrders;
    }
}





// create context
export const GlobalContext = createContext(initialState)
// Provider component
export const GlobalProvider = ({ children }) => {
    const [orders, dispatch] = useReducer(OrderReducer, initialState)
    // action creators
    const deleteOrder = (id) => {
        dispatch({ type: "DELETE", payload: id })
    }
    const addOrder = (order) => {
        dispatch({ type: "ADD", payload: order })
    }
    return (<GlobalContext.Provider value={{
        orders,
        deleteOrder,
        addOrder

    }}>{children}</GlobalContext.Provider>)
}
