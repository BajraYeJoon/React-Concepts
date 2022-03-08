import React from 'react';

// Declaration of the context
const UserContext = React.createContext('yejoon')

// This will create a path to provide and consume the value
const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider, UserConsumer}