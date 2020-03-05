import { FormGroup } from "@angular/forms";
import { QuestionBase } from "./../qForm/question-base";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-dyn-question",
  templateUrl: "./dynamic-form-question.component.html",
  styleUrls: ["./dynamic-form-question.component.css"]
})
export class DynamicFormQuestionComponent implements OnInit {
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;

  constructor() {}

  ngOnInit(): void {}

  get isValid() {
    return this.form.controls[this.question.key].valid;
  }
}
