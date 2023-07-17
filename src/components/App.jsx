import React, { useEffect} from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './layout/layout';
import { HomePage } from 'pages/homePage/homePage';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsThunk } from 'redux/operations';
import { selectIsRefreshing } from 'redux/selectors';
import { RestrictedRoute } from 'routes/restrictedRoute';
import LoginPage from 'pages/loginPage/loginPage';
import RegisterPage from 'pages/registerPage/registerPage';
import PhoneBookPage from 'pages/phoneBookPage/phoneBookPage';
import { PrivateRoute } from 'routes/privateRoute';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);


  return isRefreshing ? (
    <p>Loading...</p>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="register"
          element={
            <RestrictedRoute
              restrictedTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute
              restrictedTo="/contacts"
              component={<LoginPage />}
            />
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute restrictedTo="/login" component={<PhoneBookPage />} />
          }
        />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
