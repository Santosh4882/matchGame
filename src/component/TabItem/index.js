import './index.css'

const TabItem = props => {
  const {eachTabItem, onClickTabItem, isActive} = props
  const {tabId, displayText} = eachTabItem

  const onclickTab = () => {
    onClickTabItem(tabId)
  }

  const ActBtn = isActive ? 'select-btn' : ''

  return (
    <li className="tab-list-item">
      <button
        type="button"
        onClick={onclickTab}
        className={`tab-button ${ActBtn}`}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
