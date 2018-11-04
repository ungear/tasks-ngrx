import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { AppState } from "../store/store";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { TaskFilter } from "src/app/types/taskFilter";

const MOCK_TASKS: Task[] = [
  {
    projectName: "PR-1",
    taskName: "Task-3212A",
    description: "A new task to fix something",
    isActive: true
  },
  {
    projectName: "PR-1",
    taskName: "Task-23",
    description: "An old task",
    isActive: false
  },
  {
    projectName: "PR-2",
    taskName: "Task-859/2",
    description: "A hot urgent task",
    isActive: true
  }
];

@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.scss"]
})
export class TasksComponent implements OnInit {
  tasks$: Observable<Task[]>;
  filter$: Observable<any>;
  constructor(private store: Store<AppState>) {
    this.tasks$ = store.pipe(
      select("filter"),
      map(taskFilterChangesFactory(MOCK_TASKS))
    );
  }

  ngOnInit() {}
}

function taskFilterChangesFactory(tasks: Task[]) {
  return (currentTaskFilter: TaskFilter) =>
    currentTaskFilter ? tasks.filter(filterTasks(currentTaskFilter)) : tasks;
}

function filterTasks(taskFilter: TaskFilter) {
  return (task: Task) =>
    task.taskName.includes(taskFilter.taskName) &&
    task.isActive === taskFilter.isActive;
}

type Task = {
  projectName: string;
  taskName: string;
  description: string;
  isActive: boolean;
};
