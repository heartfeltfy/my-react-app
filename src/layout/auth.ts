const auth = () => {
  return {
    set name(value: string) {
      localStorage.setItem("name", value)
    },
    get name() {
      return localStorage.getItem("name") as string
    },
    removeName(name: string) {
      localStorage.removeItem(name)
    }
  }
}

export const fakeAuthProvider = {
  isAuthenticated: false,
  isAuth: auth(),
  signin(callback: VoidFunction) {
    fakeAuthProvider.isAuthenticated = true
    setTimeout(callback, 100)
  },
  signout(callback: VoidFunction) {
    fakeAuthProvider.isAuthenticated = false
    setTimeout(callback, 100)
  }
}
