import { useEffect, useState } from "react";

export interface TodoItemProps {
  item: string;
  onDelete: () => void;
  onComplete?: () => void;
}
export default function TodoItem(props: TodoItemProps) {
  const [completed, setCompleted] = useState<boolean>(false);

  useEffect(() => {
    if (completed === true) {
      props.onComplete?.();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [completed, props.onComplete]);

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompleted(e.currentTarget.checked);
  }

  return (
    <div
      className="flex-r gap-md todo-item"
    >
      <input 
        type="checkbox" 
        onChange={handleCheck}
        checked={completed}
      />
      <p
        style={{ textDecoration: completed ? "line-through" : undefined }}
      >{props.item}</p>
      <button 
        onClick={props.onDelete}
        className="btn-sm"
      >Delete</button>
    </div>
  )
}