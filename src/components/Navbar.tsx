import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <Link to='/'> 홈(혼잡행) </Link>
      <Link to='/parking'> 주차장 </Link>
      <Link to='/tip'> 공항이용팁</Link>
    </div>
  );
}