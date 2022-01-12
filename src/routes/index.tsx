import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "../pages";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route caseSensitive={false} path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
