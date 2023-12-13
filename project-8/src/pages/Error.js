import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ErrorPage } from '../components/error/ErrorPage'

export const Error = () => {
 const navigateError = useNavigate();

 // Redirect user to error page after a 10 millisecond delay
 useEffect(() => {
   const redirectionTimer = setTimeout(() => {
    navigateError("/error");
   }, 10); 

   // Clean up: clear the timeout if the component is unmounted
   return() => clearTimeout(redirectionTimer);
 }, [navigateError]);

 return (
    <>
    <ErrorPage/>
    </>
 )
}