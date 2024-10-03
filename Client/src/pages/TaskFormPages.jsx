import { useForm } from "react-hook-form";
import { creatTask } from "../api/Task.api";
export function TaskFormPages() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async data => {
   const res = await creatTask(data)
   console.log(res)
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
    </div>
  );
}
