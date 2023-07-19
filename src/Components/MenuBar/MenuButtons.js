import React from 'react';

function MenuButtons(props)
{
  const options = [/*{id:1,key: 0, text:"Line Chart"}*/,{id:2,key:1, text:"Bar Chart"},
  {id:3,key:2, text:"Pie Chart"},{id:4,key:3, text:"Donut Chart"}];
  options.forEach((a)=>{a.class='menu_buttons'});
  var comp = options.map(ButtonCall);
  return comp;

  function ButtonCall(element)
  {
  return <Button k={element.key} value={element.text} id={element.id} onChange={props.onChange} 
                 class={element.class} mode={props.mode}/>;
  }
}

function Button(props)
{
    function handleChange(event){
    props.onChange(event.target.name,event.target.value,event.target.id);
    }
    var comp = "";

    if(props.id===props.mode)
    comp = <input type='submit' name='mode' style={{backgroundColor:'rgba(0,0,0,0.5)',color:'#fff'}} key={props.k} id={props.id} className={props.class}  onClick={handleChange} value={props.value}/>;
    else
      comp = <input type='submit' name='mode' key={props.k} id={props.id} className={props.class}  onClick={handleChange} value={props.value}/>;
      return comp;
}



export default MenuButtons; 