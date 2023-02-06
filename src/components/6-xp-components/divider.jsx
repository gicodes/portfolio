import { Divider } from "@mui/material";

const VerDivider = () => {
  return (
    <Divider variant="middle"
      orientation="vertical"
      flexItem
      sx={{
        "&::before, &::after": { color: 'green', borderColor: 'white' }
      }}>
      <i className="fa-solid fa-stop" style={{ color: '#3CB371' }}></i>
    </Divider>
  )

}

export default VerDivider;