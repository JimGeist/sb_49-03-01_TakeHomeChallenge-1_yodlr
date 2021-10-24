import logo from '../static/images/logo.svg';

import '../static/css/admin.css';

function Admin() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          future home of the admin page
        </p>
      </header>
    </div>
  );
}

export { Admin };
