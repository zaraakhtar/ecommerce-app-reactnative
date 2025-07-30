import { Product } from '../node_modules/type';

const API_URL = "https://fakestoreapi.com"

//get all products from the API

const getProducts = async(): Promise<Product[]> => {
    try{
        const response = await fetch(`${API_URL}/products`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();

    } catch (error) {
        console.log('netweork response was not ok', error);
        throw error;
    }
};

//get all categories from the API
const getCategories = async(): Promise<string[]> => {
    try{
        const response = await fetch(`${API_URL}/products/categories`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();

    } catch (error) {
        console.log('network response was not ok', error);
        throw error;
    }
};

export { getProducts, getCategories };