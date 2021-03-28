console.log('git is cool');

const personsArray = [
  {
    name: 'Rajiv',
    age: 42,
    isDeveloper: false,
    skills: [
      'js',
      'css',
      'ReactReact'
    ]
  },
  {
    name: 'Magnus',
    age: 12,
    isDeveloper: false,
    skills: []

  },
  {
    name: 'Stepan',
    age: 24,
    isDeveloper: true,
    skills: ['html']
  },
  {
    name: 'Evelin',
    age: 32,
    isDeveloper: false,
    skills: ['html']
  },
  {
    name: 'Vladimir',
    age: 12,
    isDeveloper: true,
    skills: ['html',
      'css',
      'Node Js',
      'React'
    ]
  },
  {
    name: 'Stepan',
    age: 24,
    isDeveloper: false,
    skills: ['html',
      'css',
      'Node Js'
    ]
  },
];
let resultOfMap = personsArray.map(item => {
  let {isDeveloper, ...rest} = item;
  return rest
})