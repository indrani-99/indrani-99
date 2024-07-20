import { Grid, GridItem, Image,Box } from "@chakra-ui/react";


function Skills() {
  return (
    <Box style={{width:"100vw" , height:"80vh"}}>
      <h1>Technical Skills</h1>

      <Grid
        templateAreas={`". . html . ."
                        ". css js bt ."
                        "rt ch ts jv nd"
                        ". sq md tl ."
                        ". . sa . ."
                 `}
        gridTemplateRows={"1fr 1fr 1fr 1fr 1fr"}
        gridTemplateColumns={"1fr 1fr 1fr 1fr 1fr"}
        h="60%"
        w="60%"
        gap="0"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem pl="2" bg="orange.300" area={'html'}>
          <Image src="../../public/images/html.png" alt="html" w="70%" style={{borderRadius:"50%"}}/>
        </GridItem>
        <GridItem pl="2" bg="pink.300" area={'css'}>
          <Image src="../../public/images/css.png" alt="css" w="70%" style={{borderRadius:"50%"}}/>
        </GridItem>
        <GridItem pl="2" bg="green.300" area={'js'}>
          <Image src="../../public/images/js.webp" alt="javascript" w="70%" style={{borderRadius:"50%"}}/>
        </GridItem>
        <GridItem pl="2" bg="blue.300" area={'bt'}>
          <Image src="../../public/images/bootstrap.png" alt="bootstrap" w="70%" style={{borderRadius:"50%"}}/>
        </GridItem>
        <GridItem pl="2" bg="orange.300" area={'rt'}>
          <Image src="../../public/images/react.png" alt="react" w="70%" style={{borderRadius:"50%"}}/>
        </GridItem>
        <GridItem pl="2" bg="pink.300" area={'ch'}>
          <Image src="../../public/images/chakra1.jpg" alt="chakra" w="70%" style={{borderRadius:"50%"}}/>
        </GridItem>
        <GridItem pl="2" bg="green.300" area={'ts'}>
          <Image src="../../public/images/ts.png" alt="typescript" w="70%" style={{borderRadius:"50%"}}/>
        </GridItem>
        <GridItem pl="2" bg="blue.300" area={'jv'}>
          <Image src="../../public/images/java2.png" alt="java" w="70%" style={{borderRadius:"50%"}}/>
        </GridItem>
        <GridItem pl="2" bg="blue.300" area={'nd'}>
          <Image src="../../public/images/node.jpg" alt="node" w="70%" style={{borderRadius:"50%"}}/>
        </GridItem>
        <GridItem pl="2" bg="green.300" area={'sq'}>
          <Image src="../../public/images/sql.jpg" alt="sql" w="70%" style={{borderRadius:"50%"}}/>
        </GridItem>
        <GridItem pl="2" bg="blue.300" area={'md'}>
          <Image src="../../public/images/mongodb.webp" alt="mongodb" w="70%" style={{borderRadius:"50%"}}/>
        </GridItem>
        <GridItem pl="2" bg="green.300" area={'tl'}>
          <Image src="../../public/images/tailwind.png" alt="tailwind" w="70%" style={{borderRadius:"50%"}}/>
        </GridItem>
        <GridItem pl="2" bg="blue.300" area={'sa'}>
          <Image src="../../public/images/sass.png" alt="sass" w="70%" style={{borderRadius:"50%"}}/>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Skills;
