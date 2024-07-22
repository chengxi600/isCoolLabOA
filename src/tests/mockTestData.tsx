import { ItemInfo } from "../data/cartSlice"
import { Order } from "../data/historySlice"
import { MenuItemProps } from "../data/menuItems"

export const mockItemInfo1: ItemInfo = {
    name: 'Item 1',
    price: 10,
    quantity: 1
}

export const mockItemInfo2: ItemInfo = {
    name: 'Item 2',
    price: 12,
    quantity: 2
}

export const mockItemInfo3: ItemInfo = {
    name: 'Item 3',
    price: 13,
    quantity: 3
}

export const mockOrder1: Order = {
    order: {
        item1: mockItemInfo1,
        item2: mockItemInfo2,
        item3: mockItemInfo3 
    },
    totalPrice: mockItemInfo1.price+mockItemInfo2.price+mockItemInfo3.price
}

export const mockItemData: MenuItemProps[] = [
    {
        id: 1,
        title: 'Item 1',
        image: '',
        description: '',
        price: 10
    },
    {
        id: 2,
        title: 'Item 2',
        image: '',
        description: '',
        price: 12
    },
    {
        id: 3,
        title: 'Item 3',
        image: '',
        description: '',
        price: 13
    }
]