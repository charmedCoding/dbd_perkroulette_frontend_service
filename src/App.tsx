import React from 'react';
import logo from './logo.svg';
import './index.css';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import Main from './pages/Main'

const queryClient = new QueryClient()
function App() {
  return (
    <div className="App">
       <QueryClientProvider client = {queryClient}>
        <Main/>
       </QueryClientProvider>
      
    
    </div>
  );
}

export default App;
