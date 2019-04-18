
const redirectUserCenter = (redirect) => {
  const href = location.href.replace(/([?&])xyz_token=[^&]*&?/, '$1').replace(/[?&]$/, '')
  window.location.href = `${redirect}&redirect=${encodeURIComponent(href)}`
}

const checkAuthentication = ({token, to, from, next, hasToken, noToken}) => {
  if (token) {
  	hasToken()
  } else {
  	noToken(redirectUserCenter, next)
  }
}

const Logout = (redirect) => {
	window.location.href = `${redirect}&logout=1`
}

const UserCenter = {
	checkAuthentication,
	Logout,
	redirectUserCenter
}

export default UserCenter