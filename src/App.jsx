import gsap from "gsap"
import {ScrollTrigger, SplitText} from "gsap/all"

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div className="bg-red-600 text-2xl text-amber-100">hallo!</div>
  )
}

export default App