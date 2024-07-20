import { Box, Heading, Image ,Text} from "@chakra-ui/react";
import Navbar from "./Navbar";

function About() {
  return (
    <>
      <Box
        style={{
          width: "100vw",
          height: "100vh",
          border: "1px solid",
          boxSizing: "border-box",
          margin: "0px",
          padding: "0px",
        }}
      >
        <Navbar />
        <Box
          style={{
            width: "100vw",
            height: "85vh",
            backgroundColor: "rgb(8, 66, 103)",
            border: "1px solid",
            justifyContent: "space-evenly",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            padding: "10px 40px",
            boxSizing: "border-box",
          }}
        >
          <Heading as="h1" size="xl" color="white" style={{fontFamily:"sans-serif"}}>
            About
          </Heading>
          <Box style={{ display:"flex",
            justifyContent:"space-around",
            alignItems:"center",
            w:"80vw" }}>
            <Box style={{borderRadius:"10%", width: "300px", height: "300px"}}>
            <img
              style={{ width: "100%", height: "100%",borderRadius:"10%",fontFamily:"sans-serif" }}
              src="../../public/images/Indrani_last.jpg"
            />
            </Box>
            <Box style={{ width:"50%" ,height:"80%", p:"10px", color:"white"}} >
              <Text as='b' fontSize='20px' style={{ lineHeight: '2' }}>I am a passionate and versatile Full-Stack Developer with a robust background in building and maintaining dynamic web applications. With extensive experience in both front-end and back-end development, I excel at creating seamless, responsive, and user-friendly interfaces, while ensuring efficient and scalable server-side operations.</Text>
            </Box>
           
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default About;
