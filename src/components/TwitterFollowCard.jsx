
import { useState } from "react"

// eslint-disable-next-line no-unused-vars, react/prop-types
export function TwitterFollowCard ({ /*children, formatUserName,*/ userName = "unknown", name, initialIsFollowing }) {

  //el useState [valor del estado, función para modificar el estado]
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  const formatUser = (userName) => { return `@${userName}` }
  const userFormatted = formatUser(userName)

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  const text = isFollowing ? "Siguiendo" : "Seguir"
  const buttonClassName = isFollowing ?
  "tw-followCard-button is-following" : "tw-followCard-button"

  console.log(`Render hijo: ${userFormatted}`)

  return (
          <article className="tw-followCard">
            <header className="tw-followCard-header">
              <img className="tw-followCard-avatar"
                alt={`Avatar de GitHub de ${userName}`}
                src={`https://unavatar.io/github/${userName}`} />
              <div className="tw-followCard-info">
                <strong>{name}</strong>
                <span className="tw-followCard-UserName">{userFormatted}</span>
              </div>
            </header>
            <aside>
              <button className={buttonClassName} onClick={handleClick}>
                <span className='tw-followCard-text'>{text}</span>
                <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
              </button>
            </aside>
          </article>
        )
}



