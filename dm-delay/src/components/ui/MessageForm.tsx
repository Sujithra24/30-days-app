import React, { useEffect, useState } from 'react'
import { Textarea } from './textarea'
import { Input } from './input'
import { Button } from './button'

const MessageForm = () => {


    const [message, setMessage] = useState<string>("");
    const [delay, setDelay] = useState<number>(10);
    const [isSending, setIsSending] = useState<boolean>(false);
    const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);
    const [sentMessage, setSentMessage] = useState<string>("");
    const [showPreview, setShowPreview] = useState(false);
    const [dayname, setDayName] = useState("");
    const [datestr, setDateStr] = useState("");
    const [nomessage, setNOMessage] = useState("");

    useEffect(() => {
        const today = new Date();
    })

    const today = new Date();
    const dayName = today.toLocaleDateString("en-IN", { weekday: "long"});
    const dateStr = today.toLocaleDateString();
    

    
    const handleSend = () => {

        
        setIsSending(true)

      
        if(message || delay) alert("↺ sending");

        const id = setTimeout(() => {
            setSentMessage(message);
            setMessage("");
            setIsSending(false);
        }, delay * 1000);

        setTimerId(id);
    }

    const handleCancel = () => {


       

        if (timerId) clearTimeout(timerId);
        setIsSending(false);

    }

    return (
        <div className='max-w-md mx-auto mt-20 p-6 border rounded-lg shadow-sm bg-blue-50 space-y-4'>
            <h2 className='text-center text-2xl font-bold text-grey-500'>Dm Delay Button</h2>


             <div className='relative p-4 absolute top-0 right-1 left-2 bg-blue-50 px-7 py-1 rounded-lg shadow'>
                <h2>{dayName}, {dateStr}</h2>
            </div>
            <Textarea
                placeholder='𓂃🪶Type your message...'
                value={message}
                onChange={(e) => setMessage(e.target.value)} />

            <Input type='number'
                placeholder='Delay in Seconds'
                value={delay}
                onChange={(e) => setDelay(Number(e.target.value))}
                disabled={isSending}
            />
            
           {/*Preview*/}
           <div className='mt-4 p-3 border rounded bg-blue-50'>
            <h3 className='font-bold'>Preview:</h3>
            <p>{message || "Start typing above..."}</p>
           </div>

            {!isSending ? (
                <Button className='w-full' onClick={handleSend} >
                    ➤ Sent with Delay
                </Button>
            ) : (
                <Button className='w-full' variant="destructive" onClick={handleCancel} >
                   ❗Cancel Sending
                </Button>
            )}


            {sentMessage && (
                <div className='bg-green-100 border rounded p-3 text-gray-900'>
                    <p className='font-semibold'>📨 Message Sent:</p>
                    <p>{sentMessage}</p>
                </div>
            )}

        </div>
    )
}

export default MessageForm