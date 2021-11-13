
const withChat = (Component) => (props) => {

  let data = [
    {autor: 'BO', message: "hgyrr eryutryureyrt er ruyrer", time: "10h02"},
    {autor: 'raea', message: "azazazazo  hfjdf ffhfigtf ", time: "10h05"},
    {autor: 'ghgre', message: "hdgyr ruryeru reruy ", time: "10h10"},
    {autor: 'BO', message: "reyretr ryrtrter  yrtrete ", time: "10h20"},
    {autor: 'eyr', message: "hjezj e zeuezuz e", time: "10h22"},
  ];


  const handleNewMessage = (message) => {data.push(message)}
  return <Component data={data} addMessage={handleNewMessage} />
}

export default withChat