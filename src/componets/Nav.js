

function Nav() {
  const currentDate = new Date();
  const date = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`

 

  return(
    <header id="top">
      <nav>
        {/* logo */}
      <h1>Sniffles </h1>
        {/* date display */}
        <h2>{date}</h2>
      </nav>
    </header>
  )
}

export default Nav