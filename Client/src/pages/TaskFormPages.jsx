import {useForm} from 'react-hook-form'



export function TaskFormPages  () {
  const {register, handleSubmit} =useForm()

  const onSubmit = handleSubmit(data =>{
    console.log(data)
  })
  return (
    <div>
      <form  onSubmit={onSubmit}>
        <input type="text" placeholder="title"
        {...register("title", {required:true})}/>
        <textarea rows={3} placeholder="Description"
        {...register("description", {required:true})}></textarea>
        <button>save</button>
      </form>
    </div>
  )
}


