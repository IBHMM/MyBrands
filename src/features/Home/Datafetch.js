import axios from 'axios';

async function TakeUserWishList() {
    try {
        const response = await axios.get('http://ec2-100-27-211-19.compute-1.amazonaws.com/account/wishlist');
        
        console.log(response)
        return response.data.products;
    } catch (error) {
        console.error('Failed to fetch data:', error);
        return [];
    }
}

async function TakeUserCard() {
    try {
        const response = await axios.get('https://dummyjson.com/carts/6', {
            params: {
                limit: 2,
                skip: 10,
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

async function TakeBrands() {
    try {
        const response = await axios.get('https://mocki.io/v1/4434ebcb-d6e6-49f8-8dfa-29d5c4a4701e');
        return response.data;
    } catch (error) {
        console.error('Failed to fetch data:', error);
        return [];
    }
}


export {TakeUserWishList, TakeCategories, TakeBrands, TakeUserCard}