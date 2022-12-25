import Navbar from '../components/UI/Navbar'
import styles from '../styles/Home.module.scss'

export default function Home() {
  const {container, main, title} = styles
  return (
    <div className={container}>
      <Navbar/>
    </div>
  )
}
