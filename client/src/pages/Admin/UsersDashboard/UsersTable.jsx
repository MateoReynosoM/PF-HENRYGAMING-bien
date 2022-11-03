import React from 'react';
import MaterialReactTable from 'material-react-table';
import { Alert, ListGroup } from 'react-bootstrap';
import { useBanUserMutation, useGetUsersQuery, useSwitchAdminMutation, useUnbanUserMutation } from '../../../redux/rtk-api';



const UsersTable = () => {
  const [banUser] = useBanUserMutation({})
  const [unbanUser] = useUnbanUserMutation({})
  const [switchAdmin] = useSwitchAdminMutation({})


    const {data: dbUsers, error, isLoading} = useGetUsersQuery()
    console.log(dbUsers)
    const handleBan = async (id, isBanned) => {
        const result = isBanned && isBanned.length ? await unbanUser(id) : await banUser(id)
        console.log(result)
    }
    const handleAdmin = (id) => {
        const result = switchAdmin(id)
        console.log(result)
    }

  const columns = [
      {
        accessorKey: 'id',
        header: 'User Id',
      },
      {
        accessorKey: 'userName',
        header: 'Username',
        enableClickToCopy: true,
      },
      {
        accessorFn: (row) => `${row.firstName} ${row.lastName}`,
        id: 'name',
        header: 'Name',
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
        accessorKey: 'email',
        header: 'Email',
        enableClickToCopy: true,
      },
      {
        accessorKey: 'adminPrivileges',
        header: 'Admin',
        Cell: ({cell, row}) => (
            <span>{cell.getValue() ? "Yes" : "No"}</span>
        )
      },
      {
        accessorKey: 'deletedAt',
        header: 'Banned',
        Cell: ({cell, row}) => (
            <span>{cell.getValue() ? "Yes" : "No"}</span>
        )
      },
      {
        accessorKey: 'createdAt',
        header: 'Date of Creation',
        Cell: ({ cell }) => cell.getValue()
      },
    ]

  return !error ? <MaterialReactTable initialState={{ density: 'compact', columnVisibility: { id: false } }} state={{isLoading: isLoading}} columns={columns} data={dbUsers ?? []} enableRowActions positionActionsColumn="last"
        renderRowActionMenuItems={({ row, index, closeMenu }) => row.original.id === 1 ? [<span className='m-2'>Superadmin</span>] : [
            <ListGroup className='h-100 border-0'>
                <ListGroup.Item className='border-0' action onClick={() => handleBan(row.original.id, row.original.deletedAt)}>{row.original.deletedAt && row.original.deletedAt.length ? "Unban User" : "Ban User"}</ListGroup.Item>
                <ListGroup.Item className='border-0' action onClick={() => handleAdmin(row.original.id)}>{row.original.adminPrivileges ? "Remove Admin" : "Make Admin"}</ListGroup.Item>
                {/* <ListGroup.Item className='border-0' action onClick={() => deleteUser(row.original.id)}>Delete User</ListGroup.Item> */}
            </ListGroup>
      ] 
    }/> : <Alert variant='danger'><Alert.Heading>Something has gone wrong</Alert.Heading><p>{error.message}</p></Alert>
};


export default UsersTable;