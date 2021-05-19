import PropTypes from 'prop-types'

const Button = ({color, title, onClick}) => {
   
    return (
        <button 
        onClick={onClick}
        style={{backgroundColor: color}} className='btn'
        > {title}
        </button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func, 
}

export default Button