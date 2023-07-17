import React from 'react';
// import { ContactForm } from './contactForm/contactForm';
// import { ContactList } from './contactList/contactList';
// import { Filter } from './filter/filter';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './layout/layout';
import { ContactForm } from './contactForm/contactForm';
import { Filter } from './filter/filter';
import { ContactList } from './contactList/contactList';
import { HomePage } from 'pages/homePage';

export const App = () => {
  return (<BrowserRouter>
  <Routes>
    <Route path='/' element={<Layout/>}>
      <Route index element={<HomePage/>}/>
      <Route path='contacts' element={<div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>}/>
      <Route path='login' element={null}/>
      <Route path='register' element={null}/>
      <Route path='*' element={<h1>Page is not found</h1>}/>
    </Route>
  </Routes>
  </BrowserRouter>
  )
};

