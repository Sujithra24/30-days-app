import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button }from'@/components/ui/button'

interface Props{
    onAdd:(activity:string, hours:number) => void
}

const TimeForm = ({onAdd}:Props) => {

    
    const [activity, setActivity] = useState("");
    const [hours, setHours] = useState("");
    const [color, setColor] = useState("")

    const handleSubmit = () => {

        if(!activity.trim() || !hours) alert("Please fill it");


        onAdd(activity, Number(hours));

        setActivity("");
        setHours("");
        setColor("#020202ff");
    }

  return (
    <div className='space-y-3'>
        <Input
        placeholder='Activity (eg.work)'
        value={activity}
        onChange={(e) => setActivity(e.target.value)}/>


         <Input
         type='number'
        placeholder='Hours (eg.10)'
        value={hours}
        onChange={(e) => setHours(e.target.value)}/>

       <div className='w-10 h-10 p-0 border-none rounded cursor-pointer'>
        <div style={{display: "flex", alignItems: "center", gap: "8px"}}>
            <label style={{ color: "#000000", fontWeight: "500"}}>color:</label>
        </div>
       
       <Input
       type='color'
       placeholder='color'
       value={color}
       onChange={(e) => setColor(e.target.value)}/>
      
    </div>


        <Button className='w-full'onClick={handleSubmit}>
            Add Activity
        </Button>  
  
    </div>
  )
}

export default TimeForm