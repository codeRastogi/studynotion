import React from 'react'
import {FcLike, FcLikePlaceholder} from 'react-icons/fc'
import { toast } from 'react-hot-toast';
const Card = (props) => {
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;

  function clickHandler(){
    if(likedCourses.includes(course.id)){
      //already liked so we have to remove like
      setLikedCourses((prev) => prev.filter((cid) => (cid !== course.id)));
      toast.warning("Like Removed");
    }else{
      //not liked so we have to like
      if(likedCourses.length === 0){
        //when liked array is empty
        setLikedCourses([course.id]);
      }else{
        //when liked array is not empty
        setLikedCourses((prev) => [...prev, course.id]);
      }
      toast.success("Liked course");
    }
  }
  return (
    <div className='w-[300px] bg-zinc-900 bg-opacity-80 rounded-md overflow-hidden'>
        <div className='relative'>
            <img src={course.image.url}></img>
        
        <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-10px] grid place-items-center'>
            <button onClick={clickHandler}>
                {
                  !likedCourses.includes(course.id)?(<FcLikePlaceholder fontSize = "1.75rem"/>):(<FcLike fontSize = "1.75rem"/>)
                }
            </button>
        </div>
        </div> 
        <div className='p-4'>
          <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
          <p className='text-white mt-2'>{
          course.description.length > 100 ? (course.description.substring(0, 100) + "...") : (course.description)
          }</p>          
        </div>
    </div>
  )
}

export default Card