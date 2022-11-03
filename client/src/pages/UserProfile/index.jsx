import React, { useEffect, useState } from 'react'
import { Container, Tabs, Tab, Spinner } from 'react-bootstrap'
import { useGetUserDetailQuery } from '../../redux/rtk-api'
import ProfileTab from './ProfileTab'
import UserAddresses from './UserAddresses'
import PurchaseHistory from './PurchaseHistory'
import UserUpdateForm from './UserUpdateForm'
import { Navigate } from 'react-router-dom'


function User() {
    const userToken = sessionStorage.getItem("token")
    const {data, error, isLoading} = useGetUserDetailQuery(userToken)
    const [user, setUser] = useState({})
    console.log(user)

    if (!userToken) {
        return <Navigate to = "/home"/>
    }

    
  return (
    !isLoading ? <Container>
        <h1>{data[0].userName}'s account</h1>
        <p>HenryGaming ID: {data[0].id}</p>
        <Tabs defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="mb-3">
            <Tab eventKey="profile" title="Profile"><ProfileTab img={data[0].img} userName={data[0].userName} firstName={data[0].firstName} lastName={data[0].lastName} email={data[0].email}/></Tab>
            <Tab eventKey="adresses" title="Adresses"><UserAddresses/></Tab>
            <Tab eventKey="history" title="Purchase History"><PurchaseHistory/></Tab>
            <Tab eventKey="testUpdate" title="Update User"><UserUpdateForm email={data[0].email}/></Tab>
            
        </Tabs> 
    </Container> : 
    <Container> 
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    </Container>
  )
}

export default User