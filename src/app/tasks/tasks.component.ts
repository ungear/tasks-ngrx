import { Component, OnInit } from "@angular/core";

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
  constructor() {}

  ngOnInit() {}
}

type Task = {
  projectName: string;
  taskName: string;
  description: string;
  isActive: boolean;
};
