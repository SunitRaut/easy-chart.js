import React from 'react';

function DonutToolBar(props)
{
    function handleChange(event){
        props.onChange(event.target.name,event.target.value,event.target.id);
    }

    return (
        <div>
            <label>Donut hole radius</label>
            <input type='range' name = 'hole_radius' onChange={handleChange} defaultValue={props.holeRadius}></input>
        </div>
    ); 
}

export default DonutToolBar;