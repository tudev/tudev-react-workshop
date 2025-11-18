import { useEffect, useState } from "react";

export interface TodoItemProps {
  item: string;
  onDelete: () => void;
  onComplete?: () => void;
}
export default function TodoItem(props: TodoItemProps) {
  const [completed, setCompleted] = useState<boolean>(false);

  useEffect(() => {
    if(completed === true) {
      props.onComplete?.();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [completed, props.onComplete]);

  return (
    <div
      onClick={() => setCompleted(prev => !prev)}
    >
      <p
        style={{ textDecoration: completed ? "line-through" : undefined }}
      >{props.item}</p>
      <button onClick={() => props.onDelete}>Delete</button>
    </div>
  )
}