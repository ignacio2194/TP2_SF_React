import React,{useState} from 'react'

const LoadingSpinner = (props) => {
    const [isLoading, setIsLoading] = useState(false);

  return (
    <div className='spinner-container'>
        <div className='loading-spinner'></div>
        </div>
  )
}

export default LoadingSpinner