import { Link, NavLink } from 'react-router-dom';

import './styles.css';

export function Main() {
  return (
    <div className="mainTop">
      <div className="goalsMeeting">
        <NavLink to="/">Metas </NavLink>
        <NavLink to="/">Reuniões</NavLink>
      </div>
      <div className="subjects">
        <Link to="">Linguagens e Códigos</Link>
        <Link to="">Humanas</Link>
        <Link to="">Natureza e Matemática</Link>
        <Link to="">Base Técnica</Link>
      </div>
    </div>
  );
}
