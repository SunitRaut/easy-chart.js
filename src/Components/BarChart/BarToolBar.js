import React from 'react';

function BarToolBar(props)
{
    function handleChange(event){
        props.onChange(event.target.name,event.target.value,event.target.id);
    }

    return (
        <div>
            <label>Width of Bars
            <input type='range' name = 'bar_width' onChange={handleChange} defaultValue='50'></input></label>
            <label>Width between Bars
            <input type='range' name = 'bar_margin' onChange={handleChange} defaultValue='10'></input></label>
        </div>
    ); 
}

export default BarToolBar;