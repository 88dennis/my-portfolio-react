// import React, { Component } from "react";
// import { Link } from "react-router-dom";

// import "./style.css";

// const styles = ({
//     divStyle: {
//       marginTop: '50px',
//       textAlign: "center",
//       fontFamily: 'arial',
//     },

  
//   });

// class TestPage2 extends Component {
//   state = {
//     prevScrollpos: window.pageYOffset,
//       visible: true
//   };

//   handleHideShowNav = () => {
//     const newState = {...this.state} 
//         newState.visible = !newState.visible

//         this.setState(newState)
//   }

//   handleScroll = () => {

//     const { prevScrollpos } = this.state;
//     const currentScrollPos = window.pageYOffset;
//     const visible = prevScrollpos > currentScrollPos;
//     this.setState({
//       prevScrollpos: currentScrollPos,
//       visible
//     });
//   };

//   componentDidMount() {
//     window.addEventListener("scroll", this.handleScroll);
//   }
  
//   componentWillUnmount() {
//     window.removeEventListener("scroll", this.handleScroll);
//   }

//   render() {
//     let showClass = 'navbar';
//     if(!this.state.visible) {
// showClass = 'navbar navbar--hidden'
//     }

//     return (
//       <div>
//         <nav className={showClass}
//         >
        
//         <a href="/">ITEM</a>
//         <a href="/">ITEM</a>
//         <a href="/">ITEM</a>
        
//         </nav>

//         <div>
            
//         </div>


//         <button onClick = {this.handleHideShowNav} style={styles.divStyle}>SHOW HIDE</button>
//           <button style={styles.divStyle}><Link to="/"> TEMPORARY BUTTON TO GO BACK TO SIGNUP/LOGIN</Link></button>
//           </div>
//     );
//   }
// }

// export default TestPage2;
