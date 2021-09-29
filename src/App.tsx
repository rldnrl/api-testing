import React, { useState } from 'react'
import ApiFormComponent from './components/ApiForm'
import { ApiItem } from './types/api-item'
import { v4 } from 'uuid'
import { ApiForm } from './types/api-form'
import ApiListComponent from './components/ApiList'

const App = () => {
  const [apiList, setApiList] = useState<ApiItem[]>([])

  const onApiAdd = (apiForm: ApiForm) => {
    const newApiList: ApiItem[] = [
      ...apiList,
      {
        id: v4(),
        ...apiForm
      }
    ]
    setApiList(newApiList)
  }

  return (
    <>
      <ApiFormComponent onApiAdd={onApiAdd} />
      <ApiListComponent apiList={apiList} />
    </>
  )
}

export default App
