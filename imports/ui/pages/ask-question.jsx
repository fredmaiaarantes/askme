import React from 'react';
import { Button, Card, Label, Textarea, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

export default function AskQuestion() {
  return (
    <Card className="mx-auto max-w-screen-lg">
      <form className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Name"/>
          </div>
          <TextInput id="name" placeholder="Your name" disabled />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Email" />
          </div>
          <TextInput id="email" type="email" placeholder="name@flowbite.com" disabled />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="question" value="Your question"/>
          </div>
          <Textarea id="question" placeholder="Leave a question..." required rows={4}/>
        </div>
        <div className="space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
          <Button type="submit">Send Question</Button>
          <Button color="gray" as={Link} to="/home">Cancel</Button>
        </div>
      </form>
    </Card>
  );
}
