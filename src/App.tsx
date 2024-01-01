
import { RouterProvider } from 'react-router-dom'
import router from './routes'
import RootLayout from './layout/RootLayout'


function App() {
  return (
    <RootLayout>
      <RouterProvider router={router} />
    </RootLayout>
  )
}

export default App
