import Accordion from 'react-bootstrap/Accordion';

function FAQs(){
    return(
        <>
            <h1>Frequently Asked Questions</h1>
            <Accordion >
                <Accordion.Item eventKey="0">
                    <Accordion.Header>1. How to purchase se product step by step?</Accordion.Header>
                        <Accordion.Body>
                            1.1 Hi there, to make a purchase you can choose a product from "Featured Products" in our Home page or click in the Product button located in the Navigation bar at the top of the page, to see the whole catalogue. 
                            <br/>
                            1.2 then you will see the "Cart Icon button", which is yellow, below each product item. Press it to add the product you wish to the Cart.
                            <br/>
                            1.3 After you added every product you want to buy, click on the "Cart" button in the upper right corner.
                            <br/>
                            1.4 You will see all your products and you can add as many units as you want.
                            <br/>
                            1.5 To complete the purchase you have to be logged in your account, you can do it by clicking in the "Checkout" button and you will be redirect to the login page. 
                            <br/>
                            1.6 After logging in, to finalize just click in the "Checkout" button and log your "Mercado Pago" account to complete the payment.
                            <br/>
                            1.7 After you pay you will be redirect to your purchase detail.
                        </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>2. About shipping.</Accordion.Header>
                        <Accordion.Body>
                            2.1 After you make a purchase you should go to your profile and find your purchase detail number, also you have to add a default address.
                            <br/>
                            2.2 Then you have to contact us using the "Contact Us" form, which is in the footer page.
                            <br/>
                            2.3 Complete the form using the Subject: "About my purchase", then specify in the Message your purcharse detail code:"15315".
                            <br/>
                            2.4 The address you provide as default in your user profile will be used for the shipment, if you want to use an alternative address for the purchase shipment,  
                            <br/>
                            2.5 and if you want to use an alternative address for the shipment of your purchase specify it completely in the message.   
                            <br/>
                            2.6 To end just send the form.
                            <br/>
                            2.7 After complete these steps you will receive an e-mail that your message was received, then you will have to wait for us to contact you.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>3. Contact Us</Accordion.Header>
                        <Accordion.Body>
                            3.1 We are here to help you!
                            <br/>
                            3.2 You can ask us whatever you need by using our "Contact Us" form, which is located in the footer home page. Just scroll down al the bottom of the page and click in Contact Us.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    )
}

export default FAQs;








