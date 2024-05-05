import { ProductColor } from '../enums';
import { IProduct } from '../types';

export const products: IProduct[] = [
    {
        name: 'Nike Metcon 1',
        price: '130',
        color: ProductColor.Red,
        img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg',
    },
    {
        name: 'Nike Metcon 2',
        price: '130',
        color: ProductColor.Green,
        img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg',
    },
    {
        name: 'Nike Metcon 3',
        price: '130',
        color: ProductColor.Blue,
        img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg',
    },
    {
        name: 'Nike Metcon 4',
        price: '130',
        color: ProductColor.Black,
        img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg',
    },
    {
        name: 'Nike free run',
        price: '170',
        color: ProductColor.Black,
        img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg',
    },
    {
        name: 'Nike Metcon 5',
        price: '150',
        color: ProductColor.Green,
        img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg',
    },
];
