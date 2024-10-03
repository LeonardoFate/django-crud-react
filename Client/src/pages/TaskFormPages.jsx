import { useForm } from "react-hook-form";
import { creatTask, deleteTask } from "../api/Task.api";
import {useNavigate, useParams} from 'react-router-dom'
export function TaskFormPages() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const params = useParams(); //parametro para buscar el id del task


  const onSubmit = handleSubmit(async data => {
   await creatTask(data);
   navigate('/task');
  });
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="title"
          {...register("title", { required: true })}
        />

        {errors.title && <span>This field is required</span>}
        <textarea
          rows={3}
          placeholder="Description"
          {...register("description", { required: true })}
        ></textarea>
        {errors.description && <span>This field is required</span>}
        <button>save</button>
      </form>
     {params.id && <button onClick={async() =>{
      const accepted = window.confirm('are you sure')
      if (accepted){
        await deleteTask(params.id)
        navigate("/task");
      }
     }}>Delete</button>}
    </div>
  );
}
