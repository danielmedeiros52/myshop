
import { toAbsoluteUrl, KTSVG } from "../../../../theme/_metronic/helpers"
import  IProduct  from "../../../../types/Iproduct"

interface Props{
    product:IProduct
}
export default function Item({product}:Props){
    return ( <tr>
        <td>
            <div className='d-flex align-items-center'>
                <div className='symbol symbol-45px me-5'>
                    <img src={toAbsoluteUrl(`/media/products/${product.image}`)} alt='' />
                </div>
                <div className='d-flex justify-content-start flex-column'>
                    <span  className='text-dark fw-bolder text-hover-primary fs-6'>
                        {product.description} 
                    </span>
                    <span className='text-muted fw-bold text-muted d-block fs-7'>
                       {product.reference}
                    </span>
                </div>
            </div>
        </td>
        <td>
            <span  className='text-dark fw-bolder text-hover-primary d-block fs-6'>
             {product.manufacturer}
            </span>

        </td>
        <td className='text-end'>
            <div className='d-flex flex-column w-100 me-2'>
                <div className='d-flex flex-stack mb-2'>
                    <span className='text-muted me-2 fs-7 fw-bold'>{product.inventory}
                  
                    </span>
                </div> 
                <div className='progress h-6px w-100'>
                   
                    <div
                        className='progress-bar bg-primary'
                        role='progressbar'
                        style={{ width: `${product.inventory}%` }}
                    >

                    </div>
                    
                </div>
            </div>
        </td>
        <td>
            <div className='d-flex justify-content-end flex-shrink-0'>
  
                <a onClick={()=>console.log('Clicked')}
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                >
                    <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                </a>
                <a
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
                >
                    <KTSVG
                        path='/media/icons/duotune/general/gen027.svg'
                        className='svg-icon-3'
                    />
                </a>
            </div>
        </td>
    </tr>)
}