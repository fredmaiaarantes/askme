export const mockUser = {
  _id: '1',
  profile: {
    avatar: 'https://avatars.githubusercontent.com/u/559305?v=4',
    name: 'Frederico Maia',
    username: 'fredmaiaarantes',
    email: 'fredmaiaarantes@gmail.com'
  },
  email: 'fredmaiaarantes@gmail.com'
}

export let mockQuestions = [
  {
    _id: '1',
    userId: '1',
    userAvatarUrl: 'https://avatars.githubusercontent.com/u/559305?v=4',
    userName: 'Frederico Maia',
    description: 'How to use React with Meteor?',
    answered: false,
    createdAt: new Date(),
  },
  {
    _id: '2',
    userId: '1',
    userAvatarUrl: 'https://avatars.githubusercontent.com/u/559305?v=4',
    userName: 'Frederico Maia',
    description: 'How to use Svelte with Meteor?',
    answered: false,
    createdAt: new Date(),
  },
  {
    _id: '3',
    userId: '1',
    userAvatarUrl: 'https://avatars.githubusercontent.com/u/559305?v=4',
    userName: 'Frederico Maia',
    description: 'How to use Blaze with Meteor?',
    answered: false,
    createdAt: new Date(),
  },
  {
    _id: '4',
    userId: '1',
    userAvatarUrl: 'https://avatars.githubusercontent.com/u/559305?v=4',
    userName: 'Frederico Maia',
    description: 'How to use Solid with Meteor?',
    answered: false,
    createdAt: new Date(),
  }
]