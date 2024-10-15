
import './App.css'
import { Copyright } from './components/copyright/Copyright.jsx'
import { TwitterFollowCard } from './components/TwitterFollowCard.jsx'
import { users } from './mocks/users.js'

export function App() {

  console.log("Render padre")

  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName} // para que React sepa que es un componente único
            name = {name}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
      <Copyright />
    </section>

  )
}

// <> {/* equivalente a  React.Fragment */}  </>
