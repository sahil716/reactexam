import React, { useEffect } from 'react'
import { Cart } from 'react-bootstrap-icons'
import { getProductsAsync } from '../../services/Action/ProductAction'
import { useDispatch, useSelector } from 'react-redux'

function Product() {
    const { Products } = useSelector(state => state.productReducer)

    const dispatch = useDispatch()

    const get = () => {
        dispatch(getProductsAsync())
    }
    useEffect(() => {
        get();
    }, [])
    return (
        <>
            <div className="container">
                <h1 className='text-center m-5'>Product</h1>
                <div className="row">
                    {
                        Products.map((pro) => {
                            return (

                                <div className='col-4 shadow mb-3'>
                                    <div className="box-main">
                                        <div className='t-shirt-img'>
                                            <img src="img/slider2.jpg" className='w-100' alt="" />
                                        </div>
                                        <div className='d-flex justify-content-between'>
                                            <h4 className='shirt-text'>{pro.title}</h4>
                                            <p className='price-text'>price :
                                                <span>{pro.price}</span>
                                            </p>
                                        </div>
                                        <p className='date'>{pro.date}</p>
                                        <p className='details'>{pro.details}
                                        </p>
                                        <div className='btn-main d-flex pb-3 justify-content-between'>
                                            <div className='buy-bt align-items-center text-white  bg-danger p-2 rounded'>
                                                <Cart />
                                                <a href="" className='text-decoration-none text-white' > buy now</a>
                                            </div>
                                            <div className='seemore-bt'><a href="" className='text-decoration-none text-dark '>see more</a></div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Product