import Item from './Item'

function List() {

  return (
    <>
      <h1>Minha Lista</h1>
      <ul>
        <Item marca="Ferrari" ano_lancamento={1995}></Item>
        <Item marca="Fiat" ano_lancamento={1999}></Item>
        <Item marca="Renault" ano_lancamento={2000}></Item>
        <Item ano_lancamento={2001}></Item>
      </ul>
    </>
  )

}

export default List