import React from 'react';
import Svg, { Path } from 'react-native-svg';

const IconList = ({active}) => {
const color = active ? 'white' : 'grey';
  return (
    <Svg width="19" height="25" viewBox="0 0 19 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path fill-rule="evenodd" clip-rule="evenodd" d="M0 1C0 0.447715 0.447715 0 1 0H18C18.5523 0 19 0.447715 19 1V23.6667C19 24.0401 18.7919 24.3824 18.4604 24.5544C18.1289 24.7263 17.7292 24.6992 17.4239 24.4841L9.5 18.8998L1.57606 24.4841C1.2708 24.6992 0.871107 24.7263 0.539596 24.5544C0.208085 24.3824 0 24.0401 0 23.6667V1ZM2 2V21.7386L8.92394 16.859C9.2694 16.6156 9.7306 16.6156 10.0761 16.859L17 21.7386V2H2Z" fill={color}/>
        <Path fill-rule="evenodd" clip-rule="evenodd" d="M0 1C0 0.447715 0.447715 0 1 0H18C18.5523 0 19 0.447715 19 1C19 1.55228 18.5523 2 18 2H1C0.447715 2 0 1.55228 0 1Z" fill={color}/>
    </Svg>
  );;
};

export default IconList;
