import React from "react";
import { Routes, Route } from "react-router-dom";
import NewsFeed from "../components/Newsfeed/Newsfeed";
import AboutMe from "../components/AboutMe/AboutMe";
import Contacts from "../components/Contacts/Contacts";
import MyWork from "../components/MyWork/MyWork";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<NewsFeed />} />
      <Route path="/about-me" element={<AboutMe />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/my-work" element={<MyWork />} />
    </Routes>
  );
}

export default AppRoutes;
