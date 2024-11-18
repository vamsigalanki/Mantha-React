import { createContext } from 'react';

const UserContext = createContext({
  name: '',    // Default empty string for name
  auth: false  // Default false for authentication
});

export default UserContext;
