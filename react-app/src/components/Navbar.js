import './Navbar.css';
import { Link } from 'react-router-dom';
import penguin from './images/penguin2.png';


export default function Navbar() {
    return (
        <nav className="nav">
            <div class="header">
                <img src={penguin} className="logo" alt="Logo" />
                <div className="site-title">WaddleWell</div>
            </div>
            <ul>
                <li>
                    <Link to='/Profile'>Profile</Link>
                </li>
                <li>
                    <Link to='/Home'>Home</Link>
                </li>
                <li>
                    <Link to='/Report'>Report</Link>
                </li>
                <li>
                    <Link to='/Symptom'>Symptoms</Link>
                </li>
                <li>
                    <Link to='/HealthTool'>Health Tool</Link>
                </li>
            </ul>
        </nav>
    );
};