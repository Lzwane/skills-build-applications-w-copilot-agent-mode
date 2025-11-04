

import logo from './octofitapp-small.png';

  return (
    <Router>
      <div className="container mt-4 App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4 rounded">
          <img src={logo} alt="Octofit Logo" className="App-logo" />
          <Link className="navbar-brand" to="/">Octofit Tracker</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link className="nav-link text-white" to="/activities">Activities</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/leaderboard">Leaderboard</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/teams">Teams</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/users">Users</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/workouts">Workouts</Link></li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/" element={<div className="card p-4"><h1 className="card-title">Welcome to Octofit Tracker!</h1><p className="card-text">Track your fitness, join teams, and compete on the leaderboard.</p></div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
