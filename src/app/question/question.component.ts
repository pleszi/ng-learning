import { FormGroup } from "@angular/forms";
import {
  QuestionControlService,
  QuestionService
} from "./../qForm/question-control-service";
import { Component, OnInit } from "@angular/core";
import { QuestionBase } from "../qForm/question-base";

@Component({
  selector: "app-question",
  templateUrl: "./question.component.html",
  styleUrls: ["./question.component.css"]
})
export class QuestionComponent implements OnInit {
  questions: QuestionBase<any>[];
  form: FormGroup;

  constructor(private qcService: QuestionControlService) {
    this.questions = QuestionService.questions;
  }

  ngOnInit(): void {
    this.form = this.qcService.toFormGroup(this.questions);
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
