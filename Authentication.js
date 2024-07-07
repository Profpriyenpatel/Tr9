import Signup from './Signup'
import Login from './Login';
function Authentication() {
    return (
      <div>
      <div className="card">
    <div className="card-section">
      <h2>New User</h2>
      <Signup />
    </div>
    <div className="card-divider"></div> {/* Vertical line */}
    <div className="card-section">
      <h2>Already User</h2>
      <Login />
    </div>
  </div>
  </div>
    );
  }

  export default Authentication