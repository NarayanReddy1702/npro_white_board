import { createBrowserRouter } from "react-router-dom";
import TlDraw from "../pages/TlDraw";
import App from "../App";


const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>
    },
    {
        path:"/tldraw",
        element:<TlDraw/>
    }
])

export default router