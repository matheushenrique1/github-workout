import styled from 'styled-components';
import colors from '../../tokens/colors';
import fontSizes from '../../tokens/font-size';

export const FormField = styled.form`
  position: relative;
  width: 100%;
  margin-top: 30px;
`;

export const SVGSearch = styled.img`
  width: 20px;
  position: absolute;
  margin-left: 22px;
  margin-top: 13px;
`;

export const InputField = styled.input`
  width: 100%;
  border-radius: 12px;
  border: 1px solid ${colors.gray[0]};
  color: ${colors.dark};
  height: 12px;
  outline: none;
  transition: all 0.2s ease-out;
  padding: 22px;
  padding-left: 60px;

  &:focus {
    border: 1px solid ${colors.primary};
  }

  &:focus ~ label,
  &:valid ~ label {
    color: ${colors.primary};
    padding: 0px 8px;
    top: -22px;
    font-size: ${fontSizes.small};
  }
`;

export const LabelField = styled.label`
  background: white;
  border-radius: 12px;
  color: ${colors.gray[0]};
  cursor: text;
  left: 0;
  margin-left: 54px;
  margin-top: 10px;
  padding: 0px 8px;
  position: absolute;
  top: 0;
  transition: all 0.2s ease-out;
`;
