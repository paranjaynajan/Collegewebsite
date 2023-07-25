import { Component } from "react";
import { Alert, Container, Row, Col, Form, Button, Table } from 'react-bootstrap';
import TextField from "@mui/material/TextField";
import React from 'react';
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputAdornment from '@mui/material/InputAdornment';
import axios from 'axios';
export class Forms extends Component {
  constructor() {
    super();
    this.state = {
      formdata: {}, isdata: false, position: 0, containerHeight: 0,
    }
  }

  handleChange = (event) => {
    if (event.target.name === "image") {
      this.setState({ formdata: { ...this.state.formdata, image: event.target.files[0] } });
    }
    else {
      this.setState({ formdata: { ...this.state.formdata, [event.target.name]: event.target.value } })
      console.log(this.state.formdata)
    }
    console.log(event.target.name)

  }
  change3 = () => {
    console.log("inside")
    this.switch2 === true ? this.switch2 = false : this.switch2 = true
    console.log(this.switch2)
  }
  containerRef = React.createRef();
  componentDidMount() {


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
  handleSubmit = async (event, formdata) => {
    event.preventDefault();
    const res = await axios.post("http://localhost:7834/saveStudent", formdata);
    console.log(res);
    if (res) {
      this.setState({
        isdata: true
      })
    }

  }
  render() {
    const { position } = this.state;
    return (
      <>
        <div className='border'><Container> <h1>Registration</h1></Container></div>
        <Container>
          <Alert variant="primary" className="mt-3 text-center square border border-primary" >
            <Row>
              <Col><div className='App'><Button style={{ backgroundColor: "#0d6efd" }} type="submit" onClick="" >Student</Button></div></Col>
              <Col><div className='App'><Button style={{ backgroundColor: "#0d6efd" }} type="submit" onClick="" >Faculty</Button></div></Col>
              <Col><div className='App'><Button style={{ backgroundColor: "#0d6efd" }} type="submit" onClick="" >Subjects</Button></div></Col>
            </Row>
          </Alert>
          <Row className="row g-0">
            <Col lg={9} className='border'>
              <Container className="ms-5">
                <Form onSubmit={this.handleSubmit}>
                  <Row className="row g-0 mt-3"><Col lg={3} className="mt-3"><h4>Name:</h4></Col>
                    <Col lg={4}><TextField label="Enter Fullname" name="name" fullWidth className="mb-3" variant="standard" onChange={this.handleChange} /></Col>
                    <Col lg={5}></Col>

                  </Row>
                  <Row className="row g-0"><Col lg={3} className="mt-3" ><h4>Fathers Name:</h4></Col>
                    <Col lg={4}>  <TextField label="Enter Fullname" name="fathername" fullWidth className="mb-3" variant="standard" onChange={this.handleChange} /></Col>
                    <Col lg={5}></Col>
                  </Row>
                  <Row className="row g-0 mt-3"><Col lg={3}><h4>Select Gender:</h4></Col>
                    <Col lg={4}>  <FormControl>
                      <FormLabel className="mb=3"></FormLabel>
                      <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="gender"
                        onChange={this.handleChange}
                      >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                      </RadioGroup>
                    </FormControl></Col>
                    <Col lg={5}></Col>
                  </Row>
                  <Row className="row g-0"><Col lg={3} className="mt-3" ><h4>Computer Code:</h4></Col>
                    <Col lg={4}>   <TextField id="standard-basic" label="Enter Your Computer Code" name="code" fullWidth className="mb-3" variant="standard" onChange={this.handleChange} /></Col>
                    <Col lg={5}></Col>
                  </Row>

                  <Row className="row g-0">
                    <Col lg={3} className="mt-3" ><h4>Class:</h4></Col>
                    <Col lg={5}>
                      <Row className="row g-0">
                        <Col lg={4}><TextField id="standard-basic" label="Semester" variant="standard" name="semester" type={"number"} onChange={this.handleChange} /></Col>
                        <Col lg={4}> <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                          <InputLabel>Year</InputLabel>
                          <Select
                            labelId="demo-select-small"
                            name="year"
                            label="Appliances"
                            onChange={this.handleChange}
                          >
                            <MenuItem value="">

                            </MenuItem>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={3}>4</MenuItem>
                          </Select>
                        </FormControl></Col>

                        <Col lg={4}><FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                          <InputLabel>Session</InputLabel>
                          <Select
                            labelId="demo-select-small"
                            label="Appliances"
                            name="session"
                            onChange={this.handleChange}
                          >
                            <MenuItem value="">

                            </MenuItem>
                            <MenuItem value={2019}>2019</MenuItem>
                            <MenuItem value={2020}>2020</MenuItem>
                            <MenuItem value={2021}>2021</MenuItem>
                            <MenuItem value={2022}>2022</MenuItem>
                          </Select>
                        </FormControl></Col>
                      </Row></Col>
                    <Col lg={4}></Col>
                  </Row>
                  <Row className="row g-0"><Col lg={3} className="mt-3" ><h4>Enrollment ID:</h4></Col>
                    <Col lg={4}>   <TextField id="standard-basic" label="Enter Your Enrollment number" name="Rollnumber" fullWidth className="mb-3" variant="standard" onChange={this.handleChange} /></Col>
                    <Col lg={5}></Col>
                  </Row>
                  <Row className="row g-0"><Col lg={3} className="mt-3" ><h4>Contact Details:</h4></Col>
                    <Col lg={5}>
                      <Row><Col lg={6}><TextField id="standard-basic" label="Enter Your Address" name="address" fullWidth className="mb-3" variant="standard" onChange={this.handleChange} /></Col>
                        <Col lg={6}><TextField InputProps={{
                          startAdornment: <InputAdornment position="start">+91</InputAdornment>,
                        }} label="Enter Your Phone Number" name="contactnumber" fullWidth className="mb-3" variant="standard" onChange={this.handleChange} /></Col>
                      </Row></Col>
                    <Col lg={4}></Col>
                  </Row>
                  <Row className="row g-0"><Col lg={3} className="mt-3" ><h4>Blood Group:</h4></Col>
                    <Col lg={4}>   <FormControl sx={{ m: 1, minWidth: 140 }} size="small">
                      <InputLabel >Blood Group</InputLabel>
                      <Select
                        label="Appliances"
                        labelId="demo-select-small"
                        name="bloodgroup"
                        onChange={this.handleChange}
                      >
                        <MenuItem value="">

                        </MenuItem>
                        <MenuItem value="A+">A+</MenuItem>
                        <MenuItem value="B+">B+</MenuItem>
                        <MenuItem value="O">O</MenuItem>
                        <MenuItem value="AB+">AB+</MenuItem>
                      </Select>
                    </FormControl></Col>
                    <Col lg={5}></Col>
                  </Row>
                  <Row className="row g-0"><Col lg={3} className="mt-3" ><h4>Attach Photo:</h4></Col>
                    <Col lg={5}>
                      <Row><Col> <Form.Group className="mt-3" >
                        <Form.Control type="file" placeholder="upload file" name="image" onChange={this.handleChange} />
                      </Form.Group></Col>
                      </Row>
                    </Col>
                    <Col lg={4}></Col>
                  </Row>
                  <Row className="row g-0"><Col lg={3} className="mt-4" ><h4>Enter Marks:</h4></Col>
                    <Col lg={5}>
                      <Row><Col ><div className='mt-4'><Button style={{ backgroundColor: "#0d6efd" }} type="submit" onClick={() => this.change3()} >{this.switch2 === true ? "Less" : "Add Marks"}</Button></div>
                        {this.switch2 === true ? <div className="mt-3" >
                          <Table bordered>
                            <thead>
                              <tr>
                                <th className="text-center">
                                  Year
                                </th>
                                <th className="text-center">
                                  Marks
                                </th>
                                <th className="text-center">
                                  Add
                                </th>

                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="App">I</td>
                                <td className="App"><TextField variant="outlined" name="mark" /></td>
                                <td className="App"><Button style={{ backgroundColor: "#0d6efd" }} type="submit" onClick="" >Add</Button></td>
                              </tr>
                              <tr>
                                <td className="App">II</td>
                                <td className="App"><TextField variant="outlined" name="mark" /></td>
                                <td className="App"><Button style={{ backgroundColor: "#0d6efd" }} type="submit" onClick="" >Add</Button></td>
                              </tr>
                              <tr>
                                <td className="App">III</td>
                                <td className="App"><TextField variant="outlined" name="mark" /></td>
                                <td className="App"><Button style={{ backgroundColor: "#0d6efd" }} type="submit" onClick="" >Add</Button></td>
                              </tr>
                              <tr>
                                <td className="App">IV</td>
                                <td className="App"><TextField variant="outlined" name="mark" /></td>
                                <td className="App"><Button style={{ backgroundColor: "#0d6efd" }} type="submit" onClick="" >Add</Button></td>
                              </tr>
                              <tr>
                                <td className="App">V</td>
                                <td className="App"><TextField variant="outlined" name="mark" /></td>
                                <td className="App"><Button style={{ backgroundColor: "#0d6efd" }} type="submit" onClick="" >Add</Button></td>
                              </tr>
                              <tr>
                                <td className="App">VI</td>
                                <td className="App"><TextField variant="outlined" name="mark" /></td>
                                <td className="App"><Button style={{ backgroundColor: "#0d6efd" }} type="submit" onClick="" >Add</Button></td>
                              </tr>
                              <tr>
                                <td className="App">VII</td>
                                <td className="App"><TextField variant="outlined" name="mark" /></td>
                                <td className="App"><Button style={{ backgroundColor: "#0d6efd" }} type="submit" onClick="" >Add</Button></td>
                              </tr>
                              <tr>
                                <td className="App">VIII</td>
                                <td className="App"><TextField variant="outlined" name="mark" /></td>
                                <td className="App"><Button style={{ backgroundColor: "#0d6efd" }} type="submit" >Add </Button></td>
                              </tr>

                            </tbody>
                          </Table>
                        </div> : null}
                      </Col>
                      </Row></Col>
                    <Col lg={4}></Col>
                  </Row>
                </Form>
              </Container>
            </Col>
            <Col lg={3}>  <Container>
              <Row  >

                <Col ><div className='App'><h1 className='mt-2'>Notice</h1></div>
                  <Container  >
                    <div
                      ref={this.containerRef}
                      style={{ position: 'relative', height: '200px', width: '100px' }}
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
              </Row></Container></Col>
          </Row>
          {
            this.state.isdata ? <Alert className="mt-5 text-center" >
              Successfully Registered!
            </Alert> : null
          }
        </Container>
      </>
    )
  }
}

// import { Alert } from "react-bootstrap";
// import { Component } from "react";
// import Container from "@mui/material/Container";
// import TextField from "@mui/material/TextField";
// import FormControl from "@mui/material/FormControl";
// import RadioGroup from "@mui/material/RadioGroup";
// import Radio from "@mui/material/Radio";
// import Button from "@mui/material/Button"
// import FormLabel from "@mui/material/FormLabel";
// import FormControlLabel from "@mui/material/FormControlLabel";
// // import { FacultyData, SubjectData, UpdateFaculty, UpdateSubject } from "../Services/DepartmentServices.js";

// export class Forms extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       formData: {

//         subjects: [],
//       },
//       subjectData: {
//         faculties: []
//       },
//       isShow: false,
//       isData: false
//     }
//   }
//   handleChange = (event) => {
//     this.setState({ formData: { ...this.state.formData, [event.target.name]: event.target.value } })
//   }
//   handleSub = (event) => {

//     this.setState({ subjectData: { ...this.state.subjectData, [event.target.name]: event.target.value } })
//      console.log(this.props.section);
//   }

//   handleSubmit = async (event) => {
//     // event.preventDefault();
//     // console.log(this.props.section)
//     // console.log(this.state.formData)
//     // const res = await FacultyData(this.state.formData)
//     // this.setState({ formData: res.data })
//     //  console.log(res)
//     //   console.log(res.data)

//   }
//   handleData = async (event) => {
//     // event.preventDefault();
//     // console.log(this.state.formData)
//     // console.log(this.state.formData._id)
//     // const response = await SubjectData(this.state.subjectData);
//     // console.log(response.data._id)
//     // await UpdateFaculty(this.state.formData._id, response.data._id)
//     // await UpdateSubject(response.data._id, this.state.formData._id)
//   }
//   render() {
//     return (
//       <>
//         <Container>
//           <Alert className="text-center">
//             WelCome To IPS ACADEMY
//           </Alert>
//         </Container>
//         <Container>
//           <form onSubmit={this.handleSubmit}>
//             <TextField type="text" label="enter name" name="name" fullWidth className="mb-2" onChange={this.handleChange}>
//             </TextField>
//             <TextField type="text" label="enter phone" name="phone" fullWidth className="mb-2" onChange={this.handleChange}>
//             </TextField>
//             <FormControl className="mb-2" name="gender" onChange={this.handleChange}>
//               <FormLabel id="demo"  >Gender</FormLabel>
//               <RadioGroup row name="gender">
//                 <FormControlLabel value="female" control={<Radio />} label="Female" />
//                 <FormControlLabel value="male" control={<Radio />} label="Male" />
//               </RadioGroup>
//             </FormControl>
//             <TextField type="text" label="enter qualification" name="qualification" onChange={this.handleChange} fullWidth className="mb-2"></TextField>

//             <Button type="submit" variant="contained" color="primary" disabled={!this.state.formData.name || !this.state.formData.phone || !this.state.formData.qualification} className="mb-2" onClick={() => { this.setState({ isShow: true }) }}>Subjects</Button>
//           </form>
//           {this.state.isShow ? (
//             <>
//               <form onSubmit={this.handleData}>
//                 <TextField type="text" label="subject" name="name" fullWidth className="mb-2" onChange={this.handleSub}>
//                 </TextField>
//                 <Button type="submit" variant="contained" color="success" className="mb-2" onClick={() => { this.setState({ isData: true }) }}>Add</Button>
//                 {this.state.isData ? (
//                   <TextField type="text" label="subject" name="name" fullWidth className="mb-2" onChange={this.handleSub}>
//                   </TextField>
//                 ) : null

//                 }
//                 <Button type="submit" variant="contained" color="primary" className="mb-2">Submit</Button>
//               </form>

//             </>

//           ) : null}



//         </Container>
//       </>
//     )

//   }

// }
