const images = (state = [], action) => {
  switch (action.type) {
    case 'MEDIA':
      return [
        ...state,
        {
          id: action.id,
          url: action.url
        }
      ]
    default:
    return state
  }
}

export default images
