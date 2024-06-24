import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main
      className={"flex min-h-screen flex-col items-center justify-between p-24"}
    >
      <h3 className={"text-3xl font-bold underline"}>Hello World</h3>
      <Button>Click me</Button>
    </main>
  )
}
