import React from 'react'; 

function ChartTypeDisplay(props)
{
  var type = "";
  switch (props.mode){
  case 2: type = "Bar Chart";break;
  case 3: type = "Pie Chart";break;
  case 4: type = "Donut Chart";break;
  }
  var comp = <div id='chart_type_display'>{type}</div>;
  return comp;
}

export default ChartTypeDisplay; 