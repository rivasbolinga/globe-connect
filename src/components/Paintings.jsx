import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPaintings, selectPaintings } from '../redux/paintingsSlice';

const Paintings = () => {
  const dispatch = useDispatch();
  const paintings = useSelector(selectPaintings);
 
  useEffect(()=> {
    if(!paintings.length) {
      dispatch(fetchPaintings())
    }
  }), [dispatch, paintings];
 console.log(paintings)
  return (
  <div>
    {paintings.map((painting)=> {
    return (
      <h2>{painting.title}</h2>
    )
  })}
  </div>
  )
}
export default Paintings;
