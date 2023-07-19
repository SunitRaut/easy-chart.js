import React from 'react'; 

function ChartContainer(props)
{
var comp = <div id='chart_container'>{props.children}</div>;
return comp;
}

function input(props)
{
  console.log(props);
  
}
 
export default ChartContainer; 