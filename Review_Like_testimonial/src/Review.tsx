
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

  interface Data {
    id: number;
    name: string;
    job: string;
    text: string;
    image: string;
  }

  interface ReviewProps {
    data: Data;
    nextPerson: () => void;
    prevPerson: () => void;
    randomPerson: () => void;
  }

  const Review: React.FC<ReviewProps> = ({
    data,
    nextPerson,
    prevPerson,
    randomPerson,
  }) => {
      const { name, job, text, image } = data;
  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randomPerson}>
        surprise me
      </button>
    </article>
  );
};
export default Review;