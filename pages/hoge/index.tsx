import Head from 'next/head'
import { useCallback, useState } from 'react'
import useAspidaSWR from '@aspida/swr'
import styles from '~/styles/Home.module.css'
import { apiClient } from '~/utils/apiClient'
import UserBanner from '~/components/UserBanner'
import type { Task } from '$prisma/client'
import type { FormEvent, ChangeEvent } from 'react'
import { Checkbox, Radio } from '@chakra-ui/react'

const Hoge = () => {
  const { data: tasks, error, revalidate } = useAspidaSWR(apiClient.tasks)

  console.log(tasks)

  const [label, setLabel] = useState('')
  const [done, setDone] = useState(true)
  const inputLabel = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setLabel(e.target.value),
    []
  )
  const inputDone = useCallback((e) => {
    setDone(e.target.checked)
  }, [])

  const createTask = useCallback(
    async (e: FormEvent) => {
      e.preventDefault()
      if (!label) return

      await apiClient.tasks.post({ body: { label } })
      setLabel('')
      revalidate()
    },
    [label, done]
  )

  const toggleDone = useCallback(async (task: Task) => {
    await apiClient.tasks._taskId(task.id).patch({ body: { done: !task.done } })
    revalidate()
  }, [])

  const deleteTask = useCallback(async (task: Task) => {
    await apiClient.tasks._taskId(task.id).delete()
    revalidate()
  }, [])

  if (error) return <div>failed to load</div>
  if (!tasks) return <div>loading...</div>

  console.log(tasks)

  return (
    <div className={styles.container}>
      <Head>
        <title>frourio-todo-app</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <UserBanner />

        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>frourio-todo-app</p>

        <div>
          <form style={{ textAlign: 'center' }} onSubmit={createTask}>
            <input value={label} type="text" onChange={inputLabel} />
            <Checkbox onChange={inputDone} mr={3}>
              doneFlag
            </Checkbox>
            <input type="submit" value="ADD" />
          </form>
          <ul className={styles.tasks}>
            {tasks.map((task) => (
              <li key={task.id}>
                <label>
                  <input
                    type="checkbox"
                    checked={task.done}
                    onChange={() => toggleDone(task)}
                  />
                  <span>{task.label}</span>
                </label>
                <Checkbox defaultIsChecked={task.done} ml={3}>
                  {task.done}
                </Checkbox>
                <input
                  type="button"
                  value="DELETE"
                  style={{ float: 'right' }}
                  onClick={() => deleteTask(task)}
                />
              </li>
            ))}
          </ul>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

export default Hoge
