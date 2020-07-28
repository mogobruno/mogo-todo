import { v4 as uuidv4 } from 'uuid';

class Todo {
  id: String = uuidv4()
  text: string = '';
  createdAt: Date = new Date();
  archived: Boolean = false
  done: Boolean = false

  constructor(text: string, archived: boolean = false) {
    this.text = text
    this.archived = archived
  }
}
export default Todo;
