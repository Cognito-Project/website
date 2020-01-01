import { Box, Text } from "rebass";
const course = ({ name = null, selected = false }) => {
    let active="grey"
    if(selected){
        let active = "purple"
    } 
    console.log(active)
  return (
    <Box bg={active} sx={{ borderRadius: 3 }} p={1} my={2} width={[1, 350]} >
      <Text px="auto" fontSize={[2, 3, 4]}> {name}</Text>
    </Box>
  );
};
export default course;
