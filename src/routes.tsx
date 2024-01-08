import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Layout from "./components/Layout";
import Config from "./pages/Config";
import Sorteio from "./pages/Sorteio";

export default function AppRouter() {
  return (
    <main>
      <BrowserRouter>
        <RecoilRoot>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Config />} />
              <Route path="sorteio" element={<Sorteio />} />
            </Route>
          </Routes>
        </RecoilRoot>
      </BrowserRouter>
    </main>
  );
}
