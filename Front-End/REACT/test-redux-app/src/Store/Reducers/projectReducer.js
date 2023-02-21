const initState = {
    projects: [
      { id: '1', title: 'help me find peach', content: 'blah blah blah' },
      { id: '2', title: 'collect all the stars', content: 'blah blah blah' },
      { id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah' }
    ],
    users: [
        { id: "1", name: "Ivan", age: "27" },
        { id: "2", name: "Igor", age: "32" },
        { id: "3", name: "Masha", age: "17" }
    ]
  };
  
  // это стейст со своим дефолт стейтом, на разных страницах с помощью стор бует доступен
  // для изменения стейтов нужны экшны
  
  const projectReducer = (state = initState, action) => { // тут прокидывается экшн
    const produceRes = obj => Object.assign({}, state, obj);
  
    switch (action.type) {
      case 'CREATE_PROJECT':
        console.log('action.project', action.project);
        action.project.id = String(state.projects.length + 1);
  
        return produceRes({
          projects: [...state.projects, action.project]
        });
      default:
        return state;
    }
  };
  
  export default projectReducer;