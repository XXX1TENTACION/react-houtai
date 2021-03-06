import React from 'react';
import { Switch,Route } from 'react-router-dom';
import LayoutCpn from '@components/layout';
import Login from './pages/login'
const subMenuList = [
  {
    subMenuKey: 'home1',
    subMenuTitle: 'home',
    menuItenList: [
      {
        key: '/home/item1',
        content: 'list1'
      },
      {
        key: '/home/item2',
        content: 'list2'
      },
    ]
  },
  {
    subMenuKey: 'user1',
    subMenuTitle: 'user',
    menuItenList: [
      {
        key: '/user/item1',
        content: 'user1'
      },
      {
        key: '/user/item2',
        content: 'user2'
      },
    ]
  }
]
function App() {
  const content = (
    <Switch>
      <Route path='/home/item1' component={() => <h1>/home/item1</h1>} />
      <Route path='/home/item2' component={() => <h1>/home/item2</h1>} />
    </Switch>
  )
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact render={props => {
          return (
            <LayoutCpn 
              subMenuList={subMenuList}
              breadcrumbList={['home','list']}
              content={content}
            >
            </LayoutCpn>
          )
        }}/>
        <Route path='/login' component={Login} />
      </Switch>
      
    </div>
  );
}

export default App;
