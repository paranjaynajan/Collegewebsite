// import React, { useState, useEffect } from "react";
// import { New } from "./new";

// import axios from 'axios';
// export const ParentComponent = () => {
//   const [initialValue, setInitialValue] = useState({});

//   fetch=async()=>{
//     const res = await axios.get("http://localhost:7834/fetch");
//     return res
//   }
//   useEffect(() => {
//       setInitialValue(fetch());
   
//   }, []);

//   return <New initialValue={initialValue} />;
// };

// import React, { Component } from 'react';
// import axios from 'axios';


// export class ParentComponent extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       initialValue: {}
//     };
//   }

//   async componentDidMount() {
//     const res = await axios.get("http://localhost:7834/fetch");
//     this.setState({ initialValue: res });
//   }

//   render() {
//     const { initialValue } = this.state;
//     return <New initialValue={initialValue} />;
//   }
// }


