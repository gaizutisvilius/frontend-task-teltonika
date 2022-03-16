import { v4 as uuid } from 'uuid';

const data = {
  users: [
    {
      id: uuid(),
      name: 'Vilius',
      lastname: 'Gaižutis',
      gender: 'male',
      age: 29,
      email: 'vilius@example.com',
      password: '1234',
      category: 'Frontend Developer',
    },
    {
      id: uuid(),
      name: 'Vardenis',
      lastname: 'Pavardenis',
      gender: 'male',
      age: 22,
      email: 'vardenis@example.com',
      password: '1234',
      category: 'Backend Developer',
    },
    {
      id: uuid(),
      name: 'Vardenis',
      lastname: 'Pavardenis',
      gender: 'male',
      age: 22,
      email: 'vardenis@example.com',
      password: '1234',
      category: 'Backend Developer',
    },
    {
      id: uuid(),
      name: 'Vardenis',
      lastname: 'Pavardenis',
      gender: 'male',
      age: 22,
      email: 'vardenis@example.com',
      password: '1234',
      category: 'Backend Developer',
    },
    {
      id: uuid(),
      name: 'Vardenis',
      lastname: 'Pavardenis',
      gender: 'male',
      age: 22,
      email: 'vardenis@example.com',
      password: '1234',
      category: 'Backend Developer',
    },
  ],
  categories: [
    {
      label: 'Tech',
      children: [
        {
          label: 'Frontend Development',
          children: [
            { label: 'Junior Frontend Developer' },
            { label: 'Mid Frontend Developer' },
            { label: 'Senior Frontend Developer' },
          ],
        },
      ],
    },
    {
      label: 'Creative',
      children: [
        {
          label: 'Graphic Design',
          children: [
            { label: 'Junior Graphic Designer' },
            { label: 'Mid Graphic Designer' },
            { label: 'Senior Graphic Designer' },
          ],
        },
      ],
    },
    {
      label: 'Management',
      children: [
        {
          label: 'CEO',
        },
      ],
    },
    // {
    //   label: 'Sales',
    // },
  ],
};

export default data;
