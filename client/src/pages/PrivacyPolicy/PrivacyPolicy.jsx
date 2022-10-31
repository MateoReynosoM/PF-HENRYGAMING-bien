import Accordion from 'react-bootstrap/Accordion';


function PrivacyPolicy(){
    return(
        <>
            <h1>Privacy & Policy</h1>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>1. Privacy Policy</Accordion.Header>
                        <Accordion.Body>
                            This Privacy Policy establishes the terms in which HenryGaming uses and protects the information that is provided by its users when using its website.
                            This company is committed to the security of its users data.
                            When we ask you to fill in the personal information fields with which you can be identified, we do so by ensuring that it will only be used in accordance with the terms of this document.
                            However, this Privacy Policy may change over time or be updated, so we recommend and emphasize that you continually review this page to ensure that you agree with such changes.
                        </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>2. Use of collected information</Accordion.Header>
                        <Accordion.Body>
                            Our website uses the information in order to provide the best possible service, particularly to keep a record of users, their orders,
                            and to improve our products and services. It is possible emails to be sent through our site with advertising information that we consider relevant to you.
                            These emails will be sent to the address you provide.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>3. Cookies</Accordion.Header>
                        <Accordion.Body>
                            Our website uses cookies to be able to identify the pages that are visited and their frequency. This information is used only for statistical analysis and then the information is permanently deleted. 
                            You can delete cookies at any time from your computer. However, cookies help provide a better service on websites, 
                            they do not give access to information from your computer or from you, unless you want it and provide it directly, visits to a website. 
                            You can accept or deny the use of cookies, however most browsers automatically accept cookies as it serves to have a better web service. 
                            You can also change your computer settings to decline cookies. If they are declined you may not be able to use some of our services.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>4. Control of your personal information</Accordion.Header>
                        <Accordion.Body>
                            At any time you can refuse the collection or use of personal information that is provided to our website. 
                            This company will not sell, assign or distribute personal information that is collected without your consent, unless required by a judge with a court order.
                            HenryGaming reserves the right to change the terms of this Privacy Policy at any time.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    )
}

export default PrivacyPolicy;