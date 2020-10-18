import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { StyledTitleLink } from '@/Title/src/components'
import store from '../stores'
import {
  OK,
  INSUFFICIENT_STORAGE,
  INTERNAL_SERVER_ERROR,
} from '@/Restful/src/http-status'
import { gettext } from '@/Language/src'
import restfulFetch from '@/Fetch/src/restful-fetch'

@observer
export default class UpdaterLink extends Component {
  private onClick = async () => {
    const { setIsUpdating, setIsUpdateError } = store

    setIsUpdating(true)

    await restfulFetch('update')
      .then(([{ status }]) => {
        switch (status) {
          case OK:
            location.reload(true)
            return
          case INSUFFICIENT_STORAGE:
          case INTERNAL_SERVER_ERROR:
            alert(
              gettext(
                'Can not update file, please check the server permissions and space.'
              )
            )
            setIsUpdating(false)
            setIsUpdateError(true)
            return
        }
      })
      .catch(err => {
        alert(gettext('Network error, please try again later.'))
        setIsUpdating(false)
        setIsUpdateError(true)
      })
  }

  public render() {
    return (
      <StyledTitleLink
        title={gettext('Click to update')}
        onClick={this.onClick}
      >
        {store.notiText}
      </StyledTitleLink>
    )
  }
}
