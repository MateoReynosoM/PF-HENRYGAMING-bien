import React, { useEffect, useState } from 'react'
import { Container, Tabs, Tab, Spinner } from 'react-bootstrap'
import { useGetUserDetailQuery } from '../../redux/rtk-api'
import ProfileTab from './ProfileTab'
import UserAddresses from './UserAddresses'
import PurchaseHistory from './PurchaseHistory'
import UserUpdateForm from './UserUpdateForm'
import { Navigate } from 'react-router-dom'

/* const testUser = {
    id: 1,
    userName: "Test",
    firstName: "Benjamin",
    lastName: "Belpoliti",
    email: "peru@gmail.com",
    cart: {
            cartId: 1,
            total: 10, 
            cartItems: [{id: 1, productId: 89, amount: 15}, {id: 2, productId: 12, amount: 5}]
    },
    userAdresses: [
        {
            adress: "Av Del Sol 123",
            city: "Merlo",
            postalCode: 1234,
            country: "Argentina",
            phoneNumber: "2664852513",  
        },
        {
            adress: "Larrañaga 123",
            city: "Córdoba",
            postalCode: 4321,
            country: "Argentina",
            phoneNumber: "2664645253",
        }
    ],
    paymentMethods: [
        {
            paymentMethod: "Credit card",
            expirationDate: "20/07/2025",
            provider: "Visa",
            accountNumber: 321312313213,
            phoneNumber: 2664852513,
        },
        {
            paymentMethod: "Credit card",
            expirationDate: "22/10/2028",
            provider: "Master Card",
            accountNumber: 123321123321,
            phoneNumber: 2664852513,
        }
    ]
} */
// User dashboard 
// Tabs: Profile, Adresses, Payment methods, Purchase History
//      Profile: Container with Username, Name, Email, Profile picture; Delete account link
//          Functionality: Delete account, EXTRA: Modify account details
//      Adresses: Containers with the data of each adress, Add adress form
//          Modify details of each adress, delete adresses, add new adresses
//      Payment methods: Same as above
//      Purchase History: Containers with details of each transaction


function User() {
    const userToken = sessionStorage.getItem("token")
    const {data, error, isLoading} = useGetUserDetailQuery(userToken)
    const [user, setUser] = useState({})
    console.log(user)

    if (!userToken) {
        return <Navigate to = "/home"/>
    }

    
  return (
    !isLoading ? <Container className="user-dashboard-container">
        <h1>{data[0].userName}'s account</h1>
        <p>HenryGaming ID: {data[0].id}</p>
        <Tabs defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="mb-3">
            <Tab eventKey="profile" title="Profile"><ProfileTab img={data[0].img} userName={data[0].userName} firstName={data[0].firstName} lastName={data[0].lastName} email={data[0].email}/></Tab>
            <Tab eventKey="adresses" title="Adresses"><UserAddresses/></Tab>
            <Tab eventKey="history" title="Purchase History"><PurchaseHistory/></Tab>
            <Tab eventKey="testUpdate" title="test update"><UserUpdateForm/></Tab>
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