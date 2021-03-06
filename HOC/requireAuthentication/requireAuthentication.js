import cookies from 'next-cookies'

export function requireAuthenticationHome (gssp) {
  return async (context) => {
    const { token } = cookies(context)

    // eslint-disable-next-line eqeqeq
    if (!token) {
      return {
        redirect: {
          destination: '/login',
          statusCode: 302
        }
      }
    }

    return await gssp(context)
  }
}

export function requireAuthentication (gssp) {
  return async (context) => {
    const { token, role } = cookies(context)

    // eslint-disable-next-line eqeqeq
    if (!token || role != 'member') {
      return {
        redirect: {
          destination: '/login',
          statusCode: 302
        }
      }
    }

    return await gssp(context)
  }
}

export function requireAuthenticationAdmin (gssp) {
  return async (context) => {
    const { token, role } = cookies(context)

    // eslint-disable-next-line eqeqeq
    if (!token || role != 'admin') {
      return {
        redirect: {
          destination: '/login',
          statusCode: 302
        }
      }
    }

    return await gssp(context)
  }
}

export function requireAuthenticationAuth (gssp) {
  return async (context) => {
    const { token } = cookies(context)

    if (token) {
      return {
        redirect: {
          destination: '/',
          statusCode: 302
        }
      }
    }

    return await gssp(context)
  }
}
