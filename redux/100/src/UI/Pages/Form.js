import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


import FormEl from '../components/FormEl'
import ModalEl from '../components/ModalEl'

// import Helpers
import { createPost, getPostId, updatePost } from '../controllers/controllers'


const Form = () => {
  // Component State
  const [ isLoading, setIsLoading ] = useState(true)
  const [ isError, setIsError ] = useState(false)

  // EDIT Functionality
  const [ postData, setPostData ] = useState(false)
  // ID to Edit
  const { _id } = useParams();

  // Success/Error Handler
  const [ isModalOpen, setIsModalOpen ] = useState(false)
  const [ isModalData, setIsModalData ] = useState('')

  // Submit Handler
  const onSubmit = async formData => {
    let response;
    if ( _id ){
      formData['_id'] = _id;
      response = await updatePost( formData )
    }
    else { response = await createPost( formData ) }
    setIsError(!response.data.success)
    setIsModalData(response.data.data)
    setIsModalOpen(true)
    console.log("Back-End response:",response);
  }

  // Modal Handlers
  const handleOpen = () => { setIsModalOpen(true); };
  const handleClose = () => { setIsModalOpen(false); };



  useEffect(() => {
    if ( _id ){
      const reqPostId = async isID => {
        const response = await getPostId( isID )
        setIsError(!response.data.success)
        setPostData(response.data.data)
      }
      reqPostId( _id )
      console.log("useEffect");
    }
    setIsLoading(false)
  },[ _id ])

  return (
    <>
      {
        isLoading ? 'Loading...'
        : isError ? <ModalEl isModalOpen={isModalOpen} isModalData={isModalData} handleClose={handleClose} />
        : (
          <>
            <ModalEl isModalOpen={isModalOpen} isModalData={isModalData} handleClose={handleClose} />
            <FormEl onSubmit={onSubmit} postData={postData}/>
          </>
        )
      }
    </>
    )

}

export default Form;
