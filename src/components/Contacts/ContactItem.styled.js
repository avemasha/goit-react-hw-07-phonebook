// .deleteBtn {
//   margin-left: 10px;
// }

// li:not(:last-child) {
//   margin-bottom: 6px;
// }

// ul {
//   list-style: none;
// }

import styled from 'styled-components';

export const Item = styled.li`
&:not(:last-of-type) {
  margin-bottom: 6px;
}
`
export const Button = styled.button`
margin-left: 10px;
background-color: #5968C7;
color: white

`