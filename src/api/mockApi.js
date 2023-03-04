import { img1, img2, img3, img4, img5, img6, img7 } from "../../assets/imgs";

export const restaurants = [
    {
        id: '1',
        name: 'Mcdonals',
        icon: 'star',
        img: img1,
        rating: '3.5 10 min.',
        offer: true
    },
    {
        id: '2',
        name: 'Yokono',
        icon: 'star',
        img: img2,
        rating: '4.5 40 min.',
        offer: false
    },
    {
        id: '3',
        name: 'Melt',
        icon: 'star',
        img: img3,
        rating: '3.0 30 min.',
        offer: true,
    },
    {
        id: '4',
        name: 'Mcdonals',
        icon: 'star',
        img: img1,
        rating: '3.5 25 min.',
        offer: false
    }
]

export const categories = [
    {
        id: '1',
        name: 'HAMBURGUESAS',
        img: img5,
    },
    {
        id: '2',
        name: 'ITALIANA',
        img: img4,
    },
    {
        id: '3',
        name: 'HAMBURGUESAS',
        img: img4,
    },
]

export const favorites = [
    {
        id: '1',
        name: 'MCDONALS',
        description: 'Combo hamburgesas Bigmac',
        icon: 'star',
        img: img6,
        rating: '4.5',
        duration: '10-15 min.'
    },
    {
        id: '2',
        name: 'MELT',
        description: 'Pizza mediana',
        icon: 'star',
        img: img7,
        rating: '3.5',
        duration: '20-30 min.'
    },
]