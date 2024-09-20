import error from '../../public/Image/Error.jpg'

const ErrorPage = () => {
  return (
      <div className='container min-h-screen'>
        <div className='relative w-full flex justify-center items-center'>
          <img
            className=' lg:w-[800px] lg:h-[650px] h-80 md:h-96 rounded-lg object-cover '
            src={error}
            alt=''
          />
        </div>
      </div>
  )
}

export default ErrorPage