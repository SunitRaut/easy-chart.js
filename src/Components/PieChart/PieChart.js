import React from 'react';

function PieChart(props)
{
  //var color = props.data[0].color;
  var cdata = [...props.data];
  var text = "";
  var labels = [];
  var sum = 0;
  let null_style = {borderRadius:'50%',width:'400px',height:'400px',align:'center'};

  for(let i=0;i<cdata.length;i++)
  {
    sum = sum + cdata[i].value;
  }
  //console.log(props.HoleRadius)
  if(!isNaN(props.holeRadius))
  {text = "radial-gradient(white "+props.holeRadius+"%, rgba(0,0,0,0) "+props.holeRadius+"%),"}

  text += "conic-gradient(";
  let num_prev=0;
  for(let i=0;i<cdata.length;i++)
  {
    let num = (cdata[i].value/sum)*360; 
    num = num + num_prev;
    text += cdata[i].color;
    text += " "+num_prev+"deg, ";
    if(i<cdata.length-1) 
    {    
      text += cdata[i].color;
      text += " "+num+"deg";
      text +=",";
    }
    var label_deg = 90 - (((num-num_prev)/2)+num_prev) + 360;
    var label_offset = 250;var label_bottom_offset = 250;
    //(label_deg>90&&label_deg<270)?label_offset=260:label_offset=240;
   // (label_deg>0&&label_deg<180)?label_bottom_offset=230:label_bottom_offset=240;
    var label_bottom = 200 + label_bottom_offset*Math.sin((label_deg*22/7)/180);
    var label_left = 200 + label_offset*Math.cos((label_deg*22/7)/180);
    if ((label_left>100)&&(label_bottom>100))
    {
      labels[i]={position:'absolute',bottom:label_bottom,left:label_left,text:cdata[i].text};
    }
    else if((label_left<=100)&&(label_bottom<=100))
    {
      var label_top = 400 - label_bottom;
      var label_right = 400 - label_left;
      labels[i]={position:'absolute',top:label_top,right:label_right,text:cdata[i].text};
    }
    else if((label_left<=100)&&(label_bottom>100))
    {
      var label_right = 400 - label_left;
      labels[i]={position:'absolute',bottom:label_bottom,right:label_right,text:cdata[i].text};
    }
    else if((label_left>100)&&(label_bottom<=100))
    {
      var label_top = 400 - label_bottom;
      labels[i]={position:'absolute',top:label_top,left:label_left,text:cdata[i].text};
    }

    num_prev = num;
  }
  text += cdata[cdata.length-1].color+ " 360deg)";
 // console.log(text);
 var labels_list = labels.map(call_list);

 let init_style = {borderRadius:'50%',width:'400px',height:'400px',align:'center', 
 backgroundImage:text,position:'relative',margin:'auto',marginTop:'10vh'};
  const comp = <>
  <div id='pie_chart' style={init_style} backgroundcolor={props.data[0].color}>
    {labels_list}  
  </div></>;
  return comp;

  function call_list(element)
  {
    var temp = JSON.parse(JSON.stringify(element));
  /*  if (temp.hasOwnProperty("left")) temp.left = 0.75*temp.left;
    if (temp.hasOwnProperty("right")) temp.right = 0.75*temp.right;
    if (temp.hasOwnProperty("top")) temp.top = 0.75*temp.top;
    if (temp.hasOwnProperty("bottom")) temp.bottom = 0.75*temp.bottom;
    */
      return <>
    <div style={element}>{element.text}</div>
    <div style={temp}>{temp.text}</div>
    </>;

  }
} 

export default PieChart; 

//background-image: conic-gradient(#00ff00 0deg, #00ff00 216deg,#ff0000 216deg,#ff0000 360deg);