// import React from 'react';
// import { Redirect, Route } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// const PrivateRoute = ({ component: Component, ...props }) => {

//     const autenticado = useSelector(state => state.login.autenticado)
//     return(
//         <Route {...props} render={props => !autenticado ?
//             (<Redirect to='/login' />) :
//             (<Component {...props} />)} 
//         />
//     );
// }

// export default PrivateRoute;