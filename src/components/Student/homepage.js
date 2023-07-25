import React, { Component, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import axios from 'axios';
import { getdata } from '../../services/getdata';
export class Homepage extends Component {
    constructor() {
        super();
        this.state = { dept: [], img: [],position:0,containerHeight:0 }
    }
    
      containerRef = React.createRef();
    fetchdata = async () => {
        const res = await getdata();
        console.log(res)
        this.setState({ 
            dept: res,
            img: res.studentdetails
        })
        console.log(this.state)
        console.log("hello")


    }

    componentDidMount() {
        this.fetchdata();
        
        this.intervalId = setInterval(() => {
            this.setState(prevState => ({
              position:
                prevState.position >= prevState.containerHeight
                  ? 0
                  : prevState.position + 1,
            }));
          }, 10);
    }
    componentWillUnmount() {
        clearInterval(this.intervalId);
      }
    
      componentDidUpdate() {
        const { height } = this.containerRef.current.getBoundingClientRect();
        if (height !== this.state.containerHeight) {
          this.setState({ containerHeight: height });
        }
      }

    render() {
        const { position } = this.state;
        return (
            <div >
                <div className='border'><Container> <h1>{this.state.dept.deptname}</h1></Container></div>
                <Container>
                    <Row className="row g-0">
                        <Col lg='9' className='border'>
                            <Container className='mt-5'>
                                <div > <h4>Mission of Department</h4><p>{this.state.dept.deptmission}</p></div>
                                <div className='mt-5'><h4>Vision of Department</h4><p>{this.state.dept.deptvision}</p></div>

                            </Container>
                            <Container className='App' >
                                <h4>Message from The Head</h4>
                                {
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
                            </Container>
                            <Container className='App'><div className='mt-3'><h4>{this.state.dept.hodname}</h4></div></Container>
                            <Container style={{ textAlign: "justify" }}><div><p className='text-justify'>{this.state.dept.hodmsg}</p></div></Container>
                            <Container>
                                <Row>
                                    <Col><Container><h4>{this.state.dept.hodname}</h4>
                                        <h4>{this.state.dept.deptname}</h4>
                                        <h4>Contact number:{this.state.dept.deptphone}</h4>
                                        <h4> IPS Academy</h4>
                                        <h4> Institute of Engineering & Science</h4>
                                    </Container></Col>
                                    <Col></Col>
                                </Row>
                            </Container>

                        </Col>
                        <Col lg='3'>
                            <Container>   
                            <Row  >
                            
                            <Col ><div className='App'><h1 className='mt-2'>Notice</h1></div>
                            <Container  >
                            <div
                                ref={this.containerRef}
                                style={{ position: 'relative', height: '200px',width:'100px' }}
                            >
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: position,
                                        left: 0,
                                        whiteSpace: 'nowrap',
                                    }}
                                >
                                    <div>
                                    <h6 className='mb-4'>1.Midterm I is on :12/03/23</h6>
                                    <h6 className='mb-4'>2.Last Date of fees submission is :30/3/23</h6>
                                    <h6 className='mb-4'>3.Cindicator Guidlies are Avialble</h6>
                                    <h6 className='mb-4'>4.Links are open for Exam Form</h6>
                                    <h6 className='mb-4'>5.Last Date of Scholarship is :15/4/23</h6>
                                    </div>
                                   
                                </div>
                            </div></Container></Col>
                        </Row></Container>
                        </Col>
                    </Row>
                </Container>


            </div>
        )
    }
}
