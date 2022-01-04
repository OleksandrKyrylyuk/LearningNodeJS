import { Link } from 'react-router-dom';

const Header = () => {
	return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
    <h5>My App</h5>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarColor02">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link className="nav-link active" to="/">Home
            <span className="visually-hidden">(current)</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/register'>Register</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/userList">Userlist</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
	)
}

export default Header;