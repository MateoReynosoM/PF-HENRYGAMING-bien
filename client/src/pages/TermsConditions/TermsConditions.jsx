import Accordion from 'react-bootstrap/Accordion';


function TermsConditions(){
    return(
        <>
            <h1>Terms & Conditions</h1>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>1. Security and protection of your personal data</Accordion.Header>
                        <Accordion.Body>
                            The security of personal data is a priority for HenryGaming. 
                            This website strives to offer the highest level of security for which advanced technology is used. 
                            We adhere to the requirements of the National Law on Protection of Personal Data, No. 25,326 and its complementary regulations.
                        </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>2. Your privacy</Accordion.Header>
                        <Accordion.Body>
                            HenryGaming respects your privacy. All information you provide to us will be treated with the utmost care and security, 
                            and will only be used within the limits set forth in this document.
                        </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>3. Who has access to the information?</Accordion.Header>
                        <Accordion.Body>
                            HenryGaming is always committed to presenting new solutions that improve the value of its products and services. 
                            The information collected here is not shared with anyone, while non-identifying and statistical information may be used for internal analysis
                            to improve our services.
                        </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>4.Each User is responsible for the personal data provided at the time of registration and undertakes to keep them updated.</Accordion.Header>
                        <Accordion.Body>
                            In addition, you are solely responsible for the use and protection of your password.
                        </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>5. Digital services</Accordion.Header>
                        <Accordion.Body>
                            HenryGaming is a technology company that offers computer hardware products and services related mainly to electronic commerce and digital payments.
                            Users can buy products using different payment solutions.
                        </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>6. Acceptance of terms and conditions</Accordion.Header>
                        <Accordion.Body>
                            In order to operate on the platform, all Users must accept the Terms and Conditions, the annexes and the Privacy Statement.
                        </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                    <Accordion.Header>7. Ability</Accordion.Header>
                        <Accordion.Body>
                            People of legal age who have the legal capacity to contract may use our services.
                        </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                    <Accordion.Header>8. Registration and Account</Accordion.Header>
                        <Accordion.Body>
                            Who wants to use our services, must complete the registration form with the data that is required. By completing it, you agree to do so accurately, 
                            precisely and truthfully and to keep your data always up to date. The User will be solely responsible for the accuracy of their registration data. 
                            Without prejudice to the information provided in the form, we may request and/or consult additional information to corroborate the identity of the User.
                        </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="8">
                    <Accordion.Header>9. Sanctions</Accordion.Header>
                        <Accordion.Body>
                            In the event that the User breaches a law or the Terms and Conditions, we may warn, suspend, restrict or temporarily or permanently disable their account,
                            without prejudice to other sanctions established in the particular rules of use of the services of HenryGaming.
                        </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="9">
                    <Accordion.Header>10. Responsability</Accordion.Header>
                        <Accordion.Body>
                            HenryGaming will be responsible for any defect in the provision of its service, 
                            to the extent that it is attributable to it and with the scope provided for in current laws.
                        </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="10">
                    <Accordion.Header>11. Rates</Accordion.Header>
                        <Accordion.Body>
                            We may modify or eliminate the rates at any time as well temporary rates for promotions in favor of Users.
                        </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="11">
                    <Accordion.Header>12. Jurisdiction and Applicable Law</Accordion.Header>
                        <Accordion.Body>
                            These Terms and Conditions are governed by local law. Any dispute arising from its application, interpretation, execution or validity will be resolved by the competent ordinary national courts, 
                            based in the capital, except for specific provisions of public order regulations, such as, for example, legislation related to the Consumer. 
                            For all purposes related to these Terms and Conditions and the use of the site.
                        </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>  
    )
}

export default TermsConditions;