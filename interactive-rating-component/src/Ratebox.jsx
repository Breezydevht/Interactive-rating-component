import { useState } from 'react';
import './Ratebox.css'
export default function Ratebox( { onSelect } ) {

    const [rating, setRating] = useState(0);


    const handleRatingClick = (index) => {
      if(index === rating) {
        setRating(0); // Deselect the rating if it's already selected
      }
      else {
        setRating(index); // Set the rating to the clicked index
      }
    }

    const handleSubmit = () => {
      if(rating > 0) {
        onSelect(rating); // Pass the selected rating to the parent component
      }
    }

    return (
      <div className='main_box'>

      <div className='content_box'>
        <div>
          <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z" fill="#FC7614"/></svg>
        </div>
    
        {/* Rating state start */}

        <h1>How did we do?</h1>

        <p>Please let us know how we did with your support request. All feedback is appreciated 
           to help us improve our offering!
        </p>
          <div className='rate_box'>
          {[...Array(5)].map((_, index) => {
            index += 1;
            return (
              <button type='button' key={index} className={index == (rating) ? "on" : "off"}
               onClick={() => handleRatingClick(index)} >
                <span>{index}</span>
              </button>
            )

          })}
        </div>
        <button onClick={handleSubmit} >Submit</button>
      </div>

    </div>
    )
}