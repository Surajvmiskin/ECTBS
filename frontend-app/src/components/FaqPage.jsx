import React from 'react';

const FaqPage = () => {
    return (
        <main className="page faq-page">
            <section className="clean-block clean-faq dark">
                <section className="py-5 bg-light">
                    <h1 className="text-center text-success" style={{ paddingTop: "15px", paddingBottom: "15px", color: "#1b6ce5!important" }}>FAQ</h1>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-xl-12 offset-md-3 offset-xl-0">
                                <div id="faqlist" className="accordion accordion-flush">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header"><button className="btn accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#content-accordion-1"><strong>How To Register ?</strong></button></h2>
                                        <div id="content-accordion-1" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                            <p className="accordion-body"><strong>Use Registration</strong><br /><br />Step 1: To Register the customer portal to avail the various services - Select the login &gt; customer login page in the home page<br /><br /><br /><br />Step 2: Once clicking on the customer login page. Select 'Click here to Register' since the account is not registered.<br /><br /><br /><br />Step 3: Now provide the Account ID, if unaware 'Click on find out Account ID' where reference bill is attached to find ID<br /><br /><br /><br />Step 4: Once customer provides the Account ID, registration page will appear and customer need to fill all the personal details which are mandatory<br /><br /><br /><br />Step 5: Provide the User ID and Password respectively which should be unique, confirm the password and click save and continue.<br /><br /><br /><br />Step 6: Provide the date of birth and select the security questions as per your desire. Provide the answer which selected.<br /><br />Step 7: Click on the terms and conditions of the registration and submit.<br /><br /><br /><br />Step 8: Once customer submitted the form, confirmation page will be displayed and your user credentials will be sent through the email which is provided while registration.</p>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header"><button className="btn accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#content-accordion-2"><strong>How To Apply For A New Connection ?</strong></button></h2>
                                        <div id="content-accordion-2" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                            <p className="accordion-body"><ol>
                                                <li>To avail this service kindly click on request with category as “New Connection” in Janasnehni Vidyuth Sevegalu. To raise the new connection application, customer no needs to login and can directly apply. Under JVS, customer can raise a request up to total load of 17.5KW.</li>
                                                <li>Once customer clicks on the new connection, the disclaimer page will appear. The customer needs to click on the terms and condition agreement.</li>
                                                <li>The applicant needs to select single or multiple connections.</li>
                                                <li>Provide the temporary account id if it is available.</li>
                                                <li>Select Business or Personal, provide all the mandatory details which are required, then click save and continue.</li>
                                                <li>Provide the current address and corresponding address where the connection is required.</li>
                                                <li>Provide the location details, both latitude and longitude if known, and total build-up area (m<sup>2</sup>) which should not exceed 800 m<sup>2</sup>.</li>
                                                <li>Fill all mandatory fields correctly and select the load which you require. If you are applying for multiple connections, click on the add-on button and select the load with the appropriate nature of business. (Refer to next snippet)</li>
                                                <li>Upload all the necessary documents which are mandatory and click on submit.</li>
                                                <li>Once the submit button is clicked, a confirmation page is received. The customer can pay the amount as per the breakdown shown (Refer to next snippet) for the selected load. The customer can also download the submitted form and demand letter.</li>
                                            </ol></p>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header"><button className="btn accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#content-accordion-3"><strong>How To Apply For A Normal New Connection?</strong></button></h2>
                                        <div id="content-accordion-3" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                            <p><strong>New Connection</strong></p>
                                            <ol>
                                                <li>To avail this service kindly click on request with category as “New Connection” in Janasnehni Vidyuth Sevegalu, to raise the new connection application customer no needs to login can directly apply. Under JVS customer can raise a request up to total load of 17.5KW.</li>
                                                <li>Once customer click on the new connection the disclaimer page will appear, customer needs to click on the terms and condition agreement.</li>
                                                <li>The applicant needs to select single or multiple connection.</li>
                                                <li>Provide the temporary account id if it is available.</li>
                                                <li>Select the Business or Personal, provide all the mandatory details which are required. Click save and continue.</li>
                                                <li>Provide the current address and corresponding address where the connection is required.</li>
                                                <li>Provide the Location details both latitude and longitude if you know, total build up area (m<sup>2</sup>) which should not exceed 800 m<sup>2</sup>.</li>
                                                <li>Fill all mandatory fields correctly and select the load which you required, if you are applying for multiple connection click on the add on button and select the load with appropriate nature of business. (Ref next snip)</li>
                                                <li>Upload all the necessary documents which are mandatory and click on submit.</li>
                                                <li>Once clicked on submit button, confirmation page is received. Customer can pay the amount as per the break down shown (Ref) for which the amount of load selected, also can download the submit form and demand letter.</li>
                                            </ol>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header"><button className="btn accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#content-accordion-4"><strong>How To Make A Payment Online ?</strong></button></h2>
                                        <div id="content-accordion-4" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                            <p className="accordion-body"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header"><button className="btn accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#content-accordion-5"><strong>What Are Online Payment Instructions To User ?</strong></button></h2>
                                        <div id="content-accordion-5" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                            <p className="accordion-body"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </main>
    );
}

export default FaqPage;