import React from 'react';
import MenuButtons from './/MenuBar/MenuButtons.js'

function MenuBar(props)
{
var comp = <div id='menu_bar'>
    <MenuButtons onChange={props.onChange} mode={props.mode}></MenuButtons>
</div>;
return comp; 
}

export default MenuBar; 