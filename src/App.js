import { useTheme, useMediaQuery } from '@mui/material';

import MobileApp from './MobileApp';
import DesktApp from './DesktApp';

const App = () => {

  const theme = useTheme()

  const isTabAndBelow = useMediaQuery(theme.breakpoints.down('md'))

  return isTabAndBelow ? <MobileApp /> : <DesktApp />
}

export default App;