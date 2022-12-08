import "./App.css";
import Header from "./components/Header";
import NavMenu from "./components/NavMenu";
import { Routes, Route } from "react-router-dom";
import Categories from "./components/Categories";
import Users from "./components/Users";
import Reviews from "./components/Reviews";
import Home from "./components/Home";
import ReviewCard from "./components/ReviewCard";
import Comments from "./components/Comments";
import AddComment from "./components/AddComment";

function App() {
  return (
    <div>
      <Header />
      <NavMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/users" element={<Users />} />
        <Route path="/reviews/:review_id" element={<ReviewCard />} />
        <Route path="/reviews/:review_id/comments" element={<Comments />} />
        <Route path="/reviews/:review_id/addcomments" element={<AddComment />} />
      </Routes>
    </div>
  );
}

export default App;
