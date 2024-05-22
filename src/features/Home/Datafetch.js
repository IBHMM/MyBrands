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

async function TakeCategories() {
    try {
        const response = await axios.get('https://mocki.io/v1/74e38bf1-56c9-4dc6-8c47-1c8ca286796c');
        return response.data;
    } catch (error) {
        console.error('Failed to fetch data:', error);
        return [];
    }
}


export {TakeUserWishList, TakeCategories}