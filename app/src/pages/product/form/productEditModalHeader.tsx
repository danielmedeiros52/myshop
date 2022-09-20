import { useListView } from "../../../modules/core/ListViewProvider"
import { KTSVG } from "../../../theme/_metronic/helpers"

export default function ProductEditModalHeader(){
    const {setItemIdForUpdate} = useListView()
    return(

        <div className='modal-header'>
        {/* begin::Modal title */}
        <h2 className='fw-bolder'>Produto</h2>
        {/* end::Modal title */}
  
        {/* begin::Close */}
        <div
          className='btn btn-icon btn-sm btn-active-icon-primary'
          data-kt-users-modal-action='close'
          onClick={() => setItemIdForUpdate(undefined)}
          style={{cursor: 'pointer'}}
        >
          <KTSVG path='/media/icons/duotune/arrows/arr061.svg' className='svg-icon-1' />
        </div>
        {/* end::Close */}
      </div>

    )
}