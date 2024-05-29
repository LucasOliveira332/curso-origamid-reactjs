const Propriedades = ({id, labelContent, type, ...props} : {id: string, labelContent: string, type: string, [key: string]: any})  => {
  console.log({...props});
  
  return (
  <>
    <label htmlFor={id}>{labelContent}</label>
    <input id={id} type={type} {...props} />
  </>
  )
}

export default Propriedades