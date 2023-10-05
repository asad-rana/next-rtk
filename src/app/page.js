import Image from 'next/image'
import AddUsers from './components/AddUser'
import DisplayUsers from './components/DisplayUser'
export default function Home() {
  return (
    <main>
      <AddUsers />
      <DisplayUsers />
    </main>
  )
}