// components/Navbar.js
import React from 'react';
import client from '@/lib/appollo-client';
import { GET_NAVBAR } from '@/lib/api-Collection';
import Header from '../Header/Header';

const Navbar = async () => {
  let navbarData = null;

  try {
    const res = await client.query({ query: GET_NAVBAR });
    navbarData = res.data.navbar;
  } catch (err) {
    console.error("Navbar fetch failed navbar:", err);
  }
 
  return <Header navbarData={navbarData} />;
};

export default Navbar;
