import { Box, Heading, Image } from "@chakra-ui/react";
import Navbar from "./Navbar";

function Home() {
  return (
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
        <Heading as="h2" size="xl" color="white">
          Hi! I am Indrani Paul
        </Heading>
        <Heading as="h4" size="md" color="white">
          A Full Stack Web Developer
        </Heading>
        <Image
          style={{ width: "400px", height: "200px" }}
          src="https://teamtweaks1-blog.s3.us-east-2.amazonaws.com/blog/wp-content/uploads/2023/03/15102639/TT-How-To-Hire-Dedicated-Full-Stack-Developer-2023_.png"
        ></Image>
      </Box>
    </Box>
  );
}

export default Home;
