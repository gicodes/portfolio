import Grid from "@mui/material/Unstable_Grid2/Grid2";

const SquareTerminal = () => {

  return (
    <Grid container>
      <div className='level'>
        <div className='field is-grouped mt-6 pl-6'>
          <a href='/' className='is-size-3'>
            <span className='icon'>
              <i
                className='fa-solid fa-terminal 
              fa-beat-fade has-text-white'
              >
              </i>
            </span>
          </a>
        </div>
      </div>
    </Grid>
  );
};


export default SquareTerminal;