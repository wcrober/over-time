import React from 'react'
import { connect } from 'react-redux'



export const cartItemsWithQuanitity = (cartItems) => {
    return cartItems.reduce((acc, item) => {
        const filteredItem = acc.filter(item2 => item2.d === item.id)[0]
        filteredItem !== undefined
        ? filteredItem.quanitity++
        :acc.push({...item, quanitity: 1, })
        
        return acc
    }, [])
}
