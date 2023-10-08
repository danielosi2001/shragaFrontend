import { Route, Routes } from "react-router-dom";
import Programs from "../programs/programs";

export default function Content(): JSX.Element {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Programs />}></Route>
                <Route path="/Infinity" element={<Programs />}></Route>
                <Route path="/Spider" element={<Programs />}></Route>
                <Route path="/Basis" element={<Programs />}></Route>
                <Route path="/Tar" element={<Programs />}></Route>
            </Routes>
        </div>
    )
}