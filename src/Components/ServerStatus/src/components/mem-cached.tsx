import React, { Component } from 'react'
import { observer } from 'mobx-react'
import CardGrid from '@/Card/src/components/card-grid'
import { gettext } from '@/Language/src'
import store from '../stores'
import ProgressBar from '@/ProgressBar/src/components'

@observer
export default class MemCached extends Component {
  public render() {
    const { max, value } = store.memCached

    return (
      <CardGrid
        title={gettext(
          'Cached memory is memory that Linux uses for disk caching. However, this doesn\'t count as "used" memory, since it will be freed when applications require it. Hence you don\'t have to worry if a large amount is being used.'
        )}
        name={gettext('Memory cached')}
        tablet={[1, 2]}
      >
        <ProgressBar value={value} max={max} isCapacity />
      </CardGrid>
    )
  }
}
