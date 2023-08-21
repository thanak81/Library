
import PropTypes from 'prop-types';

function Main({search,card}) {
  console.log("Main Content")  
  return (
        <div className="content">
          {search}
        <div className="content-grid">
          {card}
        </div>
      </div>
    )
}

Main.propTypes ={
  search: PropTypes.string.isRequired,
  card : PropTypes.string.isRequired
}

export default Main
