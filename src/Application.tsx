import component from 'vue-class-component';
import * as tsx from 'vue-tsx-support';
import { Watch } from 'vue-property-decorator';

@component({})
class App extends tsx.Component<{}> {
  private text = '';

  @Watch('text')
  private onInput() {
    console.log(this.text);
  }

  private render() {
    return (
      <div>
        <input
          type={'text'}
          placeholder={'Input your name'}
          v-model={this.text}
        />
      </div>
    );
  }
}

export default App;
