// import React, { Component } from 'react';

import { Component } from "react";

// export class New extends Component {
//   state = {
//     position: 0,
//   };

//   componentDidMount() {
//     this.intervalId = setInterval(() => {
//       this.setState(prevState => ({
//         position: prevState.position + 1,
//       }));
//     }, 10);
//   }

//   componentWillUnmount() {
//     clearInterval(this.intervalId);
//   }

//   render() {
    
//     const { position } = this.state;

//     return (
//       <div style={{ position: 'relative', height: '100px' }}>
//         <div
//           style={{
//             position: 'absolute',
//             top: position,
//             left: 0,
//             whiteSpace: 'nowrap',
//           }}
//         >
//           "hjh"
//         </div>
//       </div>
//     );
//   }
// }


// import React, { Component } from 'react';

// export class New extends Component {
//   state = {
//     position: 0,
//     containerHeight: 0,
//   };

//   containerRef = React.createRef();

//   componentDidMount() {
//     this.intervalId = setInterval(() => {
//       this.setState(prevState => ({
//         position:
//           prevState.position >= prevState.containerHeight
//             ? 0
//             : prevState.position + 1,
//       }));
//     }, 10);
//   }

//   componentWillUnmount() {
//     clearInterval(this.intervalId);
//   }

//   componentDidUpdate() {
//     const { height } = this.containerRef.current.getBoundingClientRect();
//     if (height !== this.state.containerHeight) {
//       this.setState({ containerHeight: height });
//     }
//   }

//   render() {
//    ;
//     const { position } = this.state;

//     return (
//       <div
//         ref={this.containerRef}
//         style={{ position: 'relative', height: '100px', overflow: 'hidden' }}
//       >
//         <div
//           style={{
//             position: 'absolute',
//             top: position,
//             left: 0,
//             whiteSpace: 'nowrap',
//           }}
//         >
//           "hello"
//         </div>
//       </div>
//     );
//   }
// }

//  export class VissionAndMission extends Component{
// constructor(props){
//     super(props);
//     this.setState({res:props.data})
// }


// componentDidMount(){
//     this.fetchData();
// }
// componentDidUpdate(prevProps){
//     if(this.props.data!==prevProps.data){
//         this.setState({res:this.props.data})
//     }
// }
// componentWillReceiveProps(props){
//     this.setState({res:props.data})
// }
// render(){
//     return(
//     <>{
//         console.log(this.state.res)
//     }
//     </>
//     )
// }
//  }

// import React, { useState, useEffect } from "react";

// export const New = ({ initialValue }) => {
//   const [inputValue, setInputValue] = useState({});

//   useEffect(() => {
//     if (initialValue) {
//       setdata();
//     }
//   }, [initialValue]);

//  const setdata=async()=>{
//     try {
//             const a=await initialValue
//              console.log(a.data)
//              setInputValue(a.data);
            
//         }
//         catch (error) {
//             console.log(error)
           
//         }
//   }
//   return < >
//   {console.log(inputValue)}
//   </>;
// };


// export class New extends Component{
//     constructor(initialValue){
//         super(initialValue);
//         this.setState({res:{}})
//     }

//     componentDidMount(){
//         if (this.initialValue) {
//             this.fetchdata(this.initialValue);
//           }
//     }
//     fetchData = async (initialValue) => {
//         try {
//             const a=await initialValue
//              console.log(a.data)
//              this.setState({res:a.data});
            
//         }
//         catch (error) {
//             console.log(error)
           
//         }
// } 

// render(){
//     return(<>
//      {console.log(this.state.res)}
//     </>

//     )
// }

// }


// export class New extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       inputValue: {}
//     };
//   }

//   componentDidMount() {
//     const { initialValue } = this.props;
//     if (initialValue) {
//       this.setdata();
//     }
//   }

//   setdata = async () => {
//     try {
//         console.log(this.props.initialValue)
//       const a = await this.props.initialValue;
//       console.log(a);
//       this.setState({ inputValue: a.data });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   render() {
//     const { inputValue } = this.state;
//     return (
//       <>
//         {console.log(inputValue)}
//       </>
//     );
//   }
// }


export class VissionAndMission extends Component {
    constructor(props) {
        super(props);
     console.log(this.props)
        this.state = {
          formData: props.res,
        };
      }
    
      componentDidUpdate(prevProps) {
        const { res } = this.props;
        if (res !== prevProps.res) {
         
          this.setState({
            formData: prevProps.res,
          });
        }
      }
     

    

    render(){
       const formdata=this.props
        return(
            <div >
            <div className='border'>
               {console.log(this.state.formData[0].hodname)}
               {/* {console.log(this.state.facult.name)}  */}
              
            </div>
        </div>
        )
    }
} 


// componentDidUpdate(prevProps) {
//     const { data } = this.props;
//     if (data !== prevProps.data) {
//       this.setState({
//         formData: data && data[0] && data[0].department ? [data[0].department] : [],
//       });
//     }
//   }