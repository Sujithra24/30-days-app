import MoodInput from "@/components/ui/MoodInput";
import MoodOutput from "@/components/ui/MoodOutput";
import { useState } from "react"


const Home = () => {


  const [mood, setMood] = useState("");
  const [subject, setSubject] = useState("");
  const [footer, setFooter] = useState("");
  const [quote, setQuote]  = useState("");
  const [generated, setGenerated] = useState(false);
  const handleGenerate = () => {
    const lowerMood = mood.toLowerCase();
    
    if (lowerMood.includes("happy")) {
      setSubject("Felling Great Today !");
      setFooter("Stay Tuned");
      setQuote("Let joy be load today");
    }
    else if (lowerMood.includes("nervous")){
      setSubject("speaking to others");
      setFooter("Be Brave");
      setQuote("Being nervous is a sign you're stepping into something meaningful");
    }
    else if (lowerMood.includes("try")){
      setSubject("try to do my best");
      setFooter("Be Patient");
      setQuote("Just try.You're closer than you think");
    }
    else if (lowerMood.includes("frustrated")){
      setSubject("Not going well");
      setFooter("Overwhelmed");
      setQuote("it's okay to feel overwhelmed just don't unpack and stay there");
    }
    else if (lowerMood.includes("motivate")){
      setSubject("chasing big goals");
      setFooter("Focus");
      setQuote("storms make trees take deeper roots");
    }
    else if (lowerMood.includes("dull")) {
      setSubject("Just Another tough day....");
      setFooter("Sending hugs");
      setQuote("some days are just heavy.That's all");
    } else if (lowerMood.includes("angry")) {
      setSubject("Need To Calm ....");
      setFooter("Relax");
      setQuote("Anger is just that hasn't been heard ");
    } else {
    setSubject("Mood Update");
    setFooter("Catch u later");
    setQuote("Mood Mail lets your feelings speak, even when you can’t find the words.")
  }

    setGenerated(true)
  }

  const handleReset = () => {
    setMood("");
    setSubject("");
    setFooter("");
    setGenerated(false);
  }
  
  return (
    <div className='max-w-xl mx-auto mt-20 p-10 rounded-lg shadow-sm bg-pink-50 space-y-4'>
      <h2 className='text-2xl font-italic text-pink-600'>MoodMail Generator 😊</h2>
      <h6 className='text-2xl font-italic text-gray-600 text-sm italic'>✉️ "Sometimes, you don’t need to explain your mood — just send it."</h6>


      {!generated ? (
        <MoodInput mood={mood} setMood={setMood}
          onGenerate={handleGenerate}

          disabled={generated}
        />
      ) : (
        <MoodOutput subject={subject} footer={footer} quote={quote}onReset={handleReset} />
      )}
     
        </div>

  )
}

export default Home