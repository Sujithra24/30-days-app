import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

type Props = {
  mood: string,
  setMood: (val: string) => void,
  onGenerate: () => void,
  disabled: boolean
}
const MoodInput = ({ mood, setMood, onGenerate, disabled }: Props) => {
  return (
    <div className="space-y-4">
      <Input
        placeholder="How are you felling today? (happy, sad, angry,frustrated,nervous,try,motivate....)"
        value={mood}
        onChange={(e) => setMood(e.target.value)}
        disabled={disabled}
      />

      <Button className="w-half mx-1" onClick={onGenerate} disabled={disabled}>
        happy
      </Button>
      <Button className="w-half mx-1" onClick={onGenerate} disabled={disabled}>
        dull
      </Button>
      <Button className="w-half mx-1" onClick={onGenerate} disabled={disabled}>
        motivate
      </Button>
      <Button className="w-half mx-1" onClick={onGenerate} disabled={disabled}>
        angry
      </Button>
      <Button className="w-half mx-1" onClick={onGenerate} disabled={disabled}>
        try
      </Button>
      <Button className="w-half mx-1" onClick={onGenerate} disabled={disabled}>
        nervous
      </Button>
      <Button className="w-half mx-1" onClick={onGenerate} disabled={disabled}>
        frustrated
      </Button>
      <Button className="w-full" onClick={onGenerate} disabled={disabled}>
        Generate Email Template
      </Button>

    </div>
  )
}

export default MoodInput