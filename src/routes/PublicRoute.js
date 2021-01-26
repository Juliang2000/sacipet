// import React from 'react';
// import { Redirect, Route } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// const PublicRoute = ({ component: Component, ...props }) => {
    
//     const autenticado = useSelector(state => state.login.autenticado)
//     return(
//         <Route {...props} render={props => autenticado ?
//             (<Redirect to='/' />) : 
//             (<Component {...props} />)} 
//         />
//     );
// }

// export default PublicRoute;