import MaterialReactTable from 'material-react-table';
import { Alert, ListGroup } from 'react-bootstrap';
import { useDeactivateProductMutation, useGetAllProductsQuery, useReactivateProductMutation } from '../../../redux/rtk-api';

const ProductsTable = () => {
    const {data: products, error, isLoading} = useGetAllProductsQuery()
    const [deactivateProduct] = useDeactivateProductMutation({})
    const [reactivateProduct] = useReactivateProductMutation({})
    /* const [updatePrice] = useUpdateProductMutation({}) */

    const handleDeactivate = async (id, deletedAt) => {
        const result = deletedAt && deletedAt.length ? await reactivateProduct(id) : await deactivateProduct(id)
        console.log(result)
    }
    /* const handlePrice = async (id, price) => {
      
    } */
  const columns = [
      {
        accessorKey: 'id',
        header: 'Product Id',
      },
      {
        accessorFn: (row) => `${row.brand.name} ${row.model}`, 
        id: 'model',
        header: 'Model',
        Cell: ({ cell, row }) => (
            <div className='d-flex align-items-center'>
                <div
                style={{
                    width: 40,
                    height: 40,
                    borderRadius: 6,
                    overflow: 'hidden',
                }} className="d-flex align-items-center justify-content-center">
                    <img
                      alt="img"
                      src={row.original.img}
                      loading="lazy"
                      className='h-100'
                    />
                </div>
                <span className='ms-2'>{cell.getValue()}</span>
            </div>
        ),
      },
      {
        accessorKey: 'type',
        header: 'Type',
      },
      {
        accessorKey: 'price',
        header: 'Price',
      },
      {
        accessorKey: 'deletedAt',
        header: 'Status',
        Cell: ({cell, row}) => (
            <span>{cell.getValue() ? "Deactivated" : "Active"}</span>
        )
      },
    ]

  return !error ? <MaterialReactTable initialState={{ density: 'compact', columnVisibility: { id: false } }} state={{isLoading: isLoading}}columns={columns} data={products ?? []} enableRowActions positionActionsColumn="last" 
        renderRowActionMenuItems={({ row, index, closeMenu }) => [
            <ListGroup className='h-100 border-0'>
                <ListGroup.Item className='border-0' action onClick={() => handleDeactivate(row.original.id, row.original.deletedAt)}>{row.original.deletedAt && row.original.deletedAt.length ? "Activate" : "Deactivate"}</ListGroup.Item>
                <ListGroup.Item className='border-0' action onClick={() => console.log(row.original.price)/* handlePrice(row.original.id, row.original.price) */}>Update Price</ListGroup.Item>
            </ListGroup>
      ] 
    }/> : <Alert variant='danger'><Alert.Heading>Something has gone wrong</Alert.Heading><p>{error.message}</p></Alert>;
};


export default ProductsTable;