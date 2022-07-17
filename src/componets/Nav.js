

function Nav() {
  const currentDate = new Date();
  const date = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`

 

  return(
    <header id="top">
      <nav>
      <h1>Sniffles </h1>
        <h2>{date}</h2>
      </nav>
    </header>
  )
}

export default Nav