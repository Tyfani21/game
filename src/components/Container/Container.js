import './Container.css';

const Container = (props) => {
  return (
    <div className='container-div'>
      <h2 className='container-title'>{props.title}</h2>
      <div className='container-cards'>
        {props.Children}
      </div>
    </div>
  )
}

export default Container;