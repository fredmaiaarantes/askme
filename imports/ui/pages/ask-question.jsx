import React from 'react';
import { Button, Card, Label, Textarea, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "meteor/react-meteor-accounts";

export default function AskQuestion() {
  const user = useUser();
  const navigate = useNavigate();

  const insertQuestion = async (event) => {
    event.preventDefault();
    const question = event.target.question.value;
    try {
      await Meteor.callAsync('insertQuestion', { description: question });
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Card className="mx-auto max-w-screen-lg">
      <form className="flex flex-col gap-4" onSubmit={insertQuestion}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Name"/>
          </div>
          <TextInput id="name" value={user.profile.name} disabled />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Email" />
          </div>
          <TextInput id="email" type="email" value={user.profile.email} disabled />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="question" value="Your question"/>
          </div>
          <Textarea id="question" placeholder="Leave a question..." required rows={4}/>
        </div>
        <div className="space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
          <Button type="submit">Send Question</Button>
          <Button color="gray" as={Link} to="/">Cancel</Button>
        </div>
      </form>
    </Card>
  );
}
