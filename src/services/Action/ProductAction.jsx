import { GET_PRODUCTS } from '../constant/actionType'
import {Api} from '../../api/index'

export const getProducts = (data) => {
    return {
        type: GET_PRODUCTS,
        payload: data
    }
}
export const getProductsAsync = () => {

    return async dispatch => {
        const res = await Api.get("/examPrduct")
        dispatch(getProducts(res.data))
    }
}