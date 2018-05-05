import styled from 'styled-components';

const styles = {};

const AddToCartButton = styled.button`
  
  text-align: center;
  width: 44px;
  height: 44px;
  border: 0;
  border-radius: 50%;
  transition: all 0.7s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;
  outline: 0;
  text-decoration: none;
  box-sizing: border-box;
`;

styles.AddToCartButtonGreen = AddToCartButton.extend`
  color: white;
  background-color: green;
`;

styles.AddToCartButtonOrange = AddToCartButton.extend`
  color: white;
  background-color: orange;
`;

styles.outerDiv = styled.div`
  border: 1px solid black;
  width: 200px;
  align: center;

`;

styles.Details = styled.div`
color: ${props => (['B'].includes(props.bucket) ? 'blue' : 'green')};
`;

export default styles;
