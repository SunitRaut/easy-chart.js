import React from 'react';

function DataToolBarItem(props)
{
  function handleChange(event) {
    props.onChange(event.target.name,event.target.value,event.target.id);
  }
  var color_id = "favcolor"+props.id;
  var val_id = "val"+props.id;
  var text_id = "text"+props.id;
  var del_id = "del"+props.id;
  var color_style = {verticalAlign:'middle'};
  if(props.mode===1) {color_style={verticalAlign:'middle',visibility:'hidden'};}

  const comp = 
        <div className='toolbar_item' key={props.id}>
          <input type="color" id={color_id} name="favcolor" defaultValue={props.color} 
          onChange={handleChange} style={{color_style,width:'10%'}}>
          </input>
          <input type="number" id={val_id} name="val" defaultValue={props.value} 
          onChange={handleChange} style={{height:'25px', width:'15%'}} placeholder="Value">
          </input>
          <input type="text" id={text_id} name="text" defaultValue={props.text} 
          onChange={handleChange} style={{height:'25px', width:'50%'}} placeholder="Label Text">
          </input>
          <input type="submit" id={del_id} name="del" value='X' onClick={handleChange} class='del_button'></input>
          </div> 
          ;
  return comp;
}
 
export default DataToolBarItem; 