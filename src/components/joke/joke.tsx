/* eslint-disable react/prop-types */
import { HandThumbUpIcon, HandThumbDownIcon } from '@heroicons/react/24/outline';
import './joke.scss';

interface JokeProps {
    setup: any
    punchline: any
    showRating?: boolean
}

export const Joke: React.FC<JokeProps> = ({ setup, punchline, showRating = false }) => (
  <div className="joke">
    <div className="joke__body">
      <p className="joke__body__setup">{setup}</p>
      <p className="joke__body__punchline">{`>> ${punchline}`}</p>
    </div>
    {showRating && (
      <div className="joke__rating">
        <div className="joke__rating__icon"><HandThumbUpIcon /></div>
        <div className="joke__rating__icon"><HandThumbDownIcon /></div>
      </div>
    )}
  </div>
);
