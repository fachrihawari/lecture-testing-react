import { useNavigate } from 'react-router';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
      <h1>Welcome to Admin Panel</h1>
      <button className="btn btn-primary mt-3" onClick={
        () => navigate('/users')
      }>View Users</button>
    </div>
  );
}