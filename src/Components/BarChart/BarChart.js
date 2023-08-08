import React from 'react';

function BarChart(props)
{
    var max = 0;
    var cdata = [...props.data];
    var bar_width = props.barWidth;
    var bar_margin = props.barMargin;
    for(let i=0;i<cdata.length;i++)
    {
      if(cdata[i].value>max) max = cdata[i].value;
    }
    var bar_list = 0;
    bar_list = props.data.map(bar);
    var max_x = max/0.9;
    //var y = [max_x*0.1,max_x*0.2,max_x*0.3,max_x*0.4,max_x*0.5,max_x*0.6,max_x*0.7,max_x*0.8,max_x*0.9,max_x];
    var y = [max_x*0.2,max_x*0.4,max_x*0.6,max_x*0.8,max_x*0.9,max_x]; 
    y = y.map(Math.round);
    var y_axis = y.map(ylabels);

    return(
        <div style={{width:'100%', height: '400px', position:'relative',
        borderLeft:'2px solid black', borderBottom:'2px solid black',marginLeft:'20px',marginTop:'50px'}}>
            {bar_list}
            {y_axis}
        </div>
    );

    function bar(data)
    {
        var height = (data.value/max) * 90;
        height = height + "%";
        var left = data.pos*(bar_width+bar_margin) + bar_margin;
        
        //var left = data.pos*(50+10) + 10;
        var left_label = left - bar_margin*0.2; left_label += "px";
        var width_label = bar_width + bar_width* 0.4; width_label += 'px';
        left = left + "px";
     
        var label_style = {position:'absolute',top:'400px',fontSize:'18px',left:left_label,width:bar_width+0.5*bar_margin,textAlign:'center'};
        var label_value_style = {position:'absolute',bottom:height,fontSize:'18px',left:left_label,width:bar_width+0.5*bar_margin,
                                 textAlign:'center',backgroundColor:"rgba(255,255,255,0.8)",zIndex:2};
        return(
            <>
            <div key = {data.id} style={{position:'absolute',backgroundColor:data.color,width:bar_width, 
            bottom:0,left:left,height:height}}>
            </div>
            <div style={label_style}>{data.text}</div>
            <div style={label_value_style}>{data.value}</div>
            </>
        )
    }

    function ylabels(data)
    {
        var height = 400*(data/max_x);
        return(
            <div style={{position:'absolute',bottom:height,left:'-20px',width:'100%',borderBottom:'1px dashed #000',zIndex:1}}>
              {data}
            </div>
            );
    }
}

export default BarChart;