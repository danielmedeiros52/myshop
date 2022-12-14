import {useQuery} from 'react-query'
import { useListView } from "../../../modules/core/ListViewProvider"
import { isNotEmpty } from '../../../theme/_metronic/helpers'
import ProductEditModalForm from './ProductEditModalForm'

export default function ProductEditModalFormWrapper () {
  const {itemIdForUpdate, setItemIdForUpdate} = useListView()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)



  if (!itemIdForUpdate) {
    return <ProductEditModalForm  product={{
      id:1
      
    }} />
  }



  return null
}

