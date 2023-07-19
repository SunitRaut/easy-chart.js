import React from 'react';
import DataToolBarItem from './DataToolBarItem';
 
function DataToolBar(props)
{
  var list = props.data.map(DataToolBarItemCall);
  var comp =  
  <div> 
  {list}
  </div> 
  ;
  return comp;

  function DataToolBarItemCall(element)
{
  return <DataToolBarItem key = {element.id} color={element.color} value={element.value} text={element.text} id={element.id} 
  onChange={props.onChange} mode={props.mode}/>;
}

}



export default DataToolBar; 
