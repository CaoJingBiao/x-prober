import conf from '@/Helper/src/components/conf'
import { observable, action, configure } from 'mobx'

configure({
  enforceActions: 'observed',
})

class PhpInfoStore {
  public readonly ID = 'phpInfo'
  public readonly conf = conf?.[this.ID]
  public readonly enabled: boolean = !!this.conf

  @observable public latestPhpVersion: string = ''
  @observable public latestPhpDate: string = ''

  @action
  public setLatestPhpVersion = (latestPhpVersion: string) => {
    this.latestPhpVersion = latestPhpVersion
  }

  @action
  public setLatestPhpDate = (latestPhpDate: string) => {
    this.latestPhpDate = latestPhpDate
  }
}

export default new PhpInfoStore()
