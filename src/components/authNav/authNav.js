import { NavLink } from "react-router-dom";

const routes = [
    { path: '/register', text: 'Register' },
    { path: '/login', text: 'Login' },
  ];
  export const AuthNav = () => {
    return (
      <ul>
        {routes.map(route => (
          <li key={route.path}>
            <NavLink to={route.path}>{route.text}</NavLink>
          </li>
        ))}
      </ul>
    );
  };