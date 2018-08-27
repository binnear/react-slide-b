import * as React from 'react';
interface Props {
  initHtml: any,
  onChange: Function,
}
interface State {
  html: any
}
class Slide extends React.Component<Props> {
  editor: React.RefObject<any>
  state: State
  constructor(props: Props) {
    super(props)
  }
  render() {
    return <div>

    </div>

  }
}

export default Slide