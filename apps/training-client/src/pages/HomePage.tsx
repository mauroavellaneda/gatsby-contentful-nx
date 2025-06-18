import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <p><Link to="/login">Login</Link> or <Link to="/signup">Sign Up</Link></p>
    </div>
  );
}
