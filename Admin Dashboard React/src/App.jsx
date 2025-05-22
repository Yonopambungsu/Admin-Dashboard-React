import { RouterProvider } from 'react-router-dom';

// routing
import router from 'routes';

// project imports
import NavigationScroll from 'layout/NavigationScroll';
import { AuthProvider } from './contexts/AuthContext';
import ThemeCustomization from 'themes';

// auth provider

// ==============================|| APP ||============================== //

export default function App() {
  return (
    <ThemeCustomization>
      <NavigationScroll>
         <AuthProvider> {/* 🔒 bungkus semua route */}
          <RouterProvider router={router} />
        </AuthProvider>
      </NavigationScroll>
    </ThemeCustomization>
  );
}
