import React, { Component, useState } from 'react';
import { Container, Row, Col, Carousel, Button, Alert, Card, Table, ListGroup } from 'react-bootstrap';
import two from '../assests/two.png';
import three from '../assests/three.jpg';
import five from '../assests/five.jpg';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, } from 'recharts';

export class Department extends Component {
    constructor(props) {
        super(props);
        this.state = { dept: [], facult: [], sub: [], switch: true, place: [], switch2: false, img: [] }
    }


    fetchdata = async () => {
        const res = await axios.get("http://localhost:7834/fetch");
        this.setState({ dept: res.data[0] })
        this.setState({ facult: res.data[0].faculties })
        this.setState({ sub: res.data[0].subjects })
        this.setState({ place: res.data[0].placement })
        this.setState({ img: res.data[0].studentdetails })
        
    }

    change1 = () => {
        this.setState({ switch: false })
    }
    change2 = () => {
        this.setState({ switch: true })
    }
    change3 = (e, j) => {
        e.switch2 === true ? e.switch2 = false : e.switch2 = true
        this.state.facult[j] = e;
        this.setState({ facult: this.state.facult })
    }
    componentDidMount() {
        this.fetchdata();
    }

    percentage = (i) => {
        const per = (this.state.place[i].studentplaced / this.state.place[i].studentadmitted) * 100
        return Math.round(per);
    }

    render() {
        return (
            <div className='ms-5'>
              
                <Container>
                    <h1>Placements</h1>
                    <Row>
                      
                        <Col>  <Container >
                            <BarChart width={590} height={590} data={this.state.place} >
                                <Bar dataKey="students" fill="#0d6efd" />
                                <XAxis dataKey="company" label={{
                                    
                                    style: { textAnchor: 'middle' },
                                    angle: 360,
                                    position: 'left',
                                    offset: 5,
                                    fill: 'black', margin: '10px'

                                }} dy={2} />
                                <YAxis label={{
                                    value: `Student Placed`,
                                    style: { textAnchor: 'middle' },
                                    angle: -90,
                                    position: 'left',
                                    offset: -0.6,
                                    fill: 'black'
                                }} />
                            </BarChart>
                            <div className='App'><h5>Placement Data</h5></div>
                        </Container></Col>
                        <Col>  <Container >

                            <Table striped bordered>
                                <thead>
                                    <tr>

                                        <th className="text-center">
                                            S.no
                                        </th>
                                        <th className="text-center">
                                            Year
                                        </th>
                                        <th className="text-center">
                                            Students Admitted
                                        </th>
                                        <th className="text-center">
                                            Student Placed
                                        </th>
                                        <th className="text-center">
                                            Percentage
                                        </th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.place.map((p, i) => {

                                        return (
                                            <tr>

                                                <td className="text-center">{i + 1}</td>
                                                <td className="text-center">{p.year}</td>
                                                <td className="text-center" >{p.studentadmitted}</td>
                                                <td className="text-center" >{p.studentplaced}</td>
                                                <td className="text-center">{this.percentage(i)}%</td>
                                              

                                            </tr>

                                        )
                                    })}
                                </tbody>
                            </Table>
                            <div className='App'><h5>Placement Percentage</h5></div>

                        </Container></Col>
                    </Row>


                    <Container >
                        <h1>Department Events</h1>
                        <Container className='d-flex justify-content-center'>
                        <Carousel>
                          
                            <Carousel.Item interval={1000}>
                                <img
                                    src={two}
                                    alt=""
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={1000}>
                                <img
                                    src={three}
                                    alt=""
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={500}>
                                <img
                                    src={five}
                                   alt=""
                                />
                            </Carousel.Item>
                        </Carousel></Container>
                    </Container>
                    <div className='mt-5'>
                        <Alert variant="primary" className='square border border-primary'>
                            <Row>
                                <Col><div className='App'><Button style={{backgroundColor:"#0d6efd"}} type="submit" onClick={this.change2} >Faculty Profile</Button></div></Col>
                                <Col><div className='App'><Button style={{backgroundColor:"#0d6efd"}}  type="submit" onClick={this.change1} >Subjects</Button></div></Col>
                            </Row>
                        </Alert>

                    </div>
                    <div>{this.state.switch === true ? <Container> {this.state.facult.map((e, j) => {
                        return <div className='mt-2'><Card className="square border border-primary" ><Row><Col lg='10'>
                            <Card.Body>
                                <Card.Title>{e.name}</Card.Title>
                                <Card.Text>
                                    <Row>
                                        <Col>Contact no.{e.phone}</Col>
                                        <Col> {e.experties.map((j) => {
                                            return <><Col>Experties: {j.name}</Col></>
                                        })}
                                        </Col>
                                       

                                    </Row>
                                    <div className='mt-1'><Button style={{backgroundColor:"#0d6efd"}}  type="submit" onClick={() => this.change3(e, j)} >{e.switch2 === true ? "Hide Details" : "Show Details"}</Button></div>
                                </Card.Text>
                            </Card.Body>
                        </Col>
                            <Col lang='2'><div className='mt-2'>{
                                this.state.img.map((s) => {
                                    if (s.image) {
                                        const base64String = btoa(
                                            String.fromCharCode(...new Uint8Array(s.image.data))
                                        );

                                        return <img src={(`data:image/png;base64,${base64String}`)} alt="" width={100} height={100} />
                                    } else {
                                        return <p></p>;
                                    }
                                }
                                )
                            }</div></Col></Row>{e.switch2 === true ?
                                <ListGroup variant="flush" >
                                    <ListGroup.Item className="square border border-primary ">
                                        <Row className="row g-0">
                                            <Col lg={1}> Designation:
                                            </Col>
                                            <Col lg={2}>{e.designation}
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="square border border-primary">
                                        <Row className="row g-0">
                                            <Col lg={1}>  Qualification:
                                            </Col>
                                            <Col lg={2}>{e.qualification}
                                            </Col></Row>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="square border border-primary">
                                    <Row className="row g-0">
                                            <Col lg={1}>  Experience:
                                            </Col>
                                            <Col lg={2}>{e.experience}
                                            </Col></Row>
                                        </ListGroup.Item>
                                </ListGroup> : null}

                        </Card></div>
                    })}</Container> : <Container>{this.state.sub.map((e) => {
                        return <div className='mt-3'> <Card className="square border border-primary" >
                            <Card.Body>
                                <Card.Title>{e.name}</Card.Title>
                                <Card.Text>
                                    <Row>
                                        <Col lg={1}>Year:{e.year}</Col>
                                        <Col lg={3}>Subject Code:{e.code}</Col>
                                        <Col lg={2}>Semester:{e.cred}</Col>
                                        <Col lg={6}>Faculties:
                                        {e.faculty.map((j,i,arr) => { return <span>{j.name} {i != (arr.length-1) ? ',' : ''}</span>})}
                                        </Col>
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card></div>
                    })}</Container>
                    }
                    </div>
                </Container>
            </div>
        )
    }
}


