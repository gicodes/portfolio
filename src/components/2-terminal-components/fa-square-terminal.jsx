import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { GrCode } from "react-icons/gr";

const SquareTerminal = () => {

  return (
    <Grid>
      <div className='container'>
        <div className='level'>
          <div className='field is-grouped mt-6 pl-6'>
            <a href='/' className='is-size-3'>
              <GrCode className="has-text-white beat-fade"/>
            </a>
          </div>
        </div>
      </div>
    </Grid>
  );
};


export default SquareTerminal;