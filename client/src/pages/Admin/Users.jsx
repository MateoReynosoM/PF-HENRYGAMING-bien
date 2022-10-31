import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import {mockUsers} from "./mock"
import { Button, ListGroup } from 'react-bootstrap';
import { useGetUsersQuery } from '../../redux/rtk-api';

const usuarios = mockUsers(45)

const Users = () => {
    const {data: dbUsers, error, isLoading} = useGetUsersQuery()
    console.log(dbUsers)
    const handleBan = (id, isBanned) => {
        console.log(id, isBanned)
    }

    const handleAdmin = (id, isAdmin) => {
        console.log(id, isAdmin)
    }
    const deleteUser = (id) => {
        console.log(id)
    }

  const columns = [
      {
        accessorKey: 'id',
        header: 'User Id',
      },
      {
        accessorFn: (row) => `${row.firstName} ${row.lastName}`, //accessorFn used to join multiple data into a single cell
        id: 'name', //id is still required when using accessorFn instead of accessorKey
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
        accessorKey: 'isAdmin',
        header: 'Admin',
        Cell: ({cell, row}) => (
            <span>{cell.getValue() ? "Yes" : "No"}</span>
        )
      },
      {
        accessorKey: 'isBanned',
        header: 'Banned',
        Cell: ({cell, row}) => (
            <span>{cell.getValue() ? "Yes" : "No"}</span>
        )
      },
      {
        accessorKey: 'createdAt',
        header: 'Date of Creation',
        Cell: ({ cell }) => cell.getValue()?.toLocaleDateString()
      },
    ]

  return <MaterialReactTable initialState={{ density: 'compact' }} columns={columns} data={usuarios} enableRowActions positionActionsColumn="last" 
        renderRowActionMenuItems={({ row, index, closeMenu }) => row.original.id === 1 ? [<span className='m-2'>Superadmin</span>] : [
            <ListGroup className='h-100 border-0'>
                <ListGroup.Item className='border-0' action onClick={() => handleBan(row.original.id, row.original.isBanned)}>{row.original.isBanned ? "Unban User" : "Ban User"}</ListGroup.Item>
                <ListGroup.Item className='border-0' action onClick={() => handleAdmin(row.original.id, row.original.isAdmin)}>{row.original.isAdmin ? "Remove Admin" : "Make Admin"}</ListGroup.Item>
                <ListGroup.Item className='border-0' action onClick={() => deleteUser(row.original.id)}>Delete User</ListGroup.Item>
            </ListGroup>
      ] 
    }/>;
};


export default Users;