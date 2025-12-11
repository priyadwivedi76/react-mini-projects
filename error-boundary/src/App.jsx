import Card from "./components/Card"
import ErrorBoundary from "./components/ErrorBoundary"
function App() {

  return (
    <>
      <ErrorBoundary>
        <Card hero={'Joker'}/>
      </ErrorBoundary>
    </>
  )
}

export default App
