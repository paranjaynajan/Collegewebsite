
import React, { Component, useState } from 'react';
import { Container, Row, Col, Form, Button, Alert, Card,Table } from 'react-bootstrap';

import axios from 'axios';
export class Records extends Component {
    constructor(props) {
        super(props);
        this.state = { student: [], img: [],marks:[] }
    }

    fetchdata = async () => {
       
        const res = await axios.get("http://localhost:7834/fetch");
        this.setState({ student: res.data[0].studentdetails[0] })
        this.setState({ img: res.data[0].studentdetails })
        this.setState({ marks:  res.data[0].studentdetails[0].marks})
        
    }
    percentage = (i) => {
        const per = (this.state.marks[i].mark) * 10
        return Math.round(per);

    }

    year=(i)=>{
        switch (i)
            {
                case 1:
                   return "I";
                   break;
 
                case 2:
                    return "II";
                    break;
             
                case 3:
                    return "III";
                   break;
 
                case 4:
                    return "IV";
                    break;
     
                case 5:
                    return "V";
                    break;
 
                case 6:
                    return "VI";
                   break;
 
                case 7:
                    return "VII";
                   break;
                 
                default:
                    return "VIII";
                    break;
            }
    }
    componentDidMount() {
        this.fetchdata();
    }
    render() {
        return (
            <div >
                <div className='border'>
                   
                       <Container > <h1>{this.state.student.name}</h1></Container>
                       
                        </div>
                <Container>
                    <Row className="row g-0">
                        <Col lg='10' className='border'>
                            <Container className='mt-5'>
                                <Row>
                                    <Col lg={3}><h4>Fathers Name:</h4>
                                    </Col>
                                    <Col lg={3}><h4>{this.state.student.fathername}</h4>
                                    </Col>
                                    <Col lg={6}></Col>
                                </Row>
                                <Row>
                                    <Col lg={3}><h4>Student Name:</h4>
                                    </Col>
                                    <Col lg={3}><h4>{this.state.student.name}</h4>
                                    </Col>
                                    <Col lg={6}></Col>
                                </Row>
                                <Row>
                                    <Col lg={3}><h4>Gender:</h4>
                                    </Col>
                                    <Col lg={3}><h4>{this.state.student.gender}</h4>
                                    </Col>
                                    <Col lg={6}></Col>
                                </Row>
                                <Row>
                                    <Col lg={3}><h4>Year:</h4>
                                    </Col>
                                    <Col lg={3}><h4>{this.state.student.year}</h4>
                                    </Col>
                                    <Col lg={6}></Col>
                                </Row>
                                <Row>
                                    <Col lg={3}><h4>Semester:</h4>
                                    </Col>
                                    <Col lg={3}><h4>{this.state.student.semester}</h4>
                                    </Col>
                                    <Col lg={6}></Col>
                                </Row>
                                <Row>
                                    <Col lg={3}><h4>Roll Number:</h4>
                                    </Col>
                                    <Col lg={3}><h4>{this.state.student.Rollnumber}</h4>
                                    </Col>
                                    <Col lg={6}></Col>
                                </Row>
                                <Row>
                                    <Col lg={3}><h4>Session:</h4>
                                    </Col>
                                    <Col lg={3}><h4>{this.state.student.session}</h4>
                                    </Col>
                                    <Col lg={6}></Col>
                                </Row>
                                <Row>
                                    <Col lg={3}><h4>Blood Group:</h4>
                                    </Col>
                                    <Col lg={3}><h4>{this.state.student.bloodgroup}</h4>
                                    </Col>
                                    <Col lg={6}></Col>
                                </Row>
                                <Row>
                                    <Col lg={3}><h4>Contact Number:</h4>
                                    </Col>
                                    <Col lg={3}><h4>{this.state.student.contactnumber}</h4>
                                    </Col>
                                    <Col lg={6}></Col>
                                </Row>
                                <Row>
                                    <Col lg={3}><h4>Address:</h4>
                                    </Col>
                                    <Col lg={4}><h4>{this.state.student.address}</h4>
                                    </Col>
                                    <Col lg={5}></Col>
                                </Row>
                            </Container>

                            <Container className='mt-3'>
                            <div className='App'><h4>Marks</h4></div>
                            <Container>
                                <Table  bordered>
                                    <thead>
                                        <tr>

                                            <th className="text-center">
                                                S.no
                                            </th>
                                            <th className="text-center">
                                                Year
                                            </th>
                                            
                                            <th className="text-center">
                                                S.G.P.A
                                            </th>
                                            <th className="text-center">
                                                Percentage
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.marks.map((p, i) => {
                                             return (
                                                <tr>

                                                    <td className="text-center">{i+1}</td>
                                                    <td className="text-center">{this.year(i+1)}</td>     
                                                    <td className="text-center" >{p.mark}</td>
                                                    <td className="text-center">{this.percentage(i)}%</td>

                                                </tr>
 
                                             )
                                         })} 
                                    </tbody>
                                </Table>
                                </Container>

                            </Container>


                        </Col>
                        <Col lg='2'>
                            
                            <Container>{

                            this.state.img.map((s) => {
                                if (s.image) {
                                    const base64String = btoa(
                                        String.fromCharCode(...new Uint8Array(s.image.data))
                                    );
                                    
                                    return <img src={(`data:image/png;base64,${base64String}`)} alt="" width={300} />
                                } else {
                                    return <p></p>;
                                }
                            }
                            )
                            }
                           <Row>
                            <Col></Col>
                            <Col ><div className='mt-2'><h4>Code:{this.state.student.code}</h4></div></Col>
                            
                           </Row>
                          
                            </Container>
                            </Col>
                    </Row>
                </Container>


            </div>
        )
    }
}
