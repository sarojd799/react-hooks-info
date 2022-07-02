
import React, { useTransition, useState } from 'react';

/*
  const [isPending, startTransition] = useTransition();

  Returns a stateful value for the pending state of the transition, and a function to start it
  Should be used for performance improvements
*/

const LIST_SIZE = 20000;
function UseTransition(props) {

  const [list, setList] = useState(() => []);
  const [input, setInput] = useState('');
  const [isPending, startTransition] = useTransition();

  //Inside this function there is a delay in input change as ui is blocked with batch updates
  // function handleChange(e) {
  //   const l = Array(LIST_SIZE).fill(1).map(elem => e.target.value);
  //   setList(l);
  //   setInput(e.target.value);
  // }

  //by defining startTransition we are prioritizing what visual updates are priority
  function handleChange(e) {
    setInput(e.target.value);
    startTransition(() => {
      const l = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        l.push(e.target.value)
      }
      setList(l);
    })
  }

  return (
    <div className='height-100 width-100'>
      <p>
        Enter something <input type="text" value={input} onChange={e => handleChange(e)} />
      </p>
      {
        isPending ? 'Loading...' : list.map((e, i) => <p key={`item-${i}`}>{e}</p>)
      }
    </div>
  );
}

export default UseTransition;