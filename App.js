
import React from "react";
import { QueryClientProvider,QueryClient } from "react-query";

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/reactquerry/Home'
import { BrowserRouter,Route,Routes,Link } from "react-router-dom";
import Getposts from "./components/reactquerry/Getposts";
import Getpostname from "./components/reactquerry/Getpostname";


const queryclient=new QueryClient()

 function App() {
  return (
    <QueryClientProvider client={queryclient}>
    <BrowserRouter>
            <ul>
                <div>
                <Link to="/"><li>Home</li></Link>
                <Link to="/getposts"><li>getposts</li></Link>
                <Link to="/getpostname"><li>Getpostname</li></Link>
                </div>
            </ul>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/getposts" element={<Getposts/>} />
      <Route path="/getpostname" element={<Getpostname/>} />
    </Routes>
    </BrowserRouter>
    </QueryClientProvider>
    
    
  );
}


export default App;