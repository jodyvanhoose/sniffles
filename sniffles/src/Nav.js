import { CgBee } from "react-icons/cg";

function Nav() {
  const currentDate = new Date();
  const date = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`

  // const color = 'yellow'

  return(
    <header id="top">
      <nav>
      <span><CgBee color="yellow" size="3.5rem" /><h1>Sniffles </h1></span>
        <h3>{date}</h3>
      </nav>
    </header>
  )
}

export default Nav