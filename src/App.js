import React from 'react';
import './App.css';
import ChartContainer from './Components/ChartContainer.js';
import PieChart from './Components/PieChart/PieChart';
import ToolBar from './Components/ToolBar.js';
import MenuBar from './Components/MenuBar.js';
import { useState, useEffect } from "react";
import DonutToolBar from './Components/DonutChart/DonutToolBar';
import BarChart from './Components/BarChart/BarChart';
import BarToolBar from './Components/BarChart/BarToolBar';
import ChartTypeDisplay from './Components/ChartTypeDisplay.js';
import DataToolBar from './Components/ToolBar/DataToolBar';
/*
Wishlist:
Additional features:
1. Drag/Drop to change position of toolbar item in toolbar
2. Export div as jpg/png
3. Option to callibrate y-axis
*/

function App(props) { 
    const [data, setData] = useState([{id:0,color:"#00ff00",value:60,pos:0,text:"Label 1"},
                                      {id:1,color:"#ff0000",value:40,pos:1,text:"Label 2"},
                                      {id:2,color:"#4a5fb5",value:75,pos:2,text:"Label 3"}]);
    const [mode,setMode] = useState(2);
    const [holeRadius,setHoleRadius] = useState(20);
    const [barWidth,setBarWidth] = useState(50);
    const [barMargin,setBarMargin] = useState(10);
    const [key,setKey] = useState(2);

    useEffect(() => {;
      var final_data = [...data];
      for(let i=0;i<data.length;i++)
      {
        final_data[i].pos = i;
      }
  }, [data],[]);

    function handleChange(name,val,id) {
      var new_data;
      if(name==='favcolor'){
        id = parseInt(id.replace("favcolor",""));
        new_data = [...data];
        for(let i=0;i<new_data.length;i++)
        {
          if(new_data[i].id===id)
          {
            new_data[i].color=val;
          }
        }
        //new_data[index].color=val;
        setData(new_data);
      }
      if(name==='val'){
        id = parseInt(id.replace("val",""));
        new_data = [...data];
        for(let i=0;i<new_data.length;i++)
        {
          if(new_data[i].id===id)
          {
            new_data[i].value=parseInt(val);
          }
        }
      //  new_data[id].value=parseInt(val);
        setData(new_data);
      }

      if(name=='text')
    {
      id = parseInt(id.replace("text",""));
      new_data = [...data];
      for(let i=0;i<new_data.length;i++)
      {
        if(new_data[i].id===id)
        {
          new_data[i].text=val;
        }
      }
      setData(new_data);
    }

      if(name==='add')
      {
        new_data = [...data];
        //var new_id = parseInt(new_data[new_data.length-1].id)+1;
        var new_id = key;
        new_data.push({id:new_id,color:'#f0f0f0',value:0,pos:new_data.length});
        //console.log(new_data);
        for(let i=0;i<new_data.length;i++)
        {
          new_data[i].pos = i;
        }
        setData(new_data);
        setKey(new_id+1);
       //console.log(data);
      }

      if(name==='del'){
        //console.log(id);
        id = parseInt(id.replace("del","")); 
        new_data = [...data];
        const data1 = new_data.filter((object, i) => object.id !== id);
        for(let i=0;i<data1.length;i++)
        {
          data1[i].pos = i;
        }
        setData(data1);
      }

      if(name==='mode'){
        setMode(parseInt(id));
      }
      if(name==='hole_radius'){
        setHoleRadius(parseInt(val));
      }
      if(name==='bar_width'){
        setBarWidth(parseInt(val));
      }
      if(name==='bar_margin'){
        setBarMargin(parseInt(val));
      }
      //console.log(data);
    }

  function handleAdd(e)
  {
    handleChange(e.target.name,0,0);
  }

  if(mode===1) //Line Graph
  {
  }

  if(mode===2) //Bar Graph
  {
    return(
    <>
    <ChartContainer>
      <ChartTypeDisplay mode={mode}></ChartTypeDisplay>
      <BarChart data={data}  barWidth={barWidth} barMargin={barMargin}></BarChart>
    </ChartContainer>
    <ToolBar>
        <DataToolBar data={data} mode = {mode} onChange={handleChange}></DataToolBar>
        <input type="submit" name="add" style={{width:'100%'}} class='add_button' onClick={handleAdd} value="+"/>
        <BarToolBar onChange={handleChange}></BarToolBar>
    </ToolBar>
    <MenuBar onChange={handleChange} mode={mode}></MenuBar>
  </>
    );
  }
  
  if (mode===3)  //Pie Chart
  { 
  return (
    <>
      <ChartContainer>
        <ChartTypeDisplay mode={mode}></ChartTypeDisplay>
        <PieChart data={data}></PieChart>
      </ChartContainer>
      <ToolBar>
        <DataToolBar data={data} mode={mode} onChange={handleChange}></DataToolBar>
        <input type="submit" name="add" class='add_button' style={{width:'100%'}} onClick={handleAdd} value="+"/>
      </ToolBar>
      <MenuBar onChange={handleChange} mode={mode}></MenuBar>
    </>
  );
  }

  if (mode===4)  //Donut Chart
  { 
  return ( 
    <>
      <ChartContainer>
        <ChartTypeDisplay mode={mode}></ChartTypeDisplay>
        <PieChart data={data} holeRadius={holeRadius}></PieChart>
      </ChartContainer>
      <ToolBar>
        <DataToolBar data={data} mode={mode} onChange={handleChange}></DataToolBar>
        <input type="submit" style={{width:'100%'}} class='add_button' name="add" onClick={handleAdd} value="+"/>
        <DonutToolBar holeRadius={holeRadius} onChange={handleChange}></DonutToolBar>
      </ToolBar>
      <MenuBar onChange={handleChange} mode={mode}></MenuBar>
    </>
  );
  }

//if none of the above modes, display blank page with toolbar
    return(
    <>
    <ChartContainer> Invalid. Please choose Different Option.
    </ChartContainer>
    <ToolBar>
        <DataToolBar data={data} onChange={handleChange}></DataToolBar>
        <input type="submit" style={{width:'100%'}} name="add" class='add_button' onClick={handleAdd} value="+"/>
    </ToolBar>
    <MenuBar onChange={handleChange} mode={mode}></MenuBar>
  </>
    );
}



export default App;

