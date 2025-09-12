import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router";
import './index.css'
import MainLayout from "./layout/mainLayout.tsx";
import HomePage from "./pages/homePage.tsx";



createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route path={'/'} element={<HomePage/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
);
