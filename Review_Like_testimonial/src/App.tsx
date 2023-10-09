import Review from './Review';
import './App.css';
import people from './data';
import { useState } from 'react';

function App() {
  const [index, setIndex] = useState(0);
  const thisPerson = people[index];
  const checkNumber = (number: number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      const newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      const newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <main>
      <Review
        data={thisPerson}
        nextPerson={nextPerson}
        prevPerson={prevPerson}
        randomPerson={randomPerson}
      />
    </main>
  );
}

export default App;
