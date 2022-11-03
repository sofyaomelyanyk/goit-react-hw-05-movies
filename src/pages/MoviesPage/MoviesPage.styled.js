import styled from 'styled-components';

export const Form = styled.form`
  margin-left: 30px;
  display: flex;
  align-items: stretch;
  gap: 10px;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const FormInput = styled.input`
  display: block;
  width: 200px;
  height: calc(2.25rem + 2px);
  padding: 0.375rem 0.75rem;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #bdbdbd;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

export const FormButton = styled.button`
  display: inline-block;
  box-sizing: border-box;
  padding: 0 25px;
  margin-left: 30px;
  margin-bottom: 40px;
  outline: none;
  border: 1px solid #fff;
  border-radius: 50px;
  height: 46px;
  line-height: 46px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  color: #fff;
  background-color: #679bd5;
  box-shadow: 0 4px 6px rgb(65 132 144 / 10%), 0 1px 3px rgb(0 0 0 / 8%);
  cursor: pointer;

  :hover {
    background-color: #2d5684;
  }
`;

export const ListItem = styled.ul`
 
  list-style: none;
  display: flex;
  gap: 5px;
  flex-direction: column;
`;

