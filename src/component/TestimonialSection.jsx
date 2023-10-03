import React from 'react';
import Draggable from 'react-draggable';

function TestimonialSection({ testimonialData }) {
  return (
    <Draggable>
      <div className="px-2 py-10 md:px-0" style={{ display: 'inline-block' }}>
        <div className="mx-auto max-w-4xl">
          <div className="md:flex md:items-center md:justify-center md:space-x-14">
            <div className="relative h-48 w-48 flex-shrink-0">
              <img
                className="relative h-48 w-48 rounded-full object-cover"
                src={testimonialData.image}
                alt=""
              />
            </div>
  
            <div className="mt-10 md:mt-0">
              <blockquote>
                <p className="text-xl text-black">{testimonialData.quote}</p>
              </blockquote>
              <p className="mt-7 text-lg font-semibold text-black">{testimonialData.name}</p>
              <p className="mt-1 text-base text-gray-600">{testimonialData.jobTitle}</p>
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  );
}

export default TestimonialSection;
