import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from 'store'

import { getChannelPreferences } from 'actions/channel'
import App from 'containers/App'

// document.body.innerHTML += '<div id="recast-webchat-div"></div>'
// MU: commented and placed this div in the page code

const root = document.getElementById('recast-webchat-div')
const script = document.currentScript || document.getElementById('recast-webchat')

const channelId = script.getAttribute('channelId')
const token = script.getAttribute('token')

if (root && channelId && token) {
  getChannelPreferences(channelId, token).then(preferences => {

  	// MU: overriding preferences
	preferences.botPicture = "https://res.cloudinary.com/hz4pj1unt/image/upload/c_scale,h_133,w_133/v1524550940/brand/IconeEdmonRVB_Ocre.png"
	preferences.userPicture = "https://res.cloudinary.com/hz4pj1unt/image/upload/c_scale,w_133/v1524551016/website_assets/avatar.jpg"
	// preferences. ...


    ReactDOM.render(
      <Provider store={store}>
        <App token={token} channelId={channelId} preferences={preferences} />
      </Provider>,
      root,
    )
  })
}
