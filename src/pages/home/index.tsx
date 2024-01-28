import { useQuery } from "@tanstack/react-query"

async function fetchCountries() {
  const response = await fetch(`https://restcountries.com/v3.1/all`)
  return response.json()
}

const HomePage: React.FC = () => {
  const { data } = useQuery({
    queryKey: ["countries"],
    queryFn: fetchCountries,
  })

  return <h1>{JSON.stringify(data)}</h1>
}

export default HomePage
