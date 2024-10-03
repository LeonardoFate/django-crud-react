import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { creatTask, deleteTask, updateTask, getTask } from "../api/Task.api";
import { useNavigate, useParams } from "react-router-dom";
export function TaskFormPages() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm();
  const navigate = useNavigate();
  const params = useParams(); //parametro para buscar el id del task

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
    await updateTask(params.id, data)
    } else {
      await creatTask(data);
    }
    navigate("/task");
  });

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const {
          data: {title, description}
        } = await getTask(params.id);
        setValue('title', title)
        setValue('description', description)
      }
    }
    loadTask();
  }, []);
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
      {params.id && (
        <button
          onClick={async () => {
            const accepted = window.confirm("are you sure");
            if (accepted) {
              await deleteTask(params.id);
              navigate("/task");
            }
          }}
        >
          Delete
        </button>
      )}
    </div>
  );
}
