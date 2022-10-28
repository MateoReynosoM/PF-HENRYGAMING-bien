import React, { useEffect, useState } from 'react'
import { Container, Tabs, Tab } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useGetUserDetailQuery } from '../../redux/rtk-api'
import ProfileTab from './ProfileTab'
import UserAddresses from './UserAddresses'
import PurchaseHistory from './PurchaseHistory'

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
    const userToken = useSelector(state => state.main.token)
    const {data, error, isLoading} = useGetUserDetailQuery(userToken)
    const [user, setUser] = useState({})
    console.log(user)

    useEffect(() => {
      if (!isLoading) setUser(data[0])
    }, [isLoading])
    
  return (
    <Container>
        <h1>{user.userName}'s account</h1>
        <p>HenryGaming ID: {user.id}</p>
        <Tabs defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="mb-3">
            <Tab eventKey="profile" title="Profile"><ProfileTab img={user.img} userName={user.userName} firstName={user.firstName} lastName={user.lastName} email={user.email}/></Tab>
            <Tab eventKey="adresses" title="Adresses"><UserAddresses/></Tab>
            <Tab eventKey="payment" title="Payment"></Tab>
            <Tab eventKey="history" title="Purchase History"><PurchaseHistory/></Tab>
        </Tabs> 
    </Container>
  )
}

export default User