import React,{useState} from 'react'

const LoadingSpinner = () => {
    const [isLoading, setIsLoading] = useState(false);
    setIsLoading(true)
  return (
    <div className='spinner-container'>
        <div className='loading-spinner'></div>
        </div>
  )
}

export default LoadingSpinner