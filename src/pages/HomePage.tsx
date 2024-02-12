import { Navigate } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <h1 className="title">Home page</h1>
      <Navigate to="/" />
    </>
  );
};

export default HomePage;