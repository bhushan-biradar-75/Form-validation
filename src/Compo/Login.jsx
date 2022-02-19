import React from 'react'
import { useForm } from 'react-hook-form'

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    
    const submit = submission => {
        console.log(submission)
        alert("Rating:2 , Name:Tony , Comment:Iron man of of marvel Industry")
    }
    return (
        <div className='container-fluid' id="ext-cont">
            <div className="main">
            <form onSubmit={handleSubmit(submit)}>
                    <p className='hd text-center'>Form Validation</p>
                    <div>
                    <label>Rating</label>
                    <select className='mx-5 mt-2 form-control' {...register('Rating',  { required: { value: true, message: 'Select Rating' } })} >
                        <option value='rating'>select</option>
                        <option value='one'>1</option>
                        <option value='two'>2</option>
                        <option value='three'>3</option>
                        <option value='four'>4</option>
                    </select>
                </div>

                <div>
                    <label>Name</label>
                    <input className='mx-5 mt-2 form-control' type="text" id='nid' minLength='2'
                        {...register('name', { required: { value: true, message: "Must be greater than 2 charchcters"} })} />
                    {errors.name && (<span>{errors.name.message}</span>)}
                </div>
                <div>

                    <label>Comment</label>
                    <input className='mx-5 mt-2 form-control' type="text" {...register('comment', { required: { value: true, message: "Add Comment" } })}
                    />
                    {errors.comment && (<span>{errors.comment.message}</span>)}
                </div>

                <button id='btn'  className='text-center btn-dark mt-5'onClick={submit} type='submit'>Submit</button>
              
            </form>
            </div>
                </div>
        
        
    )}

export default Login