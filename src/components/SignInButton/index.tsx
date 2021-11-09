import styles from './styles.module.scss'
import {FaGithub} from 'react-icons/fa'
import {FiX} from 'react-icons/fi'
import {signIn, signOut, useSession} from 'next-auth/client'

export function SignInButton (){
  const [session] = useSession()

  console.log(session)

  return session ? (
    <button 
      className={styles.signInButton}
      type="button"
      onClick={() => signOut()}
      >
      <FaGithub color="#04d361" />
      {session.user.name}
      <FiX color="#737380" className={styles.closeIcon}/>
    </button>
  ) : (
    <button 
      className={styles.signInButton}
      type="button"
      onClick={() => signIn('github')}
      >
      <FaGithub color="#eba417" />
      Sign in with Github
    </button>
  )
}