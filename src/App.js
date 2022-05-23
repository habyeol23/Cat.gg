import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";


const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidth};
  width: 100%;
`;


function App() {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/detail" element={<DetailPage />} />
      </Routes>
    </Wrapper>
  );
}

export default App;
