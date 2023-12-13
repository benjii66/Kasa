import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ErrorPage } from '../components/error/ErrorPage'

export const Error = () => {
  //useNavigate to go to the Error page
 const navigateError = useNavigate();

 //useEffect to redirect after 10 milliseconds
 useEffect(() => {
  //set a timer out
   const redirectionTimer = setTimeout(() => {
    //redirect to the Error page
    navigateError("/error");
   }, 10); 

   //clean with a cancellation if the component is disassembled
   return() => clearTimeout(redirectionTimer);
 }, [navigateError]);

 return (
    <>
    <ErrorPage/>
    </>
 )
}