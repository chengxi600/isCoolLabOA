import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Navigate, Route, Routes } from 'react-router-dom';
import MenuPage from './pages/MenuPage';
import NavDrawer from './components/NavDrawer';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import HistoryPage from './pages/HistoryPage';
import InfoPage from './pages/InfoPage';

const defaultTheme = createTheme();

/**
 * Dashboard that holds the Single Page Application.
 */
export default function Dashboard() {
  
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <NavDrawer />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          {/* Routes. Default route to /home */}
          <Routes>
            <Route path="*" element={<Navigate to="home" replace />} />
            <Route path="home" element={<HomePage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="menu" element={<MenuPage />} />
            <Route path="history" element={<HistoryPage />} />
            <Route path="info" element={<InfoPage />} />
          </Routes>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
