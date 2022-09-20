/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { KTSVG } from '../../../theme/_metronic/helpers'
import {useListView} from '../../../modules/core/ListViewProvider'
import{ProductListSearchComponent} from '../../../modules/product/components/header/ProductListSearchComponent'
import { Inventory } from '../../../modules/product/components/list/inventory'
import Item from './item'

type Props = {
    className: string
}

export default function ProductsPage({className}:Props ){

const products =[{
    id:1,
    description:"Vestido Longo",
    manufacturer:"Passifloris",
    reference:"REF:11632",
    inventory:10,
    image:"1.png",

},{
    id:2,
    description:"Macaquito",
    manufacturer:"Passifloris",
    reference:"REF:1022",
    inventory:50,
    image:"2.png",

},{
    id:3,
    description:"cropped",
    manufacturer:"Passifloris",
    reference:"REF:30",
    inventory:10,
    image:"4.png",

},{
    id:4,
    description:"Vestido Curto",
    manufacturer:"Passifloris",
    reference:"REF:30049",
    inventory:3,
    image:"5.png",

}

]


    const {setItemIdForUpdate} = useListView()
    const openAddUserModal = () => {
      setItemIdForUpdate(null)
    }
    return (
        <>
        <Inventory/>
        <div className={`card ${className}`}>
             
            {/* begin::Header */}
            <div className='card-header border-0 pt-5'>
                <h3 className='card-title align-items-start flex-column'>
                    <span className='card-label fw-bolder fs-3 mb-1'>Produtos</span>
                   
                </h3>
                <div
                    className='card-toolbar'
                    data-bs-toggle='tooltip'
                    data-bs-placement='top'
                    data-bs-trigger='hover'
                    title='Click to add a user'
                >
                     <ProductListSearchComponent/>
                        <button type='button' className='btn btn-sm btn-light-primary' onClick={openAddUserModal}>
                        <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-3' />
                        Novo Produto
                        </button>
                </div>
            </div>
            <div className='card-body py-3'>
                <div className='table-responsive'>
                    <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
                        <thead>
                            <tr className='fw-bolder text-muted'>

                                <th className='min-w-175px'>Descricao</th>
                                <th className='min-w-170px'>Fabricante</th>
                                <th className='min-w-120px'>Estoque</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(product => <Item key={product.id} product={product}/>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>
    )
  
}

