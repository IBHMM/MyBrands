import axios from 'axios';

async function TakeUserWishList() {
    try {
        const response = await axios.get('https://dummyjson.com/products', {
            params: {
                limit: 10,
                skip: 10,
                select: 'title,price,images,category'
            }
        });
        return response.data.products;
    } catch (error) {
        console.error('Failed to fetch data:', error);
        return [];
    }
}


export {TakeUserWishList}