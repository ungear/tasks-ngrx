import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { AppState } from "../store/store";
import { Observable } from "rxjs";
import { filter } from "rxjs/operators";

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
  tasks: Task[] = MOCK_TASKS;
  filter$: Observable<any>;
  constructor(private store: Store<AppState>) {
    store.pipe(select("filter")).subscribe(filter => {
      this.tasks = filter
        ? MOCK_TASKS.filter(t => t.taskName.includes(filter.taskName))
        : MOCK_TASKS;
    });
  }

  ngOnInit() {}
}

type Task = {
  projectName: string;
  taskName: string;
  description: string;
  isActive: boolean;
};
