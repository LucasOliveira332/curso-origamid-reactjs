const Button = () => {
  return (<>
    <button onClick={(event) => alert(event?.target.innerText)}>Clique</button>
  </>)
}

export default Button