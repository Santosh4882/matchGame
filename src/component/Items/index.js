import './index.css'

const Items = props => {
  const {eachItem, onClickItem} = props
  const {imageUrl, thumbnailUrl} = eachItem

  const Item = () => {
    onClickItem(imageUrl)
  }

  return (
    <li className="list-item">
      <button type="button">
        <img
          src={thumbnailUrl}
          alt="thumbnail"
          onClick={Item}
          className="thumbnail"
        />
      </button>
    </li>
  )
}
export default Items
