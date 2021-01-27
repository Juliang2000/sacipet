// import React from 'react';
// import { Redirect, Route } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// const PrivateRoute = ({ component: Component, ...props }) => {

//     const { user, isActive } = useSelector(state => state.main);

//     return(
//         <Route {...props} render={props => !user && !isActive ?
//             (<Redirect to='/login' />) :
//             (<Component {...props} />)} 
//         />
//     );
// }

// export default PrivateRoute;