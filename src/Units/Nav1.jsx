import { Link } from 'react-router-dom';


export default function Nav1()  {
 return (
    <div>
 <nav>
       <ul>
          <li>
             <Link to="/">Home</Link>
          </li>
          <li>
             <Link to="/add">Addblog</Link>
          </li>
       </ul>
 </nav>
 </div>
 );
};

