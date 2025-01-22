import React from "react";
import { Routes, Route } from "react-router-dom";
import NewsFeed from "../components/Newsfeed/Newsfeed";
import AboutMe from "../components/AboutMe/AboutMe";
import Contacts from "../components/Contacts/Contacts";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<NewsFeed />} />
      <Route path="/about-me" element={<AboutMe />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
  );
}

export default AppRoutes;
