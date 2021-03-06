import React, {Component} from 'react';
import { Breadcrumb, BreadcrumbItem  ,Button  ,Label  ,Col,Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import {Control,Form, Errors,actions } from 'react-redux-form';

const required = (value) => value && value.length;
const maxlength = (len) => (val) =>!(val) || (val.length <= len);
const minlength = (len) => (val) =>(val) && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {
    constructor(props){
        super(props);
        this.handleSubmit =this.handleSubmit.bind(this);
    }
    handleSubmit(values){
        console.log("Current State is : "+JSON.stringify(values));
        alert("Current State is : "+JSON.stringify(values));
        this.props.resetFeedbackForm()
    }    

    render(){
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Contact Us</h3>
                        <hr/>
                    </div>
                    </div>
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            #1240, 9th C main, 5th Cross, Srinivasanagar 
                      <br></br> BSK Stage 3, Bengaluru<br />
                            <i className="fa fa-phone"></i>: +91 7349160520<br />
                            <i className="fa fa-fax"></i>: +91 8217379113<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:rbkestur@gmail.com">Melting memories</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                        <a href="https://moovitapp.com?metroId=3620&to=RNSIT&tll=12.925402_77.519083&t=1"></a>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+7340160520"><i className="fa fa-phone"></i> Call</a>
                            <a href="/" role="button" className="btn btn-info"href="https://secure.skype.com/portal/overview"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col12">
                        <h3>Send us Your Feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <Form model="feedback" onSubmit={(values)=>this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="firstname" md={2}>First Name </Label>
                                <Col md={10}>
                                    <Control.text  model=".firstname" className="form-control" id="firstname" name="firstname" placeholder="First Name" validators={{
                                        required,
                                        minlength:minlength(3),
                                        maxlength:maxlength(15)
                                    }} />
                                    <Errors
                                        className="text-danger"
                                        model=".firstname"
                                        show="touched"
                                        messages={{
                                                  required: '*Required ',
                                                  minlength: 'Must be greater than 2 characters',
                                                  maxlength:'Must be less than 16 characters'
                                                 }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="lastname" md={2}>Last Name </Label>
                                <Col md={10}>
                                    <Control.text model=".lastname" id="lastname" name="lastname" placeholder="Last Name" className="form-control"    
                                    validators={{
                                        required,minlength:minlength(3),maxlength:maxlength(15)
                                    }} />
                                    <Errors
                                        className="text-danger"
                                        model=".lastname"
                                        show="touched"
                                        messages={{
                                                  required: '*Required ',
                                                  minlength: 'Must be greater than 2 characters',
                                                  maxlength:'Must be less than 16 characters'
                                                 }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="telnum" md={2}>Contact Tel. </Label>
                                <Col md={10}>
                                    <Control.text model=".tel" id="telnum" name="telnum" placeholder="Tel. Number"  className="form-control"  validators={{
                                        required,
                                        minlength:minlength(3),
                                        maxlength:maxlength(15),
                                        isNumber
                                    }}/>
                                    <Errors
                                        className="text-danger"
                                        model=".tel"
                                        show="touched"
                                        messages={{
                                                  required: '*Required ',
                                                  minlength: 'Must be greater than 2 numbers ',
                                                  maxlength:'Must be less than 16 numbers ',
                                                
                                            isNumber:'Must be a number' }}
                                    />
                                   
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email </Label>
                                <Col md={10}>
                                    <Control.text model=".email" id="email" name="email" placeholder="Email" className="form-control"   validators={{
                                        required,
                                        validEmail
                                    }}/>
                                     <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        messages={{
                                                  required: '*Required',
                                                  validEmail: ' Invalid Email Address'
                                                 
                                                 }}/>
                          
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 6,offset:2}}>
                                    <div className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".agree" name="agree"  className="form-check-input"/>{' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={{size: 3,offset:1}}>
                                    <Control.select model=".contactType" name="contactType" className="form-control">
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </Row>
                              <Row className="form-group">
                                <Label htmlFor="message" md={2}>Your Feedback </Label>
                                <Col md={10}>
                                    <Control.textarea model=".message" id="message" name="message" placeholder="message"  rows="12" className="form-control"/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10,offset:2}}>
                                <Button type="submit" color="primary">
                                Send Feedback
                                </Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;