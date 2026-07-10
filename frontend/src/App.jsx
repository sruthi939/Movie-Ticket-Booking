import React from 'react'
import { Toaster } from 'react-hot-toast'
import MainLayout from './layouts/MainLayout'
import AppRoutes from './routes/AppRoutes'

const App = () => {
  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: '#18181b',
            color: '#fff',
            border: '1px solid rgba(255,255,255,0.08)',
          },
        }}
      />
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    </>
  )
}

export default App
