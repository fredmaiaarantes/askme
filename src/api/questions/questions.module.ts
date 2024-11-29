import { createModule } from "grubba-rpc";
import { InsertQuestionInputSchema, QuestionIdInputSchema } from "../../shared/schemas/question";
import { insertQuestion, removeQuestion, upvoteQuestion } from "./questions.methods";

export const questionsModule = createModule("questions")
    .addMethod("insertQuestion", InsertQuestionInputSchema, insertQuestion)
    .addMethod("removeQuestion", QuestionIdInputSchema, removeQuestion)
    .addMethod("upvoteQuestion", QuestionIdInputSchema, upvoteQuestion)
    .buildSubmodule();
