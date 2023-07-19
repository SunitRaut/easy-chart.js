import React from 'react';

function ToolBar(props)
{
var comp = <div id='tool_bar'>
    {props.children} 
</div>;
return comp;  
}

export default ToolBar; 