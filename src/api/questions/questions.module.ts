import { createModule } from "grubba-rpc";
import { InsertQuestionInputSchema, QuestionIdInputSchema } from "../../shared/schemas/question";
import { insertQuestion, removeQuestion, upvoteQuestion } from "./questions.methods";
import { z } from "zod";
import { findAll } from "./server/questions.publications";

export const questionsModule = createModule("questions")
    .addMethod("insertQuestion", InsertQuestionInputSchema, insertQuestion)
    .addMethod("removeQuestion", QuestionIdInputSchema, removeQuestion)
    .addMethod("upvoteQuestion", QuestionIdInputSchema, upvoteQuestion)
    .addPublication("findAll", z.void(), findAll)
    .buildSubmodule();
