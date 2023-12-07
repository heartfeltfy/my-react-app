import { isRouteErrorResponse, useRouteError } from "react-router-dom"

export default function ErrorPage() {
  const error = useRouteError()
  console.log(error)

  if (!isRouteErrorResponse(error)) {
    return null
  }
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText}</i>
        <i>{error.status}</i>
        {error.data?.message && <p>{error.data.message}</p>}
      </p>
    </div>
  )
}
