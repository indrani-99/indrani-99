// // Navbar.js
// import React from "react";
// import { Box } from "@chakra-ui/react";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <div>
//       <Box
//         borderRadius="lg"
//         border="1px solid"
//         borderWidth="1px"
//         justifyContent="space-around"
//       >
//         <NavLink to="/">Home</NavLink>
//         <NavLink to="/about">About</NavLink>
//         <NavLink to="/skill">Skills</NavLink>
//         <NavLink to="/projects">Projects</NavLink>
//         <NavLink to="/statistics">Statistics</NavLink>
//         <NavLink to="/contact">Contact</NavLink>
//       </Box>
//     </div>
//   );
// };

// export default Navbar;

import React from "react";
import { Box,Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box style={{ width: '100vw', display: 'flex',border:"1px solid", justifyContent: 'space-between', padding:"10px 40px",boxSizing:"border-box" }}>
        <Text>Indrani</Text>
      <Box
        borderRadius="lg"
        border="1px solid"
        borderWidth="1px"
        justifyContent="space-around"
        display="flex"
        width="50%"
        alignItems="center"
        gap={4}
      >
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/skill">Skills</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/statistics">Statistics</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/resume">Resume</NavLink>
      </Box>
    </Box>
  );
};

export default Navbar;

