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
  ,
  {
    name: 'Stepan',
    age: 24,
    isDeveloper: false,
    skills: ['html',
      'css',
      'Node Js'
    ]
  }
];

const firstArray = [1,2,3,4];
    const scndArray = ['14', '123','31'];
    const newArray = [firstArray,...scndArray];
    let [first, second, third, fourth, ...rrest] = personsArray;

    let {age, name, ...rest} = first;
    console.log(rest);

    let newObj = Object.assign({a: 10, c: 'xxxx'}, {x: 42}, third);
    console.log(newObj);