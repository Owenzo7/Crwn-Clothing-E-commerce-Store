import Directory from "../../components/directory/directory.component";
import { Outlet } from "react-router-dom";

const Home = () => {
  // Need to work on Navigation
  return (
    <div>
      <Directory />;
      <Outlet />
    </div>
  );
};

export default Home;

// Need to improve on Navigation.
