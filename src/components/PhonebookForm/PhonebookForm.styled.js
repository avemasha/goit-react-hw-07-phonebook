import styled from 'styled-components';

import { Form, Field, ErrorMessage } from 'formik';

export const ErMessage = styled(ErrorMessage)`
  font-size: 15px;
  font-weight: bold;
  color: rgb(201, 49, 42);
`;

export const Input = styled(Field)`
margin-top: 5px;
    padding: 3px 6px;
   border: 1px solid rgba(0, 0, 0, 0.868);
`
export const Label = styled.label`
display: flex;
flex-direction: column;
 margin-top: 10px;

 &:not(:last-of-type){
    margin-bottom: 15px;
 }
`

export const Forma = styled(Form)`
border: 2px solid #161373;
   width: 300px;
    padding: 10px 60px 10px 5px;
`

export const Button = styled.button`
background-color: #5968c7;
  border-color: #161373;
   border: 50;
 color: white;
 margin-top: 10px;
`
