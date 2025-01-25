import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="nav">
            <div class="header">
                {/* <img src={logo} className="logo" alt="Logo" /> */}
                <div className="site-title">Site Title</div>
            </div>
            <ul>
                <li>
                    <Link to='/Home'>Home</Link>
                </li>
                <li>
                    <Link to='/Report'>Report</Link>
                </li>
                <li>
                    <Link to='/Symptom'>Symptom</Link>
                </li>
            </ul>
        </nav>
    );
};