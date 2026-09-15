import { useState } from 'react'
import './App.css'
import HelloWorld from './assets/components/HelloWorld';

function App() {
  const [count, setCount] = useState<number>(0);
  let isValid: boolean = true;
  
  return (
    <>
      <section id="center">
        <div>
          <button onClick={() => setCount(count + 1)}>
            Bouton ({count})
          </button>

          {
            count > 3 ?
              <div>Important things</div>
              :
              <div>Sile things</div>
          }
          <div>
            {isValid && <HelloWorld name="Ytasty Crousty" />}
            {
              count > 3 ?
                <div>Important things</div>
                :
                <div>Some things</div>
            }
            {
              ["Loïse", "Jean-michel", "Marie", "Pierre"]
                .map((el, index) => <HelloWorld key={index} name={el} />)
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default App