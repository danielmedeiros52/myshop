/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { KTSVG, toAbsoluteUrl } from '../../_metronic/helpers'
import {useListView} from '../modules/core/ListViewProvider'
import{ProductListSearchComponent} from '../modules/product/components/header/ProductListSearchComponent'
type Props = {
    className: string
}




const TableDefault: React.FC<Props> = ({ className }) => {
    const {setItemIdForUpdate} = useListView()
    const openAddUserModal = () => {
      setItemIdForUpdate(null)
    }
    return (
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
            {/* end::Header */}
            {/* begin::Body */}
            <div className='card-body py-3'>
                {/* begin::Table container */}
                <div className='table-responsive'>
                    {/* begin::Table */}
                    <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
                        {/* begin::Table head */}
                        <thead>
                            <tr className='fw-bolder text-muted'>

                                <th className='min-w-175px'>Descricao</th>
                                <th className='min-w-170px'>Fabricante</th>
                                <th className='min-w-120px'>Estoque</th>
                            </tr>
                        </thead>
                        {/* end::Table head */}
                        {/* begin::Table body */}
                        <tbody>
                            <tr>
                                <td>
                                    <div className='d-flex align-items-center'>
                                        <div className='symbol symbol-45px me-5'>
                                            <img src={toAbsoluteUrl('/media/products/1.png')} alt='' />
                                        </div>
                                        <div className='d-flex justify-content-start flex-column'>
                                            <a href='#' className='text-dark fw-bolder text-hover-primary fs-6'>
                                                Relogio 
                                            </a>
                                            <span className='text-muted fw-bold text-muted d-block fs-7'>
                                               REF:11632
                                            </span>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <a href='#' className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                                     Apple
                                    </a>

                                </td>
                                <td className='text-end'>
                                    <div className='d-flex flex-column w-100 me-2'>
                                        <div className='d-flex flex-stack mb-2'>
                                            <span className='text-muted me-2 fs-7 fw-bold'>50%</span>
                                        </div>
                                        <div className='progress h-6px w-100'>
                                            <div
                                                className='progress-bar bg-primary'
                                                role='progressbar'
                                                style={{ width: '50%' }}
                                            ></div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className='d-flex justify-content-end flex-shrink-0'>
                          
                                        <a
                                            href='#'
                                            className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                                        >
                                            <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                                        </a>
                                        <a
                                            href='#'
                                            className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
                                        >
                                            <KTSVG
                                                path='/media/icons/duotune/general/gen027.svg'
                                                className='svg-icon-3'
                                            />
                                        </a>
                                    </div>
                                </td>
                            </tr>
                           
                        </tbody>
                        {/* end::Table body */}
                    </table>
                    {/* end::Table */}
                </div>
                {/* end::Table container */}
            </div>
            {/* begin::Body */}
        </div>
    )
}

export { TableDefault }
