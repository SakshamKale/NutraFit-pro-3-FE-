import React, {  useState } from 'react'

const CheckBox = () => {
    let [play,setp]=useState([]);
    let [gen,setg]=useState('Male');
    let [sta,sets]=useState(' ');    
    function HandleChange(e)
    {
        if(e.target.checked)
        {
            setp([...play,e.target.value])

        }
        else{
            setp(play.filter(val=>val!=e.target.value))
        }
    }

    function Change(e)
    {
        setg(e.target.value);
    }
    function StateChange(e)
    {
        sets(e.target.value);
    }
  return (<>
    <div>
      <input type="checkbox" name="" id="LY" value='Lamin yamal' onChange={HandleChange}/>
      <label htmlFor="LY">Lamin yamal</label>
        <br />
<input type="checkbox" name="" id="raf" value='Rafinia' onChange={HandleChange}/>
      <label htmlFor="raf">Rafinia</label>
        <br />
        <input type="checkbox" name="" id="rah" value='Rashford' onChange={HandleChange}/>
      <label htmlFor="rah">Rashford</label>
        <br />
        <input type="checkbox" name="" id="lewa" value='Lewandoski' onChange={HandleChange}/>
      <label htmlFor="lewa">Lewandoski</label>
        <br />
        <h4>Players:{play.toString()}</h4>
    </div>
<div>
    <input type="radio" name="gen" id="male" checked={'Male'==gen} value={'Male'} onChange={(e)=>{Change(e)}} />
    <label htmlFor="male">Male</label>
    <br />
    <input type="radio" name="gen" id="female" value={'Female'} onChange={(e)=>{Change(e)}}/>
    <label htmlFor="female">Female</label>
    <br />
    <h5>Gender:{gen}</h5>
</div>
<div>
    <select name="" id="" onChange={StateChange}>
        <option value="Maharastra">Maharastra</option>
        <option value="Goa">Goa</option>
        <option value="Kerala">Kerala</option>
        <option value="Punjab">Punjab</option>
    </select>
    <h5>State:{sta}</h5>
</div>
</>
  )
}

export default CheckBox
